import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        paddingTop: '108px',
        gap: '24px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '6rem',
          fontWeight: 500,
          color: 'var(--ivory-border)',
          lineHeight: 1,
        }}
      >
        404
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          fontWeight: 500,
          color: 'var(--charcoal)',
        }}
      >
        Page not found
      </h1>
      <p style={{ color: 'var(--charcoal-muted)', maxWidth: '40ch' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  );
}
