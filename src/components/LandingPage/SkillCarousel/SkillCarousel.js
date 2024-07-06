import React from 'react';
import styles from './SkillCarousel.module.css';

import { skillIcons, experienceIcons } from './resources/icons';


function SkillCarousel({ handlePageChange }) {
    //create array for displaying "proficient in" icons
    const skillIconsDisplay = [];
    for(let skill of skillIcons) {
        skillIconsDisplay.push
        (
            <div className={styles.iconContainer} key={skill.description}>
                <a href={skill.href} onClick={handlePageChange}><img src={skill.src} alt={skill.description} title={skill.description} name='resume' /></a>
            </div>
        );
    };

    //create array for displaying "experience in" icons
    const experienceIconsDisplay = [];
    for (let experience of experienceIcons) {
        experienceIconsDisplay.push
        (
            <div className={styles.iconContainer} key={experience.description}>
                <a href={experience.href} onClick={handlePageChange}><img src={experience.src} alt={experience.description} title={experience.description} name='resume' /></a>
            </div>
        );
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