import skills from "../resources/skills.js";

const jsonLDSkills = Array.isArray(skills)
  ? [...new Set(skills.map((skill) => skill?.name?.trim()).filter(Boolean))]
  : [];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.daltonpettus.com/#person",
  name: "Dalton Pettus",
  url: "https://www.daltonpettus.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of San Diego",
  },
  knowsAbout: jsonLDSkills,
  sameAs: [
    "https://www.linkedin.com/in/dalton-pettus/",
    "https://github.com/Daltraxx",
    "https://bsky.app/profile/daltonpettus.com",
    "https://x.com/pettus_dalton",
  ],
  jobTitle: "Software Engineer",
};

export default personJsonLd;
