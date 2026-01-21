import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const relatedServices = services.filter((s) => project.services.includes(s.slug));

  return (
    <>
      <Section title={project.title} subtitle={project.summary}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2 text-xs text-text-dim">
              <span className="rounded-full border border-border/60 px-2 py-1">{project.category}</span>
              <span className="rounded-full border border-border/60 px-2 py-1">{project.topic}</span>
            </div>
            <p className="mt-4 text-sm text-text-muted">{project.description}</p>
            <h3 className="mt-6 font-medium text-white">Key features</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-medium text-white">Results</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.results.map((result, index) => (
                <span key={index} className="rounded-xl bg-primary/10 px-2 py-1 text-xs text-primary">
                  {result}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-40 w-full overflow-hidden rounded-xl border border-border/60 bg-bg-deep">
                <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {relatedServices.length > 0 && (
        <Section title="Related services" subtitle="See how these capabilities map to the project.">
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/en/services/${service.slug}`}
                className="rounded-full border border-border/60 px-3 py-2 text-sm text-text-muted hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
