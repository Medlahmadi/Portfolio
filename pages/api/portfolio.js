const portfolio = [
    {
      id: 0,
      projectName: "Souss.js",
      url: "https://nextjs.org/",
      image: "images/background.png",
      projectDetail:
        "Next.js is a flexible React framework that gives you building blocks to create fast web applications. It supports server-side rendering, static site generation, and API routes out of the box.",
      technologiesUsed: [
        { tech: "ReactJS" },
        { tech: "NextJS" },
        { tech: "NodeJS" },
        { tech: "TailwindCSS" },
      ],
    },
    {
      id: 1,
      projectName: "AtlasCMS",
      url: "https://strapi.io/",
      image: "images/background.png",
      projectDetail:
        "Strapi is an open-source headless CMS, built with Node.js. It's fully customizable and developer-first, making it ideal for creating flexible APIs quickly and easily.",
      technologiesUsed: [
        { tech: "NodeJS" },
        { tech: "ReactJS" },
        { tech: "REST API's" },
        { tech: "TailwindCSS" },
      ],
    },
    {
      id: 2,
      projectName: "RifCloud",
      url: "https://vercel.com/",
      image: "images/background.png",
      projectDetail:
        "Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables frontend teams to develop, preview, and ship websites fast.",
      technologiesUsed: [
        { tech: "NextJS" },
        { tech: "NodeJS" },
        { tech: "Serverless" },
        { tech: "ReactJS" },
      ],
    },
    {
      id: 3,
      projectName: "Zellige CSS",
      url: "https://tailwindcss.com/",
      image: "images/background.png",
      projectDetail:
        "Tailwind CSS is a utility-first CSS framework that enables you to rapidly build modern websites without ever leaving your HTML.",
      technologiesUsed: [
        { tech: "CSS" },
        { tech: "PostCSS" },
        { tech: "ReactJS" },
        { tech: "TailwindCSS" },
      ],
    },
    {
      id: 4,
      projectName: "CasbahDB",
      url: "https://supabase.com/",
      image: "images/background.png",
      projectDetail:
        "Supabase is an open-source Firebase alternative. It provides a real-time database, authentication, storage, and auto-generated APIs, using PostgreSQL under the hood.",
      technologiesUsed: [
        { tech: "PostgreSQL" },
        { tech: "NodeJS" },
        { tech: "ReactJS" },
        { tech: "REST API's" },
      ],
    },
    {
      id: 5,
      projectName: "Gharnata",
      url: "https://ghost.org/",
      image: "images/background.png",
      projectDetail:
        "Ghost is a powerful, open-source publishing platform for building and running modern online publications. It’s beautifully designed and built with Node.js.",
      technologiesUsed: [
        { tech: "NodeJS" },
        { tech: "Handlebars" },
        { tech: "ReactJS" },
        { tech: "REST API's" },
      ],
    },
    {
      id: 6,
      projectName: "Mezouga Commerce",
      url: "https://medusajs.com/",
      image: "images/background.png",
      projectDetail:
        "Medusa is an open-source composable commerce engine for building customizable and scalable ecommerce applications.",
      technologiesUsed: [
        { tech: "NodeJS" },
        { tech: "ReactJS" },
        { tech: "NextJS" },
        { tech: "TailwindCSS" },
      ],
    },
    {
      id: 7,
      projectName: "Rbati Remix",
      url: "https://remix.run/",
      image: "images/background.png",
      projectDetail:
        "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick experience.",
      technologiesUsed: [
        { tech: "ReactJS" },
        { tech: "Remix" },
        { tech: "NodeJS" },
        { tech: "TailwindCSS" },
      ],
    },
    {
      id: 8,
      projectName: "Toubkal Server",
      url: "https://appwrite.io/",
      image: "images/background.png",
      projectDetail:
        "Appwrite is an open-source backend server designed to provide core backend APIs required for developing modern applications, packaged as a set of Docker microservices.",
      technologiesUsed: [
        { tech: "Docker" },
        { tech: "NodeJS" },
        { tech: "GraphQL" },
        { tech: "REST API's" },
      ],
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(portfolio);
  }
  