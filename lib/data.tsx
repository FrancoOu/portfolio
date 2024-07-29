import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import  Image  from 'next/image';
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  // {
  //   name: "Blog",
  //   hash: "/blogs",
  // }
] as const;

export const experiencesData = [
  {
    title: "Monash University",
    location: "Clayton, VIC",
    description:
      <span>Graduated with a Bachelor of Information Technology, majoring in Software Development.</span>,
    icon: <Image className="scale-[0.85] py-[1rem] sm:py-[1.5rem]" priority width={100} height={100} src='/Monash-logo.svg' alt={"Monash Logo"}></Image>,
    date: "March 2020 - November 2022",
  },
  {
    title: "Monash University - Research Assistant ",
    location: "Clayton, VIC",
    description:<span>Contributed to the development of an open‐source framework <a className=" text-gray-600 underline font-semibold" href="https://github.com/SMAT-Lab/Scalpel">(Scalpel)</a> for Python static code analysis,focusing on compatibility testing.</span>
      ,
    icon: <Image className="scale-[0.85] py-[1rem] sm:py-[1.5rem]" priority width={100} height={100} src='/Monash-logo.svg' alt={"Monash Logo"}></Image>,
    date: "March 2020 - November 2022",
  },
  {
    title: "Kepple",
    location: "Collingwood, VIC",
    description:
      <span>Software Engieering Intern </span>,
    icon: <Image className="scale-[0.65]" priority width={100} height={100} src='data:image/png;base64,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' alt={"Monash Logo"}></Image>,
    date: "July 2023 - November 2023",
  },
  {
    title: "The University of Melbourne",
    location: "Parkville, VIC",
    description:
      <span>Graduated with a Master of Information Technology, majoring in Distributed Computing.</span>,
    icon: <Image className="scale-[0.8]" priority width={100} height={100} src='/UoM-logo.svg' alt={"UoM Logo"}></Image>,
    date: "March 2023 - July 2024",
  },
  {
    title: "Full Stack Software Developer",
    location: " ",
    description:
      <span>Looking for a full-time software developer role.</span>,
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "DLASSP",
    description:
      "In partnership with the School of Languages and Linguistics at the University of Melbourne, we developed an online platform facilitating panellists’ training in the standard language proficiency setting process ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js", "Express"],
    imageUrl: '/DLASSP.png',
  },
  {
    title: "Real Time Chat App",
    description:
      "A real‐time chat application utilising the Next.js framework and shadcnUI for dynamic UI components.",
    tags: ["React", "Next.js", "TypeScript",  "Tailwind", "Prisma", "shadcnUI", "Socket.io" ],
    imageUrl: '/discord.png',
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: '/discord.png',
  // },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Python",
  "Java",
  "Docker",
  "Kubernetes",
  "Linux",
] as const;