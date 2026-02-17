//create array of project objects for mapping into ProjectsDisplay component

const projectsData = [
  {
    name: "Graced & Golden",
    description: `Using the Next.js framework with Prismic as a headless CMS, this web application was personally designed and built
             to meet all my client's stylistic preferences such that it could stand out among competitors
            in their industry, including complex layouts and animations. It includes custom forms hooked up to
            Mailgun via server actions to help customers connect through a slick and intuitive UI, and is 
            all built utilizing best practices regarding SEO, front and back-end validation, and project 
            structure. A mailing list is managed via Supabase and an emailing service. It achieved near-perfect scores on all Lighthouse Report Metrics on all pages.`,
    github: "https://github.com/Daltraxx/graced-and-golden",
    url: "https://www.gracedandgolden.com/",
    image: "/assets/images/graced-and-golden.webp",
    technologies: [
      "Next.js",
      "React",
      "PostgreSQL / Supabase",
      "Prismic Headless CMS",
      "Mailgun",
    ],
  },
  {
    name: "lifeRPG",
    description: `By far my favorite and most sophisticated project to date, LifeRPG is an application where users  define personal attributes they wish to hone and regular tasks ("quests") to earn experience points. 
            These quests level both individual attributes and overall player level. The leveling system rewards consistent quest completion to encourage habit formation.
            By emulating the feedback loop of RPGs, LifeRPG helps users feel more rewarded when accomplishing daily productivity goals. [in active development, not yet deployed]`,
    github: "https://github.com/Daltraxx/life-rpg-project-site",
    image: "/assets/images/liferpg-project.webp",
    technologies: ["Next.js", "React", "PostgreSQL / Supabase", "Supabase Auth"],
  },
  {
    name: "Storybooks",
    description: `Storybooks is a webapp where users can sign in using their Google accounts, share stories, and view stories shared by other users. 
            A server-side rendered app with an MVC architecture, it is built with Express and Node.js on the back end, MongoDB for the database, and Handlebars for templating.
            Authentication is implemented with passport using Google OAuth, and a rich text editor for story creation.
            The app is designed to be responsive and user-friendly, with a focus on community engagement and storytelling.`,
    github: "https://github.com/Daltraxx/storybooks",
    image: "/assets/images/storybooks-project.webp",
    technologies: [
      "Express / Node.js",
      "MongoDB",
      "Mongoose",
      "Handlebars",
      "Passport / Google OAuth",
      "Materialize CSS",
    ],
  },
  {
    name: "Ravenous",
    description: `A React app which uses the Yelp API to search and display results based on the business name and location entered. 
            It is also able to take in different sort parameters with the options of "Best Match", "Highest Rated", or "Most Reviewed".
            Each search result displays organized information about the business.
            When one is clicked, a tab is opened with the business's Google Map location.
            During the course of the project I paid close attention to the pleasant and functional displaying of information, 
            adapting to predicted user actions like automatically requerying when the sort option is changed,
            and followed best practices in responsive design.`,
    github: "https://github.com/Daltraxx/ravenous",
    image: "/assets/images/ravenous-project.png",
    technologies: ["React", "Yelp API"],
  },
  {
    name: "Dalton Pettus Portfolio Site",
    description: `Just a quick description of the site you're on. While I had built many quick and minor projects before, this is one of the first applications of some untrivial complexity that I'd completed and deployed. Well, untrivial back then at least. I've leveled up a lot in the time since, 
            and updating it now all I want to do rework everything from the ground up, but that will have to wait for another day. Anyways, here's what I wrote here originally: built with React and making heavy use of props and hooks,
            the app features multiple pages and dynamic interactions. It is built to be responsive and accessible. I especially enjoyed exploring skeuomorphic touches for many of the buttons,
            and managing state to dynamically render some of the pages with fun if unnecessary interactions. It is written so that its content is easy to update, and I look forward to adding more dumb features as opportunities present themselves.`,
    github: "https://github.com/Daltraxx/dalton-pettus-portfolio-site",
    image: "/assets/images/dalton-portfolio-site-project.png",
    technologies: ["React"],
  },
];

export default projectsData;
