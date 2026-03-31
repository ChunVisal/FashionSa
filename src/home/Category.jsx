import React, { useRef } from "react";
import casual from "../assets/collections/casual.jpg";
import street from "../assets/collections/street.jpg";
import sports from "../assets/collections/sports.jpg";
import luxury from "../assets/collections/luxury.jpg";
import evening from "../assets/collections/evening.jpg";
import formal from "../assets/collections/formal.jpg";
import traditional from "../assets/collections/traditional.jpg";
import seasonal from "../assets/collections/seasonal.jpg";

const CATEGORIES = [
  {
    title: "Casual",
    accent: "Wear",
    image: casual,
  },
  {
    title: "Formal",
    accent: "Wear",
    image: formal,
  },
  {
    title: "Street",
    accent: "wear",
    image: street,
  },
  {
    title: "Sports",
    accent: "Wear",
    image: sports,
  },
  {
    title: "Luxury",
    accent: "Elite",
    image: luxury,
  },
  {
    title: "Traditional",
    accent: "Wear",
    image: traditional,
  },
  {
    title: "Seasonal",
    accent: "Trend",
    image: seasonal,
  },
  {
    title: "Evening",
    accent: "Wear",
    image: evening,
  },
];

export default function Category() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      id="collection"
      className="w-full py-5 overflow-hidden select-none relative bg-linear-to-t from-[#0a0a0a] to-[#1a1a1a]"
    >
      {/* 1. CENTERED TITLES */}
      <div className="relative z-10 text-center  mb-16 px-6">
        <h2
          className="text-white text-[2rem] md:text-9xl font-black tracking-[0.0.6rem] uppercase leading-none"
          style={{
            textShadow: `
      /* Default stroke (outline effect) */
      1px 1px 0 rgba(0,0,0,0.3),
      -1px -1px 0 rgba(0,0,0,0.3),
      1px -1px 0 rgba(0,0,0,0.3),
      -1px 1px 0 rgba(0,0,0,0.3),
      /* Black stroke */
      2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000,
      /* White stroke */
      3px 3px 0 #fff,
      -3px -3px 0 #fff,
      3px -3px 0 #fff,
      -3px 3px 0 #fff,
      /* Light soft shadow */
      4px 4px 8px rgba(0,0,0,0.15)
    `,
          }}
        >
          Collections
        </h2>
        <p className="mt-4 text-[15px] tracking-[0.8em] text-white/30 uppercase font-light">
          Explore the{" "}
          <span className="text-white/60 font-serif italic tracking-normal">
            Aura
          </span>{" "}
          of Style
        </p>
      </div>

      {/* 2. HORIZONTAL STRIP WRAPPER */}
      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-30 bg-black/50 backdrop-blur-md text-white p-6 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Prev</span>
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-30 bg-black/50 backdrop-blur-md text-white p-6 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Next</span>
        </button>

        {/* The Scroll Container (No Space Width) */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory no-scrollbar"
        >
          {CATEGORIES.map((cat, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-[50vw] md:w-[33.33vw] lg:w-[25vw] aspect-[3/4] relative group/card overflow-hidden snap-start"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover/card:scale-110"
                style={{
                  backgroundImage: `url('${cat.image}')`,
                  filter: "brightness(1) contrast(1.2)",
                }}
              />

              {/* Noir Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80" />

              {/* Floating Text */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center">
                <p className="text-[9px] tracking-[0.5em] text-white/90 uppercase mb-2 translate-y-4 opacity-0 transition-all duration-700 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                  {cat.accent}
                </p>
                <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                  {cat.title}
                </h3>
                <div className="mt-4 w-0 h-px bg-white/50 transition-all duration-700 group-hover/card:w-24" />
              </div>

              {/* Grain Effect */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic@1&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `,
        }}
      />
    </section>
  );
}
