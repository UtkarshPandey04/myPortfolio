import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import noticeBoardLogo from './assets/company_logo/noticeBoard.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import kietLogo from './assets/education_logo/kiet_c.webp';
import lpsLogo from './assets/education_logo/lps.webp';
import MegaBlog from './assets/work_logo/megaBlog.png';
import community_notice from './assets/work_logo/community_notice.png';
import curr_conv from './assets/work_logo/curr_conv.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import cloudPractitionerLogo from './assets/certification/cloudPractitioner.png';
import mlFoundationsLogo from './assets/certification/machineLearning.png';


export const certifications = [
  {
    id: 0,
    title: 'AWS Academy Graduate - Machine Learning Foundations - Training Badge',
    img: mlFoundationsLogo,
    issuer: 'Amazon Web Services Training and Certification',
    date: 'November 2025',
    desc: 'AWS Academy Graduate – Machine Learning Foundations (Training Badge) is a digital badge issued by AWS to learners who complete the AWS Academy Machine Learning Foundations course. It shows that you’ve finished this introductory AWS-led machine-learning training and gained foundational knowledge of ML and related AWS services.',
    link: 'https://www.credly.com/badges/ba26af8b-afc6-43ff-9404-280c51ba43b5/public_url',
  },
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    img: cloudPractitionerLogo,
    issuer: 'Amazon Web Services Training and Certification',
    date: 'December 2025',
    desc: 'The AWS Certified Cloud Practitioner teaches the fundamentals of cloud computing and AWS. You learn what cloud computing is, how AWS works, and the purpose of core services like EC2, S3, RDS, and Lambda. It also covers basic security concepts, the AWS Shared Responsibility Model, and how AWS pricing, billing, and cost management work, helping you understand when and why to use different AWS services.',
    link: 'https://www.credly.com/badges/7d48f631-65b4-4ff5-bc05-7255848dcae8/public_url',
  },
];


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: noticeBoardLogo,
      role: "Fullstack Developer",
      company: "Neelgiri Enclave Welfare Society.",
      date: "June 2025 - August 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        " Next Js",
      ],
    },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Fullstack Engineer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    //{
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: kietLogo,
      school: "KIET Deemed To Be University, Ghaziabad",
      date: "Sept 2024 - July 2028",
      grade: "8.11 CGPA",
      desc: "I am persuing B.Tech in Computer Science & Engineering(Artificial Intelligence & Machine Learning) from KIET Deemed To Be University, Ghaziabad. At KIET, I am building a strong foundation in programming, software development, and computer science principles. I am studying courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KIET has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: lpsLogo,
      school: "Luncknow Public School, Lucknow",
      date: "Apr 2022 - March 2023",
      grade: "90%",
      desc: "I completed my class 12 education from Luncknow Public School, Lucknow, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: lpsLogo,
      school: "Luncknow Public School, Lucknow",
      date: "Apr 2020 - March 2021",
      grade: "98%",
      desc: "I completed my class 10 education from Luncknow Public School, Lucknow, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
    
  export const projects = [
    {
      id: 0,
      title: "MegaBlog",
      description:
        "A blogging platform built with React.js that allows users to create, edit, and share their blog posts. It features a clean and modern design, with a focus on user experience and performance.",
      image: MegaBlog,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/UtkarshPandey04/megaBlogProject",
      webapp: "https://mega-blog-project-rose.vercel.app/",
    },
    {
      id: 1,
      title: "Community Notice Board Website",
      description:
            "This app is a Digital Notice Board for a local community or residential society.It provides a centralized online platform where important information can be shared efficiently.What it does:Enables admins to post announcements and updates Displays local events and notices in one place Supports buy/sell/rent posts (non-commercial) Shows important contact information Accessible on both mobile and desktop.",
      image: community_notice,
      tags: ["React JS", "HTML", "CSS", "JavaScript","Express JS","Node JS","MongoDB"],
      github: "https://github.com/UtkarshPandey04/Community-Notice-Board-Website",
      webapp: "https://shadcn-ui-ivory-five.vercel.app/",
    },
   ];
