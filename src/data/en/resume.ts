import { GithubIcon, LinkedinIcon, TwitterIcon, XIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Andrés Alvarez",
  initials: "AA",
  location: "Barcelona Area, Spain",
  locationLink: "https://www.google.es/maps/place/Barcelona",
  about: "Staff Front-End Engineer",
  summary:
    "I’m a Product Engineer who enjoys building things end‑to‑end from APIs and SDKs to web and mobile applications. Over the past 10+ years, I’ve worked on products at scale (Adevinta, OLX/letgo) and also created my own, like Freetour AI and open‑source libraries such as tesfy and size-limit-action. I focus on solving real problems, improving developer and user experience, and shipping solutions that make an impact. I see myself as someone who bridges product and engineering to deliver value fast without losing sight of quality.",
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
      location: "Barcelona Area, Spain",
      logo: XIcon,
      start: "2022",
      end: null,
      description:
        "Leading the Web Engineering efforts for the Real Estate Web Community, overseeing Fotocasa and Habitaclia. Implementing initiatives to enhance developer experience (DX), observability, experimentation, testing, and performance organization-wide. Contributing to accelerating delivery and improving quality across key web applications including: Fotocasa, Habitaclia, Coches.net, Infojobs, Leboncoin, and ebay Kleinanzeigen.",
    },
    {
      company: "CodeOp",
      link: "https://codeop.tech",
      badges: [],
      title: "Web Development Lead Instructor",
      location: "Barcelona Area, Spain",
      start: "2022",
      end: "2023",
      description:
        "Taught two 6-month Part-Time Full-Stack JavaScript courses for beginners, culminating in students building MVP applications using: React, Express.js, and MySQL.",
    },
    {
      company: "Adevinta",
      link: "https://adevinta.com",
      badges: [],
      title: "Senior Front-End Engineer",
      location: "Barcelona Area, Spain",
      start: "2020",
      end: "2022",
      description:
        "Responsible for developing the Milanuncios web application. Played a key role in successfully migrating Milanuncios from a PHP monolith to React. Built Milanuncios Express from scratch, which processes 100K+ sales per month, along with many other key features to par with Wallapop. Led cross-functional team initiatives, including improving Core Web Vitals and setting up monitoring and observability using Datadog.",
    },
    {
      company: "OLX | letgo",
      link: "https://www.olx.com",
      badges: [],
      title: "Senior Full-Stack Engineer",
      location: "Barcelona Area, Spain",
      start: "2018",
      end: "2020",
      description:
        "Helped build and maintain the Letgo PWA using: React, Redux, styled-components, Jest, Express.js, New Relic, Amplitude, and Optimizely. Developed several key features, including SEO-optimized listing pages, the chat widget, and the bump-up system, which processed more than 50K+ sales per month. Led cross-functional team initiatives such as web performance, observability, accessibility and experimentation.",
    },
    {
      company: "Rocket Digital",
      link: "https://www.rock.et",
      badges: [],
      title: "Full-Stack Engineer",
      location: "Barcelona Area, Spain",
      start: "2017",
      end: "2018",
      description:
        "Helped build and maintain Rocket SaaS web application to automate search ad campaigns. Played a key role in successfully migrating the monolith (Java and AngularJS) to Vue and microservices using Java, Spring, PostgreSQL, and Apache Kudu by leading front-end development. Delivered several data-intensive key features such as campaign reports, dashboards, and the Google Ads shopping splitter.",
    },
    {
      company: "SlashMobility",
      link: "https://slashmobility.com",
      badges: [],
      title: "Front-End Engineer",
      location: "Barcelona Area, Spain",
      start: "2016",
      end: "2017",
      description:
        "Development of several web and mobile applications for multiple clients (including: FC Barcelona, Mango and Zurich) using: AngularJS, Angular, Node.js, Ionic, React Native, Express.js and PostgreSQL. Worked under high pressure and tight deadlines.",
    },
    {
      company: "Ludopia",
      link: "https://www.linkedin.com/company/ludopia",
      badges: [],
      title: "Back-End Engineer",
      location: "Caracas Area, Venezuela",
      start: "2016",
      end: "2016",
      description:
        "Design, development, deployment and maintenance of REST APIs for several games made with Unity using: Express.js, MongoDB, Django, AWS and NGINX.",
    },
    {
      company: "InWork Solutions",
      link: "https://www.linkedin.com/company/inwork-solutions",
      badges: [],
      title: "Junior Web Engineer",
      location: "Caracas Area, Venezuela",
      start: "2015",
      end: "2015",
      description:
        "Design and development of REST APIs using: Express.js and MongoDB. Also worked using HTML5, jQuery and Phaser.js to make landing pages and cross-platform 2D games.",
    },
    {
      company: "Universidad Central de Venezuela",
      link: "http://www.ucv.ve",
      badges: [],
      title: "System Administrator",
      location: "Caracas Area, Venezuela",
      start: "2013",
      end: "2016",
      description:
        "Monitoring, deployment and maintenance of various servers, mainly Linux-based. Management of applications on Apache. Development of websites using: WordPress, HTML5, CSS and JavaScript. Database administration on MySQL for multiple applications. Network and hardware support. As part of the work I was also a Teaching Assistant. Courses given: Programming Languages and Computer Graphics Introduction.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
    "React",
    "React Native",
    "Next.js",
    "WebGL",
    "Three.js",
    "Node.js",
    "Express.js",
    "SQL",
    "PostgreSQL",
    "Flask",
    "AWS",
    "Docker",
    "Observability",
    "Experimentation",
    "Web Performance",
  ],
  projects: [
    {
      title: "Inmoedit",
      tags: ["JavaScript", "WebGL", "AI", "Real Estate"],
      description:
        "The AI photo, video and floor plan editor for real estate agents. More than 15 realtors using it and more than 200 euros MRR.",
      link: {
        label: "inmoedit",
        href: "https://www.inmoedit.com",
      },
      imageUrl: "/images/inmoedit.png",
    },
    {
      title: "EZ3.js",
      tags: ["JavaScript", "WebGL", "DX", "Performance"],
      description:
        "A JavaScript framework for building 3D games with HTML5 and WebGL in an easy way. Inspired by Phaser.js.",
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
        "Experimentation",
        "Feature Flags",
        "React",
        "Next.js",
      ],
      description:
        "Open Source experimentation library available in JavaScript, React, Kotlin and Swift.",
      link: {
        label: "tesfy",
        href: "https://tesfy.vercel.app",
      },
      imageUrl: "/images/tesfy.png",
    },
    {
      title: "size-limit-action",
      tags: ["GitHub Action", "Performance", "Bundle size"],
      description:
        "A GitHub action that compares the real cost of your JavaScript in every pull request. Used by 8K+ repositories.",
      link: {
        label: "size-limit-action",
        href: "https://github.com/andresz1/size-limit-action",
      },
      imageUrl: "/images/size-limit-action.png",
    },
    {
      title: "sobreia",
      tags: ["AI", "SEO", "Directory", "Next.js"],
      description:
        "One of the most popular AI directories in Spanish. More than 4K monthly visitors.",
      link: {
        label: "sobreia",
        href: "https://www.sobreia.com/",
      },
      imageUrl: "/images/sobreia.png",
    },
    {
      title: "PerfReviews",
      tags: ["Web Performance"],
      description:
        "Web performance audits and trainings. We have helped MediaMarkt, BackMarket, Nestle, and more.",
      link: {
        label: "PerfReviews",
        href: "https://perf.reviews/en",
      },
      imageUrl: "/images/perfreviews.png",
    },
  ],
} as const;
