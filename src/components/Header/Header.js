import React from 'react';
import Nav from './Nav/Nav';
import styles from './Header.module.css';

function Header({handlePageChange}) {
    return (
        <header>
            <h1 className={styles.heading}>Dalton Pettus</h1>
            <Nav handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;