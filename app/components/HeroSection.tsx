"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  // 🔥 rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 delayed navigation (for transition)
  const handleNavigation = () => {
    setTimeout(() => {
      router.push("/about");
    }, 600);
  };

  return (
    <section className="bg-black text-white py-28 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-20 overflow-hidden">
      
      {/* LEFT */}
      <div className="max-w-2xl">

        <p className="text-xs tracking-[0.3em] text-white/60 mb-6">
          A QUICK GLANCE
        </p>

        <h1 className="text-[42px] md:text-[64px] lg:text-[50px] font-semibold leading-[1.1]">
          <span className="block">
            Building the bridge between
          </span>

          <span className="block">
            ideas and{" "}
            <span className="font-serif italic bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text">
              experiences
            </span>
          </span>
        </h1>

        <p className="mt-8 text-white/70 leading-relaxed max-w-lg">
          I'm Adarsh Singh, an engineering-driven developer who turns complex
          technical challenges into high-speed web products. I manage the entire
          stack with a focus on clean, reusable code and seamless performance.
          I excel in Next.js and full-stack architecture, always delivering
          modern solutions that actually solve problems for every user.
          <br /><br />
          My code is built to last, helping your startup reach the next level!
        </p>

        <p className="mt-4 text-white/70 max-w-lg">
          Building scalable solutions and crafting modern digital experiences.
        </p>

        {/* SOCIAL */}
        <div className="flex items-center gap-5 mt-8 text-white/60">

          <a
            href="https://www.linkedin.com/in/adarshsinghh13"
            target="_blank"
            className="hover:text-white transition text-lg"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/adarshsinghh13"
            target="_blank"
            className="hover:text-white transition text-lg"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/adarshsinghh13"
            target="_blank"
            className="hover:text-white transition text-lg"
          >
            <FaTwitter />
          </a>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleNavigation}
          className="mt-8 inline-flex items-center gap-3 text-sm text-white group"
        >
          Dive in deeper

          <span className="w-7 h-7 flex items-center justify-center border border-white/20 rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:border-white">
            →
          </span>
        </button>

      </div>

      {/* RIGHT (IMAGE STACK) */}
      <div className="relative w-[340px] h-[420px] flex items-center justify-center overflow-hidden">

        {images.map((img, i) => {
          const position = (i - index + images.length) % images.length;

          return (
            <motion.div
              key={i}
              className="absolute w-full h-full rounded-2xl overflow-hidden"
              animate={{
                x: position === 0 ? 0 : position === 1 ? 80 : -80,
                scale: position === 0 ? 1 : 0.9,
                rotate: position === 0 ? 0 : position === 1 ? 8 : -8,
                zIndex: position === 0 ? 3 : position === 1 ? 2 : 1,
                opacity: position === 2 ? 0.6 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}