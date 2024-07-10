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
                        Though I started with and attained a solid grasp of Python, once I finally committed to seeking a job in web development, I switched gears to mastering Javascript and a littany of related skills.
                        I know it can be done, but programming strictly on the side was torturously slow.
                        The concepts and exercises weren't difficult, but I still felt myself waiting for the larger picture to come together.
                        It wasn't until I had several free months to spend honing the skills I had accumulated that I finally came to feel confident in my abilities,
                        as well as my capacity to contribute to a real team.
                        </p>;
            case '03':
                return <p>
                        I never realized the paucity of my tech exposure growing up until I started working in a tech company office.
                        There was a stark contrast between me and the other QA workers, and much more so the programmers.
                        I didn't know a single keyboard shortcut, even rudimentary ones like copy and paste.
                        However, my competencies quickly improved, and my interest in diving deeper into software was first sparked.
                        </p>;
            case '04':
                return <p>And also my dogs.</p>;
            case '05':
                return <p>I thought all I had to do was go to college.</p>;
            default:
                return <p>Click a bullet point to display more information!</p>;
            
        }
    }

    return (
        <section className={styles.factsContainer}>
            <div className={styles.half}>
                <div className='bullet-points'>
                    <h3>The Bullet Points</h3>
                    <ul>
                        <li className={verbosity >= 25 ? '' : styles.hide}><span id='01' onClick={handleClick}>Began learning first program language, Python, in May of 2020.</span></li>
                        <li className={verbosity >= 30 ? '' : styles.hide}><span id='02' onClick={handleClick}>Started studying programming in earnest* while working in QA from 2021 to 2024.</span></li>
                        <li className={verbosity >= 35 ? '' : styles.hide}><span id='03' onClick={handleClick}>Knew hardly a thing about computers until his first QA job in 2018.</span></li>
                        <li className={verbosity >= 40 ? '' : styles.hide}><span id='04' onClick={handleClick}>Four loves in this world are fitness, books, video games, and - of course - programming.</span></li>
                        <li className={verbosity >= 45 ? '' : styles.hide}><span id='05' onClick={handleClick}>Excelled in academics growing up, but didn't discover any viable or enticing career paths until beginning to learn to code.</span></li>
                    </ul>
                </div>
            </div>
            <div className={verbosity >= 50 ? styles.half : styles.hide}>
                <div className={styles.factsExtraInfo}>
                    <h3>More Information</h3>
                    {getExtraInfo()}
                </div>
            </div>
        </section>
    );
}

export default QuickFacts;