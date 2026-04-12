"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import RotatingBadge from "./RotatingBadge";
import { FaReact } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiZod,
  SiChakraui,
  SiTypescript,
  SiSupabase,
} from "react-icons/si";
import { AiOutlineBarChart } from "react-icons/ai";
import { TbBrandRadixUi } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});
// ─── DATA ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "CodeStruct",
    link: "https://codestruct.vercel.app/",
    desc: " CodeStruct is a full-stack web application designed to help users learn Data Structures and Algorithms through interactive visualizations. It allows users to write and test code in a real-time playground environment. The platform offers curated practice problems with automated evaluation and detailed solutions. It also includes user authentication and progress tracking features. Overall, CodeStruct provides an engaging and effective platform for mastering DSA concepts.",
    gradient: "from-red-500 to-red-700",
    images: [
      "/projects/codestruct2.png",
      "/projects/Codestruct1.jpg",
      "/projects/codestruct3.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
    ],
  },
  {
    id: 2,
    title: "SnapURL",
    link: "https://snapurl-short.vercel.app/",
    desc: " SnapURL is a modern web application that shortens long URLs into compact, shareable links. It includes an analytics dashboard to track clicks and link performance. The platform is fully responsive and supports both light and dark modes for better user experience. It is built using Next.js, React, and Tailwind CSS with smooth animations. Overall, SnapURL provides a fast, efficient, and visually appealing URL shortening solution.",
    gradient: "from-blue-500 to-blue-700",
    images: [
      "/projects/Snapurl1.png",
      "/projects/Snapurl2.png",
      "/projects/Snapurl3.png",
    ],
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Framer", icon: <SiFramer className="text-pink-400" /> },
      { name: "Radix", icon: <TbBrandRadixUi /> },
      { name: "Recharts", icon: <AiOutlineBarChart /> },
      { name: "Hook Form", icon: <RiReactjsLine /> },
      { name: "Zod", icon: <SiZod /> },
    ],
  },
  {
    id: 3,
    title: "CVForge",
    link: "https://cvforge-web.netlify.app/",
    desc: " CVForge is a web-based resume builder that allows users to create professional resumes quickly and easily. It provides a live editor where users can customize their resume in real time based on their requirements. The platform is built using ReactJS and Chakra UI for a clean and responsive interface. It also supports features like printing and exporting resumes using React-To-Print.",
    gradient: "from-yellow-500 to-orange-500",
    images: [
      "/projects/cvforge1.png",
      "/projects/cvforge2.png",
      "/projects/cvforge3.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Chakra UI", icon: <SiChakraui className="text-teal-400" /> },
    ],
  },
];

// ─── LEFT PANEL ───────────────────────────────────────
function LeftPanel({ activeIndex }: { activeIndex: number }) {
  const project = projects[activeIndex];

  return (
    <div className="sticky top-24 h-[70vh] flex flex-col justify-start pt-10 px-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
         <h3 className={`${playfair.className} text-3xl italic font-semibold text-white tracking-tight mb-4`}>
  {project.title}
</h3>

          <p className="text-gray-400 text-[13px] leading-7 max-w-xl mb-6">
            🚀 {project.desc}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech?.map((t: any, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-white/10 text-xs text-gray-300 hover:bg-white/10 transition"
              >
                {t.icon}
                {t.name}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────
function ProjectCard({ project, onVisible }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(project.id);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [project.id, onVisible]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="h-[70vh] flex items-center justify-center"
    >
      <div className="flex gap-6 items-center">
        <div className="flex flex-col gap-6">
          {project.images.slice(0, 2).map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              className="w-[240px] h-[140px] object-cover rounded-2xl"
            />
          ))}
        </div>

        <div className="relative w-[400px] h-[200px]">
          <img
            src={project.images[2]}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute -top-10 -right-10">
            <RotatingBadge link={project.link} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────
export default function Showcase() {
  const [activeId, setActiveId] = useState(1);
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  return (
    <section className="relative bg-black h-full">
      <div className="flex min-h-screen">
        <div className="hidden lg:block w-[45%]">
          <LeftPanel activeIndex={activeIndex} />
        </div>

        <div className="w-full lg:w-[55%] px-6 py-16 flex flex-col gap-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onVisible={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}