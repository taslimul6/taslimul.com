import { competencies } from '@/lib/data';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.aside}>
            <span className="section-label">About</span>
            <div className={styles.statGrid}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>Live web apps</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>Full</span>
                <span className={styles.statLabel}>Stack focus</span>
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <h2 id="about-heading" className={styles.heading}>
              Turning practical ideas into<br />
              <em>working digital products.</em>
            </h2>

            <div className={styles.prose}>
              <p>
                My focus as a developer centers on building modern web applications, scalable digital products,
                and useful technology solutions. Rather than building only surface-level websites, I enjoy
                owning the complete cycle—from component architecture and state management to server-rendered
                routes, backend APIs, and database structures.
              </p>
              <p>
                To test and sharpen my skills under real-world conditions, I build and operate independent
                web products. Projects like <strong>DocList-BD</strong>—a bilingual doctor directory web app
                serving daily users in Bangladesh—and <strong>eStorefy</strong> have given me firsthand
                experience solving real engineering challenges: bilingual routing, static generation with dynamic
                filtering, structured data for SEO, and performance optimization for varied bandwidth conditions.
              </p>
              <p>
                I am actively integrating modern AI tools and workflow automation into my engineering process.
                By working with the OpenAI API, webhook pipelines, and tools like n8n, I focus on practical AI
                integration that adds genuine utility to web products rather than superficial decoration.
              </p>
            </div>

            <div className={styles.competenciesBlock}>
              <h3 className={styles.competenciesTitle}>Core Competencies</h3>
              <ul className={styles.competenciesGrid} role="list">
                {competencies.map((comp) => (
                  <li key={comp} className={styles.competencyItem}>
                    <CheckIcon />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={styles.checkIcon}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
