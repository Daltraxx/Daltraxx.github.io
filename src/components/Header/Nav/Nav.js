import React from 'react';
import styles from './Nav.module.css';

function Nav({handlePageChange}) {
    return (
        <nav className={styles.nav}>
            <ul>
                <li key="about"><a href="#" className={styles.leftNavButton} onClick={handlePageChange} name="about">About</a></li>
                <li key="resume"><a href="#" className={styles.leftNavButton} onClick={handlePageChange} name="resume">Resume</a></li>
                <li key="projects"><a href="#" className={styles.rightNavButton} onClick={handlePageChange} name="projects">Projects</a></li>
                <li key="contact"><a href="#" className={styles.rightNavButton} onClick={handlePageChange} name="contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;