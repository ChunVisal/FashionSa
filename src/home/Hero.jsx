import { useState, useEffect } from "react";
import A from "../assets/A.jpg";
import B from "../assets/B.jpg";
import C from "../assets/C.jpg";
import D from "../assets/D.jpg";


const HERO_IMAGES = [
  A,B,C,D
];

export default function Hero() {
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initial trigger for entrance animations
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Image Loop logic: Changes every 5 seconds
  useEffect(() => {
    const loop = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(loop);
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#0a0a0af4] overflow-hidden">
      {/* 1. MOODY IMAGE LOOP LAYER */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
              index === currentIndex
                ? "opacity-60 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              filter: "brightness(0.6) contrast(1) saturate(0.4)",
            }}
          />
        ))}

        {/* The "Dark Vibe" Overlays */}
        <div className="absolute inset-0 z-1" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/40 z-2" />

        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-[3] pointer-events-none" />
      </div>

      {/* 2. THE STROBE CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-24">
        <div className="max-w-4xl">
          {/* Small Label */}
          <p
            className={`text-[10px] tracking-[1em] text-white/40 uppercase mb-1 transition-all duration-1000 delay-300 ${
              isReady
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Live from the <span className="text-white/80">Shadows</span>
          </p>

          {/* Main Title */}
          <h1
            className={`text-white text-6xl md:text-[9rem] font-black uppercase leading-[0.8] tracking-tighter transition-all duration-1000 delay-500 ${
              isReady
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-110 blur-md"
            }`}
          >
            Aura <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/20 to-transparent italic font-serif tracking-tight lg:-ml-4">
              SASA
            </span>
          </h1>

          {/* Minimal Description */}
          <p
            className={`mt-10 max-w-sm text-white/30 text-xs tracking-widest leading-relaxed uppercase transition-opacity duration-1000 delay-700 ${
              isReady ? "opacity-100" : "opacity-0"
            }`}
          >
            A digital exploration of texture, movement, and the beauty found in
            the dark.
          </p>
        </div>

        {/* 3. INTERACTIVE PROGRESS & CTA */}
        <div className="absolute bottom-34 left-10 lg:left-24 right-10 lg:right-24 flex items-end justify-between">
          <div
            className={`flex flex-col gap-8 transition-all duration-1000 delay-1000 ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* CTA Button */}
            <button className="group flex items-center gap-4 text-white">
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold group-hover:tracking-[0.6em] transition-all">
                Start Show
              </span>
              <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-white transition-all duration-500" />
            </button>
          </div>

          <div className="hidden md:block text-right">
            <span className="text-[9px] tracking-[0.8em] text-white/20 uppercase vertical-text animate-pulse">
              Scroll to Discover
            </span>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .vertical-text { writing-mode: vertical-rl; }
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic@1&display=swap');
            .font-serif { font-family: 'Playfair Display', serif; }
          `,
        }}
      />
    </div>
  );
}
