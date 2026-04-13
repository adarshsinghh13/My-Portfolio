"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/Navbar";
import TopLeft from "./components/TopLeft";
import Clock from "./Clock";
import Showcase from "./Showcase";
import SkillsSection from "./components/SkillsSection";
import Ticker from "./components/Ticker";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import BehindSection from "./components/BehindSection";
import HeroSection2 from "./components/HeroSection2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PageTransition from "./components/PageTransition";
import { AnimatePresence} from "framer-motion";
import PremiumCube from "./components/PremiumCube";



const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

export default function Home() {
  const pathname = usePathname();
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const text = "ADARSH";
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("Motion");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
  <>
      <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-[pulse_6s_ease-in-out_infinite]" />
        </div>

        {/* TOP LEFT */}
        <TopLeft />

        {/* NAVBAR */}
<Navbar />

        

        {/* HERO CONTENT */}
        <div className="max-w-4xl text-center z-10">

          {/* Small text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-sm tracking-widest text-gray-400 mb-6"
          >
            CREATIVE DEVELOPER
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[90px] md:text-[150px] font-extrabold tracking-tight leading-none text-center"
          >
            {text}
          </motion.h1>

          {/* TAGLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 text-3xl md:text-5xl font-semibold"
          >
            Crafting digital{" "}
            <span className={`${playfair.className} text-gray-400`}>
              experiences
            </span>{" "}
            that matter
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-gray-400 max-w-2xl mx-auto"
          >
            I design and develop modern web applications that deliver seamless,
            impactful user experiences.
          </motion.p>

          
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute bottom-6 left-6 z-50">
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-lg">📍</span>

            <div className="flex flex-col leading-tight">
              <span className="text-white text-[12px] uppercase tracking-[0.15em]">
                Based in Vadodara,
              </span>
              <span className="text-gray-500 text-[11px] uppercase tracking-[0.15em]">
                India
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute bottom-6 right-6 z-50 text-center">
          <div className="flex justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-500">
              <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="leading-tight">
            <p className="text-white text-[12px] uppercase tracking-[0.15em]">
              FULL STACK DEV,
            </p>
            <p className="text-gray-500 text-[11px] uppercase tracking-[0.15em]">
              & DESIGNER
            </p>
          </div>
        </div>

      </main>
      {/* ================= BENTO + CLOCK ================= */}
      <div className="relative">
        {/* ================= BENTO SECTION ================= */}
        <section className=" bg-black py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 h-[520px] bg-white/[0.03] border border-white/10 rounded-4xl p-6 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-[26px] font-semibold">
                Adarsh{" "}
                <span className={`${playfair.className} italic text-gray-400`}>
                  Singh
                </span>
              </h2>

              <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest">
                Vadodara, IN
              </p>
            </div>

            {/* CUBE */}
<div className="flex justify-center items-center h-[220px] mt-2">
  <PremiumCube 
    containerSize={220}
    
  />
</div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-6 text-gray-400">

              {/* LinkedIn */}
              <a 
    href="https://linkedin.com/in/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
                <svg width="18" height="18" fill="currentColor">
                  <path d="M16 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h14c1.1 
        0 2-.9 2-2V2c0-1.1-.9-2-2-2zM5.3 13.5H2.7V6h2.6v7.5zM4 
        4.9c-.8 0-1.4-.6-1.4-1.4S3.2 2 4 2s1.4.6 
        1.4 1.4S4.8 4.9 4 4.9zM15.3 
        13.5h-2.6v-3.6c0-.9-.3-1.5-1.1-1.5-.6 
        0-1 .4-1.2.8-.1.2-.1.5-.1.8v3.5H7.7V6h2.5v1h.1c.3-.6 
        1-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.7v4.2z" />
                </svg>
              </a>

              {/* GitHub */}
              <a 
    href="https://github.com/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
                <svg width="18" height="18" fill="currentColor">
                  <path d="M9 0C4 0 0 4 0 9c0 4 2.6 7.4 6.2 
        8.6.5.1.7-.2.7-.5v-1.7c-2.5.5-3-1.2-3-1.2-.4-1-.9-1.3-.9-1.3-.8-.5 
        0-.5 0-.5.9.1 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 
        .6-1.2-2-.2-4-1-4-4.4 0-1 .4-1.9 
        1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 
        2.6 1 .8-.2 1.6-.3 2.4-.3s1.6.1 
        2.4.3c1.8-1.3 2.6-1 2.6-1 .5 
        1.3.2 2.3.1 2.5.6.6 1 1.5 1 
        2.5 0 3.4-2 4.2-4 4.4.3.3.6.8.6 
        1.6v2.3c0 .3.2.6.7.5C15.4 16.4 
        18 13 18 9c0-5-4-9-9-9z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a 
    href="https://twitter.com/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
                <svg width="18" height="18" fill="currentColor">
                  <path d="M18 3a7.5 7.5 0 0 1-2.1.6 3.7 3.7 
        0 0 0 1.6-2 7.4 7.4 0 0 1-2.3.9A3.7 
        3.7 0 0 0 9.8 6c0 .3 0 .6.1.9A10.5 
        10.5 0 0 1 2 2.6a3.7 3.7 0 0 0 1.1 
        5A3.7 3.7 0 0 1 1.7 7v.1a3.7 3.7 
        0 0 0 3 3.6c-.3.1-.7.2-1 .2-.2 
        0-.5 0-.7-.1a3.7 3.7 0 0 0 3.5 
        2.6A7.5 7.5 0 0 1 0 15.5a10.5 
        10.5 0 0 0 5.7 1.7c6.8 0 10.5-5.6 
        10.5-10.5v-.5A7.4 7.4 0 0 0 18 3z"/>
                </svg>
              </a>

            </div>
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 h-[520px] relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            {/* SOFT GLOW (same feel as left) */}
<div className="absolute inset-0 rounded-2xl 
  bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]" />

            {/* CONTENT */}
            <div className="relative z-10 p-12 flex flex-col h-full justify-start">

              {/* TOP */}
              <div className="flex justify-between text-xs text-gray-500 tracking-widest mb-10">
                <span>DETAIL-DRIVEN UI</span>
                <span>PHILOSOPHY ✦</span>
              </div>

              {/* MIDDLE */}
              <div className="grid grid-cols-2 gap-10 items-start">

                {/* LEFT */}
                <div>
                  <h2 className="text-4xl md:text-[42px] font-semibold leading-tight">
                    Interfaces <br />
                    <span className={`${playfair.className} italic text-gray-400 text-[28px] md:text-[32px]`}>
                      you can feel.
                    </span>
                  </h2>

                  <p className="mt-5 text-gray-400 text-[13px] leading-relaxed">
                    I strive to create digital experiences that feel organic and human.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <div className="flex flex-wrap justify-end gap-1.5 mb-2">
                    {["Motion", "Type", "Feedback", "Craft"].map((t) => (
  <span
    key={t}
    onClick={() => setActiveTab(t)}
    className={`px-2 py-[2px] text-[10px] rounded-full border cursor-pointer transition ${
      activeTab === t
        ? "border-purple-500 text-purple-400"
        : "border-white/10 text-gray-300 hover:border-white/30"
    }`}
  >
    {t}
  </span>
))}
                  </div>

                  <p className="text-white text-xs font-medium">
  {activeTab === "Motion" && "Micro-interactions"}
  {activeTab === "Type" && "Typography"}
  {activeTab === "Feedback" && "Responsiveness"}
  {activeTab === "Craft" && "Attention to detail"}
</p>

<p className="mt-3 text-gray-400 text-xs max-w-[260px] leading-relaxed">
  {activeTab === "Motion" &&
    "Subtle movement that confirms intent — never distracting."}

  {activeTab === "Type" &&
    "Clean hierarchy and rhythm for effortless scanning."}

  {activeTab === "Feedback" &&
    "Every hover, click, and focus gets a crisp response."}

  {activeTab === "Craft" &&
    "Polish lives in the edges: spacing, timing, and states."}
</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            
            className="md:col-span-1 h-[520px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
          >
            {/* SOFT GLOW */}
<div className="absolute inset-0 rounded-2xl 
  bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
            {/* TOP */}
            <div className="flex justify-between">
              <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="flex items-center gap-2 text-xs px-3 py-1 border border-white/10 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Available
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl font-bold leading-tight">
                LET’S BUILD <br />
                SOMETHING <br />
                <span className={`${playfair.className} italic text-gray-400`}>
                  that works.
                </span>
              </h2>

              <p className="mt-6 text-white font-medium">
               
              </p>
            </div>

            {/* BUTTON */}
           <Link href="/book-call">
  <button className="
w-full py-2.5 px-5   /* ⬅️ reduced height + width */
rounded-full 
relative overflow-hidden

bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800
text-white text-sm font-semibold tracking-[0.12em]

border border-white/10
backdrop-blur-md

transition-all duration-300

hover:scale-[1.02]
hover:shadow-[0_8px_20px_rgba(255,255,255,0.06)]
hover:from-gray-600 hover:via-gray-400 hover:to-gray-700

active:scale-[0.98]
">
  CONNECT NOW ↗
</button>
</Link>
          </motion.div>

        </section>
       {/* ================= TOP CUT ================= */}






{/* ================= BOTTOM CUT ================= */}
<div className="" >

</div>
<div className="">

    <Showcase />
    <SkillsSection />
    <Ticker />
    <HeroSection />
    <Testimonials />
    <BehindSection />
    <HeroSection2 />

</div>


      </div>
</>
);
}
