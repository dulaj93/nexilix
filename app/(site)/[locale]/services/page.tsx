import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import Link from 'next/link';

export const metadata = {
  title: 'Automation Services: IoT, Industrial, Electronics, Software | Get a Quote',
  description: 'Explore our end-to-end automation services: IoT, PLC/SCADA, PCB/firmware, and custom software. Proven process, fast delivery, and measurable ROI.',
};

export default function ServicesPage() {
  return (
    <div>
      <Section title="Our Services" subtitle="Explore offerings and pick what fits your goals.">
        <div className="flex gap-3 overflow-x-auto py-2">
          {services.map(s => (
            <a key={s.slug} href={`#${s.slug}`} className="rounded-full border border-border/60 px-3 py-1 text-sm text-text-muted hover:text-white">{s.title}</a>
          ))}
        </div>
      </Section>
      {services.map(s => (
        <Section key={s.slug} title={s.title} subtitle={s.summary}>
          <div id={s.slug} className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="font-medium text-white">What you get</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-text-muted space-y-1">
                {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <h3 className="mt-6 font-medium text-white">Deliverables</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-text-muted space-y-1">
                {s.deliverables.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h4 className="font-medium text-white">Process</h4>
              <ol className="mt-2 flex flex-wrap gap-2 text-sm text-text-muted">
                {s.process.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="rounded-full border border-border/60 px-2 py-1">{i + 1}</span> {p}
                    {i < s.process.length - 1 && <span className="mx-1 text-text-dim">-></span>}
                  </li>
                ))}
              </ol>
              <h4 className="mt-6 font-medium text-white">Tooling</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {s.tools.map((t, i) => <span key={i} className="rounded-full border border-border/60 px-2 py-1 text-xs text-text-muted">{t}</span>)}
              </div>
              <h4 className="mt-6 font-medium text-white">Results</h4>
              <div className="mt-2 flex gap-2">
                {s.kpis.map((k, i) => <span key={i} className="rounded-xl bg-primary/10 px-2 py-1 text-xs text-primary">{k}</span>)}
              </div>
              <div className="mt-6">
                <Link href={{ pathname: '/en/contact', hash: 'contact-form' }} className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-glow hover:bg-primaryDark">Get a tailored quote</Link>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="font-medium text-white">Related projects</h4>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {projects
                .filter((project) => project.services.includes(s.slug))
                .map((project) => (
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
                View full portfolio ->
              </Link>
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
}
