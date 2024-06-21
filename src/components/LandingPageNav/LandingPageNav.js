import React from 'react';
import styles from './LandingPageNav.module.css';
import './LandingPageNav.module.css';

function LandingPageNav() {
    return (
        <nav>
            <ul>
                <li key="about"><a href="#" className={styles.leftNavButton}>About</a></li>
                <li key="resume"><a href="#" className={styles.leftNavButton}>Resume</a></li>
                <li key="projects"><a href="#" className={styles.rightNavButton}>Projects</a></li>
                <li key="contact"><a href="#" className={styles.rightNavButton}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default LandingPageNav;