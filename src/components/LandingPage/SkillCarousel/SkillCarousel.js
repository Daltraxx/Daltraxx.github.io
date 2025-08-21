import styles from './SkillCarousel.module.css';

import skills from '../../../resources/skills';


function SkillCarousel({ handlePageChange, className }) {
    //create arrays for displaying "proficient in" and "experience with" icons
    const skillIconDisplay = [];
    for (let skill of skills) {
        skillIconDisplay.push(
            <div
                className={styles.iconContainer}
                key={skill.name}
            >
            <a
                href="#skills"
                onClick={handlePageChange}
                aria-label={`Navigate to ${skill.name} on Resume page`}
            >
                <img
                    src={skill.src}
                    alt={skill.alt || skill.name}
                    title={skill.name}
                    name="resume"
                    role="img"
                    aria-label={skill.alt || skill.name}
                />
            </a>
            </div>
        );
    };
    
    return (
        <section className={`${styles.skillsSection} ${className || ''}`}>
            <h2>Experience With</h2>
            <div className={styles.iconDisplay}>
                {skillIconDisplay}
            </div>
        </section>
    )
}

export default SkillCarousel;