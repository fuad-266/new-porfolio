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
  location: "Ethiopia",
  locationLink: "https://www.google.com/maps/place/ethiopia",
  description:
    "Software Engineer very active on Telegram, passionate about building robust systems and scalable products.",
  summary:
    "I am a visionary Software Engineer who recently started my own organization. I currently work as a freelancer and have successfully crafted and continue to actively develop a proprietary SaaS project. Throughout my career, I have participated in multiple hackathons across various cities in Ethiopia and successfully completed comprehensive coursework at a business incubation center during my university studies, equipping myself with both technical and entrepreneurial skills.",
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
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fuadabdala266@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fuad-266",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fuad266",
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
        url: "mailto:fuadabdala266@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atlas Computer Technology PLC (ACT)",
      href: "",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Software Engineering Intern",
      logoUrl: "/atlas-logo.png",
      start: "June 2025",
      end: "Jan 2026",
      description:
        "Engineered a multi-role Retail Operation Management System using Java, Spring Boot, and PostgreSQL, implementing strict JWT authentication and role-based access control. Dockerized the backend architecture and executed a production deployment to an AWS EC2 instance. Configured a secure Nginx reverse proxy with HTTPS and built a companion customer mobile app using React Native and Expo.",
    },
    {
      company: "Fanos",
      badges: [],
      href: "",
      location: "Addis Ababa, Ethiopia",
      title: "Software Engineer",
      logoUrl: "/fanos-logo.jpg",
      start: "Feb 2026",
      end: "April 2026",
      description:
        "Developed and deployed high-performance full-stack web applications using Next.js and React. Architected secure backend services and managed database connections utilizing Supabase and Firebase. Streamlined CI/CD pipelines to enable automated, zero-downtime production deployments on Vercel and Render.",
    },
    {
      company: "ITDB",
      badges: [],
      href: "",
      location: "Addis Ababa, Ethiopia",
      title: "Software Developer",
      logoUrl: "/itdb-logo.png",
      start: "March 2026",
      end: "Oct 2026",
      description:
        "Architected robust RESTful APIs and managed relational database schemas to support scalable enterprise systems. Collaborated in an agile team environment, managing source code and project tasks via Git and GitHub. Optimized backend performance, resolved cross-origin (CORS) integration issues, and ensured secure data transmission.",
    },
  ],
  education: [
    {
      school: "Dire Dawa University",
      href: "https://www.ddu.edu.et",
      degree: "Bachelor's Degree of Software Engineering (BCS)",
      logoUrl: "/dire dawa logo.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com",
      degree: "Web Developer Course",
      logoUrl: "/udemy-logo.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Coursera",
      href: "https://www.coursera.org",
      degree: "Mobile App Development",
      logoUrl: "/coursera-logo.jpg",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Ethiopia Paramilitary",
      href: "https://github.com/DaniRuss/Denb-main",
      dates: "Feb 2026 - May 2026",
      active: true,
      description:
        "A comprehensive management system developed for the Addis Ababa city authorities. The platform facilitates the oversight of paramilitary personnel and streamlines the cataloging of confiscated goods within the city, providing a reliable operational control and inventory management system.",
      technologies: [
        "PHP",
        "Blade",
        "HTML",
        "CSS",
        "MySQL",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DaniRuss/Denb-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/denb.mp4",
    },
    {
      title: "Adama Wholesale",
      href: "https://adamashop.vercel.app",
      dates: "June 2026 - July 2027",
      active: true,
      description:
        "An Enterprise Resource Planning (ERP) system designed to manage a wholesale operation from end to end. The platform manages the entire lifecycle of goods, from procurement to customer delivery, offering complete operational control alongside a dedicated mobile application for customers.",
      technologies: [
        "Spring Boot",
        "React",
        "Kotlin",
        "TypeScript",
        "HTML",
        "CSS",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://adamashop.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fuad-266/Retail-operation-control-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Adama.mp4",
    },
    {
      title: "Nigat Realstate",
      href: "https://github.com/fuad-266/Nigat-realstate",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "A comprehensive real estate marketplace connecting buyers and sellers. This platform provides a seamless experience for users to list properties for sale and browse available real estate listings, facilitating efficient property transactions.",
      technologies: [
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/fuad-266/Nigat-realstate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/nigat.mp4",
    },
    {
      title: "Alora Abaya",
      href: "https://github.com/fuad-266/siham-shop",
      dates: "Jan 2026 - Feb 2026",
      active: true,
      description:
        "An elegantly designed e-commerce platform dedicated exclusively to the sale of women's abayas. The system provides a seamless shopping experience for customers with secure checkout, optimized product browsing, and efficient order management.",
      technologies: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "CSS",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/fuad-266/siham-shop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Alora.mp4",
    },
  ],
  hackathons: [],
} as const;
