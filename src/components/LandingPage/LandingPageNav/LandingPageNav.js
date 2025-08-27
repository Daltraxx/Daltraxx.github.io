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

    return (
      <nav className={styles.nav}>
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
          <li>
            <a
              href="#"
              className={styles.leftNavButton}
              onClick={handlePageChange}
              data-page="about"
              role='button'
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={styles.leftNavButton}
              onClick={handlePageChange}
              data-page="resume"
              role='button'
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#"
              className={styles.rightNavButton}
              onClick={handlePageChange}
              data-page="projects"
              role='button'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className={styles.rightNavButton}
              onClick={handlePageChange}
              data-page="contact"
              role='button'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default LandingPageNav;