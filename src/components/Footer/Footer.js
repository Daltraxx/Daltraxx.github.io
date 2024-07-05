import React from 'react';
import styles from './Footer.module.css';

import ContactLinks from './ContactLinks/ContactLinks';

function Footer() {

    return (
        <footer className={styles.footer}>
            <h3>Dalton Pettus Business Site</h3>
            <ContactLinks />
        </footer>
    )
}

export default Footer;