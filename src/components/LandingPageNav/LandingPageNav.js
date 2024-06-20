import React from 'react';
import './LandingPageNav.module.css';

function LandingPageNav() {
    return (
        <nav>
            <ul>
                <li key="about">About</li>
                <li key="resume">Resume</li>
                <li key="projects">Projects</li>
                <li key="contact">Contact</li>
            </ul>
        </nav>
    )
}

export default LandingPageNav;