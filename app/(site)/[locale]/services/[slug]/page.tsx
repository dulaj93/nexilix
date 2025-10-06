import { services } from '@/content/services';
import Section from '@/components/Section';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default function ServiceDetail({ params }: Props) {
  const s = services.find(x => x.slug === params.slug);
  if (!s) return notFound();
  return (
    <Section title={s.title} subtitle={s.summary}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="font-medium text-white">What you get</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-text-muted space-y-1">
            {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <h4 className="font-medium text-white">Process</h4>
          <ol className="mt-2 flex flex-wrap gap-2 text-sm text-text-muted">
            {s.process.map((p, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="rounded-full border border-border/60 px-2 py-1">{i+1}</span> {p}
                {i < s.process.length - 1 && <span className="mx-1 text-text-dim">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
