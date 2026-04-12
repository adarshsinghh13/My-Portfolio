"use client";

import { motion } from "framer-motion";

export default function RotatingBadge({ link }: { link: string }) {
  
  return (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-[120px] h-[120px] block cursor-pointer"
  >
    {/* ROTATING TEXT */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="absolute inset-0"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>

        <text fill="white" fontSize="14" letterSpacing="2">
          <textPath href="#circlePath">
            VISIT PROJECT • VISIT PROJECT •
          </textPath>
        </text>
      </svg>
    </motion.div>

    {/* CENTER BUTTON */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[50px] h-[50px] rounded-full bg-white text-black flex items-center justify-center text-lg font-bold hover:scale-110 transition">
        →
      </div>
    </div>
  </a>
);
}