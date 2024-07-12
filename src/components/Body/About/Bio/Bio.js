import React from 'react';
import styles from './Bio.module.css';

function Bio({ verbosity }) {
    return (
        <section className={styles.bioContainer}>
            <h3 className={verbosity < 55 ? styles.hide : ''}>Longer Bio</h3>
            <section className={styles.bioText}>
                <section className={verbosity < 60 ? styles.none : styles.bioCol}>
                    <div className={verbosity < 65 ? styles.none : styles.bioParagraph}>
                        <p>
                            I was born in 1994 and grew up in Santee within larger San Diego, California.
                            While I remained relatively tech illiterate until my twenties - my parents were by no means computer enthusiasts - 
                            I excelled in high school and would eventually attend University of San Diego. 
                            For reasons I regret now, I wanted to remain local and forwent exploring a wider variety of schools and locales.
                        </p>
                    </div>
                    <div className={verbosity < 70 ? styles.none : styles.bioParagraph}>
                        <p>
                            I went to college without any related professional aspirations. In fact, I spent the majority of my high school and college years dreaming of becoming a Navy SEAL.
                            It seemed the the ultimate test a person could put themselves through, an irresistable challenge by my assessment. 
                            I majored in political science with a minor in psychology, but had little real-world interest in the topics.
                        </p>
                    </div>
                </section>
                <section className={verbosity < 75 ? styles.none : styles.bioCol}>
                    <div className={verbosity < 80 ? styles.none : styles.bioParagraph}>
                        <p>
                            I graduated in 2016, and - having abandoned my desire to join the Navy - still had almost no notion of what my larger career path should be. 
                            I worked various jobs including at a moving company and as an immigration paralegal, 
                            but eventually accepted work doing QA at a tech company in 2018. This was the first occupation I managed to find some intrinsic reward in.
                        </p>
                    </div>
                    <div className={verbosity < 85 ? styles.none : styles.bioParagraph}>
                        <p>
                            Bereft of any deep background using computers, this was the first of my employments to challenge me in any real way.
                            I learned fast, however, and any challenging aspect was short-lived. I once again became bored with the lack of self-application
                            and worried about my own stymied growth as a result. My burgeoning desire to dive deeper into tech was a response to this growing ennui.
                        </p>
                    </div>
                </section>
                <section className={verbosity < 90 ? styles.none : styles.bioCol}>
                    <div className={verbosity < 95 ? styles.none : styles.bioParagraph}>
                        <p>
                            I first began studying Python in 2020 as part of my interest in economics, 
                            but in time decided that the joy of building things using code was the first vocation to really excite me since my childhood infatuation with joining the SEALs.
                            I pivoted to learning all things computer science, beginning with the practical decision to become fluent with JavaScript.
                            Unfortunately, my studies still had to remain relegated to my off-hours.
                        </p>
                    </div>
                    <div className={verbosity < 100 ? styles.none : styles.bioParagraph}>
                        <p>
                            I continued working in QA up until January of 2024. After leaving that company, 
                            I finally devoted myself fully to mastering the requisite skills to be a contributing member of frontend development.
                            This time has been truly transformative, and while I'd give anything to have discovered this passion in my youth, 
                            it's a revelation to every day professionally engage with thing I want to do - every day.
                        </p>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Bio;

//fix classNames