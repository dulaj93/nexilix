import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import { services } from '@/content/services';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section title="Services" subtitle="Built for reliability, measured by impact.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <ServiceCard key={s.slug} title={s.title} summary={s.value} href={`/en/services/${s.slug}`} />
          ))}
        </div>
      </Section>
      <Section title="Contact Now" subtitle="Tell us your goals. We’ll review requirements and send a tailored plan and quote.">
        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
