import React from 'react';
import styles from './About.module.css';

import QuickFacts from './QuickFacts/QuickFacts';

function About() {
    return (
        <section className={styles.aboutContainer}>
            <h2>About</h2>
            <QuickFacts />
            <section className={styles.lifeStoryContainer}>
                <h3>Life Story</h3>
                <div className={styles.lifeStoryText}>
                    <p>Hello, there The angel from my nightmare The shadow in the background of the morgue The unsuspecting victim Of darkness in the valley We can live like Jack and Sally if we want</p>
                    <p>Where you can always find me And we'll have Halloween on Christmas And in the night, we'll wish this never ends We'll wish this never ends</p>
                    <p>Where are you and I'm so sorry I cannot sleep, I cannot dream tonight I need somebody and always This sick, strange darkness Comes creeping on so haunting everytime</p>
                    <p>And as I stared I counted the webs from all the spiders Catching things and eating their insides Like indecision to call you and hear your voice of treason Will you come home and stop this pain tonight? Stop this pain tonight</p>
                </div>
            </section>
        </section>
    );
}

export default About;