/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "admin@brandkraf.com" }],
    subject: "New Contact Form Submission from " + e.record.get("name"),
    html: "<h2>New Contact Form Submission</h2>" +
          "<p><strong>Name:</strong> " + e.record.get("name") + "</p>" +
          "<p><strong>Email:</strong> " + e.record.get("email") + "</p>" +
          "<p><strong>Phone:</strong> " + (e.record.get("phone") || "Not provided") + "</p>" +
          "<p><strong>Business Type:</strong> " + (e.record.get("businessType") || "Not provided") + "</p>" +
          "<p><strong>Message:</strong></p>" +
          "<p>" + e.record.get("message") + "</p>" +
          "<p><strong>Page Source:</strong> " + (e.record.get("pageSource") || "Not provided") + "</p>" +
          "<p><strong>IP Address:</strong> " + (e.record.get("ipAddress") || "Not provided") + "</p>" +
          "<p><strong>Consent Given:</strong> " + (e.record.get("consentGiven") ? "Yes" : "No") + "</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "contact_submissions");