import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const requestId = Math.random().toString(36).substr(2, 5);
    
    console.log(`[INFO] ${new Date().toISOString()} - Contact form request received`, {
      requestId,
      method: 'POST',
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    const body = await request.json();
    const { name, email, message } = body;

    console.log(`[INFO] ${new Date().toISOString()} - Form data received`, {
      requestId,
      hasName: !!name,
      hasEmail: !!email,
      hasMessage: !!message,
      messageLength: message?.length || 0
    });

    console.log(`[INFO] ${new Date().toISOString()} - Attempting to send email`, { requestId });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error('Please configure Gmail credentials. Set GMAIL_USER and GMAIL_PASS environment variables. Use Gmail App Password (not regular password).');
    }

    const gmailUser = process.env.GMAIL_USER;
    if (!gmailUser.includes('@gmail.com')) {
      throw new Error('Please use a valid Gmail address (must end with @gmail.com)');
    }

    const transportConfig = {
      service: 'gmail', 
      auth: {
        user: gmailUser,
        pass: process.env.GMAIL_PASS,
      },
    };

    console.log(`[DEBUG] ${new Date().toISOString()} - Gmail config`, {
      requestId,
      user: gmailUser,
      hasPassword: !!process.env.GMAIL_PASS
    });

    const transporter = nodemailer.createTransport(transportConfig);

    console.log(`[INFO] ${new Date().toISOString()} - Verifying Gmail connection`, { requestId });
    
    await transporter.verify();

    console.log(`[INFO] ${new Date().toISOString()} - Gmail connection verified, sending email`, { requestId });

    const mailOptions = {
      from: gmailUser,
      to: process.env.CONTACT_EMAIL || gmailUser, 
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`[INFO] ${new Date().toISOString()} - Email sent successfully`, {
      requestId,
      messageId: info.messageId,
      response: info.response
    });

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully',
      requestId 
    });

  } catch (error) {
    const errorRequestId = Math.random().toString(36).substr(2, 5);
    
    console.error(`[ERROR] ${new Date().toISOString()} - Email sending failed`, {
      error: {
        requestId: errorRequestId,
        errorMessage: error.message,
        errorCode: error.code,
        errorStack: error.stack,
        command: error.command,
        response: error.response,
        responseCode: error.responseCode
      },
      requestId: errorRequestId,
      errorMessage: error.message,
      errorCode: error.code,
      errorStack: error.stack,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });

    return Response.json({ 
      success: false, 
      error: 'Failed to send email: ' + error.message,
      requestId: errorRequestId 
    }, { status: 500 });
  }
}