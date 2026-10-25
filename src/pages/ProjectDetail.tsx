import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '@/lib/data';
import styles from './ProjectDetail.module.css';

const stackIconMap: Record<string, string> = {
  'Next.js': 'nextjs',
  'TypeScript': 'ts',
  'React': 'react',
  'Tailwind CSS': 'tailwind',
  'Vercel': 'vercel',
  'Node.js': 'nodejs',
  'MongoDB': 'mongodb',
  'PostgreSQL': 'postgres',
  'Supabase': 'supabase',
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Case Study | Taslimul Hasan`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const otherProject = projects.find((p) => p.slug !== slug);

  return (
    <div className={styles.page}>
      {/* ─── Hero banner ─────────────────────────────── */}
      <div className={styles.banner} style={{ background: project.coverColor }}>
        <div className={`container ${styles.bannerInner}`}>
          <Link to="/#projects" className={styles.back}>
            <BackIcon /> All projects
          </Link>
          <div className={styles.bannerMetaRow}>
            <span className={styles.bannerCategory}>{project.category}</span>
            <span className={styles.bannerTypeBadge}>{project.projectType}</span>
          </div>
          <h1 className={styles.bannerTitle}>{project.title}</h1>
          <p className={styles.bannerTagline}>{project.tagline}</p>

          <div className={styles.bannerActions}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
            >
              <ExternalIcon /> Visit live site
            </a>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.actionBtnGhost}`}
              >
                <GitHubIcon /> View repository
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ─── Content ─────────────────────────────────── */}
      <div className="container">
        <div className={styles.layout}>
          {/* Main content */}
          <article className={styles.main}>
            <Section title="Overview">
              <p>{project.overview}</p>
            </Section>

            <Section title="My role">
              <p>{project.role}</p>
            </Section>

            <Section title="Key features">
              <ul className={styles.featureList} role="list">
                {project.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <CheckIcon /> <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Technical challenges & solutions">
              <ul className={styles.challengeList} role="list">
                {project.challenges.map((c, i) => (
                  <li key={i} className={styles.challengeItem}>
                    <span className={styles.challengeNum}>{String(i + 1).padStart(2, '0')}</span>
                    <p>{c}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Future improvements">
              <ul className={styles.futureList} role="list">
                {project.futureWork.map((f) => (
                  <li key={f} className={styles.futureItem}>
                    <ArrowRightIcon /> <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Project details</h3>
              <dl className={styles.details}>
                <div className={styles.detailRow}>
                  <dt>Category</dt>
                  <dd>{project.category}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Type</dt>
                  <dd>{project.projectType}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Status</dt>
                  <dd>
                    <span className={styles.liveBadge}>Live</span>
                  </dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Repository</dt>
                  <dd>
                    {project.repoUrl ? (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        Public GitHub
                      </a>
                    ) : (
                      'Private'
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            {project.stats && project.stats.length > 0 && (
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Reported metrics</h3>
                <dl className={styles.details}>
                  {project.stats.map((s) => (
                    <div key={s.label} className={styles.detailRow}>
                      <dt>{s.label}</dt>
                      <dd style={{ fontWeight: 600, color: 'var(--green)' }}>{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Technology stack</h3>
              <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" role="list">
                {project.stack.map((s) => {
                  const icon = stackIconMap[s];
                  return (
                    <li
                      key={s}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {icon && (
                        <img
                          src={`https://skillicons.dev/icons?i=${icon}`}
                          alt=""
                          className="w-3.5 h-3.5 rounded-sm"
                          loading="lazy"
                          width={14}
                          height={14}
                        />
                      )}
                      {s}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Links</h3>
              <div className={styles.linkList}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sideLink}
                >
                  <ExternalIcon /> Live site
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sideLink}
                  >
                    <GitHubIcon /> GitHub repository
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* ─── Next project ─────────────────────────── */}
        {otherProject && (
          <div className={styles.nextProject}>
            <span className={styles.nextLabel}>Next project</span>
            <Link to={`/projects/${otherProject.slug}`} className={styles.nextCard}>
              <div>
                <span className={styles.nextCategory}>{otherProject.category}</span>
                <h3 className={styles.nextTitle}>{otherProject.title}</h3>
                <p className={styles.nextTagline}>{otherProject.tagline}</p>
              </div>
              <div className={styles.nextArrow}>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section
      className={styles.section}
      aria-labelledby={`section-${title.replace(/\s/g, '-').toLowerCase()}`}
    >
      <h2
        id={`section-${title.replace(/\s/g, '-').toLowerCase()}`}
        className={styles.sectionTitle}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function BackIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0, color: 'var(--green)', marginTop: '3px' }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
