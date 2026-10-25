import { profile } from '@/lib/data';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.inner}`}>
        {/* Left: text content */}
        <div className={styles.content}>
          <div className={styles.badge}>Available for full-stack projects</div>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.designation}>{profile.designation}</p>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.intro}>{profile.summary}</p>

          <div className={styles.actions}>
            <a href="/#projects" className="btn btn-primary">
              Explore Projects
              <ArrowIcon />
            </a>
            {profile.resumePdf ? (
              <a href={profile.resumePdf} download className="btn btn-outline">
                Download Résumé
              </a>
            ) : (
              <a href="/#contact" className="btn btn-outline" title="Request résumé via contact">
                Download Résumé
              </a>
            )}
            <a href="/#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className={styles.socialRow} aria-label="Social links">
            <a href={`mailto:${profile.email}`} className={styles.socialLink} aria-label="Email">
              <EmailIcon /> {profile.email}
            </a>
            <a
              href={profile.github}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={profile.youtube}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YouTubeIcon /> YouTube
            </a>
          </div>
        </div>

        {/* Right: portrait */}
        <div className={styles.avatarWrap}>
          {profile.photo ? (
            <img
              src={profile.photo}
              alt="Portrait of Taslimul Hasan"
              className={styles.photo}
              width={320}
              height={345}
            />
          ) : (
            <InitialsAvatar />
          )}
          <div className={styles.floatCard}>
            <span className={styles.dot} />
            <span>Open to opportunities</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}

function InitialsAvatar() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
        border: '1px solid #c7d2fe',
        boxShadow: '0 12px 32px rgba(79, 70, 229, 0.12)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 8vw, 6rem)',
          fontWeight: 600,
          color: '#4338ca',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        TH
      </span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
