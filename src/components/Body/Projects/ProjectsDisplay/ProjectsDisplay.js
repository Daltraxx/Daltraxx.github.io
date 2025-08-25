import styles from './ProjectsDisplay.module.css';

function ProjectsDisplay({ projectsData }) {

    //get jsx for each project by mapping from projectsData array of objects
    const projectsJSX = projectsData.map((project, index) => {
        return (
            <section className={styles.projectContainer} key={`project${index}`}>
                <section className={styles.projectInfoHalf}>
                    <div className={styles.imageContainer} style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true">
                        <div className={styles.shader}>
                            <div className={styles.titleInfo}>
                                <h3>{project.name}</h3>
                                <h4>Technologies Used:</h4>
                                <ul>
                                    {project.technologies.map(tech => <li key={`${tech}`}>{tech}</li>)}
                                </ul>
                                <a href={project.github} target="_blank" rel='noopener noreferrer'>View on GitHub</a>
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

    return projectsJSX;
        
}

export default ProjectsDisplay;