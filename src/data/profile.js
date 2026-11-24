// All content below comes from the updated CV (Hasnain-Ali-CV.pdf). Edit here to update the site.

export const summary =
  "Web Developer with a Software Engineering background and hands-on experience in full stack development with the MERN stack and Next.js, WordPress/WooCommerce, and Shopify store development. I build responsive websites and web applications from interface to database, including REST API integration, authentication, and e-commerce setup.";

export const heroIntro =
  "I build responsive websites, web applications, and online stores: full stack apps with React and Next.js, WooCommerce sites with Elementor, and Shopify storefronts. Currently a Web Developer at Whoopit.";

export const openTo = "Open to freelance projects and remote opportunities.";

export const strengths = [
  {
    icon: "layers",
    title: "Frontend and backend in one hand",
    text: "Builds the interface in React and Next.js, then wires it to Node.js, Express, and Next.js API routes so features work end to end.",
  },
  {
    icon: "cart",
    title: "WordPress and Shopify stores",
    text: "Sets up and customizes WooCommerce and Shopify stores: pages, product catalogs, payment and shipping configuration, and theme customization.",
  },
  {
    icon: "shield",
    title: "Authenticated, role-based apps",
    text: "Has shipped secure login and role-based access with Firebase Authentication and Firestore, and with custom admin and staff roles in MERN.",
  },
  {
    icon: "search",
    title: "Responsive and SEO-aware",
    text: "Designs for every screen size and uses server-side rendering where search visibility matters, such as the PicoTech.pk company site.",
  },
];

export const softSkills = [
  "Creativity",
  "Detail-oriented, error-free work",
  "Interpersonal skills",
  "Effective communication",
  "Problem-solving",
  "Logical thinking",
  "Teamwork",
];

export const skillGroups = [
  {
    id: "frontend",
    icon: "monitor",
    title: "Frontend development",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Redux", "jQuery", "Responsive Web Design"],
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend development",
    items: ["Node.js", "Express.js", "Next.js API Routes", "REST API Integration", "Authentication"],
  },
  {
    id: "cms",
    icon: "cart",
    title: "WordPress, WooCommerce and Shopify",
    note: "CMS and e-commerce development",
    items: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Elementor Pro",
      "Shopify Store Development",
      "Shopify Theme Customization",
      "Payment Gateway Configuration",
      "Product Management",
    ],
  },
  {
    id: "databases",
    icon: "database",
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Firestore"],
  },
  {
    id: "tools",
    icon: "wrench",
    title: "Tools and platforms",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Firebase Hosting", "Render"],
  },
  {
    id: "other",
    icon: "braces",
    title: "Other technical skills",
    items: ["Python (Pandas, NumPy)", "Streamlit", "Database Design", "Server-Side Rendering"],
  },
];

// Ordered most recent first.
export const experience = [
  {
    role: "Web Developer",
    company: "Whoopit",
    start: "August 2026",
    end: "Present",
    current: true,
    points: [
      "Develop and maintain websites, working across frontend and backend development.",
      "Build responsive layouts that work consistently across desktop, tablet, and mobile devices.",
      "Debug website issues and optimize pages for performance and usability.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "DesignClinic.pk",
    start: "Sep 2024",
    end: "July 2026",
    current: true,
    points: [
      "Developing the ASIT web platform (inspired by ASET.org) with secure authentication and role-based access via Firebase Authentication and Firestore.",
      "Built a fully responsive React.js/Tailwind CSS interface with RESTful workflows for enrollment and course management; deployed on Vercel.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Mahhir 360",
    start: "Jun 2025",
    end: "Nov 2025",
    points: [
      "Designed and implemented core backend features (superadmin and user modules) for a restaurant internal management system using Node.js, Next.js API routes, and PostgreSQL.",
      "Built key frontend features with Next.js, React.js, and Tailwind CSS, and integrated backend APIs with the frontend for a seamless end-to-end experience.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Bonny",
    start: "Jun 2025",
    end: "Sep 2025",
    points: [
      "Developed interactive React.js/Next.js UI components to display events on a map, enabling saving, voucher redemption, and subscription management.",
      "Built responsive business dashboards with QR-code voucher redemption and an admin control panel for users, businesses, and events.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Powersoft 19",
    start: "Jun 2024",
    end: "Aug 2024",
    points: [
      "Developed frontend features for a healthcare system using React.js and Tailwind CSS, collaborating with the team to enhance UI/UX and performance.",
    ],
  },
  {
    role: "Data Analysis Intern",
    company: "District Agriculture Department Office, Haripur",
    start: "Jul 2023",
    end: "Sep 2023",
    points: [
      "Automated reporting and quantitative analysis using Pandas/NumPy, cutting manual data-processing time by 40% through feature engineering.",
      "Delivered reports and visualizations supporting planning decisions, and integrated weather API data into the Agricultural Information Portal.",
    ],
  },
];

// Images in /public/projects are generated illustrative previews (illustrative: true shows a label on the card).
// To use a real screenshot: overwrite the file (or point image at a new one) and remove the illustrative line.
// To add links: fill in live / github ONLY with URLs you have verified. Empty values are hidden.
// group: "live" = commercial sites shown first; "apps" = web applications and other projects.
export const projects = [
  // ---- Live commercial sites (shown first, in their own group) ----
  // image is empty on purpose: the card shows a generated cover until you add a real screenshot.
  // To add one: save it to /public/projects/<slug>.jpg and set image: "/projects/<slug>.jpg".
  {
    slug: "shadbaad",
    group: "live",
    category: "Shopify",
    title: "ShadBaad.pk",
    period: "2026",
    summary:
      "A Shopify e-commerce store for graphic apparel, with a customized theme, organized product collections, and essential store functionality.",
    points: [
      "Created and configured a Shopify e-commerce store.",
      "Customized the Shopify theme, storefront design, and website appearance.",
      "Worked on product organization, store setup, and essential e-commerce functionality.",
      "Worked on the shopping experience and overall store customization.",
    ],
    stack: ["Shopify", "Theme customization", "Product management"],
    icon: "cart",
    hue: 160,
    image: "/projects/shadbaad.png",
    live: "https://shadbaad.pk/",
    github: "",
  },
  {
    slug: "inclick",
    group: "live",
    category: "WordPress / WooCommerce",
    title: "InClick",
    period: "2026",
    summary:
      "A complete WooCommerce online store built with Elementor, covering the homepage, shop and product pages, payments, and shipping setup.",
    points: [
      "Developed and configured a complete WordPress website with Elementor and WooCommerce.",
      "Designed the homepage and built product, category, and shop pages, plus navigation, header, footer, and key sections.",
      "Configured payment methods (including resolving payment setup issues) and shipping and delivery settings.",
      "Added products and set up e-commerce functionality; created Contact, Privacy Policy, Returns, and Terms pages.",
      "Worked on design, customization, responsiveness, and overall functionality.",
    ],
    stack: ["WordPress", "WooCommerce", "Elementor"],
    icon: "globe",
    hue: 200,
    image: "/projects/inclicks.png",
    live: "https://inclicks.co.uk/",
    github: "",
  },
  {
    slug: "inspireclick",
    group: "live",
    category: "WordPress / WooCommerce",
    title: "InspireClick",
    period: "2026",
    summary:
      "A customized WooCommerce store built with Elementor Pro, with tailored page layouts, product pages, and a focus on responsiveness and user experience.",
    points: [
      "Developed and customized a WordPress/WooCommerce website with Elementor and Elementor Pro.",
      "Customized page layouts and designs, including the homepage, product pages, and key site sections.",
      "Configured WooCommerce functionality and website settings.",
      "Worked on website appearance, responsiveness, user experience, and design improvements.",
    ],
    stack: ["WordPress", "WooCommerce", "Elementor Pro"],
    icon: "sparkles",
    hue: 275,
    image: "/projects/inspire.png",
    live: "https://inspireclick.co.uk/",
    github: "",
  },

  // ---- Web applications and other projects ----
  {
    slug: "asit",
    group: "apps",
    category: "Full Stack Web App",
    featured: true,
    title: "ASIT Learning Platform",
    period: "Jan 2026 – Present",
    summary:
      "An educational platform modeled after ASET, supporting student enrollment and skill-training modules with role-based access.",
    points: [
      "Full-featured educational platform (modeled after ASET) supporting student enrollment and skill-training modules, with role-based auth via Firebase.",
      "Built responsive, scalable UI with React.js and Tailwind CSS; integrated REST APIs and Firestore for real-time data, deployed continuously on Vercel.",
    ],
    stack: ["React.js", "Firebase", "Tailwind CSS"],
    icon: "graduation",
    hue: 172,
        image: "/projects/asit.png",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    live: "",
    github: "",
  },
  {
    slug: "crypto-dummy-trading",
    group: "apps",
    category: "Frontend Web App",
    title: "Crypto Coin Dummy Buy & Sell",
    period: "Aug 2024 – Oct 2024",
    summary:
      "A live crypto tracking dashboard with practice buy and sell portfolio management, powered by real-time Binance prices.",
    points: [
      "Live crypto tracking dashboard using Binance WebSocket for real-time price updates, with dummy buy/sell portfolio management via localStorage.",
      "Designed a responsive UI with custom charts and a Favorites section for quick tracking; fully deployed on Vercel.",
    ],
    stack: ["React.js", "Binance WebSocket API"],
    icon: "chart",
    hue: 38,
    image: "/projects/crypto-dummy-trading.jpg",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    live: "",
    github: "",
  },
  {
    slug: "picotech",
    group: "apps",
    category: "Business Website",
    title: "PicoTech.pk Business Website",
    period: "Jul 2024 – Aug 2024",
    summary:
      "A complete company website presenting IT services and client solutions, built for search visibility with server-side rendering.",
    points: [
      "Complete company website showcasing IT services and client solutions, with SEO-optimized pages built using Next.js server-side rendering.",
      "Integrated Firebase for contact forms and inquiries; managed deployment and continuous updates via Firebase Hosting and GitHub.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Firebase Hosting"],
    icon: "globe",
    hue: 205,
    image: "/projects/picotech.jpg",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    live: "",
    github: "",
  },
  {
    slug: "inventory-billing",
    group: "apps",
    category: "Full Stack Web App",
    title: "Inventory & Billing Management System",
    period: "May 2024 – Jul 2024",
    summary:
      "A web-based system for billing, stock inventory, and customer invoices, with separate admin and staff access.",
    points: [
      "Web-based system for billing, stock inventory, and customer invoices with secure login and role-based access for admin/staff.",
      "Built CRUD APIs in Node.js with efficient MongoDB queries; generated PDF invoices and daily sales reports, deployed on Render.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    icon: "receipt",
    hue: 150,
    image: "/projects/inventory-billing.jpg",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    live: "",
    github: "",
  },
  {
    slug: "fault-detection",
    group: "apps",
    category: "Data / Machine Learning",
    title: "AI-Powered Fault Detection Dashboard",
    period: "Mar 2024 – May 2024",
    summary:
      "A real-time monitoring dashboard that flags equipment faults with machine learning models, using simulated live sensor input.",
    points: [
      "Real-time monitoring dashboard for detecting equipment faults using ML models with simulated live sensor inputs (temperature, vibration, pressure).",
      "Trained ML models on the NASA Turbofan dataset with threshold alerts and fault prediction outputs, deployed for industrial demonstration.",
    ],
    stack: ["Python", "Streamlit", "Machine Learning"],
    icon: "activity",
    hue: 275,
    image: "/projects/fault-detection.jpg",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    live: "",
    github: "",
  },
  {
    slug: "ecommerce-storefront",
    group: "apps",
    category: "E-commerce Web App",
    title: "E-Commerce Storefront",
    period: "Jan 2024 – Mar 2024",
    summary:
      "A modern online store with product listings, cart, order tracking, and secure Stripe payments.",
    points: [
      "Modern e-commerce store with product listings, cart management, and order tracking, integrated with Stripe for secure payments.",
      "Implemented user authentication, wishlists, and order history via Firebase; deployed on Vercel with a GitHub CI workflow.",
    ],
    stack: ["React.js", "Firebase", "Stripe"],
    icon: "cart",
    hue: 12,
    image: "/projects/ecommerce-storefront.jpg",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    live: "",
    github: "",
  },
  {
    slug: "dynam-galaxy",
    group: "apps",
    category: "Business Website",
    title: "Dynam Galaxy",
    period: "Sep 2024 – Oct 2024",
    summary:
      "An interactive company website showcasing digital solutions, with custom Framer Motion animations and responsive layouts.",
    points: [
      "Dynamic, interactive website showcasing the company's digital solutions, with custom Framer Motion animations for user engagement.",
      "Designed and optimized responsive layouts for seamless performance across devices, collaborating closely with UI/UX designers.",
    ],
    stack: ["Next.js", "React.js", "Framer Motion"],
    icon: "sparkles",
    hue: 255,
    image: "/projects/dynam-galaxy.jpg",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    // Listed on the CV as "Live: dynamgalaxy.com".
    live: "https://dynamgalaxy.com",
    github: "",
  },
  {
    slug: "quizical",
    group: "apps",
    category: "Frontend Web App",
    title: "Quizical App",
    period: "Sep 2024 – Oct 2024",
    summary:
      "An interactive quiz app that fetches questions from quiz APIs, tracks scores, and validates answers across categories.",
    points: [
      "Interactive quiz application with real-time question fetching via quiz APIs, score tracking, and answer validation across categories.",
      "Designed a responsive, user-friendly interface using React.js components and state management for a smooth cross-device experience.",
    ],
    stack: ["Next.js", "React.js", "HTML", "CSS"],
    icon: "quiz",
    hue: 330,
    image: "/projects/quizical.jpg",
    // Generated UI preview, not a real screenshot. Replace the image and delete this line when you have a real one.
    illustrative: true,
    live: "",
    github: "",
  },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Pak-Austria Fachhochschule (PAF-IAST), Haripur",
    start: "2022",
    end: "2026",
  },
  {
    degree: "FSc Pre-Engineering",
    school: "Shoukat Public School & College, Haripur",
    start: "2020",
    end: "2022",
  },
];

export const certifications = [
  "Full-Stack Development",
  "Frontend Development",
  "Data Analytics",
  "Introduction to Data Engineering",
  "Introduction to IT & AWS Cloud",
  "AI for Beginners",
  "Introduction to Cyber Security",
  "WordPress",
];

// HP LIFE (HP Foundation) online course certificates. PDFs live in /public/certificates.
export const hpLifeCertificates = [
  { title: "AI for Business Professionals", date: "Nov 2026", file: "ai-for-business-professionals" },
  { title: "Critical Thinking in the AI Era", date: "Nov 2026", file: "critical-thinking-in-the-ai-era" },
  { title: "Data Science & Analytics", date: "Nov 2026", file: "data-science-analytics" },
  { title: "Effective Business Websites", date: "Nov 2026", file: "effective-business-websites" },
  { title: "Introduction to Cybersecurity Awareness", date: "Nov 2026", file: "introduction-to-cybersecurity-awareness" },
  { title: "IT for Business Success", date: "Nov 2026", file: "it-for-business-success" },
  { title: "Selling Online", date: "Nov 2026", file: "selling-online" },
  { title: "Social Media Marketing", date: "Nov 2026", file: "social-media-marketing" },
  { title: "Customer Relationship Management", date: "Nov 2026", file: "customer-relationship-management" },
  { title: "Design Thinking", date: "Nov 2026", file: "design-thinking" },
  { title: "Effective Leadership", date: "Nov 2026", file: "effective-leadership" },
  { title: "Professional Networking for Career Growth", date: "Nov 2026", file: "professional-networking-for-career-growth" },
  { title: "Social Entrepreneurship", date: "Nov 2026", file: "social-entrepreneurship" },
  { title: "Agile Project Management", date: "Nov 2024", file: "agile-project-management" },
  { title: "Customer Experience (CX) for Business Success", date: "Nov 2024", file: "customer-experience-cx-for-business-success" },
];
