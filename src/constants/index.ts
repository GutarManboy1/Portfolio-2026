const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Dreams", imgPath: "/images/ideas.svg" },
  { text: "Thoughts", imgPath: "/images/concepts.svg" },
  { text: "What Ifs", imgPath: "/images/designs.svg" },
  { text: "Fantasy", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Repos on GitHub" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 9000, suffix: "+", label: "Neurons Fired" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "🧘🏽‍♂️ Focus Master ",
    description:
      "Delivering high-quality results while maintaining attention to every detail. I work diligently to ensure excellence in all aspects of my projects. You can count on me to deliver the best possible outcome for your project.",
  },
  {
    imgPath: "/images/chat.png",
    title: "🗣️ Smooth Communicator",
    description:
      "Keeping you updated at every step to ensure transparency and clarity. I prioritize clear and open communication throughout the project. You never have to wonder about the status of your project.",
  },
  {
    imgPath: "/images/time.png",
    title: "🎵 Right On Time Delivery",
    description:
      "Making sure projects are completed on schedule, with quality & attention to detail. I understand the importance of deadlines and strive to deliver timely results without compromising on quality.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Typescript Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer (working on it)",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Fledgling",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Glenn's contributions brought creativity and technical expertise to the team at Iiba, significantly improving our backend functions. His work has been invaluable in delivering a better user experience.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/iiba-logo.png",
    title: "Full Stack Developer",
    date: "August 2025 - October 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the Iiba platform.",
      "Collaborated closely with engineers to ensure seamless user experiences.",
      "Optimized mobile application for maximum performance.",
    ],
  },
  {
    review:
      "Glenn’s contributions to Robinson Consulting's our team was exceptional. His technical expertise and problem-solving skills have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "UI/UX Design and Frontend Development",
    date: "October 2024 - January 2025",
    responsibilities: [
      "Led the development of responsive and user-friendly interfaces, focusing on scalability.",
      "Worked with backend developers and project managers to integrate APIs seamlessly with the frontend.",
      "Contributed to the design and coding of the website, ensuring a visually appealing and user-friendly experience.",
    ],
  },
  {
    review:
      "Glenn’s work on Goldware Park's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience and met our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Developer",
    date: "August 2024 - September 2024",
    responsibilities: [
      "Built cross-platform mobile apps using React Native and Typescript.",
      "Created websites using Wordpress for various clients.",
      "Coordinated with the design team to implement features based on feedback and suggestions.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Guts",
    mentions: "@griffith!",
    review:
      "I dont know what to say about Glenn. I dunno...his ability to weld the swords of code and design together is remarkable. His dedication to the dark arts of web development and his clients is evident in every project he undertakes. If you’re looking for a web developer who can bring your vision or loved ones back to life then Glenn is your guy.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Finn the Human",
    mentions: "@floopedpig",
    review:
      "Oh my glob, this developer is SO MATH! I hired them to help build a new app for tracking all my adventures across the Land of Ooo, and they totally crushed it! They explained all the TypeScript stuff in a way that even I could understand, and when I had like a billion ideas that didn't make sense, they helped me figure out what would actually work.10/10 would definitely hire again for my next heroic coding quest! WHAT TIME IS IT? Time to hire this developer!",
    imgPath: "/images/client2.png",
  },
  {
    name: "Shinji Ikari",
    mentions: "@father",
    review:
      "I... I wasn't sure I could work with a developer at first. I thought I'd just mess everything up or ask the wrong questions. But they were really patient with me, even when I second-guessed every decision about the project. He built exactly what I needed, and they actually listened when I explained what I wanted - which doesn't happen very often. I kept thinking I was bothering them with my requests, but they said it was fine and just kept working through everything methodically.I guess what I'm trying to say is... they made the whole process less scary? They were professional and knew their TypeScript and React really well. When I didn't understand something technical, they'd explain it without making me feel stupid.I don't know if I deserve to leave a review this positive, but... they did really good work. If you need a developer, they won't let you down. That's more than I can say about myself most days.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Albert Einstein",
    mentions: "@relativitygoat",
    review:
      "In my experience, true elegance in problem-solving comes not from complexity, but from finding the simplest path through seemingly insurmountable challenges - and this developer exemplifies that principle beautifully. Working with him was like collaborating with a fellow physicist - he asked the right questions, challenged assumptions when necessary, and maintained an infectious curiosity throughout our project. I would recommend his services to anyone seeking not merely a technician, but a thoughtful partner in the pursuit of innovative solutions.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Miles Davis",
    mentions: "@brewingbitches",
    review:
      "This cat's got the chops. If you want someone who understands that real innovation comes from discipline and taste, call this developer - he's the real deal, man.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Jerry Garcia",
    mentions: "@sugaree",
    review:
      "Man, what a trip working with this developer. They've got this beautiful flow to how they code - like they're jamming with the machine, you know? It's not rigid or uptight; they let the project breathe and evolve naturally while still keeping everything grounded and functional. Real nice balance there. They're a real pro, man. Can I have a bump?",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "github",
  //   url: "https://github.com/GutarManboy1",
  //   imgPath: "/images/github.png",
  // },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/glenn-torrens/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
