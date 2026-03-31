import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [{ name: "academy", href: "#academy" }];

  const categories = [
    "CasualWear",
    "FormalWear",
    "Streetwear",
    "SportsWear",
    "Luxury",
    "TraditionalWear",
    "Seasonal",
    "EveningWear",
  ];

  return (
    <>
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-animate {
          animation: slideUpFade 0.3s ease-out forwards;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/10 backdrop-blur-md shadow-lg"
            : "bg-black/10 backdrop-blur-md shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-15">
            {/* Logo */}
            <div className="shrink-0">
              <a href="/" className="block group">
                <h1 className="text-xl lg:text-2xl font-light tracking-[0.2em] text-white uppercase whitespace-nowrap">
                  <span className="font-medium">RAKSA CAT</span>
                  <span className="font-extralight ml-1">FISH</span>
                </h1>
                <p className="text-[8px] tracking-[0.3em] text-white/80 font-light uppercase hidden sm:block">
                  Fashion Learning Platform
                </p>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex text-white items-center space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/80 hover:text-white text-[11px] tracking-[0.2em] font-light uppercase transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="text-white/80 hover:text-white text-[11px] tracking-[0.2em] font-light uppercase flex items-center gap-1">
                  CATEGORIES
                  <svg
                    className="w-3 h-3 group-hover:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Added 'hidden' by default and 'md:block' for desktop only */}
                <div className="hidden md:block absolute top-full -left-20 w-46 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-gray-900/50 border text-start border-white/10 backdrop-blur-xl p-4 grid grid-cols-1 gap-2 shadow-2xl dropdown-animate">
                    {categories.map((cat) => (
                      <a
                        key={cat}
                        href={`#collection`}
                        className="text-[12px] tracking-[0.15em] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 uppercase"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden z-50 flex flex-col gap-1.5"
            >
              <span
                className={`h-px w-6 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`h-px w-6 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`h-px w-6 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 lg:hidden transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col bg-black/80  py-20 px-10 space-y-6 ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-xl tracking-[0.3em] font-extralight uppercase"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col ">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="text-white text-xl tracking-[0.2em] font-extralight uppercase flex justify-between items-center"
              >
                CATEGORIES <span>{isCategoryOpen ? "−" : "+"}</span>
              </button>
              {isCategoryOpen && (
                <div className="flex flex-col space-y-3 mt-4 pl-4 border-l border-white/10">
                  {categories.map((cat) => (
                    <a
                      key={cat}
                      href={`/categories/${cat.toLowerCase()}`}
                      className="text-white/50 text-xs tracking-widest uppercase"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer removed so Hero can be at top-0 */}
    </>
  );
}
