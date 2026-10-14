import rateLimit from 'express-rate-limit';

export const globalRateLimit = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: 'Too many requests, please try again later' },
	// Built-in validation stays ON: it raises ERR_ERL_PERMISSIVE_TRUST_PROXY if
	// 'trust proxy' is ever set back to true, which would make this limit bypassable.
});