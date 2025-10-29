import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.EMAIL_TO || process.env.SMTP_USER;

    const safeMessageHtml = String(message).replace(/\n/g, '<br/>');
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      replyTo: email, 
      to: toAddress,
      subject: `[Portfólio] ${subject}`,

      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,

      html: `
        <div style="font-family:Arial, Helvetica, sans-serif; color:#0f172a;">
          <div style="background:#0ea5a4; color:white; padding:12px 16px; border-radius:6px 6px 0 0; font-weight:600;">Mensagem do formulário de contato — Portfólio</div>
          <div style="padding:18px; background:#ffffff; border:1px solid #e6eef0; border-top:0;">
            <p style="margin:0 0 12px;"><strong>Nome:</strong> ${name}</p>
            <p style="margin:0 0 12px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#0ea5a4; text-decoration:none;">${email}</a></p>
            <p style="margin:0 0 12px;"><strong>Assunto:</strong> ${subject}</p>
            <hr style="border:none; border-top:1px solid #eef2f3; margin:12px 0;"/>
            <div style="white-space:pre-wrap; color:#0f172a;">${safeMessageHtml}</div>
            <div style="margin-top:16px; font-size:13px; color:#6b7280;">Enviado via formulário do portfólio</div>
          </div>
          <div style="margin-top:10px; font-size:12px; color:#94a3b8; text-align:center;">© ${new Date().getFullYear()} Sara — portfolio</div>
        </div>
      `,
    } as any;

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json({ error: 'Unable to send email' }, { status: 500 });
  }
}
