import React from 'react';
import SkillCarousel from '../SkillCarousel/SkillCarousel';
import LandingPageNav from '../LandingPageNav/LandingPageNav';

function LandingPageIntro() {
    return (
        <>
            <h1>Dalton Pettus:</h1>
            <p>An impassioned and prodigiously ambitious developer seeking his first official role in front-end development. I'm far from it now, but every day I strive closer to becoming the best programmer I can be.</p>
            <LandingPageNav />
            <SkillCarousel />
        </>
    )
}

export default LandingPageIntro;