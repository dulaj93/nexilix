type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();
const WINDOW_MS = 60_000; // 1 minute
const MAX = 10; // 10 requests / min per IP

export function rateLimit(ip: string | null | undefined): { ok: boolean; remaining: number } {
  const key = ip || 'unknown';
  const now = Date.now();
  let entry = store.get(key);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + WINDOW_MS };
  }
  entry.count += 1;
  store.set(key, entry);
  const remaining = Math.max(0, MAX - entry.count);
  const ok = entry.count <= MAX;
  return { ok, remaining };
}
