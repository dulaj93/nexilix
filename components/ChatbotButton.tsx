'use client';
import { useEffect, useState } from 'react';

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const pref = window.localStorage.getItem('chat-open');
    setOpen(pref === '1');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('chat-open', open ? '1' : '0');
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open && (
        <div className="mb-2 w-80 rounded-2xl border border-border/60 bg-card p-4 text-sm text-text-muted shadow">
          <p className="mb-2 font-medium text-white">Assistant</p>
          <div className="rounded-xl border border-border/60 bg-bg-base p-3">Hi! I’m a placeholder. Ask about services or request a quote.</div>
        </div>
      )}
      <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="rounded-full bg-primary p-3 text-white shadow-glow hover:bg-primaryDark focus-visible:outline-none" aria-label="Open chat">
        💬
      </button>
    </div>
  );
}
