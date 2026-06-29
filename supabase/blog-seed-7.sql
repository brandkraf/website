-- BrandKraf — Blog batch 7: E-commerce Marketing cluster (10 articles). Run in Supabase SQL Editor.
-- Content is dollar-quoted ($html$...$html$). Safe to re-run. Articles link into /guides/ecommerce-marketing.

delete from public.blog_posts where slug in (
  'ecommerce-marketing-guide-malaysia',
  'how-to-start-online-store-malaysia',
  'ecommerce-platform-comparison-malaysia',
  'reduce-cart-abandonment',
  'product-photography-tips',
  'how-to-write-product-descriptions',
  'ecommerce-seo-guide',
  'get-more-customer-reviews',
  'online-sale-promotion-strategy',
  'marketplace-vs-own-website'
);

insert into public.blog_posts (slug, title, excerpt, content, author, category, featured_image, published_date, published) values

(
  'ecommerce-marketing-guide-malaysia',
  'E-commerce Marketing in Malaysia: The Complete Guide',
  'A complete e-commerce marketing guide for Malaysian sellers — traffic, conversion, retention, and the channels that actually drive online sales in 2026.',
  $html$<p>Selling online in Malaysia has never been easier to start — or harder to stand out. Between Shopee, Lazada, TikTok Shop, and your own website, the platforms are ready; the challenge is marketing. This guide lays out the full e-commerce marketing picture so you know where to focus.</p>
<blockquote>An online store without marketing is a shop in the desert. The platform is easy; the traffic is the work.</blockquote>
<h2>The three levers of e-commerce growth</h2>
<p>Every online store grows through just three levers: more <strong>traffic</strong> (visitors), better <strong>conversion</strong> (turning visitors into buyers), and higher <strong>retention</strong> (repeat purchases). Most sellers obsess over traffic and ignore the other two — where the easy wins often are.</p>
<h2>Driving traffic to your store</h2>
<p>Traffic comes from a mix of channels: paid ads (Meta, Google, and marketplace ads), organic social and content, SEO, and marketplace search. The right mix depends on your products and margins — see our <a href="/guides/paid-advertising">paid advertising guide</a> and <a href="/blog/shopee-lazada-ads-malaysia">Shopee and Lazada ads guide</a>.</p>
<h2>Converting visitors into buyers</h2>
<p>Doubling your conversion rate doubles sales without spending more on traffic. Strong product pages, clear pricing, trust signals (reviews, secure checkout), fast loading, and an easy checkout all lift conversion. Start with <a href="/blog/reduce-cart-abandonment">reducing cart abandonment</a> and <a href="/blog/conversion-rate-optimization-guide">conversion optimisation</a>.</p>
<h2>Local payment and delivery expectations</h2>
<p>Malaysian shoppers expect familiar options: FPX online banking, e-wallets, cards, and sometimes cash on delivery. Clear shipping costs, fast local delivery, and easy returns reduce hesitation. Meeting these expectations is itself a conversion tactic.</p>
<h2>Retention: the profit multiplier</h2>
<p>Acquiring a customer is expensive; keeping one is cheap. Email and WhatsApp flows, loyalty perks, and great service turn one-time buyers into repeat customers. See our guides to <a href="/blog/email-marketing-that-converts">email marketing</a> and <a href="/blog/customer-retention-loyalty-marketing">customer retention</a>.</p>
<h2>Marketplace, own store, or both?</h2>
<p>Marketplaces bring built-in traffic; your own store gives you control, data, and better margins. Most successful Malaysian sellers use both — see <a href="/blog/marketplace-vs-own-website">marketplace vs your own website</a>.</p>
<h2>Frequently asked questions</h2>
<h3>What is the best marketing channel for e-commerce?</h3>
<p>There is no single best — it depends on your product. Most stores combine paid social, marketplace ads, SEO, and email for retention.</p>
<h3>How much should I spend on e-commerce marketing?</h3>
<p>Budget against your margins and customer value. Start small, track return, and scale what is profitable — see our <a href="/blog/digital-marketing-cost-malaysia">cost guide</a>.</p>
<h3>Should I sell on Shopee/Lazada or my own website?</h3>
<p>Ideally both — marketplaces for reach, your own store for margin and data and retention.</p>
<h3>How do I compete with bigger sellers?</h3>
<p>Win on niche focus, brand, content, service, and retention — areas where small sellers can out-care big ones.</p>
<p>BrandKraf grows e-commerce brands across Malaysia. Explore our <a href="/guides/ecommerce-marketing">e-commerce marketing guide</a>, our <a href="/portfolio/paid-advertising">ads service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'how-to-start-online-store-malaysia',
  'How to Start an Online Store in Malaysia',
  'A step-by-step guide to starting an online store in Malaysia — from choosing what to sell and a platform, to payments, shipping, and your first sales.',
  $html$<p>Starting an online store in Malaysia is more accessible than ever, but the number of decisions can feel overwhelming. This step-by-step guide walks you through the essentials so you can launch with confidence and start selling.</p>
<blockquote>You do not need to get everything perfect to start. You need to start, then improve with real customers.</blockquote>
<h2>Step 1: Decide what to sell</h2>
<p>Pick products with real demand, reasonable margins, and a clear audience. Validate interest before committing big money — research what is selling, check competition, and start focused rather than trying to sell everything.</p>
<h2>Step 2: Choose where to sell</h2>
<p>You can sell on marketplaces (Shopee, Lazada, TikTok Shop), your own website, or both. Marketplaces offer instant traffic; your own store offers control and margin. Many start on a marketplace and add their own site later — see our <a href="/blog/ecommerce-platform-comparison-malaysia">platform comparison</a>.</p>
<h2>Step 3: Set up payments and shipping</h2>
<p>Malaysian shoppers expect FPX, e-wallets, and cards, and sometimes cash on delivery. Sort out reliable, clearly-priced shipping with local couriers. Smooth payment and delivery are essential — friction here loses sales.</p>
<h2>Step 4: Register your business</h2>
<p>Registering with SSM gives you legitimacy, access to business banking, and eligibility for support like the <a href="/blog/sme-digitalisation-grant-2026">SME Digitalisation Grant</a>. It is a foundational step for a serious store.</p>
<h2>Step 5: Create great product pages</h2>
<p>Your product pages do the selling. Invest in good <a href="/blog/product-photography-tips">product photos</a> and persuasive <a href="/blog/how-to-write-product-descriptions">product descriptions</a>, and add reviews and clear pricing. This is where browsers become buyers.</p>
<h2>Step 6: Get your first traffic and sales</h2>
<p>Launch by driving traffic from social media, ads, and your network. Your first sales and reviews build the momentum and social proof that make future marketing easier. Then optimise and scale what works.</p>
<h2>Frequently asked questions</h2>
<h3>Do I need to register a business to sell online in Malaysia?</h3>
<p>For a serious store, yes — SSM registration unlocks banking, credibility, and grants. You can test informally first, but register as you grow.</p>
<h3>How much does it cost to start?</h3>
<p>You can start lean on a marketplace with minimal cost, or invest more in your own branded website. Start within your means and reinvest profits.</p>
<h3>Marketplace or own website first?</h3>
<p>Many start on a marketplace for instant traffic, then build their own store for margin and control as they grow.</p>
<h3>How do I get my first customers?</h3>
<p>Drive traffic from social, ads, and your network, and gather early reviews. Momentum and social proof compound from there.</p>
<p>BrandKraf helps Malaysian sellers launch and grow online. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/website-development">website service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'ecommerce-platform-comparison-malaysia',
  'Shopify vs WooCommerce vs Marketplaces: Choosing Your Platform',
  'Shopify, WooCommerce, or marketplaces like Shopee and Lazada? Compare the options for Malaysian sellers on cost, control, traffic, and ease so you choose right.',
  $html$<p>One of the first big decisions for any online seller is where to build. Shopify, WooCommerce, and marketplaces each have real strengths and trade-offs. Here is an honest comparison for Malaysian sellers so you pick the right fit.</p>
<blockquote>There is no best platform — only the best platform for your products, skills, and stage.</blockquote>
<h2>Marketplaces (Shopee, Lazada, TikTok Shop)</h2>
<p><strong>Best for:</strong> instant traffic and quick starts. Marketplaces bring millions of ready-to-buy shoppers, so you do not have to drive all your own traffic. <strong>Trade-offs:</strong> fees and commissions, fierce price competition, little branding, and no ownership of customer data. Great to start and to supplement, but you are a tenant, not an owner.</p>
<h2>Shopify</h2>
<p><strong>Best for:</strong> sellers who want a professional own-brand store fast, without technical hassle. Shopify is hosted, easy to use, and reliable. <strong>Trade-offs:</strong> monthly fees and transaction costs, and less flexibility than fully self-hosted options. A strong choice for serious brands that want control without complexity.</p>
<h2>WooCommerce</h2>
<p><strong>Best for:</strong> maximum control and flexibility at lower software cost (it is free, built on WordPress). <strong>Trade-offs:</strong> you handle hosting, maintenance, and security yourself, so it needs more technical comfort or a developer. Powerful and economical, but more hands-on.</p>
<h2>How to choose</h2>
<ul><li><strong>Just starting / want traffic now?</strong> Begin on a marketplace.</li><li><strong>Want an easy, professional own store?</strong> Shopify.</li><li><strong>Want control and have technical help?</strong> WooCommerce.</li><li><strong>Serious about growth?</strong> Use a marketplace AND your own store.</li></ul>
<h2>Why your own store matters eventually</h2>
<p>Marketplaces are great for reach, but your own store gives you better margins, customer data, branding, and retention. Most growing brands run both — capturing marketplace traffic while building an owned asset. See <a href="/blog/marketplace-vs-own-website">marketplace vs your own website</a>.</p>
<h2>Frequently asked questions</h2>
<h3>Is Shopify worth the monthly fee in Malaysia?</h3>
<p>For many brands, yes — the ease, reliability, and professional storefront save time and lift conversions. Weigh it against your volume and margins.</p>
<h3>Is WooCommerce really free?</h3>
<p>The plugin is free, but you pay for hosting, a domain, and possibly developer help. Lower software cost, more responsibility.</p>
<h3>Can I use a marketplace and my own website together?</h3>
<p>Yes, and most successful sellers do — marketplaces for reach, own store for margin, data, and retention.</p>
<h3>Which is best for a beginner?</h3>
<p>A marketplace for instant traffic, or Shopify for an easy own-brand store. WooCommerce suits those wanting control and comfortable with tech.</p>
<p>BrandKraf builds and grows stores on every platform. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/website-development">website service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'reduce-cart-abandonment',
  'How to Reduce Cart Abandonment and Recover Lost Sales',
  'Most online shoppers add to cart and leave. Learn why cart abandonment happens and the practical fixes — from checkout flow to recovery emails — that win sales back.',
  $html$<p>Roughly 7 in 10 online shoppers add items to their cart and never complete the purchase. That is a huge amount of revenue sitting one step from the finish line. The good news: cart abandonment is fixable. Here is how to recover those lost sales.</p>
<blockquote>An abandoned cart is not a lost sale — it is a warm buyer who got interrupted. Your job is to remove the friction and follow up.</blockquote>
<h2>Why shoppers abandon carts</h2>
<p>The biggest culprits are unexpected costs (shipping, fees), a slow or complicated checkout, being forced to create an account, limited payment options, and simple distraction. Most are friction problems you can fix.</p>
<h2>Show all costs upfront</h2>
<p>Surprise shipping or fees at the final step is the number one cause of abandonment. Show shipping costs early, offer free-shipping thresholds where possible, and avoid last-minute surprises. Honesty upfront keeps buyers moving forward.</p>
<h2>Simplify your checkout</h2>
<p>Every extra field and step loses buyers. Offer guest checkout, minimise form fields, show a progress indicator, and make it mobile-friendly. A fast, simple checkout is one of the highest-ROI fixes in e-commerce.</p>
<h2>Offer the right payment options</h2>
<p>Malaysian shoppers expect FPX, e-wallets, and cards, sometimes cash on delivery. Missing a preferred option means a lost sale at the final step. Cover the common local methods.</p>
<h2>Recover with abandoned-cart emails and messages</h2>
<p>Automated reminders are remarkably effective. A timely email or WhatsApp message — sometimes with a gentle incentive — recovers a meaningful share of abandoned carts. This is one of the best automation flows you can set up; see our <a href="/blog/abandoned-cart-email-strategy">abandoned cart email guide</a>.</p>
<h2>Build trust at checkout</h2>
<p>Hesitation often comes from doubt. Display reviews, security badges, clear return policies, and contact options near the checkout. Reassurance at the decision moment nudges hesitant buyers to complete. Pair this with broader <a href="/blog/conversion-rate-optimization-guide">conversion optimisation</a>.</p>
<h2>Frequently asked questions</h2>
<h3>What is a normal cart abandonment rate?</h3>
<p>Around 70% on average, though it varies. The point is not to hit zero but to recover as many as you reasonably can.</p>
<h3>Do abandoned-cart emails really work?</h3>
<p>Yes — they are among the highest-converting automated emails because they reach a warm buyer who already wanted the product.</p>
<h3>Should I offer a discount to recover carts?</h3>
<p>Sometimes — a small incentive helps, but use it carefully so shoppers do not learn to abandon on purpose. Often a simple reminder is enough.</p>
<h3>What is the single biggest fix?</h3>
<p>Removing checkout friction and surprise costs. Show all costs early and make checkout fast and simple.</p>
<p>BrandKraf optimises stores to convert more browsers into buyers. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/website-development">website service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'product-photography-tips',
  'Product Photography Tips (Using Just Your Phone)',
  'Great product photos sell — and you do not need a pro camera. Learn lighting, backgrounds, angles, and editing tips to shoot scroll-stopping product images on your phone.',
  $html$<p>In e-commerce, your photos are your product — customers cannot touch or try, so the images do all the convincing. The good news: you can shoot professional-looking product photos with just your phone. Here is how.</p>
<blockquote>Online, people do not buy your product — they buy your photo of it. Make the photo worth buying.</blockquote>
<h2>Light is everything</h2>
<p>Soft, even lighting is the difference between amateur and professional. Natural light near a large window works beautifully and costs nothing. Avoid harsh direct sun and mixed lighting. A simple diffuser or a budget softbox takes it further — but start with a window.</p>
<h2>Keep backgrounds clean</h2>
<p>A clean, uncluttered background keeps attention on the product. A plain white or neutral backdrop (even a sheet of paper or poster board) looks professional and is marketplace-friendly. Consistency across your catalogue also strengthens your brand.</p>
<h2>Shoot multiple angles and details</h2>
<p>Customers want to see the product fully. Capture front, back, sides, and close-ups of important details and textures. The more confidently a shopper can picture the item, the more likely they buy — and the fewer returns you get.</p>
<h2>Show scale and context</h2>
<p>Include shots that show size and real-world use — the product in hand, being worn, or in its setting. Lifestyle images help shoppers imagine owning it and often convert better than plain catalogue shots alone.</p>
<h2>Edit for accuracy, not deception</h2>
<p>Light editing — straightening, brightening, and colour-correcting — makes photos pop. But keep the product accurate; misleading photos lead to returns and bad reviews. Free phone apps handle most edits well.</p>
<h2>Stay consistent</h2>
<p>A consistent style — same lighting, background, and framing — makes your store look professional and trustworthy. Set a simple template and reuse it for every product. This pairs perfectly with <a href="/blog/how-to-batch-create-content">batching</a> your shoots.</p>
<h2>Frequently asked questions</h2>
<h3>Do I need a professional camera?</h3>
<p>No. Modern phones shoot excellent product photos. Invest in lighting and a clean background before a camera.</p>
<h3>What is the best background for product photos?</h3>
<p>Clean white or neutral for catalogue shots; lifestyle settings for context. Consistency matters most.</p>
<h3>How many photos per product?</h3>
<p>Several — multiple angles, close-ups of details, and at least one lifestyle or in-use shot.</p>
<h3>What editing apps should I use?</h3>
<p>Free phone editing apps are plenty for brightness, colour, and cropping. Keep edits accurate to the real product.</p>
<p>BrandKraf creates product and brand visuals that sell. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/ugc-content-creation">content service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'how-to-write-product-descriptions',
  'How to Write Product Descriptions That Sell',
  'A good product description does more than list features — it sells. Learn how to write descriptions that highlight benefits, build desire, and convert browsers to buyers.',
  $html$<p>Most product descriptions are boring lists of specs that no one reads. A great one does something different: it sells. It turns a curious browser into a confident buyer. Here is how to write product descriptions that actually convert.</p>
<blockquote>Features tell. Benefits sell. Stories make people buy.</blockquote>
<h2>Know who you are writing for</h2>
<p>Before writing, picture your ideal customer and what they care about. A description that speaks directly to their desires and concerns connects far better than generic copy. Write to one person, not "everyone".</p>
<h2>Lead with benefits, not just features</h2>
<p>Do not just say what the product is — say what it does for the customer. "Waterproof" is a feature; "stays dry through any downpour" is a benefit. Translate every spec into the value it delivers. This is core <a href="/blog/marketing-copywriting-that-sells">copywriting</a>.</p>
<h2>Make it scannable</h2>
<p>Shoppers skim. Use short paragraphs, bullet points for key features, and clear formatting so people can absorb the essentials fast. A wall of text gets skipped; a scannable layout gets read.</p>
<h2>Use sensory and specific language</h2>
<p>Specific, vivid words build desire and trust. Instead of "high quality", describe the soft feel, the rich colour, the precise dimensions. Concrete details make the product real in the shopper mind and reduce uncertainty.</p>
<h2>Answer objections and questions</h2>
<p>Address the doubts that stop a purchase — sizing, materials, compatibility, care, delivery. Answering questions inside the description removes friction and reduces returns and support messages.</p>
<h2>Include keywords for search</h2>
<p>Naturally include the words shoppers search for — both on marketplaces and Google. Good keywords help your products get found without sacrificing readability. See our <a href="/blog/ecommerce-seo-guide">e-commerce SEO guide</a>.</p>
<h2>Frequently asked questions</h2>
<h3>How long should a product description be?</h3>
<p>Long enough to sell and answer key questions, short enough to stay scannable. Lead with benefits; add detail below.</p>
<h3>Should I use the manufacturer description?</h3>
<p>Avoid copying it — duplicate descriptions hurt SEO and rarely sell well. Write your own, benefit-focused version.</p>
<h3>Do keywords really matter in descriptions?</h3>
<p>Yes, for both marketplace and Google search. Include them naturally without keyword-stuffing.</p>
<h3>What is the biggest mistake?</h3>
<p>Listing only features with no benefits, and writing generic copy that could describe any product.</p>
<p>BrandKraf writes copy that converts for Malaysian brands. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/social-media-management">content service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'ecommerce-seo-guide',
  'E-commerce SEO: Get Your Products Found on Google',
  'E-commerce SEO brings free, high-intent traffic to your store. Learn how to optimise product and category pages to rank on Google and capture buyers searching to purchase.',
  $html$<p>Paid ads stop the moment you stop paying. SEO keeps working — bringing free, high-intent shoppers to your store month after month. For e-commerce, ranking on Google for the right product searches is one of the most valuable long-term assets you can build.</p>
<blockquote>Someone searching "buy X online Malaysia" is ready to spend. E-commerce SEO puts you in front of them for free.</blockquote>
<h2>Target buyer-intent keywords</h2>
<p>Focus on keywords that signal purchase intent — product names, "buy", "price", "online", and your category terms. These searchers are close to buying, which makes ranking for them far more valuable than generic traffic. Build on our <a href="/blog/seo-basics-rank-on-google">SEO basics guide</a>.</p>
<h2>Optimise product pages</h2>
<p>Each product page should have a keyword-rich, unique title and description, original product copy (not copied from the manufacturer), descriptive image alt text, and clear specifications. Unique, helpful pages rank; thin or duplicated ones do not.</p>
<h2>Do not neglect category pages</h2>
<p>Category pages often rank for broad, high-volume terms like "men running shoes". Give them a short, useful intro paragraph with relevant keywords, and structure them clearly. They are frequently your biggest SEO opportunity.</p>
<h2>Make your store fast and mobile-friendly</h2>
<p>Speed and mobile experience are ranking factors and conversion factors. Compress images, choose fast hosting, and ensure everything works smoothly on phones — where most Malaysian shopping happens.</p>
<h2>Add structured data and reviews</h2>
<p>Product schema markup can show price, availability, and star ratings directly in search results, boosting clicks. Genuine customer reviews add fresh content and trust signals. Both help you stand out on the results page.</p>
<h2>Earn links and build content</h2>
<p>Links and helpful content build authority that lifts your whole store. Blog content (buying guides, how-tos) attracts links and ranks for research-stage searches that feed your product pages. SEO compounds over time — start now.</p>
<h2>Frequently asked questions</h2>
<h3>How long does e-commerce SEO take?</h3>
<p>Typically months to build momentum, but it compounds into durable, free traffic — unlike ads that stop when you do.</p>
<h3>Should I write unique product descriptions for SEO?</h3>
<p>Yes. Duplicate manufacturer copy hurts rankings. Original, benefit-led descriptions rank and convert better.</p>
<h3>Do category pages matter for SEO?</h3>
<p>Very much — they often rank for high-volume terms. Add a useful keyword-rich intro and clear structure.</p>
<h3>What is product schema?</h3>
<p>Structured data that lets Google show price, stock, and ratings in results, increasing visibility and clicks.</p>
<p>BrandKraf helps Malaysian stores rank and sell. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/guides/seo">SEO guide</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'get-more-customer-reviews',
  'How to Get More Customer Reviews (and Why They Sell)',
  'Reviews are the most persuasive marketing you do not write. Learn how to get more customer reviews ethically and use them to boost trust, conversions, and SEO.',
  $html$<p>Before buying, most people check reviews — they trust other customers far more than your marketing. Reviews are powerful, free social proof that lifts conversions, rankings, and trust. Here is how to get more of them, the right way.</p>
<blockquote>Your customers selling for you is more persuasive than anything you could ever say about yourself.</blockquote>
<h2>Why reviews matter so much</h2>
<p>Reviews reduce the risk shoppers feel, lift conversion rates, improve local and product SEO, and provide fresh, trusted content. A product or business with strong reviews simply sells more — and a lack of reviews quietly costs you sales.</p>
<h2>Just ask — at the right moment</h2>
<p>The simplest way to get reviews is to ask. Time it for when satisfaction is highest — after delivery, after a positive experience, or after repeat purchase. A polite, well-timed request gets a surprising number of responses.</p>
<h2>Make it effortless</h2>
<p>Every extra step loses reviews. Send a direct link, keep the process to a few taps, and tell people roughly how long it takes. The easier you make it, the more reviews you get.</p>
<h2>Automate the request</h2>
<p>Set up an automated email or WhatsApp message after purchase or delivery to request a review. Automation means you never forget and it scales effortlessly — see our <a href="/blog/email-marketing-automation-guide">email automation guide</a>.</p>
<h2>Respond to every review</h2>
<p>Replying — to both positive and negative reviews — shows you care and builds trust with everyone reading. Handle criticism calmly and helpfully; a well-handled negative review can impress more than a glowing one. See <a href="/blog/handling-negative-comments-social-media">handling negative comments</a>.</p>
<h2>Showcase your reviews</h2>
<p>Do not let reviews sit unseen. Feature them on product pages, your website, and social media. Turning reviews into content multiplies their selling power and reinforces trust at the decision moment.</p>
<h2>Frequently asked questions</h2>
<h3>How do I ask for reviews without being annoying?</h3>
<p>Ask once, politely, at a high-satisfaction moment, and make it easy. A single well-timed request rarely annoys.</p>
<h3>Can I offer incentives for reviews?</h3>
<p>Be careful — some platforms prohibit incentivised reviews, and they must always be honest. Often a simple ask is enough.</p>
<h3>How do I handle a bad review?</h3>
<p>Respond calmly, acknowledge the issue, and offer to make it right. Everyone watching judges your response more than the complaint.</p>
<h3>Where should reviews appear?</h3>
<p>On product pages, your Google Business Profile, and social media — wherever shoppers decide whether to trust you.</p>
<p>BrandKraf helps brands build trust and reputation. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/social-media-management">social media service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'online-sale-promotion-strategy',
  'How to Run a Profitable Online Sale or Promotion',
  'Sales drive revenue — or erode your margins. Learn how to plan and run online promotions that boost sales without training customers to only buy on discount.',
  $html$<p>Done right, a sale or promotion creates a surge of revenue and new customers. Done wrong, it trains customers to wait for discounts and quietly destroys your margins. Here is how to run promotions that actually grow your business.</p>
<blockquote>A good promotion creates urgency and new customers. A bad one just gives away margin you would have earned anyway.</blockquote>
<h2>Start with a clear goal</h2>
<p>Know why you are running the sale: clear old stock, acquire new customers, hit a revenue target, or reward loyal buyers. The goal shapes the offer, the audience, and how you measure success. A sale without a goal is just lost margin.</p>
<h2>Choose the right offer</h2>
<p>Different offers serve different goals — percentage off, bundles, free shipping, buy-one-get-one, or gifts with purchase. Bundles and free shipping often protect margin better than deep percentage discounts. Pick the mechanic that fits your goal and economics.</p>
<h2>Create real urgency</h2>
<p>Urgency drives action. Time-limited offers, countdowns, and limited quantities push hesitant buyers to act now. Malaysia mega-sale dates (9.9, 11.11, 12.12) and festive seasons come with built-in urgency — plan around them; see our <a href="/blog/shopee-lazada-ads-malaysia">marketplace ads guide</a>.</p>
<h2>Promote across every channel</h2>
<p>A sale only works if people know. Promote it through email, social media, ads, your website banners, and WhatsApp. Build anticipation before, push hard during, and follow up after. Multi-channel promotion maximises reach.</p>
<h2>Prepare your store and stock</h2>
<p>A traffic surge exposes weaknesses. Make sure your stock, site speed, checkout, and fulfilment can handle the volume. Nothing wastes a promotion like a crashed site or sold-out bestseller with no plan.</p>
<h2>Protect your margins and brand</h2>
<p>Run sales with intention, not constantly — frequent discounting erodes both margin and brand value, and teaches customers never to pay full price. Use promotions strategically, and lean on value and loyalty the rest of the time. See <a href="/blog/customer-retention-loyalty-marketing">customer retention</a>.</p>
<h2>Frequently asked questions</h2>
<h3>How often should I run sales?</h3>
<p>Sparingly and strategically. Constant discounting erodes margins and trains customers to wait. Tie sales to clear goals and key dates.</p>
<h3>What type of offer is best?</h3>
<p>It depends on your goal — bundles and free shipping protect margin; percentage discounts drive urgency. Match the offer to the objective.</p>
<h3>How do I promote a sale?</h3>
<p>Across email, social, ads, WhatsApp, and your site — with anticipation before, urgency during, and follow-up after.</p>
<h3>How do I keep a sale profitable?</h3>
<p>Set a goal, choose margin-friendly offers, prepare stock and fulfilment, and avoid over-discounting. Measure the real profit, not just revenue.</p>
<p>BrandKraf plans and runs promotions that grow Malaysian brands. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/paid-advertising">ads service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
),

(
  'marketplace-vs-own-website',
  'Marketplace vs Your Own Website: Where Should You Sell?',
  'Shopee and Lazada, or your own online store? Compare reach, margins, control, and data so you can decide where to sell — and why most brands eventually do both.',
  $html$<p>Should you sell on marketplaces like Shopee and Lazada, or build your own website? It is one of the most common questions Malaysian sellers face. The honest answer for most growing brands is "both" — but understanding the trade-offs helps you sequence it right.</p>
<blockquote>On a marketplace you rent the audience. On your own store you own it. Smart brands do both — and migrate value to what they own.</blockquote>
<h2>The case for marketplaces</h2>
<p>Marketplaces bring instant, massive traffic — millions of shoppers already there and ready to buy. They are easy to start, trusted by buyers, and great for discovery. For new sellers, they are often the fastest path to first sales without spending on traffic.</p>
<h2>The downsides of marketplaces</h2>
<p>You pay fees and commissions, compete fiercely on price, cannot build much brand, and — crucially — do not own the customer relationship or data. You are a tenant: the platform sets the rules and keeps the customer.</p>
<h2>The case for your own website</h2>
<p>Your own store gives you better margins (no marketplace commission), full control of branding and experience, and ownership of customer data for email, retargeting, and retention. It is an asset you build equity in over time.</p>
<h2>The downsides of your own store</h2>
<p>You have to drive your own traffic through ads, SEO, social, and content — there is no built-in audience. It takes more effort and marketing skill, but the payoff is ownership and margin.</p>
<h2>Why most brands use both</h2>
<p>The winning play for many: use marketplaces for reach and discovery, while building your own store for margin, data, and retention — and gradually move repeat customers to your owned channels. You get the best of both worlds.</p>
<h2>How to sequence it</h2>
<p>If you are starting out and need sales fast, begin on a marketplace. As you grow, build your own store and use email and WhatsApp to retain customers there. See our <a href="/blog/ecommerce-platform-comparison-malaysia">platform comparison</a> and <a href="/blog/email-marketing-automation-guide">email automation guide</a>.</p>
<h2>Frequently asked questions</h2>
<h3>Should beginners start on a marketplace?</h3>
<p>Often yes — instant traffic and trust make first sales easier while you learn. Add your own store as you grow.</p>
<h3>Why build my own store if marketplaces have more traffic?</h3>
<p>For margin, branding, and owning customer data and relationships — the foundation of long-term, profitable growth.</p>
<h3>Can I run both at the same time?</h3>
<p>Yes, and most growing brands do. Use marketplaces for reach and your store for margin and retention.</p>
<h3>How do I move marketplace customers to my own store?</h3>
<p>Encourage repeat buyers to your site with better loyalty perks, and capture emails and WhatsApp opt-ins to market to them directly.</p>
<p>BrandKraf helps Malaysian brands win on every channel. Explore our <a href="/guides/ecommerce-marketing">e-commerce guide</a>, our <a href="/portfolio/website-development">website service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'E-commerce', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80', '2026-06-25', true
);
