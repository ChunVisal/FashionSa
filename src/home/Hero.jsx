import { useState, useEffect } from "react";
import A from "../assets/A.jpg";
import B from "../assets/B.jpg";
import C from "../assets/C.jpg";
import D from "../assets/D.jpg";

const HERO_IMAGES = [A, B, C, D];

export default function Hero() {
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(loop);
  }, []);

  return (
    <div className="relative h-[70vh] sm:h-[80vh] md:h-screen w-full bg-[#0a0a0af4] overflow-hidden">
      {/* 1. MOODY IMAGE LOOP LAYER */}
      {/* 1. MOODY IMAGE LOOP LAYER */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            } mobile-bg-position`}
            style={{
              backgroundImage: `url('${img}')`,
              filter: "brightness(0.5) contrast(1.1)",
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-1" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/40 z-2" />

        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-[3] pointer-events-none" />
      </div>

      {/* 2. THE STROBE CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-24">
        <div className="max-w-4xl">
          {/* Small Label */}
          <p
            className={`text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.6em] sm:tracking-[0.8em] md:tracking-[1em] text-white/60 uppercase mb-2 sm:mb-3 transition-all duration-1000 delay-300 ${
              isReady
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Live from the <span className="text-white/80">Shadows</span>
          </p>

          {/* Main Title */}
          <h1
            className={`text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.9] sm:leading-[0.85] tracking-tighter transition-all duration-1000 delay-500 ${
              isReady
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-110 blur-md"
            }`}
          >
            Aura <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/20 to-transparent italic font-serif tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-[9rem]">
              SASA
            </span>
          </h1>

          {/* Minimal Description */}
          <p
            className={`mt-6 sm:mt-8 md:mt-10 max-w-xs sm:max-w-sm text-white/40 text-[10px] sm:text-xs tracking-wider sm:tracking-widest leading-relaxed uppercase transition-opacity duration-1000 delay-700 ${
              isReady ? "opacity-100" : "opacity-0"
            }`}
          >
            A digital exploration of texture, movement, <br /> and the beauty
            found in the dark.
          </p>
        </div>

        {/* 3. CTA BUTTON */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-20 left-6 sm:left-8 md:left-10 lg:left-24">
          <div
            className={`flex flex-col gap-6 sm:gap-8 transition-all duration-1000 delay-1000 ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="group flex items-center gap-3 sm:gap-4 text-white">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold group-hover:tracking-[0.5em] sm:group-hover:tracking-[0.6em] transition-all">
                Start Show
              </span>
              <div className="w-8 sm:w-10 md:w-12 h-px bg-white/40 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 group-hover:bg-white transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
      .mobile-bg-position {
        background-position: 62% center !important;
      }
    },
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic@1&display=swap');
            .font-serif { font-family: 'Playfair Display', serif; }
          `,
        }}
      />
    </div>
  );
}
