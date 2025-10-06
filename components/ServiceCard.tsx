'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, summary, href }: { title: string; summary: string; href: string }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{summary}</p>
      <Link href={href} className="mt-3 inline-block text-sm text-text-muted hover:text-white">Learn more →</Link>
    </motion.div>
  );
}
