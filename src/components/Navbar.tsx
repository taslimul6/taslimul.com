import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '@/lib/data';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Handle hash scrolling if navigating from another page
  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={`${styles.nav} container`} aria-label="Main navigation">
        <Link to="/" className={styles.logo} aria-label={`${profile.name} — home`}>
          <span className={styles.logoInitials}>TH</span>
          <span className={styles.logoName}>{profile.name}</span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={styles.link}
                onClick={() => handleNavClick(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
          Contact Me
        </a>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul role="list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={styles.mobileLink}
                  onClick={() => handleNavClick(l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
