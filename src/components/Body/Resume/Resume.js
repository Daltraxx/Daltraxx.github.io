import React from 'react';
import styles from './Resume.module.css';

import workExperience from './resources/work-experience';
import skills from '../../../resources/skills';
import certifications from './resources/certifications';



function Resume() {

    //map skills object array to JSX
    const skillsJSX = skills.map(skill => {
        return (
            <section className={`${styles.skill} ${styles.flexColumn}`} key={`skill${skills.indexOf(skill)}`}>
                <h4 id={skill.id}>{skill.name}</h4>
                <p>{skill.description}</p>
            </section>
        );
    });

    //map certification object array to JSX
    const certificationsJSX = certifications.map(certification => {
        return (
            <li key={`certification${certifications.indexOf(certification)}`}>
                <a href={certification.url} target="_blank" rel="noreferrer">{certification.title}</a>
            </li>
        )
    });
    
    //map workExperience object array to JSX
    const workExperienceJSX = workExperience.map(job => {
        return (
            <section className={styles.job} key={`job${workExperience.indexOf(job)}`}>
                <h4>{job.title}</h4>
                <p>{job.company}</p>
                <p className={styles.dateRange}>{job.dates}</p>
                <p>{job.description}</p>
            </section>
        );
    });

    return (
        <section>
            <h2 className='page-header'>Resume</h2>
            <section className={`${styles.resumeSection} ${styles.flexColumn} ${styles.statementHeader}`}>
                <h3>Statement</h3>
                <p>
                    I believe in an eclectic approach to both life and work that always strives for mastery, 
                    and obsessively labor to hone the skills and consume the information that will allow for me to grow and contribute at the highest level.
                    I wish for my impact to be felt within any organization I service, and am confident in my ability to make that happen. 
                </p>
            </section>
            <section className={`${styles.resumeSection} ${styles.flexRow}`}>
                <h3 id='skills'>Skills</h3>
                {skillsJSX}
            </section>
            <section className={`${styles.resumeSection} ${styles.flexRow}`}>
                <h3>Education</h3>
                <section className={styles.educationThird}>
                    <div className={`${styles.universitySanDiego} ${styles.flexColumn}`}>
                        <h4>University of San Diego</h4>
                        <p>Major in Political Science, Minor in Psychology</p>
                        <p className={styles.dateRange}>2012 - 2016</p>
                        <p>
                            My university education was genuinely formative in my growing understanding of this world and its complexities, 
                            and what my role may be in it. My present and future may not be rooted in the above subjects, 
                            however I only feel immense gratitude for all that has set me on my current trajectory, 
                            including the skills that I have accumulated along the way.
                        </p>
                    </div>
                </section>
                <section className={`${styles.educationThird}`}>
                    <div className={`${styles.codecademyDescription} ${styles.flexColumn}`}>
                        <h4>Codecademy</h4>
                        <p>General Programming and Computer Science</p>
                        <p className={styles.dateRange}>2020 - <em>Continuous</em></p>
                        <p>
                            Description hereeeeeeeeeeeeeeeeeeee.
                        </p>
                    </div>
                </section>
                <section className={`${styles.educationThird}`}>
                    <div className={`${styles.codecademyCertifications} ${styles.flexColumn}`}>
                        <h4>Certifications</h4>
                        <ul>
                            {certificationsJSX}
                        </ul>
                    </div>
                </section>
            </section>
            <section className={`${styles.resumeSection} ${styles.flexRow}`}>
                <h3>Work Experience</h3>
                {workExperienceJSX}
            </section>
        </section>
    );
}

export default Resume;