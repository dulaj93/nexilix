# Automation Services Website (Next.js)

Dark-mode, high-tech marketing site for an automation service provider.

## Quick Start

```bash
# 1) Install deps
pnpm i   # or: npm i / yarn

# 2) Run
pnpm dev # http://localhost:3000
```

## Tech

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS, framer-motion, lucide-react
- API route for contact email via Nodemailer (+ honeypot + basic rate-limit)
- SEO: metadata, robots, sitemap, Open Graph
- i18n-ready: locale segment `/en` by default (middleware redirects `/` → `/en`)
- Accessibility: focus rings, color contrast, keyboard friendly

## Environment Variables

Create `.env.local` with:

```
# Site URL for OG, sitemap, robots
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Public contact email (footer)
NEXT_PUBLIC_CONTACT_EMAIL=info@example.com

# Email sending (optional; if missing, API returns mailto fallback)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
CONTACT_TO=you@yourdomain.com
CONTACT_FROM="Automation Site" <noreply@yourdomain.com>
```

If SMTP vars are not provided, the form still works and returns a `mailto:` fallback the client ignores (UI says "Thanks").
Update the UI or configure SMTP for production.

## Pages

- `/en` Home with hero, services preview, contact form.
- `/en/services` Services overview with sections and sticky quick anchors.
- `/en/services/[slug]` Dynamic per-service detail.
- `/en/about` About page.
- `/en/contact` Full contact form.

## Design Tokens (Tailwind)

```
colors: {
  bg: { base: '#121417', deep: '#0D0F12' },
  card: '#161A1E',
  border: '#242A31',
  primary: '#FF4D4F',
  primaryDark: '#E04344',
  blue: '#2F81F7',
  success: '#17C964',
  warn: '#F5A524',
  text: { base: '#F7F7F7', muted: '#B6B9BF', dim: '#7A8087' },
}
```

## Deployment (Vercel)

- Set the env vars in the Vercel project.
- Ensure `NEXT_PUBLIC_SITE_URL` matches your production URL.
- Add your real logo at `/public/logo.svg` and OG image at `/public/og-image.png` (1200×630).

## Notes

- This scaffold avoids shadcn/ui for zero-setup reliability. You can add it later.
- The chatbot button is a placeholder; wire to your backend at `/api/chatbot` when ready.
- Update contact details in `Footer.tsx` and env.
