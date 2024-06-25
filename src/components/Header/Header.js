import React from 'react';
import Nav from './Nav/Nav';
import SocialLinks from './SocialLinks/SocialLinks';
import styles from './Header.module.css';

function Header({handlePageChange, currentPage}) {
    return (
        <header>
            <div className={styles.heading}>
                <div className={styles.headingSideDiv}>
                </div>
                <div className={styles.headingText}>
                    <h1>Dalton Pettus</h1>
                </div>
                <div className={styles.headingSideDiv}>
                    <SocialLinks />
                </div>
            </div>
            <Nav handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}

export default Header;