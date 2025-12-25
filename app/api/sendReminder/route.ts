import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('REQUEST BODY:', body);
    const { name, email, mobile, month } = body;

    if (!name || !email || !mobile || !month) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const mailOptions = {
      from: `"Payment Reminder" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Payment Reminder for ${month}`,
      html: `
        <h3>Hello ${name},</h3>
        <p>This is a friendly reminder that your payment for <b>${month}</b> is pending.</p>
        <p>Please complete your payment at the earliest.</p>
        <br/>
        <img src="cid:qr_codeimage" alt="Photo" style="width:200px;height:200px;" />
        <br/>
        <p>Thank you</p>
      `,
       attachments: [
        {
          filename: 'photo.jpg',
          path: './public/qr_code.jpeg', 
          cid: 'photoimage',
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log('Sending reminder to:', { name, email, mobile, month });

    // WhatsApp message via Twilio
    // const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    // await client.messages.create({
    //   from: 'whatsapp:+14155238886', // Twilio sandbox number
    //   to: `whatsapp:+91${mobile}`,    // recipient number
    //   body: `Hello ${name}, your payment for ${month} is pending. Please complete it soon.`
    // });
    // console.log('WhatsApp message sent to:', mobile);

    return NextResponse.json({
      success: true,
      message: `Reminder sent to ${name} via Email and WhatsApp`,
    });
  } catch (error) {
    console.error('Send reminder error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send reminder' },
      { status: 500 }
    );
  }
}