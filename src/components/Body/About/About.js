import React, { useState } from 'react';
import styles from './About.module.css';

import QuickFacts from './QuickFacts/QuickFacts';
import Bio from './Bio/Bio';
import VerbositySlider from './VerbositySlider/VerbositySlider';

function About() {
    const [verbosity, setVerbosity] = useState(50);
    const handleChange = ({ target }) => {
        //console.log(target.value);
        setVerbosity(prev => target.value);
    }

    const emojiImg = <img src="/assets/images/zipper-mouth-emoji.png" className={styles.emoji} name="zipped mouth emoji" alt="zipped mouth emoji"/>;

    //render less or more content depending on verbosity
    return (
        <section className={styles.aboutContainer}>
            <h2 className='page-header'>About</h2>
            <VerbositySlider handleChange={handleChange} verbosity={verbosity}/>
            {verbosity <= 10 && emojiImg}
            {verbosity >= 20 && <QuickFacts verbosity={verbosity} />}
            <Bio verbosity={verbosity} />
        </section>
    );
}

export default About;