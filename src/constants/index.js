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
  taskmaster,
  veterinary,
  portfolio,
  smartapp,
  Info,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
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
    company_name: "InfoDevelopers",
    icon: Info,
    iconBg: "#E6DEDD",
    date: "09/2023 - Present",
    link:"https://infodev.com.np/",
    points: [
      "Led the end-to-end development of new features, from initial concept through to deployment, maintaining exceptional code quality and performance throughout the process. ",
      "Refactored legacy code using memoization and optimization strategies, reducing unnecessary API calls and enhancing application performance. ",
      "Successfully managed multiple concurrent projects, delivering comprehensive code reviews and maintaining consistency in coding standards to meet client expectations. ",
      "Upgraded a legacy site with responsive design techniques, significantly enhancing accessibility and user experience across all devices, which led to improved client satisfaction."
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "Aerion Technologies",
    icon: aerion,
    iconBg: "#383E56",
    date: "01/2021 - 09/2023",
    link:"https://aerion.com.au/",
    points: [
      "Collaborated with designers to iterate on designs, refining UI/UX elements and ensuring their compatibility with the frontend implementation.",
      "Utilized Redux Saga middleware to manage asynchronous actions, including handling API calls, side effects, and data synchronization, resulting in improved application performance and reliability.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented the Apicurio API design tool to streamline the development process, allowing for efficient collaboration between frontend and backend teams in designing and documenting APIs.",
    ],
  },
  {
    title: "Web developer",
    company_name: "Otonomis Pvt Ltd",
    icon: otonomis,
    iconBg: "#383E56",
    date: "04/2019 - 12/2020",
    link: "#",
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
    name: "Task Master",
    description:
      "Web-based platform that allows users to add, edit, delete and search tasks from the lists.This app helps you organize your tasks, set priorities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux-saga",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: taskmaster,
    source_code_link: "https://github.com/iamsujanstha/TaskMaster",
  },
  {
    name: "SmartApp",
    description:
      "An application that allows users to generate photos, images, videos and voices using OpenAI's GPT-3 API. This app helps you generate content for your social media posts, blogs, articles, etc.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "taiwlindcss",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
    ],
    image: smartapp,
    source_code_link: "https://github.com/iamsujanstha/Smart-App",
  },
  {
    name: "Veterinary Care",
    description:
      "Veterinary care is a web-based platform that allows users to add, edit, delete and search pets from the lists.This app helps you organize your pets, set priorities.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: veterinary,
    source_code_link: "https://github.com/iamsujanstha/Veterinary-app",
  },
  {
    name: "Online Room Booking",
    description:
      "A comprehensive travel booking platform that allows users to book hotels and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "hhttps://github.com/iamsujanstha/online-room-booking",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio website that showcases my skills and experience as a web developer. site is built with React and Framer Motion, and styled with Tailwind CSS.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/iamsujanstha/Personal-website",
  },
];

export { services, technologies, experiences, testimonials, projects };
