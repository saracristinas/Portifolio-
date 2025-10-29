import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
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

    // Verifica conexão/credenciais SMTP antes de tentar enviar
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('Falha ao verificar conexão SMTP:', verifyError);
      const showDetails = process.env.SHOW_EMAIL_ERRORS === 'true';
      const payload: any = { error: 'Falha ao conectar ao servidor de e-mail' };
      if (showDetails) payload.details = String(verifyError?.message || verifyError);
      return NextResponse.json(payload, { status: 502 });
    }

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

    try {
      // TEMPLATE MODERNO DE CONFIRMAÇÃO
      const confirmationHtml = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmação de Recebimento</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f8fafc; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          
          <table role="presentation" style="width:100%; border-collapse:collapse; background-color:#f8fafc;">
            <tr>
              <td align="center" style="padding:40px 20px;">
                
                <!-- Container principal -->
                <table role="presentation" style="max-width:600px; width:100%; border-collapse:collapse; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);">
                  
                  <!-- Header com gradiente -->
                  <tr>
                    <td style="background:linear-gradient(135deg, #0ea5a4 0%, #06b6d4 100%); padding:40px 32px; text-align:center;">
                      <div style="width:64px; height:64px; background-color:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 16px; display:flex; align-items:center; justify-content:center;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:700; letter-spacing:-0.5px;">Mensagem Recebida!</h1>
                      <p style="margin:12px 0 0; color:rgba(255,255,255,0.95); font-size:15px; font-weight:400;">Obrigada por entrar em contato</p>
                    </td>
                  </tr>
                  
                  <!-- Conteúdo -->
                  <tr>
                    <td style="padding:40px 32px;">
                      <p style="margin:0 0 20px; color:#1e293b; font-size:16px; line-height:1.6;">
                        Olá <strong style="color:#0ea5a4;">${name}</strong>,
                      </p>
                      
                      <p style="margin:0 0 20px; color:#475569; font-size:15px; line-height:1.7;">
                        Recebi sua mensagem e quero que saiba que ela já está na minha caixa de entrada! 📬
                      </p>
                      
                      <p style="margin:0 0 24px; color:#475569; font-size:15px; line-height:1.7;">
                        Vou analisar seu contato com atenção e retornarei em breve. Geralmente respondo dentro de 24-48 horas.
                      </p>
                      
                      <!-- Box com detalhes da mensagem -->
                      <div style="background:linear-gradient(135deg, #f0fdfc 0%, #ecfeff 100%); border-left:4px solid #0ea5a4; border-radius:8px; padding:20px; margin:0 0 28px;">
                        <p style="margin:0 0 8px; color:#0f766e; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px;">Resumo da sua mensagem</p>
                        <p style="margin:0; color:#0f172a; font-size:15px; font-weight:500;">
                          <strong>Assunto:</strong> ${subject}
                        </p>
                      </div>
                      
                      <p style="margin:0 0 6px; color:#475569; font-size:15px; line-height:1.7;">
                        Enquanto isso, fique à vontade para:
                      </p>
                      
                      <ul style="margin:0 0 24px; padding-left:20px; color:#475569; font-size:15px; line-height:1.8;">
                        <li style="margin-bottom:8px;">Conferir meu portfólio completo</li>
                        <li style="margin-bottom:8px;">Conectar-se comigo nas redes sociais</li>
                        <li>Explorar outros projetos</li>
                      </ul>
                      
                      <p style="margin:0 0 28px; color:#475569; font-size:15px; line-height:1.7;">
                        Até logo! ✨
                      </p>
                      
                      <!-- Assinatura -->
                      <div style="border-top:2px solid #f1f5f9; padding-top:20px;">
                        <p style="margin:0 0 4px; color:#0f172a; font-size:16px; font-weight:600;">Sara</p>
                        <p style="margin:0; color:#64748b; font-size:14px;">Designer & Developer</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#f8fafc; padding:28px 32px; text-align:center; border-top:1px solid #e2e8f0;">
                      <p style="margin:0 0 12px; color:#94a3b8; font-size:13px; line-height:1.5;">
                        Este é um email automático de confirmação.<br>
                        Por favor, não responda diretamente a esta mensagem.
                      </p>
                      <p style="margin:0; color:#cbd5e1; font-size:12px;">
                        © ${new Date().getFullYear()} Sara — Todos os direitos reservados
                      </p>
                    </td>
                  </tr>
                  
                </table>
                
              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `;

      const confirmationMail = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: `Recebemos sua mensagem — ${process.env.SITE_NAME || 'Sara'}`,
        text: `Olá ${name},\n\nRecebemos sua mensagem com assunto: ${subject}. Em breve entrarei em contato.\n\n— Sara`,
        html: confirmationHtml,
        replyTo: toAddress,
      } as any;

      await transporter.sendMail(confirmationMail);
      } catch (confirmError) {
      console.error('Erro ao enviar e-mail de confirmação para o remetente:', confirmError);
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('Erro ao enviar e-mail de contato:', error);

    const showDetails = process.env.SHOW_EMAIL_ERRORS === 'true';
    const payload: any = { error: 'Não foi possível enviar a mensagem' };
    if (showDetails) payload.details = String(error?.message || error);

    return NextResponse.json(payload, { status: 500 });
  }
}