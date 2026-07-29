export const portfolioData = {
  personalInfo: {
    name: "Jaydev",
    title: "Lead Full Stack & DevOps Engineer",
    subtitle: "Building High-Performance Distributed Systems & Stunning Web Experiences",
    description: "A passionate Software Engineer specializing in developing robust, clean-architecture backend systems in Go/Node.js and modern, high-converting frontend interfaces in React/Next.js. Experienced in designing cloud-native architectures, performance tuning, and implementing SOLID principles.",
    cvUrl: "#", // Handled by simple direct download or mock alert
    email: "jaydev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    experienceYears: 8,
    completedProjects: 45,
    happyClients: 32,
    technologiesCount: 25,
  },
  
  about: {
    biography: "I am a versatile software engineer with a deep passion for writing clean, readable, and maintainable code. Over the past 8+ years, I have helped startups and enterprise businesses build scalable web applications from scratch, design microservices architectures, and streamline DevOps pipelines. I believe in continuously learning and applying software design patterns to solve real-world problems.",
    passion: "I love bridging the gap between elegant UI/UX designs and high-performance backend systems. Whether it is tuning SQL queries, containerizing applications, or crafting fluid UI interactions with Framer Motion, I strive for excellence in every line of code.",
    careerObjective: "To leverage my expertise in Full Stack Development and DevOps to build next-generation applications, lead engineering teams, and implement robust software practices that drive business success."
  },

  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML", level: 98 },
      { name: "CSS", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 80 }
    ],
    backend: [
      { name: "Golang", level: 90 },
      { name: "Node.js", level: 92 },
      { name: "PHP", level: 85 },
      { name: "REST API", level: 98 },
      { name: "Fiber (Go)", level: 88 },
      { name: "Lumen (PHP)", level: 80 },
      { name: "CodeIgniter", level: 75 }
    ],
    database: [
      { name: "MySQL", level: 90 },
      { name: "MariaDB", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 82 }
    ],
    devops: [
      { name: "Docker", level: 90 },
      { name: "AWS", level: 80 },
      { name: "Nginx", level: 85 },
      { name: "Git", level: 95 },
      { name: "Linux", level: 88 }
    ],
    architecture: [
      { name: "Clean Architecture", level: 95 },
      { name: "Domain Driven Design", level: 85 },
      { name: "Repository Pattern", level: 92 },
      { name: "SOLID Principles", level: 95 }
    ]
  },

  experience: [
    {
      company: "TechNova Solutions",
      position: "Lead Full Stack Engineer",
      duration: "2023 - Present",
      description: "Architected and built microservices using Go and Fiber, reducing API response times by 40%. Led a team of 5 engineers to migrate legacy PHP platforms to a modern React & Next.js frontend with Tailwind CSS.",
      technologies: ["Golang", "Fiber", "React", "Next.js", "MySQL", "Docker", "AWS"]
    },
    {
      company: "FlowState Digital",
      position: "Senior Backend Developer",
      duration: "2020 - 2023",
      description: "Designed RESTful APIs using Node.js and Lumen. Implemented Domain-Driven Design (DDD) and Repository Pattern for the core ecommerce API. Managed MariaDB and Redis databases.",
      technologies: ["Node.js", "Lumen", "MariaDB", "Redis", "Nginx", "Git", "Clean Architecture"]
    },
    {
      company: "PixelCraft Agency",
      position: "Web Application Developer",
      duration: "2018 - 2020",
      description: "Developed custom dashboard interfaces and consumer websites using React, Bootstrap, and CodeIgniter. Conducted performance optimization auditing.",
      technologies: ["React", "CodeIgniter", "MySQL", "JavaScript", "CSS", "Bootstrap"]
    }
  ],

  projects: [
    {
      title: "Decentralized E-Commerce Engine",
      category: "Fullstack",
      description: "A high-throughput web store backed by a clean architecture Go service and a high-fidelity React frontend. Features real-time stock updates via WebSockets and Redis caching.",
      technologies: ["Golang", "React", "Redis", "MariaDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "ecommerce_mock" // Will represent a local key or gradient
    },
    {
      title: "Cloud-Native DevOps Dashboard",
      category: "Frontend",
      description: "An interactive operations dashboard that monitors Kubernetes cluster health, docker image builds, and system resources using Framer Motion chart visualizations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Nginx", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "devops_mock"
    },
    {
      title: "Microservices Auth & API Gateway",
      category: "Backend",
      description: "A secure, stateless OAuth2 gateway built with Go Fiber. Implements token rotation, rate-limiting, and DDD repository patterns for user credential management.",
      technologies: ["Golang", "Fiber", "MongoDB", "Redis", "Clean Architecture"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "gateway_mock"
    },
    {
      title: "Enterprise Resource Scheduler",
      category: "Fullstack",
      description: "An employee resource planning app utilizing PHP Lumen and React. Optimized query executions, cutting page loading times in half.",
      technologies: ["React", "Lumen", "MySQL", "Docker", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "scheduler_mock"
    }
  ],

  services: [
    {
      title: "Frontend Development",
      description: "Building responsive, modern, and SEO-friendly single-page applications and static sites using React, Next.js, and Tailwind CSS. Pixel-perfect layout implementation.",
      icon: "FaReact"
    },
    {
      title: "Backend Development",
      description: "Designing scalable backend architectures, database schemas, and robust business logic layers in Golang, Node.js, and PHP under Clean Architecture patterns.",
      icon: "FaServer"
    },
    {
      title: "Full Stack Integration",
      description: "Combining high-performance APIs with sleek frontends. Seamlessly connecting UI states, authentication flows, web sockets, and payment gateways.",
      icon: "FaLayerGroup"
    },
    {
      title: "REST API Design & Dev",
      description: "Developing structured, secure, and self-documenting RESTful APIs. Implementing JWT auth, request validation, rate limiting, and CORS compliance.",
      icon: "FaCode"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing database queries, client-side bundles, lazy-loading strategies, asset delivery, and server configurations to achieve perfect Lighthouse scores.",
      icon: "FaRocket"
    },
    {
      title: "UI/UX & Mobile First Design",
      description: "Translating designer mockups into lightweight, accessible, and responsive components with delightful animations that work flawlessly on all screens.",
      icon: "FaMobileAlt"
    }
  ],

  testimonials: [
    {
      name: "Sarah Jenkins",
      role: "CTO, CloudScale Inc",
      comment: "Jaydev is an exceptional engineer. He took our legacy microservices system, rewritten it in Go with Clean Architecture, and reduced server costs by 50% while scaling throughput.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      name: "Marcus Vance",
      role: "Product Owner, InnovateApp",
      comment: "Working with Jaydev was a breeze. His frontend React skill is world-class, making our web platform highly responsive and visually breathtaking.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      name: "Elena Rostova",
      role: "Founder, Bloom Digital",
      comment: "Highly professional, clean coder, and excellent communicator. The DevOps setup and Docker pipelines he implemented have streamlined our release cycle tremendously.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150"
    }
  ]
};
