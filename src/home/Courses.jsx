import React from "react";
import creative from "../assets/courses/creative.png";
import visual from "../assets/courses/visual.png";
import branding from "../assets/courses/branding.png";
import production from "../assets/courses/production.png";

const COURSES = [
  {
    title: "Creative Direction",
    tag: "Masterclass",
    size: "large", // Spans 2 rows and 2 columns
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
    size: "tall", // Spans 2 rows
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
    <section id="academy" className="bg-[#050505] w-full pb-24 pt-10 px-6 md:px-16 lg:px-24">
      {/* 1. HEADER */}
      <div className="mb-16 border-l border-white/10 pl-8">
        <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          Academy <br />
          <span
            className="text-transparent italic font-serif"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
          >
            Archive
          </span>
        </h2>
        <p className="mt-4 text-[10px] tracking-[1em] text-white/30 uppercase">
          Curated Learning
        </p>
      </div>

      {/* 2. MASONRY BOOK GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 lg:gap-6">
        {COURSES.map((course, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden border border-white/5 bg-[#111] transition-all duration-700 hover:border-white/30 ${
              course.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : course.size === "tall"
                  ? "md:row-span-1"
                  : "md:col-span-1"
            }`}
          >
            {/* Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105"
              style={{
                backgroundImage: `url('${course.image}')`,
                filter: "brightness(0.7) contrast(1.2) grayscale(0.3)",
              }}
            />

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end pointer-events-none">
              <span className="text-[8px] md:text-[10px] tracking-[0.6em] text-white/40 uppercase mb-2">
                {course.tag}
              </span>
              <h3
                className={`text-white font-bold uppercase tracking-tighter leading-none ${
                  course.size === "large"
                    ? "text-3xl md:text-5xl"
                    : "text-xl md:text-2xl"
                }`}
              >
                {course.title}
              </h3>

              {/* Subtle Line on Hover */}
              <div className="mt-4 w-0 h-px bg-white/40 transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Film Grain Texture */}
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
