import {
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  aerion,
  nextjs,
  styledcomponent,
  sass,
  vue,
  otonomis,
  gmail,
  linkedin,
  github,
  taskmaster,
  portfolio,
  Info,
  teamGenerator,
  openLayers,
  giphy,
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
    link: "https://infodev.com.np/",
    points: [
      "Led the end-to-end development of new features, from initial concept through to deployment, maintaining exceptional code quality and performance throughout the process. ",
      "Refactored legacy code using memoization and optimization strategies, reducing unnecessary API calls and enhancing application performance. ",
      "Successfully managed multiple concurrent projects, delivering comprehensive code reviews and maintaining consistency in coding standards to meet client expectations. ",
      "Upgraded a legacy site with responsive design techniques, significantly enhancing accessibility and user experience across all devices, which led to improved client satisfaction."
    ],
    titleNe: "फ्रन्टेन्ड इन्जिनियर",
    company_nameNe: "InfoDevelopers",
    dateNe: "०९/२०२३ - वर्तमान",
    pointsNe: [
      "प्रारम्भिक अवधारणा देखि परिनियोजन सम्म, प्रक्रिया भर अपवादात्मक कोड गुणस्तर र कार्यसम्पादन कायम राख्दै, नयाँ सुविधाहरूको अन्त - देखि - अन्त विकासको नेतृत्व गर्यो।",
      "मेमोइजेशन र अप्टिमाइजेसन रणनीतिहरू प्रयोग गरेर रिफ्याक्टर गरिएको लिगेसी कोड, अनावश्यक API कलहरू घटाउँदै र अनुप्रयोगको प्रदर्शन बढाउँदै।",
      "धेरै समवर्ती परियोजनाहरू सफलतापूर्वक व्यवस्थित गरियो, व्यापक कोड समीक्षाहरू प्रदान गर्दै र ग्राहकको अपेक्षाहरू पूरा गर्न कोडिङ मापदण्डहरूमा स्थिरता कायम राख्दै।",
      "सबै यन्त्रहरूमा पहुँच र प्रयोगकर्ता अनुभवलाई उल्लेखनीय रूपमा बृद्धि गर्दै, ग्राहकको सन्तुष्टिमा सुधार ल्याउने, उत्तरदायी डिजाइन प्रविधिहरूको साथ लिगेसी साइट अपग्रेड गरियो।"
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "Aerion Technologies",
    icon: aerion,
    iconBg: "#383E56",
    date: "01/2021 - 09/2023",
    link: "https://aerion.com.au/",
    points: [
      "Collaborated with designers to iterate on designs, refining UI/UX elements and ensuring their compatibility with the frontend implementation.",
      "Utilized Redux Saga middleware to manage asynchronous actions, including handling API calls, side effects, and data synchronization, resulting in improved application performance and reliability.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented the Apicurio API design tool to streamline the development process, allowing for efficient collaboration between frontend and backend teams in designing and documenting APIs.",
    ],
    titleNe: "फ्रन्टएन्ड देवेलोपेर्स",
    company_nameNe: "एरियन टेक्नोलोजी",
    dateNe: "०१/२०२१ - ०९/२०२३",
    pointsNe: [
      "डिजाइनहरूमा पुनरावृत्ति गर्न, UI / UX तत्वहरूलाई परिष्कृत गर्न र फ्रन्टएन्ड कार्यान्वयनसँग तिनीहरूको अनुकूलता सुनिश्चित गर्न डिजाइनरहरूसँग सहकार्य।",
      "API कलहरू ह्यान्डलिंग, साइड इफेक्टहरू, र डाटा सिङ्क्रोनाइजेसन सहित एसिंक्रोनस कार्यहरू प्रबन्ध गर्न Redux सागा मिडलवेयर प्रयोग गरियो, परिणामस्वरूप सुधारिएको अनुप्रयोग प्रदर्शन र विश्वसनीयता।",
      "उत्तरदायी डिजाइन लागू गर्दै र क्रस-ब्राउजर अनुकूलता सुनिश्चित गर्दै।",
      "विकास प्रक्रियालाई सुव्यवस्थित गर्न Apicurio API डिजाइन उपकरण लागू गर्‍यो, API हरू डिजाइन र दस्तावेजीकरणमा फ्रन्टएन्ड र ब्याकएन्ड टोलीहरू बीच कुशल सहकार्यको लागि अनुमति दिँदै।",
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
    titleNe: "वेब देवेलोपेर्स",
    company_nameNe: "ओटोनोमिस प्रा",
    dateNe: "०४/२०१९ - १२/२०२०",
    link: "#",
    pointsNe: [
      "कम्पनीको वेब अनुप्रयोगको लागि लाइट प्रोग्रामिङ प्रयोग गरेर विजेटहरू डिजाइन गरियो र उच्च-गुणस्तरको भिजुअल कम्पोनेन्टहरू सिर्जना गरियो।",
      "ब्राउजर विकास उपकरणहरू र डिबगिङ प्रविधिहरू प्रयोग गर्नुहोस् फ्रन्टएन्ड बगहरू कुशलतापूर्वक पहिचान गर्न र समाधान गर्न।",
      "प्रयोगकर्ता दर्ता, लगइन, र भूमिका-आधारित पहुँच नियन्त्रण सहित लागू प्रयोगकर्ता प्रमाणीकरण र प्राधिकरण सुविधाहरू।",
      "Django को ORM (वस्तु-रिलेसनल म्यापिङ) लाई डाटाबेस संरचना मोडेल गर्न र डेटा दृढता लागू गर्न प्रयोग गरियो।",
      "Django Rest Framework (DRF) प्रयोग गरेर फ्रन्टएन्ड र ब्याकइन्ड जडान गर्न, सहज डेटा प्रवाह र अनुप्रयोगका विभिन्न भागहरू बीच कुशल संचार सुनिश्चित गर्दै RESTful API हरू लागू गरियो।",
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
    name: "Random Team Generator",
    description:
      "A smart team generator web app that lets users create random or balanced teams from a custom list of names. Users can optionally assign skill or performance ratings to each participant, allowing the app to intelligently balance teams based on those ratings. Perfect for classrooms, sports, events, or any group activity. Features include customizable team count and ratings.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
    ],
    image: teamGenerator,
    source_code_link: "https://github.com/iamsujanstha/Smart-App",
    url: "https://vite-team-generate.netlify.app/",
    descriptionNe:
      "स्मार्ट टिम जेनेरेटर एप जसले प्रयोगकर्ताहरूलाई नामहरूको सूचीबाट र्यान्डम वा ब्यालेन्स टिमहरू बनाउन दिन्छ। प्रयोगकर्ताहरूले प्रत्येक सहभागीलाई स्किल वा परफर्मेन्स रेटिङ दिन सक्छन्, जसको आधारमा एपले टिमहरूलाई संतुलित रूपमा विभाजित गर्छ। यो एप कक्षा, खेलकुद, कार्यक्रम वा कुनै पनि समूह गतिविधिको लागि उपयोगी छ। यसमा टिम संख्या अनुकूलन, सहभागी सूची इनपुट, रेटिङ-आधारित टिम विभाजन, टिम सुरक्षित गर्ने, र टिम फेरि मिलाउने सुविधा समावेश छन्।",
  },
  {
    name: "OpenLayers Map",
    description:
      "An interactive map app using OpenLayers that allows users to view, manage, and interact with geospatial data visually.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "Openlayers", color: "green-text-gradient" },
      { name: "styled-components", color: "pink-text-gradient" },
    ],
    image: openLayers,
    source_code_link: "https://github.com/iamsujanstha/openlayers-map",
    url: "https://github.com/iamsujanstha/openlayers-map",
    descriptionNe:
      "OpenLayers प्रयोग गरेर बनाइएको एउटा अन्तरक्रियात्मक नक्सा एप, जसले प्रयोगकर्ताहरूलाई भौगोलिक डेटा हेर्न, व्यवस्थापन गर्न र अन्तरक्रिया गर्न अनुमति दिन्छ।",
  },
  {
    name: "Giphy Search",
    description:
      "A fun web app that allows users to search for trending and random GIFs using the Giphy API. Includes infinite scroll and search filtering.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Scss", color: "green-text-gradient" },
      { name: "axios", color: "pink-text-gradient" },
    ],
    image: giphy,
    source_code_link: "https://github.com/iamsujanstha/giphy-search",
    url: "https://giphy-app-search.netlify.app",
    descriptionNe:
      "Giphy API प्रयोग गरेर GIF खोज्न सकिने रमाइलो वेब एप। ट्रेन्डिङ, र्यान्डम GIF हेर्न र फिल्टर गरेर खोज्न सकिन्छ। इनफिनिट स्क्रोल सुविधा पनि छ।",
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio website built with React and Framer Motion to showcase my web development projects, skills, and experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/iamsujanstha/Personal-website",
    url: "https://giphy-app-search.netlify.app",
    descriptionNe:
      "React र Framer Motion प्रयोग गरेर बनाइएको व्यक्तिगत पोर्टफोलियो वेबसाइट, जसले मेरो परियोजना, सीप र अनुभव प्रदर्शन गर्छ।",
  },
];


export { services, technologies, experiences, testimonials, projects };
