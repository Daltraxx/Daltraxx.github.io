import React from 'react';
import styles from './LandingPageNav.module.css';

function LandingPageNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li key="about">About</li>
                <li key="resume">Resume</li>
                <li key="projects">Projects</li>
                <li key="contact">Contact</li>
            </ul>
        </nav>
    )
}

export default LandingPageNav;