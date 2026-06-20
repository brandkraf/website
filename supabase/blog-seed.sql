-- BrandKraf — 10 SEO blog posts (run in Supabase SQL Editor)
-- Content is dollar-quoted ($html$...$html$) so apostrophes need no escaping.
-- Safe to re-run: removes these 10 slugs first, then inserts.

delete from public.blog_posts where slug in (
  'tiktok-marketing-malaysian-businesses',
  'what-is-ugc-why-your-brand-needs-it',
  'facebook-meta-ads-beginners-guide',
  'social-media-marketing-101-smes',
  'how-to-improve-roas',
  'local-seo-malaysia-guide',
  'lead-generation-strategies-that-work',
  'ai-marketing-for-small-businesses',
  'influencer-koc-marketing-guide',
  'tiktok-live-selling-guide'
);

insert into public.blog_posts (slug, title, excerpt, content, author, category, featured_image, published_date, published) values

(
  'tiktok-marketing-malaysian-businesses',
  'TikTok Marketing for Malaysian Businesses: How to Go Viral in 2026',
  'A practical TikTok marketing playbook for Malaysian brands — from hooks and hashtags to posting cadence and turning views into sales.',
  $html$<p>TikTok is no longer just for dancing teenagers — it is one of the most powerful discovery engines in Malaysia, with millions of daily active users scrolling for entertainment, reviews, and products to buy. For local businesses, that is a massive, largely untapped opportunity. Here is how to build a TikTok strategy that actually grows your brand in 2026.</p>
<h2>Why TikTok works for Malaysian brands</h2>
<p>Unlike platforms where reach depends on follower count, TikTok's For You Page rewards <strong>content quality and watch time</strong>. A brand-new account can hit hundreds of thousands of views if the video resonates. That means even small businesses can compete with established players — if the content is right.</p>
<h2>The 3-second hook rule</h2>
<p>The first three seconds decide whether someone keeps watching or scrolls past. Strong hooks include:</p>
<ul><li>A bold claim ("This RM20 product outsells our RM200 one")</li><li>A relatable problem ("POV: your ads are draining money")</li><li>Visual surprise or fast movement in frame one</li></ul>
<p>Never open with a slow logo animation — you will lose the algorithm before it even starts.</p>
<h2>Content pillars that convert</h2>
<p>Rotate between three types of content: <strong>educational</strong> (tips your audience can use), <strong>entertaining</strong> (trends, behind-the-scenes), and <strong>conversion</strong> (product demos, testimonials, UGC). A healthy mix keeps you discoverable while still driving sales.</p>
<h2>Posting cadence and consistency</h2>
<p>Posting once a week will not move the needle. Aim for <strong>4–7 videos per week</strong> for the first 90 days. Volume teaches the algorithm who your audience is and gives you the data to double down on what works.</p>
<h2>Turning views into sales</h2>
<p>Views are vanity unless they convert. Add clear calls-to-action, pin a "start here" video, use TikTok Shop or link-in-bio funnels, and retarget engaged viewers with paid ads. The brands that win treat organic and paid as one system.</p>
<p><strong>Want help?</strong> BrandKraf produces scroll-stopping TikTok content and runs paid campaigns for Malaysian brands. <a href="/contact">Book a free strategy call</a> and let's map out your first viral series.</p>$html$,
  'BrandKraf Team', 'TikTok', 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=80', '2026-06-12', true
),

(
  'what-is-ugc-why-your-brand-needs-it',
  'What Is UGC and Why Every Brand Needs It in 2026',
  'User-generated content (UGC) builds trust faster and converts better than polished ads. Here is what UGC is, why it works, and how to start.',
  $html$<p>If your ads still look like glossy commercials, you are leaving money on the table. In 2026, the content that converts best looks like a recommendation from a friend — not a billboard. That is the power of <strong>user-generated content (UGC)</strong>.</p>
<h2>What is UGC?</h2>
<p>UGC is authentic, creator-style content — unboxings, reviews, tutorials, and testimonials — that feels native to social feeds. It can be made by real customers or by professional UGC creators who produce content <em>on behalf</em> of a brand in that same authentic style.</p>
<h2>Why UGC outperforms traditional ads</h2>
<ul><li><strong>Trust:</strong> people believe other people far more than brands. UGC borrows that credibility.</li><li><strong>Cost:</strong> a batch of UGC videos costs a fraction of a studio shoot.</li><li><strong>Performance:</strong> UGC-style ads consistently beat polished creative on click-through and cost-per-acquisition.</li><li><strong>Volume:</strong> you can test dozens of angles quickly to find winners.</li></ul>
<h2>Where to use UGC</h2>
<p>UGC is not just for organic posts. Use it in <strong>Meta and TikTok ads</strong>, on product pages, in email campaigns, and as social proof on your website. One strong UGC video can power an entire ad campaign.</p>
<h2>How to get started</h2>
<p>Start by identifying your top 3 customer objections, then brief creators to address each one in a short, authentic video. Focus on the hook, keep it under 30 seconds, and always show the product in real use.</p>
<p>BrandKraf has a network of UGC creators across industries and produces conversion-focused videos at scale. <a href="/portfolio/ugc-content-creation">See our UGC work</a> or <a href="/contact">get a quote</a>.</p>$html$,
  'BrandKraf Team', 'UGC', 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80', '2026-06-08', true
),

(
  'facebook-meta-ads-beginners-guide',
  'Facebook & Meta Ads: A Beginner''s Guide to Profitable Campaigns',
  'New to Meta Ads? Learn how the auction works, how to structure campaigns, and the mistakes that quietly burn your budget.',
  $html$<p>Meta Ads (Facebook and Instagram) remain one of the highest-ROI channels for businesses that know how to use them — and a money pit for those who don't. This guide covers the fundamentals to get you profitable.</p>
<h2>How the Meta auction actually works</h2>
<p>You are not just bidding money — Meta rewards <strong>relevant, engaging ads</strong> with cheaper reach. That means creative quality directly lowers your cost. Better content literally costs less to distribute.</p>
<h2>Campaign structure for beginners</h2>
<p>Keep it simple: one campaign objective (usually Sales or Leads), 1–2 ad sets with broad targeting (Meta's AI finds buyers better than manual targeting now), and <strong>3–5 different creatives</strong> per ad set to test.</p>
<h2>The metrics that matter</h2>
<ul><li><strong>ROAS</strong> (return on ad spend) — your north star</li><li><strong>CPA</strong> (cost per acquisition)</li><li><strong>CTR</strong> (click-through rate) — a creative health check</li><li><strong>Hook rate</strong> — % who watch past 3 seconds</li></ul>
<h2>Common budget-burning mistakes</h2>
<p>Avoid these: changing campaigns daily (kills the learning phase), targeting too narrow, running one creative, and judging results before 50+ conversions. Give the algorithm room and data to optimise.</p>
<h2>Creative is 80% of the result</h2>
<p>In 2026, targeting is mostly automated — so your <strong>creative</strong> is the real lever. UGC-style videos, strong hooks, and clear offers beat polished brand films almost every time.</p>
<p>BrandKraf builds and manages profitable Meta campaigns — creative included. <a href="/portfolio/paid-advertising">Explore our paid ads service</a> or <a href="/contact">request a free audit</a>.</p>$html$,
  'BrandKraf Team', 'Paid Ads', 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80', '2026-06-05', true
),

(
  'social-media-marketing-101-smes',
  'Social Media Marketing 101: A Complete Guide for Small Businesses',
  'A no-fluff guide to social media marketing for SMEs — choosing platforms, planning content, and measuring what actually matters.',
  $html$<p>Social media can feel overwhelming for a small business owner already juggling everything. The good news: you don't need to be everywhere. You need a focused strategy. Here is social media marketing, stripped to the essentials.</p>
<h2>Choose the right platforms</h2>
<p>Don't spread yourself thin. Pick <strong>1–2 platforms</strong> where your customers actually spend time. Selling visual products? Instagram and TikTok. B2B services? LinkedIn. Local services? Facebook and Google. Master one before adding another.</p>
<h2>Build a simple content system</h2>
<p>Use a repeatable mix so you never run out of ideas:</p>
<ul><li><strong>Educate</strong> — tips and how-tos that build authority</li><li><strong>Entertain</strong> — trends and personality that build affinity</li><li><strong>Inspire</strong> — results, testimonials, transformations</li><li><strong>Promote</strong> — offers and products (about 20% of posts)</li></ul>
<h2>Consistency beats perfection</h2>
<p>A steady 3–4 posts a week outperforms an occasional perfect post. Batch-create content weekly and schedule it so showing up doesn't depend on motivation.</p>
<h2>Engagement is a two-way street</h2>
<p>Reply to comments and DMs quickly. The algorithm rewards conversations, and your future customers are watching how you treat people.</p>
<h2>Measure what matters</h2>
<p>Ignore vanity likes. Track <strong>reach, saves, shares, profile visits, and link clicks</strong> — these signal real interest and intent.</p>
<p>If managing it all is too much, BrandKraf handles social media end-to-end for Malaysian brands. <a href="/portfolio/social-media-management">See our service</a> or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Social Media', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80', '2026-06-01', true
),

(
  'how-to-improve-roas',
  'How to Improve Your ROAS: 7 Proven Strategies',
  'Return on ad spend too low? These seven levers — creative, offer, funnel, and retargeting — reliably push ROAS higher.',
  $html$<p>ROAS (return on ad spend) is the number that decides whether advertising grows your business or drains it. If yours is underwhelming, here are seven proven levers to pull — in order of impact.</p>
<h2>1. Fix the creative first</h2>
<p>Creative drives the majority of ad performance. Test more hooks, more angles, and more <strong>UGC-style video</strong>. A single winning creative can double ROAS overnight.</p>
<h2>2. Strengthen the offer</h2>
<p>Sometimes it's not the ad — it's what you're selling. A sharper offer, bundle, or guarantee can transform the same traffic into far more sales.</p>
<h2>3. Tighten the landing page</h2>
<p>If your ad is great but the page is slow or confusing, you lose the sale. Match the page to the ad, speed it up, and make the call-to-action obvious.</p>
<h2>4. Let the algorithm learn</h2>
<p>Stop editing campaigns daily. Give Meta or Google enough conversions to optimise before judging results.</p>
<h2>5. Retarget warm audiences</h2>
<p>People who visited but didn't buy are your cheapest conversions. A simple retargeting campaign almost always lifts blended ROAS.</p>
<h2>6. Exclude who already converted</h2>
<p>Stop paying to show acquisition ads to existing customers — sell them something new instead.</p>
<h2>7. Track the full funnel</h2>
<p>Optimise for <strong>purchases and profit</strong>, not clicks. Make sure your pixel and conversions API are firing accurately.</p>
<p>BrandKraf audits and scales paid campaigns for measurable ROI. <a href="/contact">Request a free ROAS audit</a>.</p>$html$,
  'BrandKraf Team', 'Paid Ads', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', '2026-05-28', true
),

(
  'local-seo-malaysia-guide',
  'Local SEO in Malaysia: How to Rank Your Business on Google',
  'A step-by-step local SEO guide for Malaysian businesses — Google Business Profile, reviews, citations, and on-page basics.',
  $html$<p>When someone in Kuala Lumpur searches "best [your service] near me," does your business show up? If not, you're handing customers to competitors. Local SEO fixes that — and it's very achievable for Malaysian SMEs.</p>
<h2>Start with Google Business Profile</h2>
<p>Your <strong>Google Business Profile</strong> is the single biggest local ranking factor. Claim it, fill in every field, choose the right categories, add real photos, and keep your hours accurate. This is what powers the Google Maps "local pack."</p>
<h2>Get consistent NAP everywhere</h2>
<p>Your <strong>Name, Address, and Phone number</strong> must match exactly across your website, social profiles, and directories. Inconsistency confuses Google and hurts rankings.</p>
<h2>Reviews are rocket fuel</h2>
<p>More positive, recent reviews mean higher rankings and more clicks. Build a simple system to ask happy customers for a review, and always reply — to both praise and complaints.</p>
<h2>Optimise your website pages</h2>
<ul><li>Put your city/area in titles and headings (e.g., "Digital Marketing Agency in Cheras, KL")</li><li>Create a page per service and per location you serve</li><li>Add your address and a Google Map embed</li><li>Make sure the site is fast and mobile-friendly</li></ul>
<h2>Build local citations</h2>
<p>List your business on relevant Malaysian directories and industry sites. Each consistent listing reinforces trust with search engines.</p>
<p>BrandKraf builds high-converting, SEO-ready websites and local strategies for Malaysian brands. <a href="/portfolio/website-development">See our web work</a> or <a href="/contact">get started</a>.</p>$html$,
  'BrandKraf Team', 'SEO', 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80', '2026-05-24', true
),

(
  'lead-generation-strategies-that-work',
  'Lead Generation Strategies That Actually Work in 2026',
  'Stop chasing vanity metrics. These lead generation strategies fill your pipeline with qualified prospects ready to buy.',
  $html$<p>Followers and likes don't pay the bills — <strong>leads</strong> do. Yet most businesses confuse audience growth with demand generation. Here are lead-gen strategies that reliably produce qualified prospects in 2026.</p>
<h2>Lead magnets that pull</h2>
<p>Offer something genuinely valuable in exchange for contact details — a free guide, audit, checklist, or quote. The better the magnet matches your buyer's problem, the higher the conversion.</p>
<h2>High-intent paid campaigns</h2>
<p>Run lead-form or click-to-message ads on Meta and Google targeting people actively looking for your solution. Pair them with strong creative and a frictionless form.</p>
<h2>Conversion-optimised landing pages</h2>
<p>Send paid traffic to a focused <strong>landing page</strong> — one offer, one action, clear proof. Don't dump visitors on a busy homepage.</p>
<h2>Capture and respond fast</h2>
<p>Speed-to-lead matters enormously. Businesses that respond within 5 minutes convert dramatically more than those that take hours. Use automation and alerts so no lead slips through.</p>
<h2>Nurture the "not yet" leads</h2>
<p>Most prospects aren't ready to buy today. Email sequences and retargeting keep you top-of-mind until they are.</p>
<h2>Track cost per qualified lead</h2>
<p>Measure <strong>cost per qualified lead</strong> and close rate — not just form fills. Optimise toward leads that actually become customers.</p>
<p>BrandKraf builds complete lead-gen systems — ads, landing pages, and follow-up — for Malaysian businesses. <a href="/contact">Book a free strategy call</a>.</p>$html$,
  'BrandKraf Team', 'Lead Generation', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', '2026-05-20', true
),

(
  'ai-marketing-for-small-businesses',
  'AI Marketing: How Small Businesses Can Use AI to Grow',
  'AI is not just hype. Here are practical, affordable ways small businesses can use AI marketing tools to save time and grow faster.',
  $html$<p>AI has gone from buzzword to everyday tool. For small businesses, it levels the playing field — letting a lean team produce, analyse, and personalise at a scale that used to require a big budget. Here's how to use it practically.</p>
<h2>Content creation at speed</h2>
<p>AI can draft captions, blog outlines, ad variations, and email copy in seconds. Use it as a fast first draft, then add your brand voice and human judgment. The result: more content, less time.</p>
<h2>Smarter ad optimisation</h2>
<p>Meta and Google already use AI to optimise targeting and bidding. Your job is to <strong>feed it great creative and clean conversion data</strong> — then let it find your buyers.</p>
<h2>Customer service automation</h2>
<p>AI chatbots handle FAQs, qualify leads, and book appointments 24/7 — so you capture interest even after hours. Done well, they improve experience instead of frustrating customers.</p>
<h2>Personalisation at scale</h2>
<p>AI segments your audience and tailors messages automatically, lifting email and ad performance without manual effort.</p>
<h2>Analytics and insight</h2>
<p>AI tools surface patterns in your data — what content converts, when to post, which segments are most valuable — turning raw numbers into decisions.</p>
<h2>A word of caution</h2>
<p>AI accelerates strategy; it doesn't replace it. Brands that win pair AI efficiency with <strong>human creativity and judgment</strong>.</p>
<p>BrandKraf builds AI-driven marketing systems and chatbots for growing brands. <a href="/portfolio/ai-driven-marketing">Explore AI marketing</a> or <a href="/contact">get in touch</a>.</p>$html$,
  'BrandKraf Team', 'AI Marketing', 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80', '2026-05-16', true
),

(
  'influencer-koc-marketing-guide',
  'Influencer & KOC Marketing: A Practical Guide for Brands',
  'KOLs, KOCs, and influencers explained — how to pick the right creators, structure deals, and measure real ROI.',
  $html$<p>Influencer marketing has matured well beyond paying a celebrity for a post. The smartest brands now blend big <strong>KOLs</strong> (Key Opinion Leaders) with an army of smaller, highly trusted <strong>KOCs</strong> (Key Opinion Consumers). Here's how to do it right.</p>
<h2>KOL vs KOC — what's the difference?</h2>
<p>A <strong>KOL</strong> has large reach and authority — great for awareness. A <strong>KOC</strong> is a smaller, everyday creator whose recommendations feel personal and trustworthy — great for conversions. Most winning campaigns use both.</p>
<h2>Pick creators by fit, not just followers</h2>
<p>Follower count is the wrong starting point. Look at <strong>audience relevance, engagement quality, and content style</strong>. A creator with 8,000 engaged local followers can outperform one with 200,000 passive ones.</p>
<h2>Structure the collaboration</h2>
<ul><li>Be clear on deliverables, usage rights, and timelines</li><li>Give creative freedom — creators know what their audience responds to</li><li>Mix payment models: flat fee, gifting, or performance-based</li></ul>
<h2>Amplify the best content with ads</h2>
<p>Don't let great creator content live only on their page. With usage rights, run it as <strong>paid ads</strong> — authentic content plus paid reach is a powerful combination.</p>
<h2>Measure real ROI</h2>
<p>Track unique codes, affiliate links, and landing pages so you know which creators actually drive sales — not just likes.</p>
<p>BrandKraf runs end-to-end KOC/KOL campaigns — matching, management, and ROI tracking. <a href="/portfolio/koc-kol-service">See our service</a> or <a href="/contact">start a campaign</a>.</p>$html$,
  'BrandKraf Team', 'Influencer Marketing', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', '2026-05-12', true
),

(
  'tiktok-live-selling-guide',
  'TikTok Live Selling: How to Drive Real-Time Sales',
  'TikTok Live turns viewers into buyers in real time. Here is how to plan, host, and scale live selling sessions that convert.',
  $html$<p>Live selling has exploded across Southeast Asia, and TikTok Live is leading the charge. It blends entertainment, urgency, and instant checkout into one of the highest-converting formats available today. Here's how to make it work.</p>
<h2>Why live selling converts</h2>
<p>Live combines <strong>real-time interaction, social proof, and scarcity</strong>. Viewers ask questions and get answers instantly, see others buying, and act on limited-time offers — all in one session. That immediacy drives conversions traditional content can't match.</p>
<h2>Plan every session</h2>
<p>Treat a live like a show, not an afterthought. Plan your <strong>product line-up, talking points, offers, and timing</strong>. Promote the session in advance so people show up.</p>
<h2>Hook viewers and keep them</h2>
<p>Open with energy and a reason to stay ("Stay until the end for our biggest deal"). Re-introduce the offer regularly, since new viewers join throughout.</p>
<h2>Make buying effortless</h2>
<p>Pin products, repeat how to order, and keep stock and pricing crystal clear. Every second of confusion costs a sale.</p>
<h2>Consistency builds an audience</h2>
<p>The best live sellers go live on a <strong>regular schedule</strong>. Repeat viewers become repeat buyers, and the algorithm rewards consistency with more reach.</p>
<h2>Have the right team</h2>
<p>A great session often needs a confident host, someone managing comments and orders, and clean technical setup. It's a team sport.</p>
<p>BrandKraf runs professional TikTok Live selling — hosts, setup, and strategy included. <a href="/portfolio/tiktok-live-service">See our TikTok Live service</a> or <a href="/contact">book a session</a>.</p>$html$,
  'BrandKraf Team', 'TikTok', 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80', '2026-05-08', true
);
