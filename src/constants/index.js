import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  hazesoft,
  aerion,
  nextjs,
  styledcomponent,
  sass,
  vue,
  otonomis,
  carrent,
  jobit,
  tripguide,
  gmail,
  linkedin,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Github",
    icon: github,
    href: "https://github.com/iamsujanstha",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/tlsujank/",
  },
  {
    title: "Gmail",
    icon: gmail,
    href: "mailto:tlsujank.co@gmail.com",
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "vuejs",
    icon: vue,
  },
  {
    name: "Styled Component",
    icon: styledcomponent,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Aerion Technologies",
    icon: aerion,
    iconBg: "#383E56",
    date: "01/2023 - Present",
    points: [
      "Collaborated with designers to iterate on designs, refining UI/UX elements and ensuring their compatibility with the frontend implementation.",
      "Utilized Redux Saga middleware to manage asynchronous actions, including handling API calls, side effects, and data synchronization, resulting in improved application performance and reliability.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented the Apicurio API design tool to streamline the development process, allowing for efficient collaboration between frontend and backend teams in designing and documenting APIs.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Hazesoft PL",
    icon: hazesoft,
    iconBg: "#E6DEDD",
    date: "03/2021 - 12/2022",
    points: [
      "Actively participated in Agile development methodologies, including sprint planning, daily stand-ups, and retrospective meetings, to ensure efficient project management and timely delivery of features.",
      "Integrated third-party APIs, including Zendesk script and Recommbee products, to provide additional functionalities and enhance the user experience.",
      "Successfully maintained and enhanced eCommerce project with 300k+ daily active users.",
      "Worked on a web-based pharmacy management system using Vue.js, providing efficient and user-friendly interfaces for managing different shifts for locums and internal employees.",
      "Collaborated closely with the client to gather, prioritize, and implement feature requests, resulting in the successful integration of new functionalities and improved user experience",
      "Implemented A/B tests and analytics tracking such as GTM, Facebook pixel and Tik-Tok pixel to measure user engagement and conversion rates, leading to data-driven optimizations.",
    ],
  },
  {
    title: "Web developer",
    company_name: "Otonomis Pvt Ltd",
    icon: otonomis,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designed widgets and created high-quality visual components by using lit programming for the company’s web application. ",
      "Utilize browser development tools and debugging techniques to identify and resolve frontend bugs efficiently.",
      "Implemented user authentication and authorization features, including user registration, login, and role-based access control.",
      "Utilized Django's ORM (Object-Relational Mapping) to model the database structure and implement data persistence. ",
      "Implemented RESTful APIs by using Django Rest Framework (DRF) to connect the frontend and backend, ensuring smooth data flow and efficient communication between different components of the application.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
