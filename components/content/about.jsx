const extraCourses = [
  {
    title: "Micro Economics",
    organization: "Stockholm University",
    description: "https://www.su.se/sok-kurser-och-program/ec1020-1.411929",
  },
  {
    title: "Western Philosophy",
    organization: "Umeå University",
    description: "https://www.umu.se/utbildning/kurser/filosofi-a2/",
  },
  {
    title: "Thus spoke Zarathustra",
    organization: "Philosophy Portal",
    description: "",
    link: "https://philosophyportal.online/",
  },
  {
    title: "Sensemaking 101",
    organization: "Rebel Wisdom",
    description: "",
    link: "https://rebelwisdom.co.uk/",
  },
  {
    title: "Authentic Relating 1, 2",
    organization: "ART",
    description: "",
    link: "https://authenticrelating.co/",
  },
];

const work = [
  {
    title: "Project Controller",
    year: "2021 - on going",
    organization: "Sweco Sverige",
    description: "",
    link: "http://sweco.se/",
  },
  {
    title: "Structural Engineer",
    year: "2020 - 2021",
    organization: "Sweco Structures",
    description: "",
    link: "http://sweco.se/",
  },
  {
    title: "Management",
    year: "2017 - 2020",
    organization: "Sweco Management",
    description: "",
    link: "http://sweco.se/",
  },
  {
    title: "Site Manager",
    year: "2017",
    organization: "JM Entreprenad",
    description: "",
    link: "https://www.jm-entreprenad.se/",
  },
  {
    title: "Supervisor",
    year: "2017",
    organization: "JM Entreprenad",
    description: "",
    link: "https://www.jm-entreprenad.se/",
  },
  {
    title: "Construction Manager",
    year: "2016",
    organization: "Tyresö kommun",
    description: "",
    link: "https://www.tyreso.se/stadsutveckling.html",
  },
];

// Oversätt kursplan mål och använd som decription.

const academics = [
  {
    title: "Web Development",
    organization: "CME",
    link: "https://cmeducations.se/utbildningar/program/frontend-app-developer",
    year: "2021 - 2023",
    description: "",
    courses: [
      {
        course: "Agile Projects",
        description:
          "Introduction to Project Management in Software Development",
        grade: "100/100",
      },
      {
        course: "UX-design",
        description: "UX-design, Figma",
        grade: "100/100",
      },
      {
        course: "Frontend 1",
        description: "Introduction Web Development (HTML, CSS, JS)",
        repos: { "first webpage": "" },
        grade: "100/100",
      },
      {
        course: "Frontend 2",
        description: "Frameworks (React, Vue)",
        grade: "100/100",
      },
      {
        course: "Git",
        description: "Git version control",
        grade: "100/100",
      },
      {
        course: "Backend 1",
        description: "Node.js, Express, Socket-IO, SQL",
        grade: "100/100",
      },
      {
        course: "Deployment",
        description: "Deployment of Full Stack Applications",
        grade: "100/100",
      },
      {
        course: "Digital Marketing",
        description: "Strategies, SEO",
        grade: "100/100",
      },
      {
        course: "Web/Mobile Dev. (on going)",
        description: "Advanced React ",
        grade: "TBA",
      },
    ],
  },
  {
    title: "BSc. Civil Engineering",
    organization: "KTH",
    link: "https://www.kth.se/utbildning/hogskoleingenjor/byggteknik-design/byggteknik-och-design-hogskoleingenjor-180-hp-1.4155",
    year: "2013 - 2016",
    description: "",
    // courses: [],
  },
];

const personalInterests = [
  `'Philosophy'`,
  `'Bachata'`,
  `'Capybaras'`,
  `'Finance'`,
  `'Pancakes'`,
  `'Existentialism'`,
  `'What's web 3.0'`,
  `'Poetry'`,
  `'Jiu-jitsu'`,
  `'Decentralisation'`,
  `'Fighting'`,
  `'Salsa'`,
  `'Memes'`,
  `'Blockchain'`,
  `'Litterature'`,
  `'Pancakes'`,
  `'Programming'`,
  `'Nietzsche'`,
  `'Crypto'`,
  `'Martial arts'`,
  `'Movement'`,
];

export { extraCourses, work, academics, personalInterests };
