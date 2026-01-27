import styles from "./Resume.module.css";

import workExperience from "./resources/work-experience";
import skills from "../../../resources/skills";

/**
 * Resume component that displays a professional resume with skills, education, and work experience.
 *
 * This component renders a complete resume page including:
 * - A professional statement section
 * - Skills section with icons (mapped from skills array)
 * - Education section highlighting University of San Diego
 * - Work experience section with job details and bullet points (mapped from workExperience array)
 *
 * @component
 * @returns {JSX.Element} A section containing the complete resume layout with multiple subsections
 *
 * @requires skills - Array of skill objects with properties: id, name, src
 * @requires workExperience - Array of job objects with properties: title, company, dates, description, notes
 * @requires styles - CSS module containing styling classes for the resume layout
 *
 * @example
 * return (
 *   <Resume />
 * )
 */
function Resume() {
  //map skills object array to JSX
  const skillsJSX = skills.map((skill) => {
    return (
      <section
        className={`${styles.skill} ${styles.flexColumn}`}
        key={skill.id}
      >
        <h4 id={skill.id}>{skill.name}</h4>
        <img
          src={skill.src}
          alt={`${skill.name} icon`}
          loading="lazy"
          decoding="async"
        />
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
          {job.notes.map((note, index) => (
            <li key={`workNote${index}`}>{note}</li>
          ))}
        </ul>
      </section>
    );
  });

  return (
    <section>
      <h2 className="page-header">Resume</h2>
      <section
        className={`${styles.resumeSection} ${styles.flexColumn} ${styles.statementHeader}`}
      >
        <h3>Statement</h3>
        <p>
          An endlessly curious, ambitious full-stack software engineer
          passionate about learning and building. Instrumental in serving any
          person or organization looking to meet their project or development
          goals. Excited by hard problems. Work with someone who loves what they
          do.
        </p>
      </section>
      <section className={`${styles.resumeSection} ${styles.flexRow}`}>
        <h3 id="skills">Skills</h3>
        {skillsJSX}
      </section>
      <section className={`${styles.resumeSection} ${styles.flexRow}`}>
        <h3>Work Experience</h3>
        {workExperienceJSX}
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
                Just one stop in a lifelong journey of education and growth. I
                learned how to research with proficiency and gained an absolute
                confidence in my ability to find solutions to any problem, a
                certainty which continues to this day. There is not a more
                impactful asset or assurance that one can have.
              </p>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Resume;
