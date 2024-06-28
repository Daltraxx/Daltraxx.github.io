import React from 'react';
import styles from './Resume.module.css';

import workExperience from './resources/work-experience';
import skills from './resources/skills';
import certifications from './resources/certifications';



function Resume() {
    const workExperienceJSX = workExperience.map(job => {
        return (
            <section>
                <h4>{job.title}</h4>
                <p>{job.company}</p>
                <p>{job.dates}</p>
                <p>{job.description}</p>
            </section>
        );
    });

    const skillsJSX = skills.map(skill => {
        return (
            <section>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
            </section>
        );
    });

    const certificationsJSX = certifications.map(certification => {
        return (
            <li><a href={certification.url} target="_blank">{certification.title}</a></li>
        )
    });
    
    

    return (
        <section>
            <h2 className='page-header'>Resume</h2>
            <section>
                <h3>Statement</h3>
                <p>
                    I believe in an eclectic approach to both life and work that always strives for mastery. 
                    On and off the clock I labor to consume information that will aid my propensity for growth and contribution, 
                    as well as my understanding of how my impact may best be felt by any organization I service.
                </p>
            </section>
            <section>
                <h3>Skills</h3>
                {skillsJSX}
            </section>
            <section>
                <h3>Education</h3>
                <section>
                    <h4>Codecademy</h4>
                    <p>2020 - <em>Ongoing</em></p>
                    <p>
                        Description hereeeeeeeeeeeeeeeeeeee.
                    </p>
                    <h5>Certifications</h5>
                    <ul>
                        {certificationsJSX}
                    </ul>
                </section>
                <section>
                    <h4>University of San Diego</h4>
                    <p>Major in Political Science, Minor in Psychology</p>
                    <p>2012 - 2016</p>
                    <p>
                        My university education was genuinely formative in my growing understanding of this world and its complexities, 
                        and what my role may be in it. My present and future may not be rooted in the above subjects, 
                        however I only feel immense gratitude for all that has set me on my current trajectory, 
                        including the skills that I have accumulated along the way.
                    </p>
                </section>
            </section>
            <section>
                <h3>Work Experience</h3>
                {workExperienceJSX}
            </section>
        </section>
    );
}

export default Resume;