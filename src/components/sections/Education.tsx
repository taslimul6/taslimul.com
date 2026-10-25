import { education } from '@/lib/data';
import styles from './Education.module.css';

export function Education() {
  return (
    <section id="education" className={`section ${styles.edu}`} aria-labelledby="edu-heading">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Education</span>
          <h2 id="edu-heading">Academic background</h2>
        </div>

        <div className={styles.list}>
          {education.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.icon} aria-hidden="true">
                <GradCapIcon />
              </div>
              <div className={styles.body}>
                <h3 className={styles.degree}>{item.degree}</h3>
                {item.institution && (
                  <p className={styles.institution}>{item.institution}</p>
                )}
                {item.period && (
                  <time className={styles.period}>{item.period}</time>
                )}
                {item.description && (
                  <p className={styles.desc}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GradCapIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
