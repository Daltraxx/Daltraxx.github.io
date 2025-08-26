import styles from './LandingPageNav.module.css';
import { useState, useId, useRef, useEffect } from 'react';

function LandingPageNav({ handlePageChange }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = useId();

    const menuRef = useRef(null);
    useEffect(() => {
        if (menuRef.current) {
            const menuElement = menuRef.current;
            const maxHeight = menuOpen ? `${menuElement.scrollHeight}px` : '0';
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
          hidden={!menuOpen}
          ref={menuRef}
        >
          <li>
            <a
              href="#!"
              className={styles.leftNavButton}
              onClick={handlePageChange}
              name="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#!"
              className={styles.leftNavButton}
              onClick={handlePageChange}
              name="resume"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#!"
              className={styles.rightNavButton}
              onClick={handlePageChange}
              name="projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#!"
              className={styles.rightNavButton}
              onClick={handlePageChange}
              name="contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default LandingPageNav;