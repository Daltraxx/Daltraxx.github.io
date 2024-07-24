//create array of project objects for mapping into ProjectsDisplay component

const projectsData = [
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
        /*
        bullets: [
            "Queries Yelp API based on user input with search parameters and sort options",
            "Anticipates certain user interactions, like requerying previous search if sort is changed",
            "Renders and presents businesses and their info in an organized and appealing way",
            "Responsive and accessible"
            ],
        */
        github: 'https://github.com/Daltraxx/ravenous',
        image: '/assets/images/ravenous-project.png',
        technologies: ['JavaScript', 'React', 'Yelp API', 'CSS', 'HTML']
    },
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
        technologies: ['JavaScript', 'React', 'CSS', 'HTML']
    },
    {
        name: 'Life RPG Company Webpage',
        description: 
            `A simple fake company webpage for a project I am currently studying to build into a production-ready application, 
            it is included to showcase my ability to work with CSS and HTML to build elegant and responsive webpages from scratch.`,
        github: 'https://github.com/Daltraxx/life-rpg-project-site',
        image: '/assets/images/life-rpg-project.png',
        technologies: ['CSS', 'HTML']
    },
    {
        name: 'Santee Pickleball Webpage',
        description: 
            `A simple fake pickleball club webpage, it is included to showcase my ability to work with CSS and HTML to build elegant and responsive webpages from scratch.`,
        github: 'https://github.com/Daltraxx/santee-pickleball-site',
        image: '/assets/images/santee-pickleballers-project.png',
        technologies: ['CSS', 'HTML']
    },
];

export default projectsData;