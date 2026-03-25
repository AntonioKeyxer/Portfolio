import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  flutter,
  mysql,
  oracle,
  mui,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  meta,
  starbucks,
  github2,
  tesla,
  joyit,
  idea,
  shopify,
  carrent,
  emmabot,
  ytvideos,
  eyncor,
  gamewebsite,
  nikewebsite,
  jobit,
  tripguide,
  postgresql,
  powerbi,
  threejs,
  sqlserver,
  miguel,
  jackeline,
  davila,
  machinel,
  nlp
} from "../assets";

export const navLinks = [{
    id: "about",
    title: "Acerca de mi",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [{
    title: "Desarrollador Full Stack",
    icon: web,
  },
  {
    title: "Análisis y Visualización de Datos",
    icon: backend,
  },
  {
    title: "Arquitectura de Bases de Datos",
    icon: creator,
  },
  {
    title: "Soluciones de Software Escalables",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Postgre SQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
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
    name: "github",
    icon: github2,
  },
];

const experiences = [{
    title: "Desarrollador TI",
    company_name: "Prácticas en JOY IT",
    icon: joyit,
    iconBg: "#383E56",
    date: "Enero 2023 - April 2023",
    points: [
      "Entrega diaria de informes analizando nuevas tecnologías que puedan ser implementadas en un Proyecto ATS.",
      "Elaboración de DEMOS funcionales de diversos paradigmas de programción y la exposición de estas.",
      "Creación de interfaces de usuario para el software ATS.",
      "Diseño y creación de diagramas de flujo detallados de los servicios del software ATS.",
    ],
  },
  {
    title: "Desarrollador de Software",
    company_name: "EYNCOR (ERP - CRM)",
    icon: eyncor,
    iconBg: "#383E56",
    date: "Febrero 2024 - Agosto 2024",
    points: [
      "Optimización de la lógica de negocio mediante el diseño y desarrollo de procedimientos almacenados (Stored Procedures), triggers y consultas complejas en SQL.",
      "Análisis y especificación de requerimientos funcionales y no funcionales, alineando las capacidades técnicas con los objetivos estratégicos del cliente.",
      "Desarrollo de módulos personalizados en el CRM utilizando PHP y SQL, incrementando la eficiencia operativa y resolviendo necesidades críticas de negocio.",
      "Gestión técnica de cuentas y soporte especializado, facilitando la comunicación directa con clientes para el diagnóstico y resolución de incidentes."
    ],
  },
  {
    title: "Desarrollador de Soluciones y Especialista en Datos",
    company_name: "Proyectos Independientes & Formación Continua",
    icon: idea,
    iconBg: "#E6DEDD",
    date: " - Presente",
    points: [
      "Creación de Proyectos de Análisis de datos usando Data extraida de Kaggle y aplicando modelos de Machine Learning.",
      "Desarrollo de aplicaciones web modernas y responsivas integrando React.js con frameworks de diseño avanzado como Tailwind CSS y Material UI.",
      "Arquitectura de backends robustos y escalables con Python y FastAPI, implementando una integración fluida mediante APIs RESTful.",
      "Desarrollando proyectos usando diversas varias bases de datos Relacionales como PostgreSQL y MySQL",
      "Formación de postgrado en Arquitectura de Soluciones Multicloud en UTEC, enfocado en el diseño de infraestructuras en la nube.",
      "Especialización continua en Data Engineering y Analytics mediante certificaciones internacionales en Coursera, fortaleciendo el dominio de herramientas de vanguardia."
    ],
  },
];

const testimonials = [{
    testimonial: "Destacó por su proactividad, responsibilidad y comprimiso. Desde el momento en que se unió al equipo, demostró un enfoque diligente hacia sus responsabilidades laborales.",
    name: "Miguel Rantes",
    designation: "IT RECRUITER",
    company: "JOY IT",
    image: miguel,
  },
  {
    testimonial: "Se reconocé la capacidad del estudiante Antonio Guanilo para crear proyectos innovadores en el campo de la ingeniería. Su trabajo es testimonio de su talento y potencial para impulsar el cambio.",
    name: "Jackeline León",
    designation: "Dir. Ingenieria",
    company: "UPN",
    image: jackeline,
  },
  {
    testimonial: "El estudiante ha demostrado capacidad para aplicar sus conocimientos en la creación de soluciones prácticas y avanzadas, asi como habilidad para identificar y abordar necesidades del mundo real con creatividad y eficacia.",
    name: "Victor Davila",
    designation: "Coord. Sistemas",
    company: "UPN",
    image: davila,
  },
];

const projects = [{
    name: "Emma-Bot",
    description: "Chatbot de apoyo emocional contra la ansiedad y depresión capaz de brindar cuestionarios y contenido multimedia, en la demo se podrá encontrar el frontend del proyecto desarrollado con flutter.",
    tags: [{
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: emmabot,
    source_code_link: "https://chatbot-nl.vercel.app/#/main",
    github_link: "https://github.com/AntonioKeyxer/chatbot_nl/tree/main",
  },
  {
    name: "Web de Videos",
    description: "Página web similar a youtube para poder subir, ordenar y reproducir videos. En la demo se muestra solo el deploy del frontend de manera sencilla pero en realidad el proyecto esta hecho para trabajar con un backend conectado por fastAPI y una base de datos",
    tags: [{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI5",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: ytvideos,
    source_code_link: "https://youtube-clone-tau-ruddy.vercel.app/",
    github_link: "https://github.com/AntonioKeyxer/YoutubeClone-Front",
  },
  {
    name: "Tienda Online",
    description: "Una tienda web Online en este caso orientada a la venta de Videojuegos, compatible con dispositivos móviles y pc. En la demo solo se muestran algunos productos pero esta diseñada para ser escalable gracias a a versatilidad de React.",
    tags: [{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MUI5",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
    ],
    image: gamewebsite,
    source_code_link: "https://game-shop-lime.vercel.app/",
    github_link: "https://github.com/AntonioKeyxer/GameShop-Codigo",
  },
  {
    name: "Sitio Web - Nike",
    description: "Clon interactivo de la e-commerce de Nike construido con React + Vite. El objetivo principal de este desarrollo es exhibir habilidades técnicas en diseño web moderno, optimización de componentes y estructuración de proyectos escalables divididos en secciones modulares.",
    tags: [{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: nikewebsite,
    source_code_link: "https://nike-clone-sandy.vercel.app/#contact-us",
    github_link: "https://github.com/AntonioKeyxer/NikeShopCodigo",
  },
  {
    name: "Machine Learning - Trabajos",
    description: "Selección de trabajos prácticos donde aplico diversas técnicas de aprendizaje supervisado y no supervisado. Incluye implementaciones optimizadas con el ecosistema de Python, utilizando librerías clave como Pandas, Scikit-Learn y Matplotlib.",
    tags: [{
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: machinel,
    source_code_link: "https://github.com/AntonioKeyxer/MachineLearning/tree/main/Machine%20Learning%20-%20Works",
    github_link: "https://github.com/AntonioKeyxer/MachineLearning/tree/main/Machine%20Learning%20-%20Works",
  },
  {
    name: "NLP - Trabajos",
    description: "Este repositorio reúne diversos trabajos prácticos enfocados en Natural Language Processing. Incluye el uso de librerías estándar de la industria como spaCy para tareas lingüísticas y FastText para representaciones vectoriales, optimizando el manejo de datos con Pandas y Sklearn.",
    tags: [{
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "SpaCy",
        color: "green-text-gradient",
      },
      {
        name: "FastText",
        color: "blue-text-gradient",
      },
    ],
    image: nlp,
    source_code_link: "https://github.com/AntonioKeyxer/NLP-Proyectos/tree/main/NLP%20-%20Works",
    github_link: "https://github.com/AntonioKeyxer/NLP-Proyectos/tree/main/NLP%20-%20Works",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects
};