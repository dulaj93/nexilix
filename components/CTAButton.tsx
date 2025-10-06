'use client';

import Link, { type LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type Href = LinkProps<any>['href'];

export default function CTAButton({
  href = { pathname: '/en/contact', hash: 'contact-form' } as const,
  children = 'Contact Now',
}: {
  href?: Href;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow hover:bg-primaryDark focus-visible:outline-none"
    >
      {children}
    </Link>
  );
}
