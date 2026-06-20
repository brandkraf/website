-- BrandKraf — Blog batch 3: 10 high-intent, Malaysia-specific SEO posts (run in Supabase SQL Editor)
-- Built from live SERP gap analysis: pricing, grants, WhatsApp, TikTok Shop, UGC rates, marketplace ads, festive, AI tools, local pack.
-- Content is dollar-quoted ($html$...$html$). Safe to re-run.

delete from public.blog_posts where slug in (
  'digital-marketing-cost-malaysia',
  'social-media-management-pricing-malaysia',
  'sme-digitalisation-grant-2026',
  'whatsapp-marketing-malaysian-businesses',
  'how-to-sell-on-tiktok-shop-malaysia',
  'ugc-creator-rates-malaysia',
  'shopee-lazada-ads-malaysia',
  'hari-raya-marketing-playbook',
  'best-ai-marketing-tools-malaysia-2026',
  'google-business-profile-local-pack'
);

insert into public.blog_posts (slug, title, excerpt, content, author, category, featured_image, published_date, published) values

(
  'digital-marketing-cost-malaysia',
  'Digital Marketing Cost in Malaysia (2026): A Transparent Pricing Guide',
  'What does digital marketing really cost in Malaysia in 2026? A clear breakdown by channel — SEO, ads, social media, and full-service — plus how to budget and avoid overpaying.',
  $html$<p>"How much does digital marketing cost?" is the first question almost every Malaysian business owner asks — and the hardest to get a straight answer to. Quotes range from a few hundred ringgit to five figures a month, and it is rarely clear what you are actually buying. This guide gives you real 2026 numbers and the context to make a smart decision.</p>
<blockquote>Cheap marketing that does not convert is the most expensive marketing there is. Price is what you pay; ROI is what you keep.</blockquote>
<h2>What you are actually paying for</h2>
<p>Digital marketing fees usually cover a mix of <strong>strategy, content creation, ad management, tools, and reporting</strong>. The big variable is labour: experienced strategists and editors cost more than junior freelancers, and that difference shows up in results. When you compare quotes, compare scope — not just the number at the bottom.</p>
<h2>Typical price ranges in Malaysia (2026)</h2>
<p>Based on what agencies and freelancers across Malaysia are charging this year, here is a realistic guide:</p>
<ul>
<li><strong>SEO</strong> — from around RM1,500/month for ongoing optimisation, more for competitive industries.</li>
<li><strong>Google or Meta ads management</strong> — RM800–RM1,500/month <em>on top of</em> your ad spend.</li>
<li><strong>Social media management</strong> — RM2,500–RM5,000/month for most SMEs, depending on content volume.</li>
<li><strong>Full-service (multi-channel)</strong> — RM3,000–RM8,000/month for a managed mix of content, ads, and reporting.</li>
<li><strong>Freelancer</strong> — cheaper entry point (from a few hundred ringgit), but limited capacity and no team backup.</li>
</ul>
<p>Most SMEs land between <strong>RM1,500 and RM8,000 a month</strong> before ad spend. Medium-sized businesses running comprehensive strategies often invest RM20,000–RM100,000 per year.</p>
<h2>Freelancer vs agency vs in-house</h2>
<p>Each model has trade-offs:</p>
<ul>
<li><strong>Freelancer</strong> — lowest cost, good for a single channel, but a single point of failure.</li>
<li><strong>Agency</strong> — higher cost, but you get a team, tools, and accountability across channels.</li>
<li><strong>In-house hire</strong> — a marketing executive salary plus EPF/SOCSO often exceeds an agency retainer, with a narrower skill set.</li>
</ul>
<p>For most growing SMEs, an agency retainer delivers the widest skill set per ringgit.</p>
<h2>What makes prices vary</h2>
<p>Two quotes can differ wildly because of: how competitive your industry is, how much content is produced each month, whether ad spend is included or separate, the seniority of the people doing the work, and how much reporting and strategy is bundled in. Always ask for a scope breakdown.</p>
<h2>Do not forget the SME Digitalisation Grant</h2>
<p>Eligible Malaysian SMEs can claim <strong>50% of digitalisation costs, up to RM5,000</strong>, through the government grant — which can cover part of your marketing setup. We break down how to claim it in our <a href="/blog/sme-digitalisation-grant-2026">SME Digitalisation Grant guide</a>.</p>
<h2>How to budget smartly</h2>
<p>Start with a goal, not a number. Decide what a new customer is worth to you, then work backwards. A common starting point is allocating 7–10% of revenue to marketing, weighted toward the channels where your customers already are. Track <a href="/blog/how-to-improve-roas">return on ad spend</a> from day one so you can scale what works.</p>
<h2>Red flags that you are overpaying (or underpaying)</h2>
<ul>
<li>Guaranteed "#1 on Google" promises — no one can guarantee that.</li>
<li>No reporting, or vanity metrics only (likes, not leads).</li>
<li>Prices far below market — quality and capacity usually suffer.</li>
<li>Lock-in contracts with no performance review.</li>
</ul>
<h2>Frequently asked questions</h2>
<h3>How much should a small business spend on digital marketing in Malaysia?</h3>
<p>Most SMEs start between RM1,500 and RM3,000 a month and scale up as results prove out. The right number depends on your margins and customer value, not a fixed rule.</p>
<h3>Is ad spend included in agency fees?</h3>
<p>Usually not. Management fees and the actual budget you pay to Google or Meta are separate line items. Always confirm which is which in a quote.</p>
<h3>Why is SEO an ongoing cost?</h3>
<p>Rankings require continuous content, technical upkeep, and link-building because competitors are also working. SEO is a compounding investment, not a one-off.</p>
<h3>Can I do digital marketing myself to save money?</h3>
<p>You can start, especially on organic social. But as you grow, the opportunity cost of your time and the depth of skill required usually make professional help worthwhile.</p>
<p>BrandKraf gives Malaysian businesses transparent, results-focused pricing. See our <a href="/pricing">pricing</a> or <a href="/contact">get a custom quote</a>.</p>$html$,
  'BrandKraf Team', 'Marketing Strategy', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80', '2026-06-16', true
),

(
  'social-media-management-pricing-malaysia',
  'Social Media Management Pricing in Malaysia: What Fair Rates Look Like (2026)',
  'How much should social media management cost in Malaysia? A breakdown of freelancer, boutique, and agency rates — and exactly what should be included at each tier.',
  $html$<p>Social media management is one of the most requested — and most inconsistently priced — services in Malaysia. One quote is RM800 a month, another is RM6,000, and both call it "managing your socials." The difference is scope. This guide shows you what fair rates look like in 2026 and what should be included at each level.</p>
<blockquote>You are not paying for posts. You are paying for a system that turns attention into customers.</blockquote>
<h2>The price tiers, explained</h2>
<p>Social media management in Malaysia generally falls into three tiers:</p>
<ul>
<li><strong>Freelancer</strong> — from around RM800/month. Good for basic scheduling and simple graphics; limited strategy and capacity.</li>
<li><strong>Boutique team / small agency</strong> — RM2,500–RM5,000/month. Most SMEs sit here: real content, a posting calendar, and reporting.</li>
<li><strong>Full-service agency</strong> — RM5,000–RM15,000+/month. Multi-platform, video-heavy, with strategy, paid social, and community management.</li>
</ul>
<h2>What should be included</h2>
<p>A fair social media retainer should clearly state:</p>
<ul>
<li><strong>Number of posts and Reels</strong> per month, per platform.</li>
<li><strong>Content creation</strong> — graphics, captions, and short-form video editing.</li>
<li><strong>A content calendar</strong> for your approval before anything goes live.</li>
<li><strong>Community management</strong> — replying to comments and DMs.</li>
<li><strong>Monthly reporting</strong> tied to real goals, not just likes.</li>
</ul>
<p>If a quote does not specify these, ask. Vague scope is where overpaying happens.</p>
<h2>Why video changes the price</h2>
<p>Short-form video (Reels, TikTok) drives the most reach in 2026 — but it costs more to produce than static graphics because it needs filming, editing, and hooks. A package heavy on video will cost more than one built on canva-style posts, and it is usually worth it. See our guide to <a href="/blog/short-form-video-marketing">short-form video marketing</a>.</p>
<h2>How many platforms do you actually need?</h2>
<p>More platforms means more cost — and often worse results. It is better to dominate one or two platforms where your audience lives than to post weakly across five. A good agency will recommend focus, not spread.</p>
<h2>Questions to ask before you sign</h2>
<ul>
<li>Who creates the content — and can I see samples?</li>
<li>How many videos versus static posts per month?</li>
<li>Do I approve content before it publishes?</li>
<li>What does your monthly report measure?</li>
<li>Is paid ad management included or separate?</li>
</ul>
<h2>Frequently asked questions</h2>
<h3>Is RM800 a month enough for social media management?</h3>
<p>It covers basic posting, but rarely strategy, quality video, or growth. Treat it as a starting point, not a growth engine.</p>
<h3>Should content creation be a separate fee?</h3>
<p>Good management includes content creation. If creation is billed entirely separately, make sure you understand the full monthly cost.</p>
<h3>Do I really need to be on every platform?</h3>
<p>No. Focus beats spread. Pick the one or two platforms where your customers actually spend time.</p>
<h3>How soon will I see results?</h3>
<p>Engagement can improve within weeks, but meaningful growth and sales typically build over three to six months of consistent, quality content.</p>
<p>BrandKraf manages social media end-to-end for Malaysian brands. See <a href="/pricing/social-media-management">social media pricing</a>, explore the <a href="/portfolio/social-media-management">service</a>, or <a href="/contact">talk to us</a>. New to social? Start with our <a href="/blog/social-media-marketing-101-smes">social media 101 guide</a>.</p>$html$,
  'BrandKraf Team', 'Social Media', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80', '2026-06-16', true
),

(
  'sme-digitalisation-grant-2026',
  'SME Digitalisation Grant 2026: How to Claim Up to RM5,000 for Marketing',
  'The Geran Digital PMKS MADANI covers 50% of your digitalisation cost, up to RM5,000. Here is who qualifies, what it covers, and how to apply step by step.',
  $html$<p>If you run an SME in Malaysia, the government may pay for half of your digital marketing setup. The SME Digitalisation Grant — now under the <strong>Geran Digital PMKS MADANI</strong> banner — covers <strong>50% of eligible digitalisation costs, up to RM5,000</strong> per company. Many business owners do not realise they qualify. Here is how it works.</p>
<blockquote>A grant that covers half your digital setup is not just savings — it is a head start your competitors may be ignoring.</blockquote>
<h2>What the grant covers</h2>
<p>The grant is designed to help SMEs adopt digital tools. Depending on the current programme scope, eligible categories typically include:</p>
<ul>
<li>Digital marketing and online presence setup.</li>
<li>E-commerce and online sales platforms.</li>
<li>Websites and digital storefronts.</li>
<li>Other approved digitalisation services from registered solution providers.</li>
</ul>
<p>Because categories and approved vendors are updated periodically, always confirm the current list before applying.</p>
<h2>Who qualifies</h2>
<p>Eligibility generally requires that your business is:</p>
<ul>
<li>A Malaysian-owned SME (commonly 60% or more local equity).</li>
<li>Registered with SSM and in operation for a minimum period.</li>
<li>Within the revenue and employee thresholds defined for SMEs.</li>
</ul>
<p>Exact criteria can change between cycles, so check the official requirements or ask a registered provider to confirm your eligibility.</p>
<h2>How to apply, step by step</h2>
<ol>
<li><strong>Confirm eligibility</strong> against the current criteria.</li>
<li><strong>Choose an approved solution provider</strong> for the service you want.</li>
<li><strong>Get a quotation</strong> for the eligible service.</li>
<li><strong>Submit your application</strong> with your SSM documents, IC, bank details, and the quotation.</li>
<li><strong>Await approval</strong>, then proceed with the provider once confirmed.</li>
</ol>
<p>The 50% subsidy is applied to the eligible amount, capped at RM5,000 — so a RM10,000 eligible project could cost you RM5,000 out of pocket.</p>
<h2>How to make the grant work hardest</h2>
<p>Use the grant on assets that keep paying off: a conversion-focused website, an e-commerce setup, or a foundational marketing package. Spending it on a one-off campaign gives a short burst; spending it on infrastructure compounds. Pair it with a realistic ongoing budget — see our <a href="/blog/digital-marketing-cost-malaysia">digital marketing cost guide</a> to plan.</p>
<h2>Common mistakes to avoid</h2>
<ul>
<li>Assuming you do not qualify without checking — many SMEs do.</li>
<li>Choosing a provider that is not on the approved list.</li>
<li>Leaving the budget on simple tools instead of revenue-driving assets.</li>
<li>Missing application windows — programmes can be time- or quota-limited.</li>
</ul>
<h2>Frequently asked questions</h2>
<h3>Is the grant still available in 2026?</h3>
<p>SME digitalisation support has run across multiple cycles under different names. Confirm the current programme status and remaining allocation before applying, as funds can be limited.</p>
<h3>How much can I actually get?</h3>
<p>Up to RM5,000, calculated as 50% of your eligible digitalisation cost, once per company under the standard scheme.</p>
<h3>Can it cover digital marketing specifically?</h3>
<p>Digital marketing and online presence are commonly within scope, but the exact eligible services depend on the current programme and your chosen provider.</p>
<h3>Do I need an approved provider?</h3>
<p>Yes. The service must usually be delivered by a registered solution provider for the claim to be valid.</p>
<p>BrandKraf can help eligible SMEs scope a grant-friendly project and guide you through it. <a href="/contact">Talk to us</a> or explore <a href="/pricing">our packages</a>.</p>$html$,
  'BrandKraf Team', 'Business Growth', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80', '2026-06-17', true
),

(
  'whatsapp-marketing-malaysian-businesses',
  'WhatsApp Marketing for Malaysian Businesses: Turn Chats Into Sales',
  'WhatsApp is the most-used app in Malaysia. Learn how to use broadcasts, the Business API, automation, and chatbots to turn conversations into revenue — without spamming.',
  $html$<p>In Malaysia, WhatsApp is not just a messaging app — it is where business happens. With near-universal penetration, it has open rates that email can only dream of. Yet most businesses use it reactively, only replying when a customer messages first. This guide shows you how to use WhatsApp as a real marketing and sales channel.</p>
<blockquote>Email gets opened by a fraction of your list. A WhatsApp message gets read in minutes. The channel is not the problem — how you use it is.</blockquote>
<h2>Why WhatsApp wins in Malaysia</h2>
<p>People already live in their WhatsApp inbox. Messages feel personal, arrive instantly, and get read. That makes it ideal for high-intent moments: answering pre-purchase questions, confirming orders, recovering abandoned carts, and re-engaging past customers. The catch is that it is intimate — spam gets you blocked fast.</p>
<h2>Broadcasts: email campaigns, but better</h2>
<p>A WhatsApp <strong>broadcast</strong> sends one message to many recipients, but each person receives it as a private, one-to-one chat — no group thread, no visible contacts. Done well, it is like an email campaign with dramatically higher open rates. Use it for offers, restocks, and announcements to people who opted in.</p>
<h2>WhatsApp Business app vs Business API</h2>
<ul>
<li><strong>WhatsApp Business app</strong> — free, great for small teams. Catalogs, quick replies, labels, and away messages.</li>
<li><strong>WhatsApp Business API</strong> — for scale. Enables automation, chatbots, CRM integration, and multiple agents on one number. This is what powers serious WhatsApp marketing.</li>
</ul>
<h2>Automation and chatbots</h2>
<p>The API lets you automate the repetitive parts: instant replies to FAQs, order updates, appointment reminders, and lead qualification — all running 24/7 so no enquiry goes cold at midnight. A well-built chatbot answers the easy questions and routes the valuable ones to a human. Learn more in our guide to <a href="/blog/chatbots-marketing-automation">chatbots and marketing automation</a>.</p>
<h2>Build a permission-based list</h2>
<p>The golden rule: <strong>only message people who opted in</strong>. Grow your list ethically with "click-to-WhatsApp" ads, a chat button on your site, and incentives to start a conversation. A smaller list of people who want to hear from you beats a big list that reports you as spam.</p>
<h2>A simple WhatsApp marketing system</h2>
<ol>
<li><strong>Capture</strong> opt-ins through ads, your website, and at checkout.</li>
<li><strong>Segment</strong> by interest and purchase history.</li>
<li><strong>Automate</strong> instant replies and order updates.</li>
<li><strong>Broadcast</strong> relevant offers — not daily spam.</li>
<li><strong>Convert</strong> in the chat: many sales close in the inbox.</li>
</ol>
<h2>What not to do</h2>
<ul>
<li>Buying contact lists and blasting strangers — fast route to a ban.</li>
<li>Sending too often; respect the personal nature of the channel.</li>
<li>Ignoring response time — speed is the whole advantage.</li>
</ul>
<h2>Frequently asked questions</h2>
<h3>Is WhatsApp broadcasting legal in Malaysia?</h3>
<p>Messaging people who have opted in is fine. Buying lists and mass-messaging strangers risks bans and breaches privacy expectations. Always get consent.</p>
<h3>Do I need the API or is the free app enough?</h3>
<p>Small operations can run on the free Business app. Once you need automation, chatbots, or multiple agents, the Business API is worth it.</p>
<h3>How often should I broadcast?</h3>
<p>Quality over frequency. A few highly relevant messages a month beats weekly blasts that get you muted or blocked.</p>
<h3>Can WhatsApp integrate with my other tools?</h3>
<p>Yes — via the Business API it can connect to your CRM, e-commerce platform, and chatbot to create one connected system.</p>
<p>BrandKraf builds WhatsApp automation and chatbots that turn chats into sales. Explore <a href="/portfolio/chatbot-development">chatbot development</a> or <a href="/contact">get in touch</a>.</p>$html$,
  'BrandKraf Team', 'Marketing Strategy', 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80', '2026-06-17', true
),

(
  'how-to-sell-on-tiktok-shop-malaysia',
  'How to Sell on TikTok Shop in Malaysia: A Step-by-Step Guide (2026)',
  'From registering your shop to setting affiliate commissions and going live — a complete starter guide to selling on TikTok Shop in Malaysia.',
  $html$<p>TikTok Shop has turned scrolling into shopping. In Malaysia, it is one of the fastest-growing ways to sell — combining short video, live selling, and a built-in checkout so customers buy without ever leaving the app. This guide walks you through setting up and selling, step by step.</p>
<blockquote>On TikTok, you do not drive traffic to a store. The store is inside the content people already love watching.</blockquote>
<h2>Step 1: Register your shop</h2>
<p>Sign up as a seller, complete the registration form, and submit your required documents. Approval typically takes up to about seven days. Notably, <strong>there is no minimum follower requirement to start selling</strong> — anyone with valid documents and products can open a shop.</p>
<h2>Step 2: Set up your products</h2>
<p>Upload your catalogue with clear titles, strong images, accurate pricing, and stock. Link your TikTok account so your content and shop work together. Good product pages reduce questions and returns — treat them like mini landing pages.</p>
<h2>Step 3: Understand the affiliate programme</h2>
<p>This is where TikTok Shop gets powerful. You can let creators promote your products for a commission, so other people sell for you. Sellers can choose:</p>
<ul>
<li><strong>Shop Plan</strong> — a flat commission rate across all products.</li>
<li><strong>Open Plan</strong> — special rates on particular products, open to all creators.</li>
<li><strong>Targeted Plan</strong> — invite specific creators to promote selected products.</li>
</ul>
<p>Commissions are typically calculated as (revenue − refunds) × rate, and paid out roughly 15 days after delivery. To recruit creators effectively, see our <a href="/blog/influencer-koc-marketing-guide">KOC and influencer marketing guide</a>.</p>
<h2>Step 4: Create content that sells</h2>
<p>Product videos should hook in the first three seconds, show the product solving a real problem, and end with a clear reason to buy now. Native, authentic content outperforms polished ads. Mix demonstrations, testimonials, and trend-driven clips.</p>
<h2>Step 5: Go live to sell in real time</h2>
<p>Live selling lets you demo products, answer questions, and create urgency with limited-time offers — all while viewers check out instantly. Consistency matters: regular lives train your audience to show up. Our <a href="/blog/tiktok-live-selling-guide">TikTok live selling guide</a> covers this in depth.</p>
<h2>Step 6: Fulfil fast and keep ratings high</h2>
<p>Shipping speed and product quality drive your shop rating, which affects how much the algorithm pushes you. Pack well, ship quickly, and resolve issues fast. Reviews are social proof that compounds.</p>
<h2>Frequently asked questions</h2>
<h3>Do I need followers to sell on TikTok Shop?</h3>
<p>No. There is no minimum follower count to open a shop and start selling. Creators who want to earn affiliate commissions, however, typically need at least 1,000 followers.</p>
<h3>How do affiliate commissions work?</h3>
<p>You set a commission rate; creators promote your products and earn that percentage on sales they drive, usually paid out about 15 days after delivery.</p>
<h3>When do I get paid?</h3>
<p>Payouts are released after orders are delivered and the return window passes, based on TikTok Shop's settlement schedule.</p>
<h3>Is live selling necessary?</h3>
<p>Not mandatory, but it is one of the highest-converting formats on the platform. Even one consistent weekly live can lift sales meaningfully.</p>
<p>BrandKraf helps Malaysian brands win on TikTok — content, creators, and live selling. Explore <a href="/portfolio/tiktok-live-service">TikTok live</a> and <a href="/portfolio/koc-kol-service">KOC/KOL services</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'TikTok', 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=80', '2026-06-18', true
),

(
  'ugc-creator-rates-malaysia',
  'UGC Creator Rates in Malaysia: How to Hire and What to Pay (2026)',
  'What do UGC creators charge in Malaysia, how do you brief them, and why do usage rights matter more than the creation fee? A practical hiring guide.',
  $html$<p>User-generated content (UGC) has become the fuel of modern marketing — authentic, native videos that convert far better than polished ads. But hiring UGC creators in Malaysia confuses a lot of brands: rates vary wildly, and the cheapest quote is often the most expensive mistake. Here is how to hire well.</p>
<blockquote>You are not buying a video. You are buying the right to use that video to make sales. Those are two very different things.</blockquote>
<h2>What UGC actually is</h2>
<p>A UGC creator is hired for their <strong>content creation skills, not their audience size</strong>. Unlike an influencer, they may post nothing to their own followers — they hand you authentic, ad-ready footage you can run as ads or post yourself. If you are new to this, start with our explainer on <a href="/blog/what-is-ugc-why-your-brand-needs-it">what UGC is and why your brand needs it</a>.</p>
<h2>Typical UGC rates in Malaysia</h2>
<p>Pricing scales with complexity and rights:</p>
<ul>
<li><strong>Simple content</strong> (e.g., an unboxing) — from around RM150 per video.</li>
<li><strong>Ad-ready testimonial with usage rights</strong> — RM1,000+ per video.</li>
<li><strong>Packages</strong> — many creators deliver 4–6 videos per week at a bundled rate.</li>
</ul>
<p>The range is wide because a 30-second clip with full paid-ad rights is a different product from a casual review.</p>
<h2>Why usage rights matter most</h2>
<p>This is the part brands miss: <strong>a low creation fee is worthless if you cannot legally run the content in paid ads</strong>. Always agree, in writing, on where and how long you can use the content — organic only, paid ads, whitelisting, and the licence duration. Paying more for proper rights is almost always worth it.</p>
<h2>How to write a brief that gets great content</h2>
<ul>
<li><strong>The hook</strong> — tell the creator the first line should stop the scroll.</li>
<li><strong>The problem and solution</strong> — what pain does your product solve?</li>
<li><strong>Key talking points</strong> — but leave room for their authentic voice.</li>
<li><strong>The call to action</strong> — what should viewers do next?</li>
<li><strong>Format specs</strong> — vertical, length, captions, and any do-not-say items.</li>
</ul>
<h2>Where to find UGC creators</h2>
<p>You can source creators through marketplaces, agencies, or direct outreach. Marketplaces are fast but variable; an agency curates quality and handles briefs, rights, and revisions for you — which saves time and protects your brand.</p>
<h2>How to know if it is working</h2>
<p>Test UGC the way you test ads: run several variations, watch hook retention and conversion, then double down on the angles that perform. One strong UGC video can outperform an expensive studio production at a fraction of the cost.</p>
<h2>Frequently asked questions</h2>
<h3>Is UGC cheaper than influencer marketing?</h3>
<p>Often, yes — because you pay for content, not audience. But factor in usage rights, which are essential if you plan to run paid ads.</p>
<h3>How many videos do I need to start?</h3>
<p>Begin with three to five variations so you can test different hooks and angles, then scale the winners.</p>
<h3>Can I use UGC in my paid ads?</h3>
<p>Only if you have secured paid usage rights in writing. Always confirm this before the shoot, not after.</p>
<h3>Do UGC creators need a big following?</h3>
<p>No. Their value is the content. Audience size is what you pay influencers for — a separate strategy.</p>
<p>BrandKraf produces ad-ready UGC for Malaysian brands across every industry. Explore <a href="/portfolio/ugc-content-creation">UGC content creation</a>, see <a href="/pricing/ugc-content-creation">UGC pricing</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'UGC', 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80', '2026-06-18', true
),

(
  'shopee-lazada-ads-malaysia',
  'Shopee and Lazada Ads in Malaysia: A Seller Guide to Winning Mega Sales',
  'How to use Shopee and Lazada ads to boost sales — campaign types, the mega-sale calendar, and how to scale profitably without burning budget.',
  $html$<p>For Malaysian e-commerce sellers, Shopee and Lazada are where the customers are — and where the competition is fiercest. Organic visibility alone is no longer enough. Platform ads put your products in front of high-intent shoppers, and the mega sales (9.9, 11.11, 12.12) can make or break your quarter. Here is how to win.</p>
<blockquote>On a marketplace, shoppers already want to buy. Ads do not create demand — they decide who gets the sale.</blockquote>
<h2>The ad types you need to know</h2>
<p>Both platforms offer similar mechanics:</p>
<ul>
<li><strong>Search ads</strong> — you bid on keywords so your product appears when shoppers search. Highest intent, best starting point.</li>
<li><strong>Discovery ads</strong> — your products surface across the app in recommendation slots, good for reach.</li>
<li><strong>AI-optimised campaigns</strong> — solutions like Lazada's Sponsored Max automatically optimise bids and placements toward the highest conversion value.</li>
</ul>
<h2>Start with search ads</h2>
<p>Search ads capture buyers at the moment of intent. Bid on the keywords shoppers actually type, keep your most competitive products in the campaign, and use your product titles and images to win the click. This is the most controllable, profitable place to begin.</p>
<h2>The mega-sale calendar</h2>
<p>Malaysia's e-commerce year revolves around double-date sales: <strong>9.9, 10.10, 11.11, and 12.12</strong>, plus festive peaks. Traffic spikes massively on these days — but so does competition and cost-per-click. Winning them takes preparation, not last-minute budget.</p>
<h2>Prepare before the spike</h2>
<p>A critical tactic: set up campaigns <strong>at least 7 days before</strong> a major sale. AI-optimised campaigns need a "learning phase" to test placements and gather data, so launching early means the system is already optimised when traffic peaks. Pre-stock inventory, prepare vouchers, and refresh your best listings ahead of time.</p>
<h2>Scale profitably, not just bigger</h2>
<p>Many sellers think scaling means raising the budget. But spending more often raises acquisition costs and erodes profit if done blindly. True scaling means:</p>
<ul>
<li>Identifying your most profitable products and keywords first.</li>
<li>Increasing budget gradually on proven winners.</li>
<li>Cutting wasted spend on terms that do not convert.</li>
<li>Watching your return on ad spend, not just total sales.</li>
</ul>
<p>The same discipline applies across every channel — see our guide to <a href="/blog/how-to-improve-roas">improving ROAS</a>.</p>
<h2>Do not neglect the fundamentals</h2>
<p>Ads amplify what already exists. A great ad pointing to a weak listing — poor images, no reviews, slow shipping — wastes money. Strong titles, clean photos, competitive pricing, and a high shop rating make every ringgit of ad spend work harder.</p>
<h2>Frequently asked questions</h2>
<h3>Should I run Shopee ads, Lazada ads, or both?</h3>
<p>Start where most of your sales already come from, master it, then expand. Many sellers eventually run both because the audiences differ.</p>
<h3>How early should I set up for 11.11 or 12.12?</h3>
<p>At least a week ahead, so AI-driven campaigns finish their learning phase and your inventory and vouchers are ready before the surge.</p>
<h3>What is a good starting budget?</h3>
<p>Start small on search ads for your best products, prove profitability, then scale gradually. There is no fixed minimum — discipline matters more than size.</p>
<h3>Why are my ads not profitable?</h3>
<p>Usually weak listings, uncompetitive pricing, low ratings, or bidding on the wrong keywords. Fix the fundamentals before increasing spend.</p>
<p>BrandKraf manages marketplace and paid advertising for Malaysian sellers. Explore <a href="/portfolio/paid-advertising">paid advertising</a> or <a href="/contact">get a strategy session</a>.</p>$html$,
  'BrandKraf Team', 'Paid Advertising', 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80', '2026-06-19', true
),

(
  'hari-raya-marketing-playbook',
  'The Hari Raya Marketing Playbook for Malaysian Brands',
  'How Malaysian brands win during Hari Raya — emotional storytelling, the festive timeline, content ideas, and campaigns that build both sales and brand love.',
  $html$<p>Hari Raya is the Super Bowl of Malaysian marketing. Every year, brands from telcos to footwear release films that make the nation laugh, cry, and share. Behind the emotion is serious strategy — and SMEs can win their share of attention too. This playbook shows you how.</p>
<blockquote>The best Raya campaigns do not sell a product. They tell a story about people — and let the brand stand quietly beside it.</blockquote>
<h2>Why festive marketing works</h2>
<p>During Raya, people are in a spending and gifting mindset, and they are emotionally open. Campaigns that tap into <strong>family, tradition, togetherness, and balik kampung</strong> earn attention and goodwill that pure promotions never could. The brands Malaysians remember are the ones that made them feel something.</p>
<h2>Lead with emotion, not discounts</h2>
<p>The most-loved campaigns — across telco, retail, aviation, and F&B — are short films built on heartfelt, culturally resonant narratives. The product takes a back seat to the story. Even with a small budget, you can apply the principle: tell a genuine, human story your audience sees themselves in.</p>
<h2>The festive timeline</h2>
<p>Timing is everything. A rough rhythm:</p>
<ul>
<li><strong>4–6 weeks before</strong> — tease your campaign, launch your hero content, start Ramadan messaging.</li>
<li><strong>Ramadan</strong> — sustain with useful, warm content (recipes, tips, kindness themes).</li>
<li><strong>1–2 weeks before Raya</strong> — push offers, gift guides, and last-order dates.</li>
<li><strong>During and after</strong> — Raya greetings, user content, and thank-you messages.</li>
</ul>
<h2>Content ideas that work</h2>
<ul>
<li><strong>A short film or Reel</strong> with a real, emotional story.</li>
<li><strong>Duit raya / e-angpau</strong> themed promotions and digital packets.</li>
<li><strong>Branded Raya packets</strong> or templates people want to use.</li>
<li><strong>Gift guides</strong> and festive bundles.</li>
<li><strong>Behind-the-scenes</strong> of your team preparing for Raya.</li>
</ul>
<p>Short-form video is your highest-reach format here — see our guide to <a href="/blog/short-form-video-marketing">short-form video marketing</a>.</p>
<h2>Use influencers and creators</h2>
<p>Festive content spreads through people. Partnering with creators who genuinely fit your brand multiplies reach and adds authenticity at the moment audiences are most engaged. Plan collaborations early — good creators book out before the season.</p>
<h2>Respect the culture</h2>
<p>Festive marketing only works when it is sincere. Be authentic, inclusive, and respectful of the meaning behind the celebration. Audiences can tell the difference between a brand that understands Raya and one that is just chasing the trend — and they reward the former.</p>
<h2>Beyond Raya: the Malaysian festive calendar</h2>
<p>The same playbook applies to Chinese New Year, Deepavali, Merdeka, and year-end. Plan your festive calendar in advance so each celebration has a thoughtful, on-brand campaign rather than a last-minute scramble.</p>
<h2>Frequently asked questions</h2>
<h3>When should I start planning my Raya campaign?</h3>
<p>Begin two to three months ahead. Hero content, creator partnerships, and production all take time to do well.</p>
<h3>Do I need a big budget to compete?</h3>
<p>No. Emotional storytelling and authenticity matter more than production cost. A sincere Reel can outperform an expensive ad.</p>
<h3>Should festive content be promotional?</h3>
<p>Lead with story and emotion to earn attention, then layer in offers closer to the day. Pure discounting rarely earns shares.</p>
<h3>What is the highest-performing format?</h3>
<p>Short-form video, supported by creator partnerships and shareable visuals like Raya packets and greetings.</p>
<p>BrandKraf creates festive campaigns that Malaysians remember. Explore <a href="/portfolio/branding-creative">branding and creative</a> or <a href="/contact">plan your next campaign with us</a>.</p>$html$,
  'BrandKraf Team', 'Marketing Strategy', 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80', '2026-06-19', true
),

(
  'best-ai-marketing-tools-malaysia-2026',
  'Best AI Marketing Tools for Malaysian SMEs in 2026',
  'The AI marketing tools that actually save Malaysian small businesses time and money in 2026 — for content, ads, email, chat, and automation.',
  $html$<p>AI has moved from hype to genuinely useful in marketing. For Malaysian SMEs with small teams, the right tools act like extra staff — drafting content, answering customers, and automating busywork. But the market is crowded and confusing. Here are the categories and tools that actually deliver in 2026.</p>
<blockquote>AI will not replace marketers. But marketers using AI will replace those who do not.</blockquote>
<h2>What AI is genuinely good at</h2>
<p>Teams using AI automation report saving meaningful hours each day while improving output. The wins are concrete: drafting first versions of content, summarising data, scoring leads, personalising messages, and handling repetitive customer questions — freeing your team for strategy and relationships.</p>
<h2>CRM and email automation</h2>
<ul>
<li><strong>HubSpot (Breeze AI)</strong> — auto-generates email sequences, scores leads, and drafts copy inside one platform. Strong for businesses that want everything connected.</li>
<li><strong>ActiveCampaign</strong> — automation built for SMEs, with AI that personalises email content and triggers.</li>
</ul>
<p>If email is part of your mix, pair these with the fundamentals in our <a href="/blog/email-marketing-that-converts">email marketing guide</a>.</p>
<h2>Automation and workflows</h2>
<ul>
<li><strong>Zapier</strong> — the no-code automation heavyweight, now with AI built in. Connect your apps so data and tasks flow automatically — no developer needed.</li>
</ul>
<h2>Customer service and chat</h2>
<ul>
<li><strong>Tidio</strong> — combines live chat, AI chatbots, and automation, a strong fit for e-commerce SMEs handling high message volumes.</li>
</ul>
<p>For Malaysia specifically, pairing AI chat with WhatsApp is powerful — see our <a href="/blog/whatsapp-marketing-malaysian-businesses">WhatsApp marketing guide</a>.</p>
<h2>Content and creative</h2>
<p>AI writing and image tools can produce first drafts of captions, blog outlines, and ad variations in seconds. The key is to treat output as a <strong>starting point</strong>: a human should always edit for brand voice, accuracy, and local nuance. AI accelerates; it does not replace judgment.</p>
<h2>How to choose without wasting money</h2>
<ul>
<li><strong>Start with the bottleneck</strong> — pick the one task eating most of your time.</li>
<li><strong>Use free trials</strong> before committing to annual plans.</li>
<li><strong>Avoid tool sprawl</strong> — five overlapping tools cost more and confuse your team.</li>
<li><strong>Measure the time saved</strong> — if a tool does not free hours or lift results, drop it.</li>
</ul>
<h2>The human-in-the-loop rule</h2>
<p>The businesses winning with AI are not the ones automating everything blindly — they are the ones using AI to do more of what matters. Keep a human reviewing customer-facing output, and let AI handle the repetitive heavy lifting behind the scenes. For a broader view, read our guide to <a href="/blog/ai-marketing-for-small-businesses">AI marketing for small businesses</a>.</p>
<h2>Frequently asked questions</h2>
<h3>Are AI marketing tools worth it for a small business?</h3>
<p>Yes, if you choose based on your biggest time-drain. Start with one tool that clearly saves hours or improves results, then expand.</p>
<h3>Will AI content hurt my SEO?</h3>
<p>Not if it is genuinely helpful and human-edited. Thin, unedited AI spam can hurt you — quality and originality still win.</p>
<h3>Do I need technical skills to use these?</h3>
<p>Most modern tools are no-code with simple interfaces. Automation platforms like Zapier are built specifically for non-developers.</p>
<h3>How many tools should I use?</h3>
<p>Fewer than you think. A lean, well-integrated stack beats a pile of overlapping subscriptions.</p>
<p>BrandKraf helps Malaysian businesses put AI to work in their marketing. Explore <a href="/portfolio/ai-driven-marketing">AI-driven marketing</a> or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'AI Marketing', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80', '2026-06-20', true
),

(
  'google-business-profile-local-pack',
  'Google Business Profile: How to Rank in Malaysia''s Local Pack',
  'Your Google Business Profile is the fastest way to win local customers. Here is how to optimise it to rank in the Map Pack and turn searches into walk-ins and calls.',
  $html$<p>When someone in Malaysia searches "near me" or for a service in their city, Google shows a map with three businesses — the Local Pack. Ranking there is often more valuable than ranking #1 in regular results, because those searchers are ready to act. The best part: your Google Business Profile is free. Here is how to make it rank.</p>
<blockquote>A first-page website is good. A spot in the Map Pack is a customer already reaching for their phone to call you.</blockquote>
<h2>Claim and complete your profile</h2>
<p>Start at the source: claim and verify your Google Business Profile. Then complete <strong>every</strong> field — category, services, hours, description, attributes, and photos. A fully completed profile outranks a half-empty one, because Google trusts businesses that give searchers everything they need.</p>
<h2>NAP consistency is foundational</h2>
<p>Your <strong>Name, Address, and Phone (NAP)</strong> must be identical everywhere it appears — your website, social profiles, and directories. Inconsistent details confuse Google and hurt rankings. This is one of the most overlooked local ranking signals. For the bigger picture, read our <a href="/blog/local-seo-malaysia-guide">local SEO Malaysia guide</a>.</p>
<h2>Reviews drive rankings and trust</h2>
<p>Reviews are a major local ranking factor and the single biggest trust signal for new customers. Build a simple system to:</p>
<ul>
<li>Ask every happy customer for a review.</li>
<li>Make it easy with a direct review link.</li>
<li>Reply professionally to <em>every</em> review, positive or negative.</li>
</ul>
<p>A steady stream of recent, detailed reviews beats a pile of old ones.</p>
<h2>Post photos and updates regularly</h2>
<p>Add fresh interior, exterior, product, and team photos every month — active profiles get more engagement and rank better. Use Google Posts to share offers, events, and news. An updated profile signals to Google that your business is alive and relevant.</p>
<h2>Build local citations and links</h2>
<p>Submit your business to Malaysian directories and earn links from local blogs, news, and industry sites. These <strong>citations and local backlinks</strong> tell Google your business is established and trusted within your community — a key factor for competitive local queries.</p>
<h2>Create locally relevant content</h2>
<p>Pages and posts that mention your city, neighbourhood, and the specific services you offer strengthen local relevance. A KL aircond service should have clear pages about the areas and services it covers — not one vague "services" page.</p>
<h2>How long does it take?</h2>
<p>Initial improvements often appear within four to eight weeks. Competitive Local Pack rankings for high-volume queries usually take three to six months of consistent optimisation. Local SEO is a compounding asset — the work you do now keeps paying off.</p>
<h2>Frequently asked questions</h2>
<h3>Is Google Business Profile really free?</h3>
<p>Yes. Claiming and optimising your profile costs nothing — only your time or an agency's help to do it well.</p>
<h3>How do I get more reviews without breaking the rules?</h3>
<p>Simply ask happy customers and make it easy with a direct link. Never buy reviews or incentivise them in ways that violate Google's policies.</p>
<h3>Why am I not showing in the Map Pack?</h3>
<p>Common causes: incomplete profile, inconsistent NAP, too few reviews, or strong local competition. Fix the fundamentals first.</p>
<h3>Does my website still matter for local SEO?</h3>
<p>Yes. A fast, relevant website with local content reinforces your profile and helps you rank in both the Map Pack and regular results.</p>
<p>BrandKraf helps Malaysian businesses get found locally and turn searches into customers. <a href="/contact">Talk to us</a> or explore <a href="/pricing">our packages</a>.</p>$html$,
  'BrandKraf Team', 'SEO', 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80', '2026-06-20', true
);
