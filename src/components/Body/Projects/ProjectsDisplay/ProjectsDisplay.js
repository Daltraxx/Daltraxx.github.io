import React from 'react';
import styles from './ProjectsDisplay.module.css';

function ProjectsDisplay({ projectsData }) {
    const projectsJSX = projectsData.map(project => {
        return (
            <section className={styles.projectContainer}>
                <div className={styles.imageContainer} style={{backgroundImage: 'url' + `(${project.image})`}}>
                    <div className={styles.shader}>
                        <div className={styles.titleInfo}>
                            <h3>{project.name}</h3>
                            <h4>Technologies Used:</h4>
                            <ul>
                                {project.technologies.map(tech => <li>{tech}</li>)}
                            </ul>
                            <a href={project.github} target="_blank">Github Link</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <p>{project.description}</p>
                </div>
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