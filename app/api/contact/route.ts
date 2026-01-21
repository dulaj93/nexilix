import type { NextRequest } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10),
  companyWebsite: z.string().optional(), // honeypot
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.ip;
  const { ok } = rateLimit(ip);
  if (!ok) return new Response('Too many requests', { status: 429 });

  const form = await req.formData();
  const getString = (key: string) => {
    const value = form.get(key);
    return typeof value === 'string' ? value : undefined;
  };
  const interest = form
    .getAll('interest')
    .map((value) => (typeof value === 'string' ? value : ''))
    .filter(Boolean);
  const data = schema.safeParse({
    name: getString('name'),
    email: getString('email'),
    company: getString('company'),
    phone: getString('phone'),
    interest: interest.length ? interest.join(', ') : undefined,
    message: getString('message'),
    companyWebsite: getString('companyWebsite'),
  });

  if (!data.success) {
    return new Response(JSON.stringify({ error: data.error.flatten() }), { status: 400 });
  }

  // honeypot
  if (data.data.companyWebsite) {
    return new Response('ok');
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO || !CONTACT_FROM) {
    // Fallback if mail not configured
    return new Response(JSON.stringify({ fallback: true, mailto: `mailto:${CONTACT_TO || 'info@example.com'}?subject=Inquiry from ${encodeURIComponent(data.data.name)}&body=${encodeURIComponent(data.data.message)}` }), { status: 200 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  const text = `New inquiry:
Name: ${data.data.name}
Email: ${data.data.email}
Company: ${data.data.company || '-'}
Phone: ${data.data.phone || '-'}
Interest: ${data.data.interest || '-'}

Message:
${data.data.message}
`;

  await transporter.sendMail({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    subject: `New inquiry from ${data.data.name}`,
    text,
  });

  return new Response('ok');
}
