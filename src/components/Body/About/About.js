import React from 'react';
import styles from './About.module.css';

import QuickFacts from './QuickFacts/QuickFacts';
import Bio from './Bio/Bio';

function About() {
    return (
        <section className={styles.aboutContainer}>
            <h2>About</h2>
            <QuickFacts />
            <Bio />
        </section>
    );
}

export default About;