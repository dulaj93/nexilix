import Link from 'next/link';

export default function CTAButton({ href = '/en/contact#contact-form', children = 'Contact Now' }: { href?: string; children?: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow hover:bg-primaryDark focus-visible:outline-none">
      {children}
    </Link>
  );
}
