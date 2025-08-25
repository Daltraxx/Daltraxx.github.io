import styles from './Resume.module.css';

import workExperience from './resources/work-experience';
import skills from '../../../resources/skills';

function Resume() {

    //map skills object array to JSX
    const skillsJSX = skills.map((skill, index) => {
        return (
            <section className={`${styles.skill} ${styles.flexColumn}`} key={`skill${index}`}>
                <h4 id={skill.id}>{skill.name}</h4>
                <img src={skill.src} alt={`${skill.name} icon`}/>
            </section>
        );
    });
    
    //map workExperience object array to JSX
    const workExperienceJSX = workExperience.map((job, index) => {
        return (
            <section className={styles.job} key={`job${index}`}>
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
            </section>
            <section className={`${styles.resumeSection} ${styles.flexRow}`}>
                <h3>Work Experience</h3>
                {workExperienceJSX}
            </section>
        </section>
    );
}

export default Resume;