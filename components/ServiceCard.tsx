'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  summary: string;
  href: string;
};

export default function ServiceCard({ title, summary, href }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-colors" role="group">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-text-muted">{summary}</p>
        <Link
          href={href as Route}
          className="mt-3 inline-block text-sm text-text-muted group-hover:text-white hover:text-white"
        >
          Learn more ->
        </Link>
      </div>
    </motion.div>
  );
}
