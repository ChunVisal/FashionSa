import React from "react";

const SHOWCASE_ITEMS = [
  {
    title: "Runway",
    size: "wide",    image:
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=2000",
  },
  {
    title: "Noir",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000",
  },
  {
    title: "Aura",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000",
  },
  {
    title: "Avant",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000",
  },
  {
    title: "Elite",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1529139572165-f268292200ac?q=80&w=2000",
  },
  {
    title: "Studio",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1528459801416-a7e99a0dce3a?q=80&w=2000",
  },
];

export default function FashionShowcase() {
  return (
    <section className="bg-[#050505] w-full py-0 overflow-hidden select-none">
      {/* 1. SEAMLESS GRID (No Space Width) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {SHOWCASE_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden bg-[#000] transition-all duration-700 ${
              /* Wide cards take 2 cols but maintain a shorter aspect ratio */
              item.size === "wide"
                ? "col-span-2 aspect-[16/9] md:aspect-[21/9]"
                : "col-span-1 aspect-[3/4] md:aspect-[4/5]"
            }`}
          >
            {/* 1. IMAGE (Limited Height by Parent Aspect Ratio) */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2500ms] ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url('${item.image}')`,
                filter: "brightness(0.5) contrast(1.2) grayscale(0.2)",
              }}
            />

            {/* 2. NOIR GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 opacity-60 transition-opacity duration-700 group-hover:opacity-95" />

            {/* 3. CENTERED BORDER TITLE (Reveals on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3
                className="text-transparent font-black uppercase tracking-tighter transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                style={{
                  fontSize:
                    item.size === "wide"
                      ? "clamp(3rem, 10vw, 8rem)"
                      : "clamp(1.5rem, 4vw, 3rem)",
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)",
                  textShadow: "0 0 30px rgba(255,255,255,0.2)",
                }}
              >
                {item.title}
              </h3>
            </div>

            {/* 4. FILM GRAIN */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
