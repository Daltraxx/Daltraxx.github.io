import React from 'react';
import styles from './ProjectsDisplay.module.css';

function ProjectsDisplay({ projectsData }) {

    //get jsx for each project by mapping from projectsData array of objects
    const projectsJSX = projectsData.map(project => {
        return (
            <section className={styles.projectContainer} key={`project` + projectsData.indexOf(project)}>
                <section className={styles.projectInfoHalf}>
                    <div className={styles.imageContainer} style={{backgroundImage: 'url' + `(${project.image})`}}>
                        <div className={styles.shader}>
                            <div className={styles.titleInfo}>
                                <h3>{project.name}</h3>
                                <h4>Technologies Used:</h4>
                                <ul>
                                    {project.technologies.map(tech => <li key={`${tech}`}>{tech}</li>)}
                                </ul>
                                <a href={project.github} target="_blank">View on GitHub</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.projectInfoHalf}>
                    <div className={styles.projectDetails}>
                        <p>{project.description}</p>
                    </div>
                </section>
            </section>
        );
    });

    return (
        <section>
            {projectsJSX}
        </section>
    )
}

export default ProjectsDisplay;