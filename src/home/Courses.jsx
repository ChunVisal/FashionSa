import React from "react";
import creative from "../assets/courses/creative.png";
import visual from "../assets/courses/visual.png";
import branding from "../assets/courses/branding.png";
import production from "../assets/courses/production.png";

const COURSES = [
  {
    title: "Creative Direction",
    tag: "Masterclass",
    size: "large",
    image: creative,
  },
  {
    title: "Visual Storytelling",
    tag: "Editorial",
    size: "small",
    image: visual,
  },
  {
    title: "Luxury Branding",
    tag: "Business",
    size: "small",
    image: branding,
  },
  {
    title: "Runway Production",
    tag: "Technical",
    size: "tall",
    image: production,
  },
  {
    title: "Textile Design",
    tag: "Artisan",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1528459801416-a7e99a0dce3a?q=80&w=2000",
  },
];

export default function FashionCourse() {
  return (
    <section
      id="academy"
      className="bg-[#050505] w-full min-h-screen py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-24"
    >
      {/* 1. HEADER */}
      <div className="mb-12 md:mb-16 lg:mb-20 border-l border-white/10 pl-6 md:pl-8">
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-none">
          Academy <br />
          <span
            className="text-transparent italic font-serif"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
          >
            Archive
          </span>
        </h2>
        <p className="mt-4 text-[8px] md:text-[10px] lg:text-[10px] tracking-[0.8em] md:tracking-[1em] text-white/30 uppercase">
          Curated Learning
        </p>
      </div>

      {/* 2. MASONRY BOOK GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[280px] sm:auto-rows-[320px] md:auto-rows-[380px] lg:auto-rows-[420px] xl:auto-rows-[480px] gap-3 md:gap-4 lg:gap-5 xl:gap-6">
        {COURSES.map((course, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden border border-white/10 hover:border-white/30 bg-[#111] transition-all duration-700 ${
              course.size === "large"
                ? "sm:col-span-2 sm:row-span-2"
                : course.size === "tall"
                  ? "sm:row-span-1"
                  : "sm:col-span-1 sm:row-span-1"
            }`}
          >
            {/* Image Layer - Full responsive with perfect sizing */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-contain"
                style={{
                  filter: "brightness(0.7) contrast(1.2) grayscale(0.3)",
                }}
              />
            </div>
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            {/* Content */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end pointer-events-none">
              <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] text-white/40 uppercase mb-1 sm:mb-2">
                {course.tag}
              </span>
              <h3
                className={`text-white font-bold uppercase tracking-tighter leading-tight sm:leading-none ${
                  course.size === "large"
                    ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                    : "text-base sm:text-lg md:text-xl lg:text-2xl"
                }`}
              >
                {course.title}
              </h3>

              {/* Subtle Line on Hover */}
              <div className="mt-2 sm:mt-3 md:mt-4 w-0 h-px bg-white/40 transition-all duration-500 group-hover:w-full" />
            </div>
            [3/31/2026 11:54 PM] Chun Visal: {/* Film Grain Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic@1&display=swap');
            .font-serif { font-family: 'Playfair Display', serif; }
          `,
        }}
      />
    </section>
  );
}
