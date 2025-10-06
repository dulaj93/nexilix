'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-bg-deep/95 backdrop-blur md:hidden transition-transform ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container py-3">
        <Link href="/en/contact#contact-form" className="block w-full text-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white shadow-glow hover:bg-primaryDark">
          Contact Now
        </Link>
      </div>
    </div>
  );
}
