import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="section-eyebrow">404</p>
      <h1 className="hero-name-display mt-3 text-5xl text-ink dark:text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-inkMuted dark:text-white/55">The page you were looking for does not exist or has moved.</p>
      <Link href="/" className="btn-filled-pill mt-8">Back home</Link>
    </main>
  );
}
