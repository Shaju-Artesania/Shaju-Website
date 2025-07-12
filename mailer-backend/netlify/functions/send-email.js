const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { name, email, subject, message } = JSON.parse(event.body || '{}');

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'All fields are required.' })
    };
  }

  const API_KEY = process.env.MAILERSEND_API_KEY;

  const response = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: {
        email: 'noreply@yourdomain.com', // must match your verified MailerSend domain
        name: 'Contact Form'
      },
      to: [
        {
          email: 'yourname@example.com', // your receiving email
          name: 'You'
        }
      ],
      reply_to: {
        email: email,
        name: name
      },
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    })
  });

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' })
    };
  } else {
    const error = await response.json();
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email.', error })
    };
  }
};
