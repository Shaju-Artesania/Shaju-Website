const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, subject, message } = JSON.parse(event.body || '{}');

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "All fields are required." })
    };
  }

  const msg = {
    to: 'gilles.kindt.6@gmail.com',         // Replace with your real receiving email
    from: 'noreply@yourdomain.com',       // Replace with verified sender on SendGrid
    subject: `New Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Your message has been sent successfully!" })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send message." })
    };
  }
};
