import React from 'react';


function SkillCarousel() {
    //create array for displaying "proficient in" icons
    const skillIcons = [{description: "JavaScript", src: "/assets/images/js-icon.png"}, {description: "React", src: "/assets/images/react-icon.png"}, {description: "CSS", src: "/assets/images/css-icon.png"}, {description: "HTML", src: "/assets/images/html-icon.png"}];
    const skillIconsDisplay = [];
    for(let skill of skillIcons) {
        skillIconsDisplay.push(<img src={skill.src} alt={skill.description} title={skill.description} />);
    };

    //create array for displaying "experience in" icons
    const experienceIcons = [{description: "Node.js", src: "/assets/images/node-js-icon.png"}, {description: "Typescript", src: "/assets/images/typescript-icon.png"}, {description: "handlebars.js", src: "/assets/images/handlebars-icon.png"}, {description: "Python", src: "/assets/images/python-icon.png"}, {description: "Bootstrap", src: "/assets/images/bootstrap-icon.png"}, {description: "Angular.js", src: "/assets/images/angular-icon.png"}, {description: "C++", src: "/assets/images/c-plus-plus-icon.png"}];
    const experienceIconsDisplay = [];
    for(let experience of experienceIcons) {
        experienceIconsDisplay.push(<img src={experience.src} alt={experience.description} title={experience.description} />);
    };
    
    return (
        <>
            <p>Proficient in:</p>
            {skillIconsDisplay}
            <p>Experience with:</p>
            {experienceIconsDisplay}
        </>
    )
}

export default SkillCarousel;