export const myProjects = [
  {
    id: 1,
    category: "mobileApps",
    title: "SuscriPago",
    description:
      "SuscriPago es una aplicación móvil gratuita que centraliza todas tus suscripciones digitales en un solo lugar. Te avisa antes de cada cobro, te muestra estadísticas de tus gastos y te da recomendaciones para ahorrar.",
    subDescription: [
      "Desarrollada con React Native y Expo, disponible en la App Store para iOS y próximamente en Google Play para Android.",
      "Implementa alertas de cobro antes de cada renovación y un dashboard con estadísticas de gasto por suscripción.",
      "Usa Supabase como backend para autenticación y almacenamiento de datos en tiempo real.",
    ],
    href: "https://apps.apple.com/us/app/suscripago/id6774407144",
    logo: "",
    image: "/assets/projects/suscripago.jpg",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Expo",
        path: "/assets/logos/expo.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
    ],
  },
  {
    id: 2,
    category: "softwareDevelopment",
    title: "Student Retention Analytics",
    description:
      "A machine learning platform that predicts university student dropout risk using official public education data, helping institutions identify at-risk students and intervene early.",
    subDescription: [
      "Built a FastAPI (Python) backend exposing REST endpoints for predictions, statistics, and institutional queries.",
      "Trained machine learning models (scikit-learn + XGBoost) on SPADIES education data to predict dropout probability with SHAP-based explanations.",
      "Developed an interactive frontend with Chart.js for dashboards, a risk calculator, and department-level maps.",
      "Deployed the API on Railway/Render and the frontend on Vercel using free-tier infrastructure.",
    ],
    href: "https://alerta-estudiantil.leomoslab.com/",
    logo: "",
    image: "/assets/projects/student-retention-analytics.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-flat.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi-flat.svg",
      },
      {
        id: 3,
        name: "Next.js",
        path: "/assets/logos/nextjs-flat.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react-flat.svg",
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql-flat.svg",
      },
      {
        id: 6,
        name: "Docker",
        path: "/assets/logos/docker-flat.svg",
      },
    ],
  },
  {
    id: 3,
    category: "mobileApps",
    title: "Futurópolis",
    subtitle: "Interactive 3D Smart City",
    description:
      "An interactive 3D web experience that explores the future of smart cities through technology, digital design, and immersive user experiences.",
    subDescription: [
      "Built a 3D smart city with Three.js, React, and TypeScript, featuring 42 interactive IoT sensors across traffic, lighting, air quality, temperature, waste, and security.",
      "Implemented real-time sensor data visualization with a live HUD dashboard and per-sensor detail panels.",
      "Designed first-person keyboard and mouse controls for smoothly exploring the city with camera mode switching.",
      "Optimized rendering to sustain 45-60 FPS through simplified geometry, selective shadows, and pixel ratio limits.",
    ],
    href: "https://github.com/leomos2022/FUTOROPOLIS",
    logo: "",
    image: "/assets/projects/futuropolis.jpg",
    tags: [
      {
        id: 1,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 5,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 6,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 4,
    category: "landingPages",
    title: "Creaciones Cleo",
    description:
      "A professional landing website for Cleo Rodríguez's sewing and clothing alteration services, showcasing her portfolio, testimonials, and contact booking.",
    subDescription: [
      "Built with React 18, Vite, and Tailwind CSS for a modern, responsive experience across devices.",
      "Implemented a portfolio gallery, testimonials section, and a functional contact form with EmailJS integration.",
      "Added social media integration and smooth-scrolling navigation for seamless browsing.",
      "Deployed on GitHub Pages with an automated CI/CD pipeline on every push to main.",
    ],
    href: "https://leomos2022.github.io/creaciones-cleo/",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 4,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 5,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 6,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 5,
    category: "landingPages",
    title: "Authentication & Authorization System",
    titleColor: "text-sand",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 6,
    category: "landingPages",
    title: "Online Learning Platform",
    titleColor: "text-sand",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const projectCategories = ["mobileApps", "softwareDevelopment", "landingPages"];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/573103953475",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/leonardo-mosquera-rodriguez",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
