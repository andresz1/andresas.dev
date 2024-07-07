import { GithubIcon, LinkedinIcon, TwitterIcon, XIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Andrés Alvarez",
  initials: "AA",
  location: "Área de Barcelona, España",
  locationLink: "https://www.google.es/maps/place/Barcelona",
  about: "Ingeniero Front-End Senior",
  summary:
    "Soy un Desarrollador de Software con experiencia en Gestión de Servidores, Redes y Hosting, Modelado de Datos, Lógica de Negocios, Interfaz de Usuario y Experiencia de Usuario. Estoy principalmente enfocado en el Desarrollo Web y Móvil. Gran parte de mi experiencia laboral está relacionada con esto. Me siento cómodo desarrollando tanto en Front-End como en Back-End. Me defino como una persona creativa, dedicada y responsable que gusta de los desafíos. Soy optimista en lugar de pesimista, pero también soy realista. Disfruto aprender cosas nuevas y compartir mis conocimientos.",
  avatarUrl: "/images/profile.jpg",
  personalWebsiteUrl: "https://andresas.dev",
  contact: {
    email: "a.alvarez.sor@gmail.com",
    tel: "+34652739901",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/andresz1",
        icon: GithubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aalvarezsordo",
        icon: LinkedinIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/andresz_s",
        icon: TwitterIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Central de Venezuela",
      degree: "Licenciatura en Ciencias de la Computación",
      start: "2010",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Adevinta",
      link: "https://adevinta.com",
      badges: [],
      title: "Ingeniero Front-End Senior",
      location: "Área de Barcelona, España",
      logo: XIcon,
      start: "2022",
      end: null,
      description:
        "Liderando los esfuerzos de Ingeniería Front-End para la Comunidad Web Inmobiliaria, supervisando Fotocasa y Habitaclia. Implementando iniciativas para mejorar la experiencia del desarrollador (DX), la observabilidad, la experimentación, las pruebas y el rendimiento en toda la organización. Contribuyendo a acelerar la entrega y mejorar la calidad de las principales aplicaciones web incluyendo: Fotocasa, Habitaclia, Coches.net, Infojobs, Leboncoin y ebay Kleinanzeigen.",
    },
    {
      company: "CodeOp",
      link: "https://codeop.tech",
      badges: [],
      title: "Instructor Principal de Desarrollo Web",
      location: "Área de Barcelona, España",
      start: "2022",
      end: "2023",
      description:
        "Enseñé dos cursos a tiempo parcial de 6 meses de Full-Stack JavaScript para principiantes, culminando en que los estudiantes construyeran aplicaciones MVP usando: React, Express.js y MySQL.",
    },
    {
      company: "Adevinta",
      link: "https://adevinta.com",
      badges: [],
      title: "Ingeniero Front-End Senior",
      location: "Área de Barcelona, España",
      start: "2020",
      end: "2022",
      description:
        "Miembro del equipo de Confianza y Transacciones, responsable del desarrollo de la PWA de Milanuncios utilizando: React, SCSS, Jest y Cypress. Integré Optimizely para la experimentación y Datadog para la monitorización y observabilidad. Jugué un papel clave en la migración exitosa de Milanuncios de un monolito PHP a React.",
    },
    {
      company: "OLX | letgo",
      link: "https://www.olx.com",
      badges: [],
      title: "Ingeniero Full-Stack Senior",
      location: "Área de Barcelona, España",
      start: "2018",
      end: "2020",
      description:
        "Desarrollo de la PWA Universal de Letgo utilizando: React, Redux, styled-components, AMP, Jest, Enzyme, Axios, Flow, Express, Jenkins, Kibana, New Relic, Amplitude y Optimizely.",
    },
    {
      company: "Rocket Digital",
      link: "https://www.rock.et",
      badges: [],
      title: "Ingeniero Full-Stack",
      location: "Área de Barcelona, España",
      start: "2017",
      end: "2018",
      description:
        "Desarrollo de varias aplicaciones web SaaS utilizando: Vue.js, Vuetify, Webpack, Jest, Stylus, AngularJS, AngularJS Material, Gulp, Sass, Node.js, Docker, Bitbucket Pipelines, AWS, Spring, PostgreSQL y Apache Kudu.",
    },
    {
      company: "SlashMobility",
      link: "https://slashmobility.com",
      badges: [],
      title: "Ingeniero Front-End",
      location: "Área de Barcelona, España",
      start: "2016",
      end: "2017",
      description:
        "Desarrollo de aplicaciones web e híbridas utilizando: AngularJS, Angular, Karma, Jasmine, Node.js, Docker, Jenkins, AWS, Grunt, Gulp, Webpack, Firebase, Cordova, Sass (BEM/SMACSS), Bootstrap, Ionic e Ionic2. Uso de Scrum.",
    },
    {
      company: "Ludopia",
      link: "https://www.linkedin.com/company/ludopia",
      badges: [],
      title: "Ingeniero Back-End",
      location: "Área de Caracas, Venezuela",
      start: "2016",
      end: "2016",
      description:
        "Diseño, desarrollo, despliegue y mantenimiento de APIs REST para varios juegos hechos con Unity utilizando: ES6, Node.js, Express.js, MongoDB, Grunt, Swagger, Django, AWS y NGINX. Uso de Scrum.",
    },
    {
      company: "InWork Solutions",
      link: "https://www.linkedin.com/company/inwork-solutions",
      badges: [],
      title: "Ingeniero Web Junior",
      location: "Área de Caracas, Venezuela",
      start: "2015",
      end: "2015",
      description:
        "Diseño y desarrollo de APIs REST utilizando: Node.js, Express.js y MongoDB. También trabajé con HTML5, JQuery y Phaser.js para hacer páginas de aterrizaje y juegos 2D multiplataforma.",
    },
    {
      company: "Universidad Central de Venezuela",
      link: "http://www.ucv.ve",
      badges: [],
      title: "Administrador de Sistemas",
      location: "Área de Caracas, Venezuela",
      start: "2013",
      end: "2016",
      description:
        "Monitoreo, despliegue y mantenimiento de varios servidores, principalmente basados en Linux. Gestión de aplicaciones en Apache utilizando varios módulos. Desarrollo de sitios web utilizando: Wordpress, HTML5, CSS y JavaScript. Administración de bases de datos en MySQL para múltiples aplicaciones alojadas en el servidor principal. Soporte de red y hardware. Como parte del trabajo, también fui Asistente de Enseñanza. Cursos impartidos: Lenguajes de Programación, Introducción a los Gráficos por Computadora y Fundamentos y Técnicas en Gráficos por Computadora.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
    "SQL",
    "Node.js",
    "WebGL",
    "React",
    "Next.js",
    "Express.js",
    "Three.js",
    "Flask",
    "AWS",
    "Docker",
    "Observabilidad",
    "Experimentación",
    "Rendimiento Web",
  ],
  projects: [
    {
      title: "EZ3.js",
      tags: ["JavaScript", "WebGL", "DX", "Rendimiento"],
      description:
        "Un framework JavaScript para construir juegos 3D con HTML5 y WebGL de manera fácil. Inspirado en Three.js y Phaser.",
      link: {
        label: "ez3.js",
        href: "https://github.com/andresz1/ez3.js",
      },
      imageUrl: "/images/ez3js.png",
    },
    {
      title: "tesfy",
      tags: [
        "JavaScript",
        "Experimentación",
        "Feature Flags",
        "React",
        "Next.js",
      ],
      description:
        "Despliega a producción más rápido tomando decisiones basadas en datos de forma gratuita.",
      link: {
        label: "tesfy",
        href: "https://tesfy.vercel.app",
      },
      imageUrl: "/images/tesfy.png",
    },
    {
      title: "size-limit-action",
      tags: ["GitHub Action", "Rendimiento", "Tamaño del paquete"],
      description:
        "Una acción de GitHub que compara el costo real de tu JavaScript en cada Pull Request.",
      link: {
        label: "size-limit-action",
        href: "https://github.com/andresz1/size-limit-action",
      },
      imageUrl: "/images/size-limit-action.png",
    },
    {
      title: "sobreia",
      tags: ["IA", "SEO", "Directorio", "Next.js"],
      description:
        "Descubre las últimas innovaciones en herramientas, sitios web y aplicaciones con Inteligencia Artificial.",

      link: {
        label: "sobreia",
        href: "https://www.sobreia.com/",
      },
      imageUrl: "/images/sobreia.png",
    },
    {
      title: "spark",
      tags: ["Sistema de Diseño", "React", "Radix", "A11Y"],
      description:
        "Sistema de diseño basado en React enfocado en la modularidad y accesibilidad, utilizando TailwindCSS y Radix UI.",
      link: {
        label: "spark",
        href: "https://sparkui.vercel.app",
      },
      imageUrl: "/images/spark.jpg",
    },
  ],
} as const;
