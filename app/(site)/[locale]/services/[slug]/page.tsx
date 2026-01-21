import { services } from '@/content/services';
import { projects } from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default function ServiceDetail({ params }: Props) {
  const s = services.find(x => x.slug === params.slug);
  if (!s) return notFound();
  const relatedProjects = projects.filter((project) => project.services.includes(s.slug));
  return (
    <>
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
                  <span className="rounded-full border border-border/60 px-2 py-1">{i + 1}</span> {p}
                {i < s.process.length - 1 && <span className="mx-1 text-text-dim">-&gt;</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section title="Related projects" subtitle="Examples that use this service.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                topic={project.topic}
                summary={project.summary}
                image={project.images[0]}
                href={`/en/projects/${project.slug}`}
              />
            ))}
          </div>
          <div className="mt-4">
            <Link href="/en/projects" className="text-sm text-text-muted hover:text-white">
              View full portfolio -&gt;
            </Link>
          </div>
        </Section>
      )}
    </>
  );
}
