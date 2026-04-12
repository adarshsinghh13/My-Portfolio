"use client";

const testimonials = [
  {
    name: "Priya Verma",
    role: "Senior Software Engineer",
    text: "WORKING WITH ADARSH HAS BEEN GENUINELY POSITIVE. HE BRINGS STRONG FRONTEND KNOWLEDGE AND A FRESH PERSPECTIVE.",
    img: "/behind1.jpg",
  },
  {
    name: "Ananya Sharma",
    role: "Technical Lead, Infosys",
    text: "ADARSH CONTRIBUTED SOLID IMPROVEMENTS WITH A STRUCTURED APPROACH AND CLEAR COMMUNICATION.",
    img: "/behind2.jpg",
  },
  {
    name: "Arjun Singh",
    role: "Software Engineer",
    text: "RELIABLE FRONTEND DEVELOPER WITH CLEAN, SCALABLE, USER-FOCUSED CODE.",
    img: "/behind3.jpg",
  },
  {
    name: "Aditya Mehta",
    role: "Product Manager",
    text: "GREAT COLLABORATION AND EXECUTION. DELIVERS HIGH-QUALITY RESULTS CONSISTENTLY.",
    img: "/behind4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-28 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] text-white/60 mb-4">
          WHAT OTHERS SAY
        </p>

        <h2 className="text-[40px] md:text-[64px] font-semibold">
          The Voices{" "}
          <span className="font-serif italic bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text">
            Behind
          </span>
        </h2>
      </div>

      {/* TOP ROW */}
      <div className="relative overflow-hidden mb-10">

        {/* FADE LEFT */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />

        {/* FADE RIGHT */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex gap-6 ticker-left">

          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[420px] bg-[#0b0b0b] border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-white/20 transition"
            >
              {/* PROFILE */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.img}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>

              {/* QUOTE */}
              <div className="bg-black border border-white/10 rounded-xl p-4">
                <p className="text-sm text-white/90 font-semibold leading-relaxed">
                  “{t.text}”
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="relative overflow-hidden">

        {/* FADE LEFT */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />

        {/* FADE RIGHT */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex gap-6 ticker-right">

          {[...testimonials, ...testimonials].map((t, i) => (
            <div
  key={i}
  className="min-w-[420px] bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
>
  {/* TOP PROFILE */}
  <div className="flex items-center gap-3 mb-5">
    <img
      src={t.img}
      className="w-11 h-11 rounded-full object-cover border border-white/20"
    />
    <div>
      <p className="text-[15px] font-semibold">{t.name}</p>
      <p className="text-xs text-white/50">{t.role}</p>
    </div>
  </div>

  {/* QUOTE BOX */}
  <div className="bg-[#050505] border border-white/10 rounded-xl px-5 py-5">
    <p className="text-[15px] text-white/90 font-semibold leading-relaxed tracking-tight">
      “{t.text}”
    </p>
  </div>
</div>
          ))}

        </div>
      </div>

    </section>
  );
}