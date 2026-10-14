import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import logger from './utils/logger.js';
import { BodyLimit } from './constants/common.js';

const app = express();

// Which reverse-proxy hops to trust when reading X-Forwarded-For (req.ip, req.ips).
// NEVER `true`: that trusts every hop, so any client can set req.ip to whatever it
// sends in X-Forwarded-For, which defeats the rate limiter and IP-based logging.
// Set TRUST_PROXY to match the real deployment:
//   unset / "false"  -> trust nothing; req.ip is the socket address (safe default)
//   "1"              -> exactly one reverse proxy in front (e.g. nginx, a load balancer)
//   "10.0.0.0/8,..." -> named subnets. Write IPv4 ranges in plain IPv4 notation, not
//                       IPv4-mapped IPv6 like "::ffff:10.0.0.0/8" (GHSA proxy-addr
//                       advisory: a short IPv4-mapped prefix matched every IPv4 address).
function resolveTrustProxy(raw) {
	const value = (raw ?? '').trim();
	if (value === '' || value === 'false') return false;
	if (value === 'true') {
		logger.error('TRUST_PROXY=true is unsafe (trusts every hop); falling back to false');
		return false;
	}
	if (/^\d+$/.test(value)) return Number(value);
	return value;
}
app.set('trust proxy', resolveTrustProxy(process.env.TRUST_PROXY));

process.on('uncaughtException', (error) => {
	logger.error('Uncaught exception:', error);
});
  
process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled rejection at:', promise, 'reason:', reason);
});

process.on('SIGINT', async () => {
	logger.info('Interrupted');
	process.exit(0);
});

process.on('SIGTERM', async () => {
	logger.info('SIGTERM signal received');

	await new Promise(resolve => setTimeout(resolve, 3000));

	logger.info('Exiting');
	process.exit();
});

app.use(helmet());
app.use(cors({
	origin: process.env.CORS_ORIGIN,
	credentials: true,
}));
app.use(morgan('combined'));
app.use(globalRateLimit);
app.use(express.json({
	limit: BodyLimit,
}));
app.use(express.urlencoded({ 
	extended: true,
	limit: BodyLimit,
}));

app.use('/', routes());

app.use(errorMiddleware);

app.use((req, res) => {
	res.status(404).json({ error: 'Route not found' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	logger.info(`🚀 API Server running on http://localhost:${port}`);
});

export default app;