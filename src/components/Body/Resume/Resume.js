import React from 'react';
import styles from './Resume.module.css';

import workExperience from './resources/work-experience';
import skills from './resources/skills';



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
                <h3>Work Experience</h3>
                {workExperienceJSX}
            </section>
        </section>
    );
}

export default Resume;