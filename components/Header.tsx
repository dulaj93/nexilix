'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/en', label: 'Home' },
  { href: '/en/services', label: 'Services' },
  { href: '/en/about', label: 'About' },
  { href: '/en/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg-base/80 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/en" className="flex items-center gap-3" aria-label="Home">
          <Image src="/logo.svg" alt="Logo" width={140} height={36} className="sm:w-[220px] w-[120px] h-auto" />
          <span className="sr-only">Automation Services</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm hover:text-white transition-colors ${pathname === n.href ? 'text-white' : 'text-text-muted'}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/en/contact#contact-form" className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-glow hover:bg-primaryDark focus-visible:outline-none">
            Contact Now
          </Link>
        </div>

        <button className="md:hidden rounded-lg border border-border px-3 py-2 text-sm" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu">
          Menu
        </button>
      </div>

      <div id="mobile-nav" hidden={!open} className="md:hidden border-t border-border/60 bg-bg-base">
        <div className="container py-3 flex flex-col gap-2">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="py-2 text-text-muted hover:text-white" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/en/contact#contact-form" className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-glow hover:bg-primaryDark">
            Contact Now
          </Link>
        </div>
      </div>
    </header>
  );
}
