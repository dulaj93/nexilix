'use client';

import { useState } from 'react';

type State = {
  status: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
};

export default function ContactForm() {
  const [state, setState] = useState<State>({ status: 'idle' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if ((formData.get('companyWebsite') as string)?.length) {
      // honeypot
      setState({ status: 'success', message: "Thanks! We'll review and respond within 24 hours." });
      form.reset();
      return;
    }
    setState({ status: 'sending' });
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Failed');
      setState({ status: 'success', message: "Thanks! We'll review and respond within 24 hours." });
      form.reset();
    } catch (err) {
      setState({ status: 'error', message: 'Something went wrong. You can also email us: info@example.com' });
    }
  }

  return (
    <form id="contact-form" onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-muted">Name*</label>
          <input name="name" required className="mt-1 w-full rounded-xl border border-border bg-bg-base p-3" aria-required />
        </div>
        <div>
          <label className="block text-sm text-text-muted">Work Email*</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-border bg-bg-base p-3" aria-required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-muted">Company</label>
          <input name="company" className="mt-1 w-full rounded-xl border border-border bg-bg-base p-3" />
        </div>
        <div>
          <label className="block text-sm text-text-muted">Phone</label>
          <input name="phone" className="mt-1 w-full rounded-xl border border-border bg-bg-base p-3" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-text-muted">Service Interest</label>
        <select name="interest" multiple className="mt-1 w-full rounded-xl border border-border bg-bg-base p-3">
          <option>IoT</option>
          <option>Electronics</option>
          <option>Industrial</option>
          <option>Software/Web</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-text-muted">Message*</label>
        <textarea name="message" required rows={4} className="mt-1 w-full rounded-xl border border-border bg-bg-base p-3" aria-required />
      </div>

      {/* Honeypot field (hidden visually) */}
      <div className="sr-only" aria-hidden>
        <label>Company Website</label>
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={state.status === 'sending'} className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow hover:bg-primaryDark disabled:opacity-60">
        {state.status === 'sending' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {state.message && (
        <p className={`text-sm ${state.status === 'error' ? 'text-warn' : 'text-text-muted'}`} role="status" aria-live="polite">
          {state.message}
        </p>
      )}

      <p className="text-xs text-text-dim">
        Prefer email? <a className="underline hover:text-white" href="mailto:info@example.com">info@example.com</a>
      </p>
    </form>
  );
}
