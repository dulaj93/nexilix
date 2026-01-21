import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/content/projects';

export const metadata = {
  title: 'Portfolio | Projects and Case Studies',
  description: 'Explore selected automation projects across IoT, industrial automation, electronics, and software.',
};

export default function ProjectsPage() {
  return (
    <>
      <Section title="Portfolio" subtitle="Selected projects across automation, electronics, and software.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
      </Section>
    </>
  );
}
