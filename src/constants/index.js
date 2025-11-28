import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const navLinks = [
  {
    id: "about me",
    title: "About Me"
  },
  {
    id: "experience",
    title: "Experience"
  },
  {
    id: "education",
    title: "Education"
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
    title: "UMN Drone Simulation System",
    description: "A brief description of your first project and its key features.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    projectLink: "https://hub.docker.com/repository/docker/evanxyou/drone_sim/general",
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
    title: "Software Engineer Intern",
    company: "Medtronic",
    location: "Mounds View, MN",
    period: "May 2025 - August 2025",
    description: `Engineered a native C# logging library to extend existing functionality in a cross-platform .NET MAUI mobile
                  application used for pacemaker configuration, enabling structured and consistent log formatting compatible
                  with the ELK (Elasticsearch) stack. Integrated the enhanced logging system across the mobile frontend (JavaScript) and backend (C#/C++) to track
                  user interactions, improving traceability of pre-crash behavior for developers and QA teams. Collaborated with cross-functional teams to ensure seamless logging coverage throughout the application
                  lifecycle, boosting debuggability and supporting future analytics or system diagnostics.`,
    technologies: ["C#", "C++", ".NET", "JavaScript"]
  },
  // Add more experiences as needed
];

export const education =
{
  school: "University of Minnesota College of Science and Engineering",
  degree: "Bachelor of Science in Computer Science",
  period: "Expected Graduation: May 2026",
  location: "Minneapolis, MN",
  gpa: "3.6 / 4.0",
  courses: [
    "Data Structures & Algorithms",
    "Program Design & Development",
    "Functional Programming",
    "Operating Systems",
    "Machine Architecture & Organization",
    "Internet Programming",
    "Intro to Artificial Intelligence",
    "Machine Learning Fundamentals"
  ]
};


