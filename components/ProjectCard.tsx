'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';

type Props = {
  title: string;
  category: string;
  topic: string;
  summary: string;
  href: string;
  image: string;
};

export default function ProjectCard({ title, category, topic, summary, href, image }: Props) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
      <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border/60 bg-bg-deep">
        <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-text-dim">
        <span className="rounded-full border border-border/60 px-2 py-1">{category}</span>
        <span>{topic}</span>
      </div>
      <h3 className="mt-3 text-white font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{summary}</p>
      <Link href={href as Route} className="mt-3 inline-block text-sm text-text-muted hover:text-white">
        View project --&gt;
      </Link>
    </div>
  );
}
