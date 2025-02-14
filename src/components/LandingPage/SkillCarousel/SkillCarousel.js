import React from 'react';
import styles from './SkillCarousel.module.css';

import skills from '../../../resources/skills';


function SkillCarousel({ handlePageChange }) {
    //create arrays for displaying "proficient in" and "experience with" icons
    const skillIconsDisplay = [];
    const experienceIconsDisplay = [];
    for (let skill of skills) {
        if (skill.proficiency === 'skilled') {
            skillIconsDisplay.push
            (
                <div className={styles.iconContainer} key={skill.name}>
                    <a href='#skills' onClick={handlePageChange}><img src={skill.src} alt={skill.alt} title={skill.name} name='resume' /></a>
                </div>
            );
        } else {
            experienceIconsDisplay.push
            (
                <div className={styles.iconContainer} key={skill.name}>
                    <a href='#skills' onClick={handlePageChange}><img src={skill.src} alt={skill.alt} title={skill.name} name='resume' /></a>
                </div>
            );
        }  
    };
    
    return (
        <section className={styles.skillsSection}>
            <div className={styles.container}>
                <h2>Proficient in:</h2>
                <div className={styles.iconDisplay}>
                    {skillIconsDisplay}
                </div>
            </div>
            <div className={styles.container}>
                <h2>Experience with:</h2>
                <div className={styles.iconDisplay}>
                    {experienceIconsDisplay}
                </div>
            </div>
        </section>
    )
}

export default SkillCarousel;