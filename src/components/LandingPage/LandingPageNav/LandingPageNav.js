import styles from './LandingPageNav.module.css';
import { useState, useId } from 'react';
import clsx from 'clsx';

function LandingPageNav({ handlePageChange }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = useId();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={styles.nav}>
            <button
                type="button"
                className={clsx(styles.menuToggleButton)}
                aria-expanded={menuOpen}
                aria-controls={menuId}
                onClick={toggleMenu}
            >
                {menuOpen ? "Close Menu " : "Open Menu "}
                <span>▲</span>
            </button>
            <ul id={menuId} data-expanded={menuOpen} hidden={!menuOpen}>
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