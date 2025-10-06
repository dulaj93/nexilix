import Section from '@/components/Section';

export const metadata = {
  title: 'About Us | Approach & Certifications',
  description: 'Team, certifications, partners and our approach to delivering reliable automation outcomes.',
};

export default function AboutPage() {
  return (
    <Section title="About Us" subtitle="Trusted engineering with measurable outcomes.">
      <div className="prose prose-invert max-w-none">
        <p>We combine industrial experience with modern software to deliver robust, measurable outcomes. Certified practices and a customer-first approach ensure success from discovery to support.</p>
      </div>
    </Section>
  );
}
