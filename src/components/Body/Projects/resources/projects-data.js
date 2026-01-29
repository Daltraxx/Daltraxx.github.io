//create array of project objects for mapping into ProjectsDisplay component

const projectsData = [
    {
        name: 'Dalton Pettus Portfolio Site',
        description: 
            `It is worth placing this very site here because of the variety of skills involved in making it. Built with React and making heavy use of props and hooks,
            the app features multiple pages and dynamic interactions. It is built to be responsive and accessible. I especially enjoyed exploring skeuomorphic touches for many of the buttons,
            and managing state to dynamically render some of the pages with fun if unnecessary interactions. It is also written so that its content is easy to update.
            This project showed me many new paths to explore and dive deeper into, and there is much more to implement and expand upon going forward.
            I will continue to use this site as a playground for new skills I develop.`,
        github: 'https://github.com/Daltraxx/dalton-pettus-portfolio-site',
        image: '/assets/images/dalton-portfolio-site-project.png',
        technologies: ['React']
    },
    {
        name: 'Ravenous',
        description: 
            `In this project I built a React app which uses the Yelp API to search and display results based on the business name and location entered. 
            It is also able to take in different sort parameters with the options of "Best Match", "Highest Rated", or "Most Reviewed".
            Each search result displays organized information about the business.
            When one is clicked, a tab is opened with the business's Google Map location.
            During the course of the project I learned about and paid close attention to the pleasant and functional displaying of information, 
            adapting to predicted user actions like automatically requerying when the sort option is changed,
            and ensuring the site is responsive to multiple screen dimensions.`,
        github: 'https://github.com/Daltraxx/ravenous',
        image: '/assets/images/ravenous-project.png',
        technologies: ['React', 'Yelp API']
    },
    {
        name: 'Life RPG Company Webpage',
        description: 
            `A company webpage for LifeRPG, a site and application where users may report on their daily habits and task completion to level up and gain rewards for their character.
            [in development]`,
        github: 'https://github.com/Daltraxx/life-rpg-project-site',
        image: '/assets/images/life-rpg-project.png',
        technologies: ['Next.js', 'React', 'MongoDB']
    },
    {
        name: 'Santee Pickleball Webpage',
        description: 
            `A simple pickleball club webpage where users may register and meet with others, communicating and planning times to gather for their favorite activity. [in development]`,
        github: 'https://github.com/Daltraxx/santee-pickleball-site',
        image: '/assets/images/santee-pickleballers-project.png',
        technologies: ['Next.js', 'React', 'MongoDB']
    },
];

export default projectsData;