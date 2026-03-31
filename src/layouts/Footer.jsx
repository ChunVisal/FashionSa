import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full min-h-[60vh] flex flex-col justify-between p-10  overflow-hidden relative">
      {/* 1. THE STATEMENT (Top Left) */}
      <div className="max-w-2xl">
        <p className="text-[10px] md:text-xs tracking-[0.8em] text-white/20 uppercase mb-8">
          The Archive
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight uppercase">
          The Enlightenment of the paradigm to become the best{" "}
          <span className="italic font-serif opacity-60">visionary</span>, of
          myself and prepare for the
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
          >
            {" "}
            journey
          </span>
          .
        </h2>
      </div>

      {/* 2. THE MASSIVE LOGO (Center Background) */}
      {/* This is the "Image" part—bold, transparent, and spans the screen */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className="text-white/4  font-black uppercase select-none"
          style={{
            fontSize: "clamp(10rem, 30vw, 50rem)",
            letterSpacing: "-0.05em",
          }}
        >
          AURA
        </h1>
      </div>

      {/* 3. THE NAVIGATION (Bottom Strip) */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-10">
        {/* Simple List - No spacing width issues */}
        <nav className="flex flex-wrap gap-x-10 gap-y-4">
          {["Home", "+855 887 941 543", "raksasam371@gmail.com"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] tracking-[0.3em] text-white/60 hover:text-white transition-all uppercase"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social & Meta */}
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="flex gap-6 mb-2">
            <a
              href="https://t.me/Raksaso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.4em] text-white/30 hover:text-white uppercase"
            >
              Telegram
            </a>
            <a
              href="https://www.tiktok.com/@raksaa29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.4em] text-white/30 hover:text-white uppercase"
            >
              TikTok
            </a>
            <a
              href="https://www.facebook.com/share/14bYCcxB1L2/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.4em] text-white/30 hover:text-white uppercase"
            >
              Facebook
            </a>
          </div>
          <p className="text-[8px] tracking-[0.6em] text-white/30 uppercase">
            Phnom Penh / © 2026 Aura SASA
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `,
        }}
      />
    </footer>
  );
}
