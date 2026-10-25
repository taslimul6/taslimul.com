import { skillCategories, Skill } from '@/lib/data';
import styles from './Skills.module.css';

export function Skills() {
  return <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-heading"><div className="container">
    <div className="section-heading"><span className="section-label">Technical Skills</span><h2 id="skills-heading">Technologies &amp; Tools</h2><p>A battle-tested full-stack toolkit spanning modern frontend frameworks, backend architecture, databases, cloud DevOps, and emerging AI automation workflows.</p></div>
    <div className={styles.grid}>{skillCategories.map((cat) => <article key={cat.category} className={styles.card}>
      <div className={styles.categoryHeader}><h3 className={styles.category}>{cat.category}</h3>{cat.isLearning ? <span className={styles.learningBadge}>Active learning</span> : <span className={styles.count}>{cat.items.length} tools</span>}</div>
      <p className={styles.description}>{cat.description}</p>
      <div className={styles.iconGrid} aria-label={`${cat.category}: ${cat.items.map((skill) => skill.name).join(', ')}`}>{cat.items.map((skill) => <span key={skill.name} className={styles.skillIcon} title={`${skill.name}${skill.level ? ` — ${skill.level}` : ''}`} aria-label={`${skill.name}${skill.level ? `, ${skill.level}` : ''}`}><SkillIcon skill={skill} /></span>)}</div>
    </article>)}</div>
  </div></section>;
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.customIcon === 'openai') return <div className={`${styles.iconMark} ${styles.openai}`}>AI</div>;
  if (skill.customIcon === 'n8n') return <div className={`${styles.iconMark} ${styles.n8n}`}>n8n</div>;
  if (skill.customIcon === 'webhook') return <div className={`${styles.iconMark} ${styles.webhook}`}>↪</div>;
  if (skill.icon) return <img src={`https://skillicons.dev/icons?i=${skill.icon}&theme=light`} alt="" className={styles.iconImage} loading="lazy" width={28} height={28} />;
  return <div className={styles.iconFallback}>•</div>;
}
