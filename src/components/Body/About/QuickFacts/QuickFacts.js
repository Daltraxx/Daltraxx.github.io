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
        target.style.backgroundColor = 'hsla(0, 0%, 0%, .3)';
        
        //set new fact
        setFact(prev => target.id);
    }

    //render More Infromation conditionally based on currently selected fact
    const getExtraInfo = () => {
        switch (fact) {
            case '01':
                return <p>Python</p>;
            case '02':
                return <p>"Earnest"</p>;
            case '03':
                return <p>Ctrl C and ctrl V meant nothing to me.</p>;
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
            <div className={verbosity >= 25 ? styles.half : styles.hide}>
                <div className='bullet-points'>
                    <h3>The Bullet Points</h3>
                    <ul>
                        <li><span id='01' onClick={handleClick}>Began learning first program language, Python, in May of 2020.</span></li>
                        <li><span id='02' onClick={handleClick}>Started studying programming in earnest* while working in QA from 2021 to 2024.</span></li>
                        <li><span id='03' onClick={handleClick}>Knew hardly a thing about computers until his first QA job in 2018.</span></li>
                        <li><span id='04' onClick={handleClick}>His four loves in this world are fitness, books, video games, and programming.</span></li>
                        <li><span id='05' onClick={handleClick}>Excelled in academics growing up, but didn't discover any viable or enticing career paths until learning to code.</span></li>
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