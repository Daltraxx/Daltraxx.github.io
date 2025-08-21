import styles from './SkillCarousel.module.css';

import skills from '../../../resources/skills';


function SkillCarousel({ handlePageChange }) {
    //create arrays for displaying "proficient in" and "experience with" icons
    const skillIconDisplay = [];
    for (let skill of skills) {
        skillIconDisplay.push(
            <div className={styles.iconContainer} key={skill.name}>
                <a href="#skills" onClick={handlePageChange}>
                    <img
                        src={skill.src}
                        alt={skill.alt}
                        title={skill.name}
                        name="resume"
                    />
                </a>
            </div>
        );
    };
    
    return (
        <section className={styles.skillsSection}>
            <div className={styles.container}>
                <h2>Experience With</h2>
                <div className={styles.iconDisplay}>
                    {skillIconDisplay}
                </div>
            </div>
        </section>
    )
}

export default SkillCarousel;