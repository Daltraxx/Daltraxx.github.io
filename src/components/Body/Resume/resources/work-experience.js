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
    title: "Software Developer and Consultant",
    company: "Contract Work",
    dates: "Jul 2025 - Present",
    description: `As a software developer and IT consultant, I have found and implemented 
            full-stack solutions tailored to clients' qualitative and economic needs. 
            It has by far been the most rewarding work of my career, while also offering flexibility
            for me to explore new technologies and frameworks.
            I always deliver high-quality, extendable, and accessible products, for which clients
            have rewarded me by continuing to request my services as future needs arise.`,
    notes: [
      "Developed and deployed full-stack web applications using Next.js and PostgreSQL",
      "Integrated products with CMS platforms such as Prismic to allow clients to easily manage content",
      "Ensured accessibility compliance with WCAG 2.1 standards",
      "Incorporated SEO best practices to enhance online visibility",
    ],
  },
  {
    title: "QA Lead",
    company: "Robot Cache",
    dates: "Jul 2021 - Jan 2024",
    description: `Working in QA at Robot Cache was my most challenging and rewarding employment to date. 
            I was promoted to QA Lead despite my relative lack of experience, and learning how to effectively
            manage the time and resources of my department was a novel undertaking.
            My time was largely spent interpreting and responding to the demands of the company and our
            evolving products, and working with my team to meet those demands.`,
    notes: [
      "Driving force in establishing and sculpting Standard Operating Procedures",
      "Built workflow and data organization bases using Airtable and Trello from nearly the ground up",
      "Was challenged and grew greatly in a leadership capacity",
      "Built automated tests using TestProject.io",
      "Wrote scripts to automate required tasks for testing and personnel assignment",
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
      "Acquired essential troubleshooting skills",
      "Became comfortable using the command line and executing scripts",
      "Received frequent commendations for problem solving skills and ability to learn rapidly",
      "Uniquely trusted to engage with high-profile partners and provide demonstrations",
    ],
  },
];

export default workExperience;
