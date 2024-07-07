import React from 'react';
import styles from './Nav.module.css';

//add logic for highlighting current page

function Nav({ handlePageChange, currentPage }) {
    const getClassName = (page) => page === currentPage ? `${styles.navButton} ${styles.active}` : `${styles.navButton} ${styles.navButtonHover}`;
    


    return (
        <nav className={styles.nav}>
            <ul>
                <li key="about"><a href="#" className={getClassName("about")} onClick={handlePageChange} name="about">About</a></li>
                <li key="resume"><a href="#" className={getClassName("resume")} onClick={handlePageChange} name="resume">Resume</a></li>
                <li key="projects"><a href="#" className={getClassName("projects")} onClick={handlePageChange} name="projects">Projects</a></li>
                <li key="contact"><a href="#" className={getClassName("contact")} onClick={handlePageChange} name="contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;