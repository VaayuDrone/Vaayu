// netlify/functions/send-email.js
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Handle CORS preflight
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const requestId = Math.random().toString(36).substr(2, 5);
    
    console.log(`[INFO] ${new Date().toISOString()} - Contact form request received`, {
      requestId,
      method: event.httpMethod,
      headers: event.headers
    });

    const { name, email, message } = JSON.parse(event.body);

    console.log(`[INFO] ${new Date().toISOString()} - Form data received`, {
      requestId,
      hasName: !!name,
      hasEmail: !!email,
      hasMessage: !!message,
      messageLength: message?.length || 0
    });

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Missing required fields' 
        })
      };
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error('Gmail credentials not configured');
    }

    const transportConfig = {
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    };

    console.log(`[DEBUG] ${new Date().toISOString()} - Gmail config`, {
      requestId,
      user: process.env.GMAIL_USER,
      hasPassword: !!process.env.GMAIL_PASS
    });

    const transporter = nodemailer.createTransporter(transportConfig);

    console.log(`[INFO] ${new Date().toISOString()} - Verifying Gmail connection`, { requestId });
    
    await transporter.verify();

    console.log(`[INFO] ${new Date().toISOString()} - Gmail connection verified, sending email`, { requestId });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
      replyTo: email
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`[INFO] ${new Date().toISOString()} - Email sent successfully`, {
      requestId,
      messageId: info.messageId,
      response: info.response
    });

    return {
      statusCode: 200,
      headers, // Added missing headers
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    const errorRequestId = Math.random().toString(36).substr(2, 5);
    
    console.error(`[ERROR] ${new Date().toISOString()} - Email sending failed`, {
      requestId: errorRequestId,
      errorMessage: error.message,
      errorCode: error.code,
      errorStack: error.stack
    });

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to send email: ' + error.message,
        requestId: errorRequestId 
      })
    };
  }
};