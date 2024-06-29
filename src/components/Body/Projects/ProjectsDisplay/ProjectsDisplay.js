import React from 'react';
import styles from './ProjectsDisplay.module.css';

function ProjectsDisplay({ projectsData }) {
    const projectsJSX = projectsData.map(project => {
        return (
            <section>
                <img src={project.image}/>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.github} target="_blank">Github Link</a>
                <h4>Technologies Used:</h4>
                <ul>
                    {project.technologies.map(tech => <li>{tech}</li>)}
                </ul>
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