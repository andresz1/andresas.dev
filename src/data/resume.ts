import { GithubIcon, LinkedinIcon, TwitterIcon, XIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Andrés Alvarez",
  initials: "AA",
  location: "Barcelona Area, Spain",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "Staff Software Engineer",
  summary:
    "I'm a Software Developer with experience in Server, Network and Hosting Management, Data Modeling, Business Logic, User Interface and User Experience. I'm mainly focused on Web and Mobile Development. A huge part of my work experience is related with it. I feel comfortable developing both Front-End and Back-End. I define myself as a creative, dedicated and responsable person who likes challenges. I'm an optimist rather than a pessimist, but I'm also a realist. I enjoy learning new things and sharing my knowledges.",
  avatarUrl:
    "https://pbs.twimg.com/profile_images/1795192021801443329/3a7ehmex_400x400.jpg",
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
      degree: "Bachelor's Degree in Computer Science",
      start: "2010",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Adevinta",
      link: "https://adevinta.com",
      badges: [],
      title: "Staff Front-End Engineer",
      logo: XIcon,
      start: "2022",
      end: null,
      description: "Part of the Platform Team.",
    },
    {
      company: "CodeOp",
      link: "https://codeop.tech",
      badges: [],
      title: "Web Development Lead Instructor",
      start: "2022",
      end: "2023",
      description: "TODO",
    },
    {
      company: "Adevinta",
      link: "https://adevinta.com",
      badges: [],
      title: "Senior Front-End Engineer",
      start: "2020",
      end: "2022",
      description:
        "Part of the Trust and Transaction Team. Development of an Universal PWA using React, SCSS, Jest, Cypress, Optimizely and Datadog.",
    },
    {
      company: "OLX | letgo",
      link: "https://www.olx.com",
      badges: [],
      title: "Senior Full-Stack Engineer",
      start: "2018",
      end: "2020",
      description:
        "Development of Letgo Universal PWA using: React, Redux, styled-components, AMP, Jest, Enzyme, Axios, Flow, Express, Jenkins, Kibana, New Relic, Amplitude and Optimizely.",
    },
    {
      company: "Rocket Digital",
      link: "https://www.rock.et",
      badges: [],
      title: "Full-Stack Engineer",
      start: "2017",
      end: "2018",
      description:
        "Development of several SaaS web applications using: Vue.js, Vuetify, Webpack, Jest, Stylus, AngularJS, AngularJS Material, Gulp, Sass, Node.js, Docker, Bitbucket Pipelines, AWS, Spring, PostgreSQL and Apache Kudu.",
    },
    {
      company: "SlashMobility",
      link: "https://slashmobility.com",
      badges: [],
      title: "Front-End Engineer",
      start: "2016",
      end: "2017",
      description:
        "Development of web and hybrid applications using: AngularJS, Angular, Karma, Jasmine, Node.js, Docker, Jenkins, AWS, Grunt, Gulp, Webpack, Firebase, Cordova, Sass (BEM/SMACSS), Bootstrap, Ionic and Ionic2. Usage of Scrum.",
    },
    {
      company: "Ludopia",
      link: "https://www.linkedin.com/company/ludopia",
      badges: [],
      title: "Back-End Engineer",
      start: "2016",
      end: "2016",
      description:
        "Design, development, deployment and maintenance of REST APIs for several games made with Unity using: ES6, Node.js, Express.js, MongoDB, Grunt, Swagger, Django, AWS and NGINX. Usage of Scrum.",
    },
    {
      company: "InWork Solutions",
      link: "https://www.linkedin.com/company/inwork-solutions",
      badges: [],
      title: "Junior Web Engineer",
      start: "2015",
      end: "2015",
      description:
        "Design and development of REST APIs using Node.js, Express.js and MongoDB. Also worked using HTML5, JQuery and Phaser.js to make landing pages and Cross-Platform 2D games.",
    },
    {
      company: "Universidad Central de Venezuela",
      link: "http://www.ucv.ve",
      badges: [],
      title: "System Administrator",
      start: "2013",
      end: "2016",
      description:
        "Monitoring, deployment and maintenance of various servers, mainly Linux based. Management of applications on Apache using several modules. Development of websites using Wordpress, HTML5, CSS and JavaScript. Database administration on MySQL for multiple applications hosted on the main server. Network and hardware support. As part of the work I was also a Teaching Assistant. Courses given: Programming Languages, Computer Graphics Introduction and Fundamentals and Techniques in Computer Graphics.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "C++",
    "SQL",
    "Node.js",
    "WebGL",
    "React",
    "Next.js",
    "Express.js",
    "Three.js",
    "AWS",
    "Docker",
    "Observability",
    "Experimentation",
    "Web Performance",
  ],
  projects: [
    {
      title: "EZ3.js",
      tags: ["JavaScript", "WebGL", "DX", "Performance"],
      description:
        "A JavaScript framework for building 3D games with HTML5 and WebGL in an easy way. Inspired by Three.js and Phaser.",
      link: {
        label: "ez3.js",
        href: "https://github.com/andresz1/ez3.js",
      },
    },
    {
      title: "tesfy",
      tags: [
        "JavaScript",
        "Experimentation",
        "Feature Flags",
        "React",
        "Next.js",
      ],
      description:
        "Ship faster taking data-driven decisions with a set of libraries focused on performance for free.",
      link: {
        label: "tesfy",
        href: "https://tesfy.vercel.app",
      },
    },
    {
      title: "size-limit-action",
      tags: ["GitHub Action", "Performance", "Bundle size"],
      description:
        "A GitHub action that compares the real cost of your JavaScript in every pull request.",
      link: {
        label: "size-limit-action",
        href: "https://github.com/andresz1/size-limit-action",
      },
    },
    {
      title: "sobreia",
      tags: ["AI", "SEO", "Directory", "Next.js"],
      description:
        "Discover the latest innovations in tools, websites, and applications with Artificial Intelligence.",
      link: {
        label: "sobreia",
        href: "https://www.sobreia.com/",
      },
    },
    {
      title: "spark",
      tags: ["Design System", "React", "Radix", "A11Y"],
      description: "Create accessible React apps with ease.",
      link: {
        label: "spark",
        href: "https://sparkui.vercel.app",
      },
    },
  ],
} as const;
