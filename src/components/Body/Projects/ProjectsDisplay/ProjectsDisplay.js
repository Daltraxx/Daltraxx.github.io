import styles from "./ProjectsDisplay.module.css";

function ProjectsDisplay({ projectsData }) {
  //get jsx for each project by mapping from projectsData array of objects
  const projectsJSX = projectsData.map((project, index) => {
    return (
      <section className={styles.projectContainer} key={`project${index}`}>
        <section className={styles.projectInfoHalf}>
          <div
            className={styles.imageContainer}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className={styles.shader}>
              <div className={styles.titleInfo}>
                <h3>{project.name}</h3>
                <h4>Technologies Used:</h4>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  referrerPolicy="no-referrer"
                >
                  View on GitHub
                </a>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
                    referrerPolicy="no-referrer"
                  >
                    Visit Website
                  </a>
                )}
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
