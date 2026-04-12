"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Monitor, Book, FileText } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [showMore, setShowMore] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClick = () => setShowMore(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMore(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMore(false);
    }, 180);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // ❌ Blogs removed from here
  ];

  const handleNavigation = (path: string) => {
  if (pathname === path) return;
  router.push(path);
};

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg">

        {/* NAV ITEMS */}
        <div className="flex items-center gap-2 text-sm relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="relative px-3 py-1 rounded-full overflow-hidden group"
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-full border border-white/60" />
                )}

                <span
                  className={`relative z-10 transition ${
                    isActive
                      ? "text-black"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* MORE BUTTON */}
          <button
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            className="px-3 py-1 rounded-full text-xs bg-white/10 hover:bg-white/20 transition text-gray-300"
          >
            More ▾
          </button>
        </div>

        {/* CTA */}
        <Link
          href="/book-call"
          className="px-3 py-1 bg-white text-black rounded-full text-xs hover:scale-105 transition"
        >
          Book a Call
        </Link>
      </div>

      {/* DROPDOWN */}
      {showMore && (
        <div
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-14 right-0 w-[300px] bg-[#0b0b0b] border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-2 gap-3">

            <Link href="/uses">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Monitor size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">Uses</p>
                  <p className="text-[10px] text-gray-400">
                    DevTools, AI & Socials
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/guestbook">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Book size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">Guestbook</p>
                  <p className="text-[10px] text-gray-400">
                    Sign my wall
                  </p>
                </div>
              </div>
            </Link>

            {/* ✅ BLOGS ADDED HERE */}
            <Link href="/blogs">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FileText size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">Blogs</p>
                  <p className="text-[10px] text-gray-400">
                    Read my articles
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}