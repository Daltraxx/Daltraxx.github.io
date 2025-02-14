import React, { useState } from 'react';
import styles from './QuickFacts.module.css';

function QuickFacts({ verbosity }) {
    const [fact, setFact] = useState(null);

    const handleClick = ({ target }) => {
        //remove highlighting of previous fact if there is one
        if (fact) {
            //console.log(document.getElementById(fact));
            document.getElementById(fact).style = '';
        }

        //continue to highlight currently selected fact
        target.style.backgroundColor = 'var(--gray-300)';
        
        
        //set new fact
        setFact(prev => target.id);
    }

    //render More Infromation conditionally based on currently selected fact
    const getExtraInfo = () => {
        switch (fact) {
            case '01':
                return <p>
                        Unsure of what to choose as a career path after college, I dabbled with the idea of pursuing economics. 
                        Part of this actually entailed learning to code, with Python being an especially popular tool for economic research and data analysis.
                        My enthrallment with economics didn't last, but with the art of programming at least somewhat demystified, my burgeoning interest in software would only grow since then.
                        </p>;
            case '02':
                return <p>
                        Though I started with and attained a solid grasp of Python, once I finally committed to seeking a career in web development, I switched gears to mastering Javascript and a catalogue of related skills.
                        I know it can be done, but programming strictly on the side was torturously slow.
                        The concepts and exercises weren't difficult, but I still felt myself waiting for the larger picture to come together.
                        It wasn't until dedicated myself fully to working as a software engineer that I finally came to feel confident in my abilities,
                        as well as my capacity to contribute to a real team.
                        </p>;
            case '03':
                return <p>
                        I always want to work towards being within the vanguard of my field, exploring new technologies and pushing them forward.
                        Much of this stems from my admiration of past inventors and innovators, from Babbage and Lovelace
                        to the pioneers of the computing and internet revolutions. I'll always work to emulate these greats,
                        to be a force of creation and progress in the world.
                        </p>;
            case '04':
                return <p>
                        Personal development and self-actualization are overarching obsessions of mine.
                        I follow a manicured routine devoted to these aspirations, a few daily practices of which are meditation, journaling, reading, and exercise.
                        I am also an avid practitioner of the creed that one should cognitively challenge themselves with code every day.
                        Video games have also been near and dear to my heart since childhood, and were the sole thread of my interest in software growing up as I fantasized about making my own.
                        </p>;
            case '05':
                return <p>
                        I have been enthralled with the art of creation since I was a child. 
                        This was often expressed in writing, which I still do, but I never found a way in which this passion could align with a career.
                        Upon graduating university, I found myself in a state of limbo, until I discovered software development.
                        Now I lament that I had not been introduced to this field as early as possible.
                        It happily dominates all my time, combining my loves of learning and creating, of fine-tuning until something is exactly as I want it and watching it come to life.
                        </p>;
            default:
                return <p>Click a bullet point to display more information!</p>;
            
        }
    }

    return (
        <section className={styles.factsContainer}>
            <section className={styles.factsHalf}>
                <div className={`bullet-points ${styles.bulletPointsContainer}`}>
                    <h3>The Bullet Points</h3>
                    <ul>
                        <li className={verbosity >= 25 ? '' : styles.factsHide}><span id='01' onClick={handleClick}>Began learning first program language, Python, in May of 2020.</span></li>
                        <li className={verbosity >= 30 ? '' : styles.factsHide}><span id='02' onClick={handleClick}>Started studying programming in earnest* while working in QA from 2021 to 2024.</span></li>
                        <li className={verbosity >= 35 ? '' : styles.factsHide}><span id='03' onClick={handleClick}>Deep interest in working with AI tools and progressing the development of the field itself.</span></li>
                        <li className={verbosity >= 40 ? '' : styles.factsHide}><span id='04' onClick={handleClick}>Passions include fitness, reading and writing, video games, and - of course - software engineering.</span></li>
                        <li className={verbosity >= 45 ? '' : styles.factsHide}><span id='05' onClick={handleClick}>Programming is my outlet for expressing my creativity and detail-obsessed nature.</span></li>
                    </ul>
                </div>
            </section>
            <section className={verbosity >= 50 ? styles.factsHalf : `${styles.factsHalf} ${styles.factsHide}`}>
                <div className={styles.factsExtraInfoContainer}>
                    <h3>More Information</h3>
                    <section className={styles.factsExtraInfoText}>
                        {getExtraInfo()}
                    </section>
                </div>
            </section>
        </section>
    );
}

export default QuickFacts;