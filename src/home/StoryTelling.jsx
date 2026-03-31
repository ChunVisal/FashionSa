import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const STORIES = [
  {
    id: "creative",
    word: "Creative",
    gradient: "from-amber-400 via-white to-amber-400",
    accentColor: "from-amber-500/20",
    link: "/CreativeDetail",
    delay: 0,
  },
  {
    id: "paradigm",
    word: "Paradigm",
    gradient: "from-slate-400 via-white to-slate-400",
    accentColor: "from-slate-500/20",
    link: "/ParadigmDetail",
    delay: 0.1,
  },
  {
    id: "enlightenment",
    word: "Enlightenment",
    gradient: "from-white via-stone-300 to-white",
    accentColor: "from-white/20",
    link: "/EnlightenmentDetail",
    delay: 0.2,
  },
  {
    id: "version",
    word: "Version",
    gradient: "from-stone-400 via-white to-stone-400",
    accentColor: "from-stone-500/20",
    link: "/VersionDetail",
    delay: 0.3,
  },
  {
    id: "mission",
    word: "Mission",
    gradient: "from-neutral-400 via-white to-neutral-400",
    accentColor: "from-neutral-500/20",
    link: "/MissionDetail",
    delay: 0.4,
  },
];

export default function HorizontalStorytelling() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setIsHovering] = useState(false);

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const scrollTo = index * slideWidth;
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const scrollToSection = (id) => {
    const index = STORIES.findIndex((story) => story.id === id);
    if (index !== -1) {
      scrollToSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < STORIES.length
      ) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505]"
        animate={{
          background:
            activeIndex === 0
              ? "radial-gradient(circle at 30% 50%, rgba(245,158,11,0.05), black)"
              : activeIndex === 1
                ? "radial-gradient(circle at 70% 50%, rgba(100,116,139,0.05), black)"
                : activeIndex === 2
                  ? "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.05), black)"
                  : activeIndex === 3
                    ? "radial-gradient(circle at 80% 70%, rgba(120,113,108,0.05), black)"
                    : "radial-gradient(circle at 20% 80%, rgba(115,115,115,0.05), black)",
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Grain Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Navigation Links - Centered with padding to avoid overlap */}
      <div className="absolute top-8 left-0 right-0 z-30 flex justify-center items-center gap-4 md:gap-8 lg:gap-12 px-4">
        {STORIES.map((story, idx) => (
          <button
            key={story.id}
            onClick={() => scrollToSection(story.id)}
            className="relative group"
          >
            <span
              className={`
              text-[9px] md:text-xs lg:text-sm tracking-[0.2em] uppercase font-light whitespace-nowrap transition-all duration-500
              ${
                activeIndex === idx
                  ? "text-white tracking-[0.25em]"
                  : "text-white/40 hover:text-white/70"
              }
            `}
            >
              {story.word}
            </span>
            {activeIndex === idx && (
              <motion.div
                layoutId="activeLink"
                className="absolute -bottom-2 left-0 right-0 h-px bg-white/50"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 backdrop-blur-sm bg-black/30 flex items-center justify-center transition-all duration-500 group-hover:border-white/60 group-hover:bg-black/50">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-white/60 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          scrollToSlide(Math.min(STORIES.length - 1, activeIndex + 1))
        }
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 backdrop-blur-sm bg-black/30 flex items-center justify-center transition-all duration-500 group-hover:border-white/60 group-hover:bg-black/50">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-white/60 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {STORIES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className="group"
          >
            <div
              className={`
              transition-all duration-500 rounded-full
              ${
                activeIndex === idx
                  ? "w-6 h-1 bg-white"
                  : "w-3 h-1 bg-white/30 group-hover:bg-white/50"
              }
            `}
            />
          </button>
        ))}
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="relative h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex h-full">
          {STORIES.map((story, idx) => (
            <SlideContent
              key={story.id}
              story={story}
              index={idx}
              isActive={activeIndex === idx}
            />
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

function SlideContent({ story, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const getFontClass = (fontName) => {
    const fonts = {
      Playfair_Display: "font-['Playfair_Display',_serif]",
      Montserrat: "font-['Montserrat',_sans-serif]",
      Cormorant_Garamond: "font-['Cormorant_Garamond',_serif]",
      Bebas_Neue: "font-['Bebas_Neue',_sans-serif]",
      Inter: "font-['Inter',_sans-serif]",
    };
    return fonts[fontName] || "font-sans";
  };

  return (
    <div className="flex-none w-full h-full snap-start relative">
      <div className="flex items-center justify-center h-full px-8 md:px-16 lg:px-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="max-w-6xl w-full mx-auto relative"
        >
          {/* Main Word - Reduced size to not cover links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
            className="mb-12"
          >
            <h2
              className={`
                ${getFontClass(story.font?.split("-")[1] || "Playfair_Display")}
                text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]
                font-black leading-[0.9] tracking-tighter
                bg-linear-to-r ${story.gradient}
                bg-clip-text text-transparent
                animate-gradient pb-5
              `}
              style={{
                textShadow: "0 0 30px rgba(0,0,0,0.2)",
              }}
            >
              {story.word}
            </h2>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-12"
          />

          {/* Oval Button with React Router Link */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.6 },
              },
            }}
          >
            <Link
              to={story.link}
              className="group relative inline-flex items-center justify-center"
            >
              <div className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:border-white/60 hover:scale-105">
                <span className="text-white/70 group-hover:text-white text-xs md:text-sm tracking-[0.2em] uppercase font-light transition-colors">
                  Discover Collection
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Counter */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.8 },
              },
            }}
            className="absolute bottom-0 right-0"
          >
            <p className="text-[8px] md:text-[9px] tracking-[0.2em] text-white/40">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(STORIES.length).padStart(2, "0")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

