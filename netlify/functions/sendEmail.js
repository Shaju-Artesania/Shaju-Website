const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  const mailerSendAPIKey = process.env.MAILERSEND_API_KEY;
  const mailData = {
    from: { email: "your_verified@domain.com" },
    to: [{ email: "you@yourdomain.com" }],
    subject: `New Contact: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${mailerSendAPIKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailData),
    });

    if (!response.ok) throw new Error("Failed to send email");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Email sending failed." }),
    };
  }
};
