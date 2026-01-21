import Link from 'next/link';
import { site } from '@/lib/seo';

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+94 000 000 000';

  return (
    <footer className="mt-16 border-t border-border/60 bg-bg-deep">
      <div className="container py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold">Automation Services</h3>
          <p className="text-text-muted mt-2 text-sm">SMART TECH, SMARTER SOLUTIONS</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link className="hover:text-white text-text-muted" href="/en">Home</Link></li>
            <li><Link className="hover:text-white text-text-muted" href="/en/services">Services</Link></li>
            <li><Link className="hover:text-white text-text-muted" href="/en/projects">Projects</Link></li>
            <li><Link className="hover:text-white text-text-muted" href="/en/about">About</Link></li>
            <li><Link className="hover:text-white text-text-muted" href="/en/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Contact</h4>
          <p className="text-text-muted mt-2 text-sm">
            Email: <a className="hover:text-white" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a><br />
            Phone: {phone}
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-text-muted">
        (c) {new Date().getFullYear()} Automation Services. All rights reserved.
      </div>
    </footer>
  );
}
