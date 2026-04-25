import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{
        fontFamily: 'system-ui, sans-serif',
        background: '#0a0a0a',
        color: '#f5f5f5',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        margin: 0,
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '4rem', margin: 0, color: '#8b5cf6' }}>404</h1>
          <p style={{ marginTop: '1rem', color: '#a0a0a0' }}>Page not found</p>
          <Link href="/" style={{ color: '#8b5cf6', display: 'inline-block', marginTop: '1.5rem' }}>
            ← Back home
          </Link>
        </div>
      </body>
    </html>
  );
}
