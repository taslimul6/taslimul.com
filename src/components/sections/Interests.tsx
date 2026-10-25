import { interests } from '@/lib/data';
import styles from './Interests.module.css';

export function Interests() {
  return (
    <section className={`section ${styles.interests}`} aria-labelledby="interests-heading">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className="section-label">Beyond Code</span>
            <h2 id="interests-heading" className={styles.title}>
              Interests &amp; pursuits
            </h2>
            <p className={styles.subtitle}>
              Personal curiosities and activities that balance and inspire my engineering work.
            </p>
          </div>

          <div className={styles.grid}>
            {interests.map((interest, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}>
                  {i === 0 && <AIIcon />}
                  {i === 1 && <VideoIcon />}
                  {i === 2 && <GardenIcon />}
                </div>
                <p className={styles.text}>{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m10 9 5 3-5 3V9z" />
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22v-9" />
      <path d="M12 13a6 6 0 0 0 6-6c0-2-2-3-3-3a6 6 0 0 0-6 6c0 2 1.5 3 3 3z" />
      <path d="M12 13a6 6 0 0 1-6-6c0-2 2-3 3-3a6 6 0 0 1 6 6c0 2-1.5 3-3 3z" />
    </svg>
  );
}
