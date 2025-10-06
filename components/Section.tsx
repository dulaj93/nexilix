export default function Section({ title, subtitle, children }: { title?: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="py-14">
      <div className="container">
        {title && <h2 className="text-2xl font-semibold text-white">{title}</h2>}
        {subtitle && <p className="mt-2 max-w-2xl text-text-muted">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
