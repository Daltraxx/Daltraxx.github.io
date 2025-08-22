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
                <img src={skill.src} alt={`${skill.name} icon`}/>
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
                <section className={styles.jobInfo}>
                    <h4 className={styles.jobTitle}>{job.title}</h4>
                    <p className={styles.jobCompany}>{job.company}</p>
                    <p className={styles.dateRange}>{job.dates}</p>
                    <p className={styles.jobDescription}>{job.description}</p>
                </section>
                <h5 className={styles.jobBulletPointsHeader}>Bullet Points</h5>
                <ul className={styles.jobBulletPoints}>
                    {job.notes.map((note, index) => <li key={`workNote${index}`}>{note}</li>)}
                </ul>
            </section>
        );
    });

    return (
        <section>
            <h2 className='page-header'>Resume</h2>
            <section className={`${styles.resumeSection} ${styles.flexColumn} ${styles.statementHeader}`}>
                <h3>Statement</h3>
                <p>
                Creative and detail-obsessed software engineer with a passion for mastering emergent technologies and tools, including AI and machine learning. 
                Proven ability in creating and implementing successful front and back-end web applications. I love building things and challenging myself along the way. 
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
                        {/* <p className={styles.educationOutcome}>Major in Political Science, Minor in Psychology</p> */}
                        <p className={styles.educationDateRange}>2012 - 2016</p>
                        <section className={styles.educationDescription}>
                            <p>
                                Just one stop in a lifelong journey of education and growth. I learned how to research with proficiency and gained a resolute confidence in my ability to
                                figure out a solution to any problem or obstacle one can encounter - no matter its complexity - which continues to this day. I earnestly believe that this is 
                                of the most impactful assurances once can have.
                            </p>
                        </section>
                    </div>
                </section>
                {/* <section className={`${styles.educationThird}`}>
                    <div className={`${styles.codecademyDescription} ${styles.flexColumn}`}>
                        <h4>Codecademy</h4>
                        <p className={styles.educationOutcome}>General Programming and Computer Science</p>
                        <p className={styles.dateRange}>2020 - <em>Continuous</em></p>
                        <section className={styles.educationDescription}>
                            <p>
                                I began learning Python with Codecademy in 2020, and have since explored many subjects and skills on the platform. 
                                Codecademy has been excellent at giving me a solid foundation in different skill paths so I could go on to solidify them through 
                                independent projects and research. At this point in time, the majority of my learning may very well occur off of Codecademy,
                                but it is still frequented as my first stop when exploring a new skill.
                            </p>
                        </section>
                    </div>
                </section> */}
                {/* <section className={`${styles.educationThird}`}>
                    <div className={`${styles.codecademyCertifications} ${styles.flexColumn}`}>
                        <h4>Certifications</h4>
                        <ul>
                            {certificationsJSX}
                        </ul>
                    </div>
                </section> */}
            </section>
            <section className={`${styles.resumeSection} ${styles.flexRow}`}>
                <h3>Work Experience</h3>
                {workExperienceJSX}
            </section>
        </section>
    );
}

export default Resume;