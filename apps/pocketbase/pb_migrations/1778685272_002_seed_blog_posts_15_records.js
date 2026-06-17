/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blog_posts");

  const record0 = new Record(collection);
    record0.set("slug", "winning-digital-marketing-strategy");
    record0.set("title", "How to Build a Winning Digital Marketing Strategy");
    record0.set("excerpt", "Discover the key components of a successful digital marketing strategy that drives results.");
    record0.set("content", "Building a winning digital marketing strategy requires careful planning and execution. Start by defining clear objectives and understanding your target audience. Analyze your competitors and identify market opportunities. Choose the right channels for your business, whether it's social media, email, content marketing, or paid advertising. Set measurable KPIs and track your progress regularly. A comprehensive strategy should integrate all your marketing efforts into a cohesive plan that delivers consistent results and maximizes ROI.");
    record0.set("author", "BrandKraf Team");
    record0.set("published_date", "2026-03-01");
    record0.set("category", "Marketing Strategy");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("slug", "influencer-marketing-2026");
    record1.set("title", "The Power of Influencer Marketing in 2026");
    record1.set("excerpt", "Learn how to leverage influencer partnerships to amplify your brand message and reach new audiences.");
    record1.set("content", "Influencer marketing has become a powerful tool for brands to connect with their target audience authentically. In 2026, micro-influencers and nano-influencers are gaining prominence for their highly engaged communities. When selecting influencers, focus on alignment with your brand values and audience demographics. Develop authentic partnerships that feel natural to the influencer's followers. Track metrics like engagement rate, reach, and conversions to measure campaign success. Successful influencer marketing builds trust and credibility while expanding your brand's reach exponentially.");
    record1.set("author", "BrandKraf Team");
    record1.set("published_date", "2026-03-03");
    record1.set("category", "Social Media Marketing");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("slug", "email-marketing-strategies");
    record2.set("title", "Email Marketing Strategies That Convert");
    record2.set("excerpt", "Master the art of email marketing with proven strategies that increase open rates and conversions.");
    record2.set("content", "Email marketing remains one of the highest ROI marketing channels when executed correctly. Segment your email list based on customer behavior, preferences, and demographics. Personalize your messages to make recipients feel valued and understood. Craft compelling subject lines that encourage opens and write clear, action-oriented copy. Test different elements like send times, subject lines, and CTAs to optimize performance. Automation can help you nurture leads and maintain consistent communication without manual effort.");
    record2.set("author", "BrandKraf Team");
    record2.set("published_date", "2026-03-05");
    record2.set("category", "Email Marketing");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("slug", "seo-best-practices-2026");
    record3.set("title", "SEO Best Practices for 2026");
    record3.set("excerpt", "Stay ahead with the latest SEO techniques that improve your search rankings and organic visibility.");
    record3.set("content", "Search engine optimization continues to evolve with algorithm updates and changing user behavior. Focus on creating high-quality, valuable content that answers user intent. Optimize your technical SEO including site speed, mobile responsiveness, and structured data. Build quality backlinks from authoritative websites in your industry. Use relevant keywords naturally throughout your content without keyword stuffing. Monitor your rankings and analytics to understand what's working and adjust your strategy accordingly.");
    record3.set("author", "BrandKraf Team");
    record3.set("published_date", "2026-03-07");
    record3.set("category", "SEO");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("slug", "creating-viral-content");
    record4.set("title", "Creating Viral Content: Tips and Tricks");
    record4.set("excerpt", "Understand the elements that make content go viral and how to create shareable content for your audience.");
    record4.set("content", "Viral content doesn't happen by accident\u2014it's the result of understanding your audience and creating content that resonates emotionally. Focus on authenticity and relatability rather than trying too hard to be funny or trendy. Use storytelling to create emotional connections with your audience. Timing matters\u2014post when your audience is most active. Encourage sharing by creating content that sparks conversation or provides value. While not every piece of content will go viral, consistent quality and audience engagement increase your chances.");
    record4.set("author", "BrandKraf Team");
    record4.set("published_date", "2026-03-09");
    record4.set("category", "Content Creation");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("slug", "complete-guide-google-ads");
    record5.set("title", "The Complete Guide to Google Ads");
    record5.set("excerpt", "Master Google Ads to drive qualified traffic and maximize your advertising ROI.");
    record5.set("content", "Google Ads is a powerful platform for reaching customers actively searching for your products or services. Start with clear campaign objectives and thorough keyword research. Create compelling ad copy that highlights your unique value proposition. Use ad extensions to provide additional information and improve click-through rates. Implement conversion tracking to measure campaign effectiveness. Continuously test and optimize your campaigns based on performance data. A well-managed Google Ads account can deliver significant ROI when aligned with your business goals.");
    record5.set("author", "BrandKraf Team");
    record5.set("published_date", "2026-03-11");
    record5.set("category", "Paid Advertising");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("slug", "brand-loyalty-customer-experience");
    record6.set("title", "Building Brand Loyalty Through Customer Experience");
    record6.set("excerpt", "Learn how exceptional customer experience builds lasting brand loyalty and advocacy.");
    record6.set("content", "Brand loyalty is built through consistent, positive customer experiences at every touchpoint. Understand your customers' needs and exceed their expectations. Provide excellent customer service that resolves issues quickly and professionally. Create personalized experiences that make customers feel valued. Implement loyalty programs that reward repeat customers. Gather feedback and continuously improve your products and services. When customers feel appreciated and understood, they become brand advocates who recommend you to others.");
    record6.set("author", "BrandKraf Team");
    record6.set("published_date", "2026-03-13");
    record6.set("category", "Branding");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("slug", "podcast-marketing-opportunity");
    record7.set("title", "Podcast Marketing: A Growing Opportunity");
    record7.set("excerpt", "Discover how podcasting can establish your brand as an industry authority and connect with engaged audiences.");
    record7.set("content", "Podcasting has emerged as a powerful marketing channel with millions of engaged listeners. You can leverage podcasts in two ways: create your own show or sponsor existing podcasts in your niche. Starting a podcast allows you to share expertise, tell stories, and build a loyal community. Sponsoring relevant podcasts puts your brand in front of highly targeted audiences. Podcasts create intimate connections with listeners through audio content consumed during commutes, workouts, and daily activities. This growing medium offers unique opportunities for brand building and thought leadership.");
    record7.set("author", "BrandKraf Team");
    record7.set("published_date", "2026-03-15");
    record7.set("category", "Content Marketing");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("slug", "mobile-marketing-strategies");
    record8.set("title", "Mobile Marketing Strategies for Success");
    record8.set("excerpt", "Optimize your marketing for mobile-first consumers with effective mobile marketing strategies.");
    record8.set("content", "With most internet traffic coming from mobile devices, mobile marketing is essential. Ensure your website is mobile-responsive and loads quickly on all devices. Implement mobile-friendly email campaigns with clear CTAs and readable text. Use SMS marketing for time-sensitive offers and customer updates. Develop mobile apps if they add value for your customers. Leverage location-based marketing to reach customers near your physical locations. Mobile marketing requires a different approach than desktop, so test and optimize specifically for mobile users.");
    record8.set("author", "BrandKraf Team");
    record8.set("published_date", "2026-03-17");
    record8.set("category", "Mobile Marketing");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("slug", "storytelling-in-marketing");
    record9.set("title", "The Art of Storytelling in Marketing");
    record9.set("excerpt", "Master the power of storytelling to create emotional connections and memorable brand experiences.");
    record9.set("content", "Storytelling is one of the most powerful marketing tools available. Stories create emotional connections that facts and figures cannot achieve. Share your brand's origin story, customer success stories, and employee stories. Use narrative structure with a beginning, middle, and end to keep audiences engaged. Authentic stories resonate more than polished corporate messages. Stories help customers see themselves in your brand and understand how you can help them. Whether through video, blog posts, or social media, storytelling should be central to your marketing strategy.");
    record9.set("author", "BrandKraf Team");
    record9.set("published_date", "2026-03-19");
    record9.set("category", "Content Marketing");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("slug", "conversion-rate-optimization");
    record10.set("title", "Conversion Rate Optimization Techniques");
    record10.set("excerpt", "Increase your website conversions with proven CRO techniques and best practices.");
    record10.set("content", "Conversion rate optimization focuses on turning website visitors into customers. Start by analyzing user behavior with tools like heatmaps and session recordings. Identify friction points in your conversion funnel and address them. Test different elements like headlines, CTAs, forms, and page layouts. Use A/B testing to determine what works best for your audience. Simplify your conversion process by reducing form fields and steps. Improve page load speed and mobile experience. Small improvements in conversion rate can significantly impact your revenue.");
    record10.set("author", "BrandKraf Team");
    record10.set("published_date", "2026-03-21");
    record10.set("category", "Marketing Strategy");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("slug", "user-generated-content-advocacy");
    record11.set("title", "User-Generated Content: Building Community Advocacy");
    record11.set("excerpt", "Leverage user-generated content to build community and increase authentic brand advocacy.");
    record11.set("content", "User-generated content (UGC) is content created by your customers about your brand. UGC is more authentic and trustworthy than branded content. Encourage customers to share photos, reviews, and testimonials. Create branded hashtags to make it easy for customers to share content. Feature customer content on your channels to show appreciation. UGC provides social proof that influences purchasing decisions. It also reduces your content creation burden while building community. Customers who create content become more invested in your brand's success.");
    record11.set("author", "BrandKraf Team");
    record11.set("published_date", "2026-03-23");
    record11.set("category", "Social Media Marketing");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("slug", "marketing-automation-streamline");
    record12.set("title", "Marketing Automation: Streamline Your Efforts");
    record12.set("excerpt", "Implement marketing automation to save time, improve efficiency, and deliver personalized experiences at scale.");
    record12.set("content", "Marketing automation allows you to nurture leads and maintain customer relationships efficiently. Automate email sequences based on customer behavior and preferences. Set up workflows that trigger actions based on specific conditions. Segment your audience for more targeted messaging. Use automation to score leads and identify sales-ready prospects. Automation frees up your team to focus on strategy and creative work. However, maintain a human touch\u2014automation should enhance, not replace, personal connections.");
    record12.set("author", "BrandKraf Team");
    record12.set("published_date", "2026-03-25");
    record12.set("category", "Marketing Technology");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("slug", "reputation-management-digital");
    record13.set("title", "Reputation Management in the Digital Age");
    record13.set("excerpt", "Protect and enhance your brand reputation by managing online reviews and customer feedback effectively.");
    record13.set("content", "Your online reputation directly impacts customer trust and purchasing decisions. Monitor mentions of your brand across the web and social media. Respond promptly and professionally to both positive and negative reviews. Encourage satisfied customers to leave reviews on relevant platforms. Address complaints privately and work toward resolution. Build a strong online presence with quality content that ranks well in search results. Proactive reputation management prevents small issues from becoming major problems. Your reputation is an asset that requires ongoing attention and care.");
    record13.set("author", "BrandKraf Team");
    record13.set("published_date", "2026-03-27");
    record13.set("category", "Branding");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("slug", "retargeting-campaigns-convert");
    record14.set("title", "Retargeting Campaigns: Convert Interested Visitors");
    record14.set("excerpt", "Use retargeting to re-engage interested visitors and convert them into customers.");
    record14.set("content", "Retargeting reaches people who have visited your website but didn't convert. Install tracking pixels to identify and follow these visitors across the web. Create targeted ads that remind them of your products or services. Segment your audience based on their behavior for more relevant messaging. Use dynamic retargeting to show specific products they viewed. Retargeting typically has higher conversion rates than cold traffic. Set frequency caps to avoid ad fatigue. Combine retargeting with other strategies for a comprehensive marketing approach.");
    record14.set("author", "BrandKraf Team");
    record14.set("published_date", "2026-03-29");
    record14.set("category", "Paid Advertising");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})