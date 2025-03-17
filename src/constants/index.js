import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const navLinks = [
    {
        id: "experience",
        title: "Experience"
    },
    {
        id: "about me",
        title: "About Me"
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "contact",
        title: "Contact"
    }
]
export const socialMedia = [
  {
    id: "social-media-1",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/evanxyou/",
  },
  {
    id: "social-media-2",
    icon: FaGithub,
    link: "https://github.com/EvanxYou04/",
  },
  // {
  //   id: "social-media-3",
  //   icon: FaEnvelope,
  //   link: "mailto:youxevan@gmail.com"
  // }
];

export const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project and its key features.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1.com"
  },
  // Add more projects here
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Daikin Applied",
    location: "Plymouth, MN",
    period: "May 2024 - Febuary 2025",
    description: "Developed and implemented a CI/CD pipeline for LabVIEW applications across HVAC controllers, reducing deployment time by 30% and increasing frequency by 50%. Automated testing and deployment processes using Shell scripts, achieving a 40% reduction in manual effort. Created 7+ I/O testing commands for HVAC controllers and engineered a regression testing pipeline automating 79+ test cases, resulting in a 20% improvement in testing efficiency and 50% reduction in manual testing effort.",
    technologies: ["C#", ".NET", "Azure DevOps", "CI/CD Pipeline", "Python"]
  },
  {
    title: "Incoming Software Engineer Intern",
    company: "Medtronic",
    location: "Mounds View, MN",
    period: "May 2025 - August 2025",
    description: "",
    technologies: []
  },
  // Add more experiences as needed
];


