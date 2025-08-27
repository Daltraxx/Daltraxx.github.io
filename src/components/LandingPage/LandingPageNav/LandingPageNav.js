import styles from './LandingPageNav.module.css';
import { useState, useId, useRef, useLayoutEffect } from 'react';

function LandingPageNav({ handlePageChange }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = useId();

    const menuRef = useRef(null);
    useLayoutEffect(() => {
        if (menuRef.current) {
            const menuElement = menuRef.current;
            const maxHeight = menuOpen ? `${menuElement.scrollHeight}px` : '0px';
            menuElement.style.setProperty('--menu-max-height', maxHeight);
        }
    }, [menuOpen]);


  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navItems = [
    { id: 'about', label: 'About', className: styles.leftNavButton },
    { id: 'resume', label: 'Resume', className: styles.leftNavButton },
    { id: 'projects', label: 'Projects', className: styles.rightNavButton },
    { id: 'contact', label: 'Contact', className: styles.rightNavButton },
  ];

    return (
      <nav className={styles.nav} aria-label='Primary'>
        <button
          type="button"
          className={styles.menuToggleButton}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={toggleMenu}
        >
          {menuOpen ? "Close Menu" : "Open Menu"}
          <span aria-hidden="true">▲</span>
        </button>
        <ul
          id={menuId}
          data-expanded={menuOpen}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          ref={menuRef}
        >
          {navItems.map(({ id, label, className }) => (
            <li key={id}>
              <a
                href="#"
                className={className}
                onClick={handlePageChange}
                data-page={id}
                role="button"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default LandingPageNav;