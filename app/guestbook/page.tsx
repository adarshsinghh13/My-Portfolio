"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import HeroSection2 from "../components/HeroSection2";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GuestbookPage() {
  const { data: session } = useSession();
  const { data, mutate } = useSWR("/api/guestbook", fetcher);

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!message) return;

    await fetch("/api/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
  name: session?.user?.name || "Anonymous",
  email: session?.user?.email,   // ✅ added (DO NOT REMOVE NAME)
  image: session?.user?.image || "",
  message,
}),
    });

    setMessage("");
    mutate();
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* 🔥 TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
            LEAVE YOUR SIGNATURE
          </p>

          <h1 className="text-[80px] md:text-[140px] font-bold leading-none">
            GUEST
          </h1>

          <h2 className="text-[60px] md:text-[100px] font-serif italic text-white/60 -mt-6">
            book
          </h2>
        </div>

        {/* RIGHT CARD (ONLY WHEN NOT LOGGED IN) */}
        {!session && (
          <div className="relative bg-[#0b0b0b] border border-white/10 rounded-[28px] px-8 py-8 w-[340px] h-[360px] ml-auto flex flex-col justify-between">

            <div className="space-y-3">
              <h3 className="text-[26px] leading-[32px] font-semibold">
                Leave your{" "}
                <span className="font-serif italic text-white/70">
                  Signature!
                </span>
              </h3>

              <p className="text-white/50 text-[14px] leading-[22px] max-w-[260px]">
                Sign in to leave your mark, customize your profile, and connect with other visitors.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => signIn("google")}
                className="w-full h-[48px] rounded-full bg-[#e5e5e5] text-black flex items-center justify-center gap-3 text-[14px] font-medium hover:opacity-90 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-4 h-4"
                />
                Google
              </button>

              <button
                onClick={() => signIn("github")}
                className="w-full h-[48px] rounded-full bg-[#1a1a1a] text-white flex items-center justify-center gap-3 text-[14px] font-medium hover:bg-[#222] transition"
              >
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  className="w-4 h-4 invert"
                />
                GitHub
              </button>

              <p className="text-[10px] text-white/30 text-center pt-2">
                By joining, you agree to our Terms of Service.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 🔥 LOGGED IN UI */}
      {session && (
        <div className="mt-16 max-w-4xl mx-auto">

          {/* USER */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={session.user?.image || ""}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">
  Hello{" "}
  <span className="font-serif italic text-gray-300">
    {session.user?.name}
  </span>
  !
</p>
              <p className="text-sm text-white/40">
                @{session.user?.name?.toLowerCase().replace(" ", "")}
              </p>
            </div>

            <button
              onClick={() => signOut()}
              className="ml-auto text-xs px-4 py-1 border border-white/20 rounded-full hover:bg-white/10 transition"
            >
              Logout
            </button>
          </div>

          {/* MESSAGE BOX */}
          <div className="
  bg-white/5
  backdrop-blur-xl
  border border-white/10

  rounded-[40px]
  px-5 py-3   /* ⬅️ reduced padding */

  flex items-center gap-4

  transition-all duration-300
  hover:bg-white/10
">

            <textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Leave a message..."
  className="
    flex-1
    bg-transparent
    outline-none
    text-white text-sm          /* ⬅️ smaller text */
    placeholder:text-white/40 placeholder:text-sm

    resize-none
    h-[36px]
    py-1
  "
/>

            <div className="flex justify-between items-center gap-3">
              <p className="text-xs text-white/30">
                {message.length}/500
              </p>

              <button
                onClick={handleSubmit}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-white text-sm hover:scale-105 transition"
              >
                Sign Guestbook →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 SIGNATURES */}
      <div className="mt-24">

        <p className="text-center text-white/40 text-sm tracking-widest mb-10">
          RECENT SIGNATURES
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {data?.map((msg: any) => (
  <div
    key={msg._id}
    className="
      relative
      bg-[#0b0b0b]
      border border-white/10
      rounded-2xl
      p-5
      transition
      hover:bg-white/5
      hover:border-white/20
    "
  >

    {/* ✅ DELETE BUTTON (FIXED CLICK ISSUE) */}
    {(msg.email === session?.user?.email || msg.name === session?.user?.name) && (
      <button
        onClick={async () => {
          await fetch("/api/guestbook", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: msg._id }),
          });
          mutate();
        }}
        className="absolute top-3 right-3 z-10 text-[10px] text-red-400 hover:text-red-300"
      >
        ✕
      </button>
    )}

    {/* QUOTE ICON (NO CLICK BLOCK) */}
    <div className="absolute top-4 right-4 text-white/5 text-5xl font-serif pointer-events-none">
      “
    </div>

    {/* USER */}
    <div className="flex items-center gap-3 mb-3">
      <img
        src={msg.image}
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="text-sm font-semibold">
          {msg.name}
        </p>
        <p className="text-[11px] text-white/40">
          {new Date(msg.createdAt).toDateString().slice(4, 10)}
        </p>
      </div>
    </div>

    {/* MESSAGE */}
    <p className="text-sm text-white/70 leading-relaxed">
      {msg.message}
    </p>

  </div>
))}
</div>
      </div>

      {/* 🔥 NEXT SECTION */}
      <div className="mt-40">
        <HeroSection2 />
      </div>

    </div>
  );
}