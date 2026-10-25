import { Link } from 'react-router-dom';
import { projects } from '@/lib/data';
import styles from './Projects.module.css';

const stackIconMap: Record<string, string> = {
  'Next.js': 'nextjs',
  'TypeScript': 'ts',
  'React': 'react',
  'Tailwind CSS': 'tailwind',
  'Vercel': 'vercel',
};

export function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Featured Projects</span>
          <h2 id="projects-heading">Independent web products</h2>
          <p>
            Self-initiated practice projects built and maintained to test architecture,
            performance, and SEO under live production traffic.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article key={project.slug} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              {/* Visual preview */}
              <div className={styles.preview} style={{ '--card-color': project.coverColor } as React.CSSProperties}>
                <ProjectPreview slug={project.slug} color={project.coverColor} title={project.title} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.badgeRow}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.typeBadge}>{project.projectType}</span>
                </div>

                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.tagline}>{project.tagline}</p>

                {/* CV traffic stats */}
                {project.stats && project.stats.length > 0 && (
                  <div className={styles.statsRow}>
                    {project.stats.map((s) => (
                      <div key={s.label} className={styles.statChip}>
                        <span className={styles.statVal}>{s.value}</span>
                        <span className={styles.statLbl}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={styles.stackIcons} aria-label={`Technology stack: ${project.stack.join(', ')}`}>
                  {project.stack.map((s) => {
                    const icon = stackIconMap[s];
                    return (
                      <span
                        key={s}
                        className={styles.stackIcon}
                        title={s}
                        aria-label={s}
                      >
                        {icon && (
                          <img
                            src={`https://skillicons.dev/icons?i=${icon}`}
                            alt=""
                            className={styles.stackIconImage}
                            loading="lazy"
                            width={14}
                            height={14}
                          />
                        )}
                      </span>
                    );
                  })}
                </div>

                <div className={styles.cardActions}>
                  <Link to={`/projects/${project.slug}`} className={`btn btn-primary ${styles.caseBtn}`}>
                    Case study
                    <ArrowIcon />
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-outline ${styles.liveBtn}`}
                  >
                    Live site
                    <ExternalIcon />
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoLink}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ slug, color, title }: { slug: string; color: string; title: string }) {
  if (slug === 'doclist-bd') {
    return (
      <div className={styles.previewInner} style={{ background: color }}>
        <div className={styles.previewMockup}>
          <div className={styles.mockBar}>
            <span className={styles.mockDot} style={{ background: '#ef4444' }} />
            <span className={styles.mockDot} style={{ background: '#f59e0b' }} />
            <span className={styles.mockDot} style={{ background: '#22c55e' }} />
            <span className={styles.mockUrl}>doclist-bd.com</span>
          </div>
          <div className={styles.mockBody}>
            <div
              className={styles.mockLine}
              style={{ width: '60%', height: 14, background: 'rgba(255,255,255,0.7)', borderRadius: 4 }}
            />
            <div
              className={styles.mockLine}
              style={{ width: '40%', height: 10, background: 'rgba(255,255,255,0.45)', borderRadius: 4 }}
            />
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  style={{
                    flex: 1,
                    height: 60,
                    background: 'rgba(255,255,255,0.12)',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.previewLabel}>{title}</div>
      </div>
    );
  }
  return (
    <div className={styles.previewInner} style={{ background: color }}>
      <div className={styles.previewMockup}>
        <div className={styles.mockBar}>
          <span className={styles.mockDot} style={{ background: '#ef4444' }} />
          <span className={styles.mockDot} style={{ background: '#f59e0b' }} />
          <span className={styles.mockDot} style={{ background: '#22c55e' }} />
          <span className={styles.mockUrl}>estorefy.net</span>
        </div>
        <div className={styles.mockBody}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div
                className={styles.mockLine}
                style={{ width: '75%', height: 14, background: 'rgba(255,255,255,0.75)', borderRadius: 4 }}
              />
              <div
                className={styles.mockLine}
                style={{
                  width: '55%',
                  height: 10,
                  background: 'rgba(255,255,255,0.45)',
                  borderRadius: 4,
                  marginTop: 8,
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 28,
                  background: 'rgba(255,255,255,0.25)',
                  borderRadius: 6,
                  marginTop: 14,
                }}
              />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 18 }}>
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                style={{
                  height: 40,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.previewLabel}>{title}</div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function ExternalIcon() {
  return (
    <svg
      width="13"
      height="13"
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
