import React, { useEffect } from 'react';
import styles from './Footer.module.css';

import ContactLinks from './ContactLinks/ContactLinks';

function Footer({ currentPage }) {

    return (
        <footer className={currentPage === 'contact' ? `${styles.footer} ${styles.absolute}` : `${styles.footer}`}>
            <h3>Dalton Pettus Business Site</h3>
            <ContactLinks />
        </footer>
    )
}

export default Footer;