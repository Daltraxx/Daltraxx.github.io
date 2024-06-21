import React from 'react';
import Nav from './Nav/Nav';
import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <h1 className={styles.heading}>Dalton Pettus</h1>
            <Nav />
        </header>
    )
}

export default Header;