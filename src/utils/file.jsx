import { BiSun } from "react-icons/bi";
import { CgBulb } from "react-icons/cg";

export const randy = () => Math.floor(Math.random() * 1000000);

export const dataInfo = [
  {
    id: randy(),
    name: "Video Sharing Application",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1664978942/media/Screenshot_36_agc7jj.png",
    gitUrl: "https://github.com/ChuksJoshuaa/TikTik-Video",
    linkUrl: "https://tik-tik-video.vercel.app/",
    stack: ["Next.js", "Tailwindcss", "Typescript"],
    tool: "Typescript",
  },
  {
    id: randy(),
    name: "Crytocurrency Alert System",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1667049509/media/Screenshot_280_nlef0n.png",
    gitUrl: "https://github.com/ChuksJoshuaa/Coin-App",
    linkUrl: "https://coin-alert.netlify.app",
    stack: ["React.js", "Tailwindcss", "Redux Toolkit"],
    tool: "Javascript",
  },
  {
    id: randy(),
    name: "Comfy Ecommerce Store",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1645406618/media/Screenshot_32_h7ouwu.png",
    gitUrl: "https://github.com/ChuksJoshuaa/React-comfy-store",
    linkUrl: "https://comfiee.netlify.app/",
    stack: ["React.js", "Styled-components", "Auth"],
    tool: "Javascript",
  },
  {
    id: randy(),
    name: "Social Media Application",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1666450763/media/Screenshot_274_b3pxuz.png",
    gitUrl: "https://github.com/ChuksJoshuaa/Social-media-app",
    linkUrl: "https://merny.netlify.app/",
    stack: ["React.js", "Node.js/Express.js", "MUI"],
    tool: "Javascript",
  },
  {
    id: randy(),
    name: "Admin Synfusion Dashboard",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1653966632/media/Screenshot_190_gtdink.png",
    gitUrl: "https://github.com/ChuksJoshuaa/React-Syncfusion-dashboard",
    linkUrl: "https://syn-dashboard.netlify.app/",
    stack: ["React.js", "Tailwindcss", "Synfusion-ej2"],
    tool: "Javascript",
  },
  {
    id: randy(),
    name: "Full Stack Sanity Project",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1652857338/media/Screenshot_102_dlmc6y.png",
    gitUrl: "https://github.com/ChuksJoshuaa/ecommerce-sanity-cms",
    linkUrl: "https://ecommerce-sanity-cms.vercel.app/",
    stack: ["Next.js", "Tailwindcss", "Sanity-io"],
    tool: "Javascript",
  },

  {
    id: randy(),
    name: "Dog Care Web Application",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1666851706/media/Screenshot_50_jxbyw9.png",
    gitUrl: "https://github.com/ChuksJoshuaa/Dog-Care-Web-Application",
    linkUrl: "https://doggoo.netlify.app",
    stack: ["React.js", "Styled-components", "Api"],
    tool: "Javascript",
  },
  {
    id: randy(),
    name: "Fitness Application",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1656174077/media/Screenshot_218_uubkjo.png",
    gitUrl: "https://github.com/ChuksJoshuaa/Fitness-App",
    linkUrl: "https://g-fit.netlify.app/",
    stack: ["React.js", "Rapid Api", "Material UI"],
    tool: "Javascript",
  },
  {
    id: randy(),
    name: "You-tube Clone",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1662302556/media/Screenshot_233_xei9a2.png",
    gitUrl: "https://github.com/ChuksJoshuaa/youtube-clone",
    linkUrl: "https://you-clone.netlify.app/",
    stack: ["React.js", "Material UI", "Rapid Api"],
    tool: "Javascript",
  },
  {
    id: randy(),
    name: "React Razors Site",
    imageUrl:
      "https://res.cloudinary.com/chuksmbanaso/image/upload/v1644267958/media/Screenshot_21_ufuirr.png",
    gitUrl: "https://github.com/ChuksJoshuaa/React-Razors-site",
    linkUrl: "https://razoy.netlify.app/",
    stack: ["React.js", "Context Api", "Styled-components"],
    tool: "Javascript",
  },
];

export const navData = [
  {
    id: randy(),
    name: "Home",
    link: "#hero",
  },
  // {
  //   id: randy(),
  //   name: "About Me",
  //   link: "about",
  // },
  {
    id: randy(),
    name: "Projects",
    link: "#projects",
  },
  {
    id: randy(),
    name: "Services",
    link: "#services",
  },
  {
    id: randy(),
    name: "Contact Me",
    link: "#contact",
  },
];

export const LightMode = [
  {
    id: randy(),
    name: "Light",
    link: <BiSun />,
  },
];

export const DarkMode = [
  {
    id: randy(),
    name: "Dark",
    link: <CgBulb />,
  },
];
