import React from 'react';
import styles from './Bio.module.css';

function Bio({ verbosity }) {
    return (
        <section className={styles.bioContainer}>
            <h3 className={verbosity < 55 ? styles.hide : ''}>Longer Bio</h3>
            <section className={styles.bioText}>
                <section className={verbosity < 60 ? styles.none : styles.bioCol}>
                    <div className={verbosity < 65 ? styles.none : styles.bioParagraph}>
                        <p>Hello, there The angel from my nightmare The shadow in the background of the morgue The unsuspecting victim Of darkness in the valley We can live like Jack and Sally if we want</p>
                    </div>
                    <div className={verbosity < 70 ? styles.none : styles.bioParagraph}>
                        <p>Where you can always find me And we'll have Halloween on Christmas And in the night, we'll wish this never ends We'll wish this never ends</p>
                    </div>
                </section>
                <section className={verbosity < 75 ? styles.none : styles.bioCol}>
                    <div className={verbosity < 80 ? styles.none : styles.bioParagraph}>
                        <p>Hello, there The angel from my nightmare The shadow in the background of the morgue The unsuspecting victim Of darkness in the valley We can live like Jack and Sally if we want</p>
                    </div>
                    <div className={verbosity < 85 ? styles.none : styles.bioParagraph}>
                        <p>Hello, there The angel from my nightmare The shadow in the background of the morgue The unsuspecting victim Of darkness in the valley We can live like Jack and Sally if we want</p>
                    </div>
                </section>
                <section className={verbosity < 90 ? styles.none : styles.bioCol}>
                    <div className={verbosity < 95 ? styles.none : styles.bioParagraph}>
                        <p>Hello, there The angel from my nightmare The shadow in the background of the morgue The unsuspecting victim Of darkness in the valley We can live like Jack and Sally if we want</p>
                    </div>
                    <div className={verbosity < 100 ? styles.none : styles.bioParagraph}>
                        <p>And as I stared I counted the webs from all the spiders Catching things and eating their insides Like indecision to call you and hear your voice of treason Will you come home and stop this pain tonight? Stop this pain tonight</p>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Bio;

//fix classNames