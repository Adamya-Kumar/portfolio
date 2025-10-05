export const myProjects = [
  {
    id: 1,
    title: "Dijkstra Travel Planner",
    description:
      "A travel planner that calculates the optimal travel route by plane or bus based on Dijkstra's famous graph algorithm.",
    subDescription: [
      "Implemented Dijkstra's algorithm to find the fastest and cheapest travel routes between cities.",
      "Built a C++ application that parses city and route data from CSV files.",
      "Generated interactive HTML maps with Google Maps integration to visualize optimal travel routes.",
      "Supports both command-line arguments and interactive terminal input for user preferences."
    ],
    href: "https://github.com/Adamya-Kumar/Dijkstra-Travel-Planner",
    logo: "/Dijkstra.png",
    image: "/Dijkstra.png",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "HTML", path: "/assets/logos/html5.svg" },
    ],
  },
  {
    id: 2,
    title: "Quick AI",
    description:
      "AI-powered SaaS platform with advanced performance optimization.",
    subDescription: [
      "Engineered Resume Analyzer, Article Generator, and Object Remover using React.js and Node.js.",
      "Implemented secure authentication with Clerk and Stripe billing integration for subscription management.",
      "Optimized performance by 35% using lazy loading, code splitting, and efficient data structure selection.",
      "Applied algorithmic thinking for data processing pipelines and user request handling."
    ],
    href: "https://quick-ai-three.vercel.app/",
    logo: "/quick.jpg",
    image: "/quick.jpg",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
    ],
  },
  {
    id: 3,
    title: "Converso AI Trainer",
    description:
      "Real-time AI tutoring platform with speech processing algorithms.",
    subDescription: [
      "Built voice-to-text platform using OpenAI and Deepgram APIs with React.js frontend.",
      "Reduced response latency by 40% through optimized API calls and efficient data structure usage.",
      "Implemented session management using Supabase with secure authentication via Clerk.",
      "Utilized queue data structures for managing real-time audio processing workflows."
    ],
    href: "https://github.com/Adamya-Kumar/Converso_AI_Trainer",
    logo: "/converoai.jpg",
    image: "/converoai.jpg",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      
    ],
  },
  {
    id: 4,
    title: "Subscription Tracker API",
    description:
      "Scalable backend service with advanced rate limiting and optimization.",
    subDescription: [
      "Built RESTful API using Node.js, Express.js, and MongoDB with JWT authentication.",
      "Implemented rate limiting using a sliding-window algorithm, reducing API abuse by 60%.",
      "Applied hash map data structures for efficient user session management and data retrieval.",
      "Added Upstash email alerts, improving user renewal rate by 35% through optimized notification timing."
    ],
    href: "https://github.com/Adamya-Kumar/Subscription_tracker_system",
    logo: "/api.png",
    image: "/api.png",
    tags: [
      { id: 1, name: "Node.js", path: "" },
      { id: 2, name: "Express.js", path: "" },
      { id: 3, name: "MongoDB", path: "" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Adamya-Kumar",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adamya-kumar",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const reviews = [
  {
    name: "John Doe",
    username: "@johndoe",
    body: "Adamya is an exceptional developer. His attention to detail and problem-solving skills are outstanding. I would highly recommend him for any web development project.",
    img: "https://robohash.org/johndoe",
  },
  {
    name: "Jane Smith",
    username: "@janesmith",
    body: "Working with Adamya was a pleasure. He delivered our project on time and exceeded our expectations. His technical expertise is impressive.",
    img: "https://robohash.org/janesmith",
  },
  {
    name: "Michael Johnson",
    username: "@michaelj",
    body: "Adamya's ability to understand complex requirements and translate them into elegant solutions is remarkable. He's a valuable asset to any team.",
    img: "https://robohash.org/michaelj",
  },
  {
    name: "Sarah Williams",
    username: "@sarahw",
    body: "The website Adamya built for us has significantly improved our online presence. His code is clean, efficient, and well-documented.",
    img: "https://robohash.org/sarahw",
  },
  {
    name: "David Brown",
    username: "@davidb",
    body: "Adamya is not just a developer, but a true problem solver. He took the time to understand our business needs and delivered a solution that perfectly fits.",
    img: "https://robohash.org/davidb",
  },
  {
    name: "Emily Davis",
    username: "@emilyd",
    body: "I've worked with many developers, but Adamya stands out for his professionalism and technical skills. He's reliable and delivers quality work consistently.",
    img: "https://robohash.org/emilyd",
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    job: "Animart Enterprises",
    date: "06/2024 - 08/2024",
    contents: [
      "Built and maintained responsive web interfaces improving UI performance by 30%.",
      "Collaborated with cross-functional teams to develop features using React.js, Node.js, and Express.js.",
      "Followed Agile methodology with weekly sprints, daily standups, and continuous integration practices.",
      "Applied problem-solving skills to debug complex issues and optimize application performance."
    ],
  },
  {
    title: "Freelance Developer",
    job: "Fiverr",
    date: "2025-Present",
    contents: [
      "Building custom web applications and APIs for clients worldwide.",
      "Delivering projects using MERN stack, RESTful APIs, and performance optimization techniques.",
      "Managing client communications, requirements gathering, and project delivery on Fiverr platform."
    ],
  },
];
