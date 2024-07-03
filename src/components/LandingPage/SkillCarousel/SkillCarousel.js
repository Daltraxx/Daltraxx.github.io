import React from 'react';
import styles from './SkillCarousel.module.css';


function SkillCarousel() {
    //create array for displaying "proficient in" icons
    const skillIcons = [{description: "JavaScript", src: "/assets/images/js-icon.png"}, {description: "React", src: "/assets/images/react-icon.png"}, {description: "CSS", src: "/assets/images/css-icon.png"}, {description: "HTML", src: "/assets/images/html-icon.png"}];
    const skillIconsDisplay = [];
    for(let skill of skillIcons) {
        skillIconsDisplay.push(<div className={styles.iconContainer} key={skill.description}><img src={skill.src} alt={skill.description} title={skill.description} /></div>);
    };

    //create array for displaying "experience in" icons
    const experienceIcons = [{description: "Node.js", src: "/assets/images/node-js-icon.png"}, {description: "Typescript", src: "/assets/images/typescript-icon.png"}, {description: "handlebars.js", src: "/assets/images/handlebars-icon.png"}, {description: "Python", src: "/assets/images/python-icon.png"}, {description: "Bootstrap", src: "/assets/images/bootstrap-icon.png"}, {description: "Angular.js", src: "/assets/images/angular-icon.png"}, {description: "C++", src: "/assets/images/c-plus-plus-icon.png"}];
    const experienceIconsDisplay = [];
    for(let experience of experienceIcons) {
        experienceIconsDisplay.push(<div className={styles.iconContainer} key={experience.description}><img src={experience.src} alt={experience.description} title={experience.description} /></div>);
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