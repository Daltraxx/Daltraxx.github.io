import styles from './SkillCarousel.module.css';

import skills from '../../../resources/skills';
import clsx from 'clsx';


function SkillCarousel({ handlePageChange, className = '' }) {
    const handleSkillClick = (e) => {
        e.preventDefault();
        handlePageChange(e);
    };

    const skillIconDisplay = skills.map((skill) => (
        <div
            className={styles.iconContainer}
            key={skill.name}
        >
            <a
                href="#skills"
                onClick={handleSkillClick}
                data-page="resume"
                aria-label={`Navigate to ${skill.name} on Resume page`}
            >
                <img
                    src={skill.src}
                    alt={skill.alt || skill.name}
                    title={skill.name}
                    loading="lazy"
                    decoding="async"
                    data-page="resume"
                />
            </a>
        </div>
    ));
    
    return (
        <section className={clsx(styles.skillsSection, className)}>
            <h2>Experience With</h2>
            <div className={styles.iconDisplay}>
                {skillIconDisplay}
            </div>
        </section>
    )
}

export default SkillCarousel;