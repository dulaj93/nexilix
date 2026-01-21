'use client';

import Link, { type LinkProps } from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  summary: string;
  href: LinkProps<unknown>['href']; // typedRoutes-friendly
};

export default function ServiceCard({ title, summary, href }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-colors" role="group">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-text-muted">{summary}</p>
        <Link
          href={href}
          className="mt-3 inline-block text-sm text-text-muted group-hover:text-white hover:text-white"
        >
          Learn more ->
        </Link>
      </div>
    </motion.div>
  );
}
