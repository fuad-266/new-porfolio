import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Fuad Abdala",
  initials: "FA",
  url: "https://github.com/fuad-266",
  location: "Ethiopia, Dire Dawa",
  locationLink: "https://www.google.com/maps/place/Ethiopia",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on telegram.",
  summary:
    "I’m a software engineering student who learns by building real projects and reverse-engineering modern websites. I’ve worked with Node.js, Express, MongoDB, and MySQL, and I enjoy understanding how things work under the hood — from authentication to debugging and security. Lately, I’ve been focused on creating clean user interfaces and full-stack applications using modern tools and AI-assisted workflows.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "fuadabdala.sh@ddu.edu.et",
    tel: "+251901547689",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fuad-266",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/fuad266/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fuad266",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/fuad266",
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fuadabdala.sh@ddu.edu.et",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [],
  education: [
    {
      school: "Dire Dawa University",
      href: "https://www.ddu.edu.et",
      degree: "Software Engineering",
      logoUrl: "/ddu.png",
      start: "2021",
      end: "Present",
    },
  ],
  projects: [],
  hackathons: [
    {
      title: "E-Commerce: Personalization and Customer Experience",
      dates: "Oct 31st - Nov 2nd, 2024",
      location: "Dire Dawa University",
      description:
        "I participated in a hackathon focused on e-commerce personalization and customer experience. The event brought together students and professionals to collaborate on innovative solutions for enhancing online shopping and customer engagement.",
      image: "/venturemeda.png",
      links: [],
    },
    {
      title: "E-Learning Platform",
      dates: "April 30 - May 3, 2025",
      location: "Dire Dawa University",
      description:
        "Developed an e-learning platform in Dire Dawa University. The platform allows students to access course materials, assignments, and quizzes online.",
      image: "/venturemeda.png",
      links: [],
    },
  ],
} as const;
