/**
 * Array of work experience entries for resume display.
 * Each entry contains details about a professional position including title, company, dates, description, and notable achievements.
 *
 * @type {Array<{title: string, company: string, dates: string, description: string, notes: Array<string>}>}
 *
 * @property {string} title - The job title or position held
 * @property {string} company - The name of the company or organization
 * @property {string} dates - The employment period in "MMM YYYY - MMM YYYY" or "MMM YYYY - Present" format
 * @property {string} description - A detailed description of the role, responsibilities, and key learnings
 * @property {Array<string>} notes - An array of bullet points highlighting specific achievements, responsibilities, and skills developed
 *
 * @example
 * // Access the most recent position
 * const currentJob = workExperience[0];
 * console.log(currentJob.title); // "Software Developer and IT Consultant"
 *
 * @example
 * // Iterate through all positions
 * workExperience.forEach(job => {
 *   console.log(`${job.title} at ${job.company}`);
 * });
 */
const workExperience = [
  {
    title: "Graced and Golden",
    company: "Full Stack Software Engineer",
    dates: "April 2025 - Present",
    description: `In this role I have taken complete ownership of the development and deployment process, ensuring high-quality, efficient, and maintainable code. 
      I have been responsible for the entire lifecycle of our web application, from initial design and architecture to implementation and deployment.
      I continue to implement new features and improve on existing ones, as well as consult on IT decisions so that business logic is translated into an optimal product.`,
    notes: [
      "Architected, fully built, and successfully deployed business site using Next.js, React, and Typescript bringing in 100s of users weekly (400% increase)  with rapid response to mid-development changes",
      "Reduced cumulative content shift by 70% and optimized with lazy loading to achieve near-instant load times in spite of large images and animations common in industry",
      "Reduced code complexity massively by utilizing React custom hooks and state/reducer pattern.",
      "Designed and implemented Newsletter and contact management system using PostgreSQL, Supabase and Brevo with automated mailing actions upon sign-up",
      "Built web app with full Headless CMS integration with Prismic reducing required developer involvement in marketing-led changes by over 80%",
      "Improved Lighthouse scores by 25% to near-perfect with full adherence to accessibility standards",
    ],
  },
  {
    title: "Lead QA Engineer",
    company: "Robot Cache",
    dates: "Jul 2021 - Jan 2024",
    description: `Working in QA at Robot Cache was my most challenging and rewarding employment to date. 
            I was promoted to QA Lead despite my relative lack of experience, and learning how to effectively
            manage the time and resources of my department was a novel undertaking.
            My time was largely spent interpreting and responding to the demands of the company and our
            evolving products, and working with my team to meet those demands.`,
    notes: [
      "Engineered and spearheaded system of database management that greatly reduced manual complexity and improved workflow and analytics productivity",
      "Wrote Typescript procedures connected to the database to automate task assignments, alerts, and database updates, decreasing manual work assignment by upwards of 80%",
      "Led communication and collaborated to shape Sprint goals during SCRUM meetings and stand-ups",
      "Built automated tests using TestProject.io",
      "Built workflow and data organization databases using Airtable and Trello from nearly the ground up",
    ],
  },
  {
    title: "QA Analyst and IT",
    company: "Aira Tech Corp",
    dates: "Dec 2018 - Feb 2020",
    description: `This was my first occupation in a tech company, and a major period of personal development as a 
            result. I joined with relatively meager IT experience, but quickly grew comfortable working with software
            in a professional capacity. My primary responsibilities involved the software setup and QA of products
            before they were shipped to clientele, as well as the office's technical setup and the
            troubleshooting of any issues that arose.`,
    notes: [
      "Worked with command line and Python scripts in setting up and testing products, reducing user-reported errors by 25%",
      "Cut down testing time per hardware by 60% with use of automation scripts",
      "Received frequent commendations for problem solving skills and ability to learn rapidly",
      "Uniquely trusted to engage with high-profile partners and provide demonstrations",
    ],
  },
];

export default workExperience;
