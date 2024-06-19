import React from 'react';


const skillIcons = ["/assets/images/js-icon.png"];

function SkillCarousel() {
    return (
        <>
            <p>Experience with:</p>
            <img src={skillIcons[0]}></img>
        </>
    )
}

export default SkillCarousel;