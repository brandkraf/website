/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blog_posts");

  const record0 = new Record(collection);
    record0.set("title", "The Ultimate Guide to Social Media Marketing Strategy");
    record0.set("slug", "social-media-marketing-strategy");
    record0.set("excerpt", "Learn how to create an effective social media strategy that drives engagement and builds your brand presence online.");
    record0.set("content", "Social media has become an essential part of any digital marketing strategy. In this comprehensive guide, we'll explore the key elements of a successful social media marketing plan. From identifying your target audience to creating engaging content, we'll cover everything you need to know. A well-planned social media strategy can help you build brand awareness, increase customer engagement, and drive conversions. Start by defining your goals, understanding your audience, and choosing the right platforms for your business.");
    record0.set("author", "BrandKraf Team");
    record0.set("category", "Social Media Marketing");
    record0.set("published_date", "2026-03-20");
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
    record1.set("title", "Video Production Tips for Marketing Campaigns");
    record1.set("slug", "video-production-marketing-tips");
    record1.set("excerpt", "Discover essential video production techniques that will elevate your marketing campaigns and capture your audience's attention.");
    record1.set("content", "Video content is one of the most powerful tools in modern marketing. Whether you're creating promotional videos, testimonials, or educational content, quality production matters. In this guide, we share professional tips for producing videos that resonate with your audience. From planning your shots to editing for maximum impact, every step counts. High-quality video production can significantly increase engagement rates and help your brand stand out in a crowded digital landscape.");
    record1.set("author", "BrandKraf Team");
    record1.set("category", "Video Production");
    record1.set("published_date", "2026-03-18");
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
    record2.set("title", "Content Creation Best Practices for Digital Marketing");
    record2.set("slug", "content-creation-best-practices");
    record2.set("excerpt", "Master the art of creating compelling content that engages your audience and drives meaningful results for your business.");
    record2.set("content", "Content is king in the digital marketing world. Creating valuable, relevant content is crucial for attracting and retaining customers. This guide covers the fundamentals of effective content creation, including understanding your audience, choosing the right formats, and maintaining consistency. Whether you're writing blog posts, creating social media content, or producing videos, quality matters. Focus on providing value to your audience, telling authentic stories, and optimizing your content for search engines. Consistent, high-quality content builds trust and establishes your brand as an industry authority.");
    record2.set("author", "BrandKraf Team");
    record2.set("category", "Content Creation");
    record2.set("published_date", "2026-03-15");
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
    record3.set("title", "2026 Digital Marketing Trends You Need to Know");
    record3.set("slug", "digital-marketing-trends-2026");
    record3.set("excerpt", "Stay ahead of the curve with the latest digital marketing trends shaping the industry in 2026.");
    record3.set("content", "The digital marketing landscape is constantly evolving. As we move through 2026, several key trends are emerging that every marketer should understand. Artificial intelligence and personalization are becoming increasingly important, with brands using data to deliver tailored experiences. Video content continues to dominate, with short-form videos gaining massive popularity. Influencer marketing and user-generated content are also playing larger roles in successful campaigns. Additionally, privacy-focused marketing and sustainable branding are becoming more important to consumers. Stay informed about these trends to keep your marketing strategy competitive and effective.");
    record3.set("author", "BrandKraf Team");
    record3.set("category", "Marketing Strategy");
    record3.set("published_date", "2026-03-12");
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
    record4.set("title", "Why Strong Branding is Essential for Business Success");
    record4.set("slug", "importance-of-branding");
    record4.set("excerpt", "Understand how strategic branding can differentiate your business and create lasting connections with your customers.");
    record4.set("content", "Your brand is more than just a logo or a name\u2014it's the entire experience your customers have with your business. Strong branding creates recognition, builds trust, and sets you apart from competitors. A well-developed brand strategy communicates your values, mission, and unique selling proposition. Consistent branding across all touchpoints reinforces your message and builds customer loyalty. Investing in professional branding, from visual identity to brand voice, pays dividends in customer retention and business growth. Whether you're a startup or an established company, taking time to develop and refine your brand is essential for long-term success.");
    record4.set("author", "BrandKraf Team");
    record4.set("category", "Branding");
    record4.set("published_date", "2026-03-10");
  try {
    app.save(record4);
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