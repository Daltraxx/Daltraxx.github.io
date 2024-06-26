import React from 'react';
import styles from './About.module.css';

import QuickFacts from './QuickFacts/QuickFacts';

function About() {
    return (
        <section className={styles.aboutContainer}>
            <h2>About</h2>
            <QuickFacts />
            <div className={styles.lifeStory}>
                <h3>Life Story</h3>
            </div>
        </section>
    );
}

export default About;