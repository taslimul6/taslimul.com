import { additionalExperience } from '@/lib/data';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.exp}`} aria-labelledby="exp-heading">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Secondary Background</span>
          <h2 id="exp-heading">Additional technical experience</h2>
          <p>
            Earlier website development experience that informs my engineering perspective.
            Full-stack application development remains my primary focus.
          </p>
        </div>

        <div className={styles.containerBox}>
          {additionalExperience.map((item, i) => (
            <article key={i} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.areaTitle}>{item.area}</h3>
              </div>
              <p className={styles.desc}>{item.description}</p>
              <ul className={styles.highlights} role="list">
                {item.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <CheckIcon />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
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
