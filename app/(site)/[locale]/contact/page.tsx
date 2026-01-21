import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Automation Experts - Get a Proposal',
  description: "Tell us your goals. We'll review requirements and send a tailored automation plan and quote.",
};

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="We reply within 24 hours.">
      <div className="rounded-2xl border border-border/60 bg-card p-6">
        <ContactForm />
      </div>
    </Section>
  );
}
