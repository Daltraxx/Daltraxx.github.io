import React from 'react';
import styles from './Projects.module.css';

import ProjectsDisplay from './ProjectsDisplay/ProjectsDisplay';

import projectsData from './resources/projects-data';

function Projects() {

    return (
        <section>
            <h2 className='page-header'>Projects</h2>
            <ProjectsDisplay projectsData={projectsData} />
            
        </section>
    );
}

export default Projects;