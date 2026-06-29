-- BrandKraf — Blog batch 9: Video Marketing cluster (10 articles). Run in Supabase SQL Editor.
-- Content is dollar-quoted ($html$...$html$). Safe to re-run. Articles link into /guides/video-marketing.

delete from public.blog_posts where slug in (
  'video-marketing-strategy',
  'how-to-make-product-videos',
  'explainer-video-guide',
  'video-ads-that-convert',
  'testimonial-video-guide',
  'live-streaming-for-business',
  'video-editing-tips-beginners',
  'video-seo-youtube',
  'video-scripting-guide',
  'corporate-brand-video-guide'
);

insert into public.blog_posts (slug, title, excerpt, content, author, category, featured_image, published_date, published) values

(
  'video-marketing-strategy',
  'Video Marketing Strategy: A Complete Guide for Businesses',
  'Video is the most engaging format online. Learn how to build a video marketing strategy — goals, types of video, platforms, and turning views into customers.',
  $html$<p>Video has become the dominant format across every platform because it holds attention and builds trust like nothing else. But posting random videos is not a strategy. This guide shows you how to build a video marketing approach that actually drives business results.</p>
<blockquote>Video is not a content type you add on top. In 2026, it is the centre of how brands get discovered and trusted.</blockquote>
<h2>Why video matters more than ever</h2>
<p>Video earns more reach, engagement, and trust than any other format. People remember video, platforms prioritise it, and it lets you show personality and proof in ways text and images cannot. If you do one thing in your marketing, get good at video.</p>
<h2>Start with goals, not cameras</h2>
<p>Different videos serve different goals — awareness, education, conversion, or retention. Decide what each video is for before you film. A video with a clear job (and a clear next step) beats a beautiful video with no purpose.</p>
<h2>Know the main video types</h2>
<ul><li><strong>Short-form social</strong> — reach and discovery (see our <a href="/blog/short-form-video-marketing">short-form video guide</a>).</li><li><strong>Product videos</strong> — show your offering in action.</li><li><strong>Explainer videos</strong> — clarify what you do quickly.</li><li><strong>Testimonials</strong> — social proof that sells.</li><li><strong>Video ads</strong> — paid reach with a conversion goal.</li></ul>
<h2>Match video to platform</h2>
<p>Vertical short-form for TikTok, Reels, and Shorts; longer, searchable video for YouTube; native video for Facebook; polished pieces for your website. Repurpose one shoot across platforms to maximise mileage — see <a href="/blog/how-to-repurpose-content">repurposing</a>.</p>
<h2>You do not need a big budget</h2>
<p>Authentic phone-shot video often outperforms expensive productions on social. Invest in lighting, audio, and a clear message before fancy gear — see <a href="/blog/how-to-film-content-with-your-phone">how to film with your phone</a>. Start simple and improve.</p>
<h2>Turn views into customers</h2>
<p>Reach is not the goal — results are. Every video should guide viewers to a next step: follow, visit, buy, or enquire. Pair video with the rest of your funnel so attention converts into revenue.</p>
<h2>Frequently asked questions</h2>
<h3>What type of video should I start with?</h3>
<p>Short-form social video for reach, plus a simple product or explainer video. Start with whatever directly supports your top goal.</p>
<h3>Do I need professional equipment?</h3>
<p>No. A modern phone with good lighting and clear audio is enough to start. Message and clarity matter more than gear.</p>
<h3>How often should I post video?</h3>
<p>Consistently. For social, regular short video drives the most growth; for YouTube, weekly is a strong cadence.</p>
<h3>How do I measure video success?</h3>
<p>Tie it to goals — reach and watch time for awareness, clicks and conversions for sales. See our <a href="/guides/marketing-analytics">analytics guides</a>.</p>
<p>BrandKraf produces video that grows Malaysian brands. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/ugc-content-creation">content service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'how-to-make-product-videos',
  'How to Make Product Videos That Sell',
  'Product videos let customers see your product in action and buy with confidence. Learn how to plan, shoot, and use product videos that boost conversions.',
  $html$<p>Online, customers cannot touch or try your product — so a great product video does the next best thing. It shows the product in action, answers questions, and builds the confidence to buy. Here is how to make product videos that actually sell.</p>
<blockquote>A photo shows what a product looks like. A video shows what it is like to own it.</blockquote>
<h2>Why product videos convert</h2>
<p>Product videos reduce uncertainty — the biggest barrier to online purchase. Seeing size, texture, function, and real use answers questions a photo cannot, which lifts conversions and reduces returns. For e-commerce, they are one of the highest-impact assets you can create.</p>
<h2>Show the product solving a problem</h2>
<p>The best product videos do not just show features — they show the product making life better. Demonstrate the problem it solves and the result it delivers. People buy outcomes, so lead with the transformation, not the spec sheet.</p>
<h2>Cover the key angles and details</h2>
<p>Show the product from multiple angles, highlight important features and textures up close, and demonstrate it in real use. Anticipate the questions a shopper would ask and answer them visually. Confidence comes from seeing enough.</p>
<h2>Keep it short and focused</h2>
<p>Attention is short, especially on social. Get to the point quickly, lead with a strong hook, and keep most product videos tight. You can make a longer detailed version for your product page and short cuts for social — see <a href="/blog/how-to-repurpose-content">repurposing</a>.</p>
<h2>Film it well (with your phone)</h2>
<p>Good lighting, clean background, steady framing, and clear audio make product videos look professional — and your phone is enough. See <a href="/blog/how-to-film-content-with-your-phone">how to film with your phone</a> and <a href="/blog/product-photography-tips">product photography tips</a>.</p>
<h2>Use them everywhere</h2>
<p>Put product videos on your product pages, in ads, on social, and in marketplaces. A single product video can lift conversions on your store and double as ad creative and social content. Maximise its reach.</p>
<h2>Frequently asked questions</h2>
<h3>How long should a product video be?</h3>
<p>Short for social (often under 30 seconds with a strong hook); a slightly longer, detailed version works on product pages.</p>
<h3>Do product videos really increase sales?</h3>
<p>Yes — they reduce uncertainty, which lifts conversions and lowers returns. They are among the highest-ROI e-commerce assets.</p>
<h3>Can I film product videos myself?</h3>
<p>Absolutely. With good lighting, a clean background, and your phone, you can produce effective product videos in-house.</p>
<h3>Where should I use product videos?</h3>
<p>Product pages, ads, social media, and marketplace listings. Repurpose one shoot across all of them.</p>
<p>BrandKraf creates product videos that convert for Malaysian sellers. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/ugc-content-creation">content service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'explainer-video-guide',
  'Explainer Videos: How to Explain Your Product in 60 Seconds',
  'If people do not get what you do, they do not buy. Learn how to make an explainer video that communicates your value clearly and quickly — and converts.',
  $html$<p>Confused people do not buy. If a visitor cannot quickly understand what you offer and why it matters, they leave. An explainer video solves this — communicating your value in under a minute. Here is how to make one that converts.</p>
<blockquote>If you cannot explain it simply, people will not buy it. An explainer video is clarity, packaged.</blockquote>
<h2>What an explainer video does</h2>
<p>An explainer video quickly communicates what you do, who it is for, and why it matters — usually in 30 to 90 seconds. It is perfect for homepages, product pages, and ads where you have seconds to make someone understand and care. Clarity is its whole job.</p>
<h2>Follow the problem-solution-result structure</h2>
<p>The classic explainer formula: open with the <strong>problem</strong> your audience feels, present your <strong>solution</strong>, and show the <strong>result</strong> they get. This structure mirrors how people think and makes your value instantly clear and relatable.</p>
<h2>Lead with the problem, not your features</h2>
<p>Start with the pain your audience recognises, not a list of what you do. When viewers see their own problem in the first seconds, they lean in. Only then introduce your solution as the answer. This is the same hook discipline that wins on social.</p>
<h2>Keep it short and simple</h2>
<p>Resist cramming in everything. A great explainer covers one core message clearly rather than ten features vaguely. Use plain language, avoid jargon, and respect the viewer time. Shorter and clearer almost always wins.</p>
<h2>Make the style match your brand</h2>
<p>Explainers can be animated, live-action, screen-recorded, or a mix. Choose what fits your brand and budget — animation suits abstract or software products; live-action suits physical products and personal brands. Either works if the message is clear.</p>
<h2>End with a clear call to action</h2>
<p>An explainer should always tell viewers what to do next — sign up, buy, book, or learn more. You have earned their understanding; now give them an easy next step. Place the video where decisions happen, like your homepage and product pages.</p>
<h2>Frequently asked questions</h2>
<h3>How long should an explainer video be?</h3>
<p>Usually 30 to 90 seconds. Long enough to explain clearly, short enough to hold attention. Shorter is better if you can.</p>
<h3>Animated or live-action?</h3>
<p>Both work. Animation suits software and abstract ideas; live-action suits physical products and personal connection. Choose what fits your brand and budget.</p>
<h3>Where should I put my explainer video?</h3>
<p>On your homepage, key product or service pages, and in ads — anywhere you need to quickly make people understand your value.</p>
<h3>Do I need a professional to make one?</h3>
<p>Not always — simple explainers can be made with affordable tools. For a polished homepage video, professional help can be worth it.</p>
<p>BrandKraf makes explainer videos that clarify and convert. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/ugc-content-creation">content service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'video-ads-that-convert',
  'How to Make Video Ads That Convert',
  'Video ads grab attention better than any other format — if they are built right. Learn the structure, hooks, and tactics that make paid video ads actually convert.',
  $html$<p>Video is the most powerful ad format because it grabs attention and conveys emotion fast. But a video ad is not the same as organic content — it has one job: drive a profitable action. Here is how to make video ads that convert, not just entertain.</p>
<blockquote>An organic video earns attention. An ad has to earn attention AND a result — with the clock and your budget running.</blockquote>
<h2>Hook in the first 3 seconds</h2>
<p>Ad viewers are even quicker to skip than organic viewers. Your first three seconds must stop the scroll — lead with the problem, a bold visual, or an irresistible promise. If the hook fails, your ad spend is wasted. See our <a href="/blog/how-to-write-hooks-that-stop-the-scroll">hooks guide</a>.</p>
<h2>Structure for conversion</h2>
<p>A reliable video ad structure: <strong>Hook</strong> (stop the scroll) → <strong>Problem</strong> (agitate the pain) → <strong>Solution</strong> (your product) → <strong>Proof</strong> (results, reviews) → <strong>Call to action</strong> (what to do now). This guides viewers from attention to action.</p>
<h2>Make it feel native</h2>
<p>On social, ads that look like ads get skipped. The best-performing video ads feel like native content — authentic, fast, and platform-appropriate. UGC-style ads in particular often outperform polished productions; see our <a href="/blog/what-is-ugc-why-your-brand-needs-it">UGC guide</a>.</p>
<h2>Design for sound-off viewing</h2>
<p>Most people watch ads on mute, so add captions and on-screen text, and make the visuals tell the story without audio. An ad that only works with sound loses most of its audience instantly.</p>
<h2>One clear message and CTA</h2>
<p>Do not cram multiple messages into one ad. Focus on one core benefit and one clear call to action. Confused viewers do not convert; a single, clear ask does. Keep it tight and direct.</p>
<h2>Test and optimise</h2>
<p>The best video ad is found, not guessed. Run several variations of hooks and angles, see what converts, and put budget behind winners. Combine this with the discipline in our <a href="/blog/how-to-improve-roas">ROAS guide</a> and broader <a href="/guides/paid-advertising">paid advertising</a> strategy.</p>
<h2>Frequently asked questions</h2>
<h3>How long should a video ad be?</h3>
<p>Often short — 15 to 30 seconds for social — but it depends on the platform and goal. Lead with a strong hook regardless of length.</p>
<h3>Do polished ads or UGC-style ads work better?</h3>
<p>UGC-style, native-feeling ads frequently outperform polished productions on social because they feel authentic and less like ads.</p>
<h3>Why is my video ad not converting?</h3>
<p>Usually a weak hook, an unclear message, no captions for muted viewers, or a vague call to action. Fix those first.</p>
<h3>How many ad variations should I test?</h3>
<p>Several — test different hooks and angles, then scale the winners. Testing is how you find profitable creative.</p>
<p>BrandKraf creates and runs video ads that convert. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/paid-advertising">ads service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'testimonial-video-guide',
  'Testimonial Videos: Turn Happy Customers Into Your Best Sales Tool',
  'Nothing sells like a real customer vouching for you. Learn how to capture testimonial videos that build trust and turn prospects into buyers.',
  $html$<p>You can say your product is great, but it means far more when a real customer says it. Testimonial videos are among the most persuasive marketing assets you can own — authentic proof that builds trust and closes sales. Here is how to capture and use them.</p>
<blockquote>One genuine customer saying "this worked for me" outsells a hundred of your own claims.</blockquote>
<h2>Why testimonial videos are so powerful</h2>
<p>People trust other customers far more than brands. A video testimonial combines that trust with the emotion and authenticity of seeing a real person — making it more convincing than written reviews. It directly reduces the risk a prospect feels before buying.</p>
<h2>Ask the right customers</h2>
<p>The best testimonials come from happy customers with relatable stories and clear results. Reach out to your most satisfied buyers — especially those who match your target audience — and make it easy and low-pressure for them to participate.</p>
<h2>Guide them with good questions</h2>
<p>Do not just say "tell us what you think". Guide them: What problem were you facing before? Why did you choose us? What result did you get? Would you recommend us, and to whom? Good questions draw out a story that sells.</p>
<h2>Keep it authentic, not scripted</h2>
<p>Over-scripted testimonials feel fake and lose their power. Let customers speak in their own words — minor imperfections actually boost authenticity and trust. Real beats polished every time with testimonials.</p>
<h2>Make it easy to capture</h2>
<p>Customers can record on their own phones, or you can film a quick session. Even short, simple clips work well. The easier you make it, the more testimonials you collect — and quantity of genuine proof matters.</p>
<h2>Use them where decisions happen</h2>
<p>Place testimonial videos on your homepage, product and service pages, in ads, and across social. Position them near the point of decision — beside your offer or checkout — to reassure hesitant buyers. This is video-powered <a href="/blog/get-more-customer-reviews">social proof</a>.</p>
<h2>Frequently asked questions</h2>
<h3>How do I get customers to record testimonials?</h3>
<p>Ask your happiest customers, make it easy (their own phone is fine), and guide them with a few questions. Many are glad to help.</p>
<h3>Should testimonials be scripted?</h3>
<p>No — guide them with questions but let them speak naturally. Authentic, unscripted testimonials are far more convincing.</p>
<h3>How long should a testimonial video be?</h3>
<p>Short and punchy — often under a minute. You can also cut longer interviews into short clips for ads and social.</p>
<h3>Where should I use testimonial videos?</h3>
<p>Homepage, product pages, ads, and social — especially near your offer or checkout to reassure buyers at the decision point.</p>
<p>BrandKraf captures testimonials and UGC that build trust. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/ugc-content-creation">UGC service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'live-streaming-for-business',
  'Live Streaming for Business: How to Sell and Engage Live',
  'Live streaming creates real-time connection and urgency that recorded content cannot. Learn how businesses use live video to engage audiences and drive live sales.',
  $html$<p>Live streaming has exploded as a way to connect with audiences in real time and sell directly — especially in Malaysia, where live commerce is booming. Going live builds authenticity, urgency, and engagement that recorded content simply cannot match. Here is how to use it.</p>
<blockquote>Recorded video talks at people. Live video talks with them — and that real-time connection is what drives live sales.</blockquote>
<h2>Why live works</h2>
<p>Live video feels authentic and immediate. Viewers can ask questions and get instant answers, the unedited format builds trust, and limited-time live offers create urgency that drives action. Platforms also tend to boost live content, expanding your reach.</p>
<h2>Live commerce is booming</h2>
<p>Selling live — demonstrating products and taking orders in real time — has become huge, especially on TikTok and Facebook in Malaysia. It combines entertainment, trust, and urgency into a powerful sales channel. See our <a href="/blog/tiktok-live-selling-guide">TikTok live selling guide</a>.</p>
<h2>Plan before you go live</h2>
<p>"Live" does not mean "unprepared". Have a rough plan: what you will cover, products to feature, offers to make, and a loose flow. Promote the session in advance so people show up. Preparation is what separates a productive live from a rambling one.</p>
<h2>Engage your viewers</h2>
<p>The magic of live is interaction. Greet viewers by name, answer questions in real time, run polls and giveaways, and respond to comments. The more you engage, the longer people stay and the more the platform promotes you.</p>
<h2>Create urgency with live offers</h2>
<p>Exclusive, time-limited deals available only during the stream turn viewers into buyers. Limited stock, flash discounts, and live-only bundles tap the fear of missing out. Urgency is one of live commerce biggest advantages.</p>
<h2>Be consistent</h2>
<p>One-off lives rarely build momentum. A regular live schedule trains your audience to show up and builds a loyal community over time. Like all content, consistency is what compounds — and a repeatable format makes each session easier.</p>
<h2>Frequently asked questions</h2>
<h3>Which platform is best for live selling in Malaysia?</h3>
<p>TikTok and Facebook are the most popular for live commerce locally, with built-in shopping features. Choose where your audience already is.</p>
<h3>Do I need fancy equipment to go live?</h3>
<p>No — a phone, good lighting, and a stable connection are enough to start. Improve your setup as you grow.</p>
<h3>How do I get people to watch?</h3>
<p>Promote the session in advance, go live consistently at set times, and make it engaging and worth attending with offers and interaction.</p>
<h3>How do I sell during a live?</h3>
<p>Demonstrate products, answer questions in real time, and offer exclusive, time-limited live deals to create urgency.</p>
<p>BrandKraf runs live selling and video for Malaysian brands. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/tiktok-live-service">TikTok live service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'video-editing-tips-beginners',
  'Video Editing Tips for Beginners (Apps and Techniques)',
  'Good editing turns raw clips into scroll-stopping video. Learn beginner-friendly editing techniques and apps to make your videos look polished and keep viewers watching.',
  $html$<p>Editing is where good footage becomes great content. The right cuts, captions, and pacing keep viewers watching and make even simple clips look professional. You do not need expensive software to do it well. Here are beginner editing tips that make a real difference.</p>
<blockquote>Great editing is invisible. Viewers do not notice the cuts — they just cannot look away.</blockquote>
<h2>Cut tight and keep it moving</h2>
<p>The most common beginner mistake is leaving in dead air. Cut pauses, ums, and slow moments ruthlessly. Fast pacing with quick cuts holds attention, especially on social. When in doubt, tighten it up — shorter and snappier almost always performs better.</p>
<h2>Hook hard in the first seconds</h2>
<p>Edit your strongest moment to the very start. Do not bury the good part — open with it. The first one to three seconds decide whether viewers stay, so your edit should front-load the hook. See our <a href="/blog/how-to-write-hooks-that-stop-the-scroll">hooks guide</a>.</p>
<h2>Always add captions</h2>
<p>Most social video is watched on mute, so captions are essential — they keep silent viewers engaged and improve accessibility. Most editing apps auto-generate captions now; clean them up and style them to match your brand.</p>
<h2>Use text and visual cues</h2>
<p>On-screen text reinforces your message, highlights key points, and guides the eye. Simple zooms, pattern interrupts, and b-roll keep things visually interesting and prevent the static "talking head" feel that loses viewers.</p>
<h2>Mind your audio</h2>
<p>Viewers forgive imperfect video but not bad audio. Make sure voices are clear, add subtle background music at a low level, and keep volume consistent. Good audio instantly makes a video feel more professional.</p>
<h2>Beginner-friendly tools and templates</h2>
<p>You do not need professional software. Free and low-cost mobile apps handle captions, cuts, music, and effects easily. Save reusable templates for your intros, captions, and style so editing gets faster and stays consistent — perfect for <a href="/blog/how-to-batch-create-content">batching</a>. AI editing tools can speed this up further; see our <a href="/blog/ai-tools-for-content-creation">AI tools guide</a>.</p>
<h2>Frequently asked questions</h2>
<h3>What editing app should a beginner use?</h3>
<p>Free mobile editing apps are more than enough to start — they handle cuts, captions, music, and effects with simple interfaces.</p>
<h3>How do I make my videos look more professional?</h3>
<p>Cut tightly, add clean captions, ensure good audio, and keep a consistent style. Pacing and audio matter most.</p>
<h3>Do I need to add captions?</h3>
<p>Yes — most social video is watched on mute, so captions keep viewers engaged and improve accessibility.</p>
<h3>How long does editing take?</h3>
<p>It gets much faster with templates and practice. Reusable styles and AI tools can cut editing time dramatically.</p>
<p>BrandKraf edits scroll-stopping video for Malaysian brands. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/ugc-content-creation">content service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'video-seo-youtube',
  'Video SEO: How to Get Your Videos Found on Google and YouTube',
  'Video SEO helps your videos get discovered through search — for years. Learn how to optimise titles, descriptions, and content so your videos rank on YouTube and Google.',
  $html$<p>A great video that no one finds is wasted effort. Video SEO is how you make your videos discoverable through search — turning them into evergreen assets that bring viewers for years. Here is how to optimise your videos to rank on YouTube and Google.</p>
<blockquote>Social video gets a burst of views then fades. A ranked YouTube video brings viewers every day, for years.</blockquote>
<h2>Why video SEO matters</h2>
<p>YouTube is the second-largest search engine, and videos also appear in Google results. Unlike social posts that fade in hours, a video that ranks keeps earning views and customers indefinitely. That makes video SEO one of the best long-term content investments — see our <a href="/blog/youtube-marketing-malaysia">YouTube marketing guide</a>.</p>
<h2>Target what people search</h2>
<p>Make videos that answer real search queries — "how to", "best", "review", and problem-based searches. Research the terms your audience uses and build content around them. Search-intent videos rank because they match what people are actively looking for.</p>
<h2>Optimise titles and descriptions</h2>
<p>Include your target keyword naturally in the title and early in the description. Write a detailed, helpful description with relevant terms and links. Clear, keyword-aware titles and descriptions help both YouTube and Google understand and rank your video.</p>
<h2>Win the click with thumbnails</h2>
<p>Your thumbnail and title together determine your click-through rate, a major ranking signal. A clear, compelling custom thumbnail with bold visuals or text dramatically lifts clicks. Treat the thumbnail as seriously as the video itself.</p>
<h2>Maximise watch time and retention</h2>
<p>Watch time is YouTube biggest ranking factor. Hook viewers immediately, deliver on the title promise, and keep them watching with good pacing and structure. The longer people watch, the more YouTube promotes your video. This is the same retention discipline as <a href="/blog/short-form-video-marketing">short-form video</a>.</p>
<h2>Use captions, chapters, and engagement</h2>
<p>Add accurate captions (they help search understand your content), use chapters for longer videos, and encourage likes, comments, and subscriptions. Engagement signals reinforce relevance and rankings. Every interaction tells the platform your video is worth showing.</p>
<h2>Frequently asked questions</h2>
<h3>Does YouTube SEO really work?</h3>
<p>Yes — optimised videos can rank and bring views for years. YouTube is a search engine, and ranking compounds like website SEO.</p>
<h3>What is the most important YouTube ranking factor?</h3>
<p>Watch time and retention, supported by click-through rate from your title and thumbnail. Keep people watching.</p>
<h3>How do I find video keywords?</h3>
<p>Look at YouTube search suggestions, "people also search" terms, and the questions your audience asks. Target real search intent.</p>
<h3>Do thumbnails affect SEO?</h3>
<p>Indirectly but strongly — a compelling thumbnail lifts click-through rate, which is a key ranking signal. Invest in good thumbnails.</p>
<p>BrandKraf helps Malaysian brands get found through video. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/guides/seo">SEO guide</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'video-scripting-guide',
  'How to Script a Video That Holds Attention',
  'A good script is the backbone of a great video. Learn a simple framework to script videos that hook viewers, hold attention, and lead to action — without sounding stiff.',
  $html$<p>The difference between a rambling video and a gripping one is usually the script. A good script keeps you focused, holds the viewer attention, and leads to a clear action — without sounding robotic. Here is a simple framework for scripting videos that work.</p>
<blockquote>Winging it shows. A loose script does not make you stiff — it makes you clear, and clarity holds attention.</blockquote>
<h2>Why scripting matters</h2>
<p>Unscripted videos tend to ramble, lose the point, and lose the viewer. A script — even a loose outline — keeps you concise and on-message, ensures you include your hook and call to action, and makes filming faster. It is the backbone of efficient, effective video.</p>
<h2>Start with the hook</h2>
<p>Script your first line to grab attention immediately — a bold claim, a question, or the problem your viewer feels. The hook is the most important sentence in your script; write several options and pick the strongest. See our <a href="/blog/how-to-write-hooks-that-stop-the-scroll">hooks guide</a>.</p>
<h2>Use a clear structure</h2>
<p>A reliable structure: <strong>Hook</strong> (grab attention) → <strong>Value</strong> (deliver the content or story) → <strong>Call to action</strong> (what to do next). For ads and explainers, problem-solution-result works beautifully. Structure keeps both you and the viewer oriented.</p>
<h2>Write how you speak</h2>
<p>A script should sound natural, not like an essay. Use short sentences, conversational language, and contractions. Read it aloud and cut anything that feels stiff. The goal is to sound like a clear, confident human — not a corporate brochure.</p>
<h2>Keep it tight</h2>
<p>Every sentence should earn its place. Cut filler, get to the point fast, and respect the viewer time — especially on social, where attention is short. A tight script is a watchable video; a bloated one loses people halfway.</p>
<h2>End with one clear action</h2>
<p>Do not let viewers reach the end with nowhere to go. Script a single, clear call to action — follow, visit, buy, or comment. One ask converts better than several. This is what turns attention into results.</p>
<h2>Frequently asked questions</h2>
<h3>Do I need to script every video?</h3>
<p>At least loosely. Even a bullet-point outline keeps you focused and ensures your hook and call to action are there. Fully scripted suits ads and explainers.</p>
<h3>How do I script without sounding robotic?</h3>
<p>Write how you speak, use short conversational sentences, and read it aloud to catch stiff lines. Natural beats polished.</p>
<h3>What is the most important part of a script?</h3>
<p>The hook — your first line. It decides whether anyone watches the rest. Write several and choose the strongest.</p>
<h3>How long should a script be?</h3>
<p>As long as the message needs and no longer. Tight, focused scripts hold attention; padding loses viewers.</p>
<p>BrandKraf scripts and produces video that performs. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/ugc-content-creation">content service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
),

(
  'corporate-brand-video-guide',
  'How to Make a Brand Video That People Remember',
  'A brand video tells your story and makes people feel something. Learn how to create a brand video that builds connection, trust, and recognition — beyond just selling.',
  $html$<p>Not every video should sell directly. A brand video tells your story, communicates your values, and makes people feel something — building the emotional connection that turns customers into loyal fans. Here is how to make a brand video worth remembering.</p>
<blockquote>Product videos win the sale. Brand videos win the relationship — and the relationship is what keeps customers coming back.</blockquote>
<h2>What a brand video is for</h2>
<p>A brand video communicates who you are, what you stand for, and why you exist — not just what you sell. Its goal is connection and recognition, building the trust and affinity that make all your other marketing more effective. Think emotion and story over features.</p>
<h2>Lead with story and emotion</h2>
<p>The most memorable brand videos tell a human story and make viewers feel something — inspiration, belonging, humour, or pride. People remember how you made them feel far longer than any product claim. Decide the emotion you want to evoke, then build the story around it.</p>
<h2>Show your why and your values</h2>
<p>Customers increasingly choose brands whose values align with theirs. A brand video is the perfect place to share your purpose, your origin story, and what you believe — authentically. This is storytelling-driven <a href="/blog/branding-101-build-a-brand">branding</a> in motion.</p>
<h2>Feature real people</h2>
<p>Real founders, team members, and customers make a brand video authentic and relatable. People connect with people, so let genuine faces and voices carry your story rather than faceless corporate narration. Authenticity is the whole point.</p>
<h2>Keep it on-brand</h2>
<p>Your brand video should look and feel unmistakably you — consistent colours, tone, music, and style. This reinforces recognition and ties the video to your wider brand identity. Consistency is what makes a brand memorable across every touchpoint.</p>
<h2>Use it to anchor your presence</h2>
<p>Feature your brand video on your homepage, About page, social profiles, and pitch decks. It is the centrepiece that introduces your brand and sets the tone for everything else. One strong brand video works hard across your whole presence — and ties into festive and seasonal storytelling like our <a href="/blog/hari-raya-marketing-playbook">Hari Raya playbook</a>.</p>
<h2>Frequently asked questions</h2>
<h3>What is the difference between a brand video and a product video?</h3>
<p>A product video sells a specific product; a brand video builds emotional connection and communicates who you are and what you stand for.</p>
<h3>How long should a brand video be?</h3>
<p>Often 60 to 120 seconds — long enough to tell a story, short enough to hold attention. Emotion matters more than length.</p>
<h3>Do brand videos drive sales?</h3>
<p>Indirectly but powerfully — they build trust and affinity that make every other marketing effort convert better and boost loyalty.</p>
<h3>Do I need a big budget for a brand video?</h3>
<p>A strong story matters more than budget. Even a simple, authentic brand video with real people can be deeply effective.</p>
<p>BrandKraf creates brand videos Malaysians remember. Explore our <a href="/guides/video-marketing">video marketing guide</a>, our <a href="/portfolio/branding-creative">branding service</a>, or <a href="/contact">talk to us</a>.</p>$html$,
  'BrandKraf Team', 'Video Marketing', 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80', '2026-06-27', true
);
