import React from "react";
import { motion } from "framer-motion";

export default function CreativeDetail() {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="text-white" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-20 py-12">
        {/* Back Link */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 text-white hover:text-white text-xs tracking-wide my-10 transition-colors"
        >
          ← BACK
        </motion.a>

        {/* Creativity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-3">
            My Creativity
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            My creativity is idea-driven and vision-focused. I don't just think
            about how to design—I think about meaning, storytelling, brand, and
            identity. I want my work to express something deeper, not just look
            good. That's how I see fashion and design.
          </p>
          <div className="flex gap-6 mt-4">
            <p className="text-white/50 text-xs">
              Big concepts (vision, brand, future)
            </p>
            <p className="text-white/50 text-xs">Storytelling</p>
            <p className="text-white/50 text-xs">Emotional impact</p>
          </div>
          <div className="w-12 h-px bg-white/20 mt-5" />
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {/* Hard Truth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
              The Hard Truth
            </p>
            <p className="text-white/70 text-xs leading-relaxed mb-2">
              Right now, my creativity is strong in my mind—but not yet strong
              in execution.
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I have many ideas, but sometimes I feel lost when building
                them
              </p>
              <p className="text-white/50 text-xs">
                • I want my work to look professional, but I'm still learning
                structure and design clarity
              </p>
              <p className="text-white/50 text-xs">
                • My English and communication sometimes make my ideas look less
                powerful than they really are
              </p>
            </div>
            <div className="w-8 h-px bg-white/20 mt-3" />
          </motion.div>

          {/* Creative Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
              My Creative Type
            </p>
            <p className="text-white/70 text-xs font-light mb-2">
              Visionary Beginner
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I think like a future brand owner
              </p>
              <p className="text-white/50 text-xs">
                • But I still need to train my skills, discipline, and
                consistency
              </p>
            </div>
            <div className="w-8 h-px bg-white/20 mt-3" />
          </motion.div>

          {/* Strengths & Weaknesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-2 grid grid-cols-2 gap-8"
          >
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
                Strengths
              </p>
              <div className="space-y-1">
                <p className="text-white/50 text-xs">Strong imagination</p>
                <p className="text-white/50 text-xs">
                  Clear dream (fashion + brand + influence)
                </p>
                <p className="text-white/50 text-xs">
                  Interest in digital and fashion (a powerful combination)
                </p>
                <p className="text-white/50 text-xs">
                  I care about meaning, not just visuals
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
                Weaknesses
              </p>
              <div className="space-y-1">
                <p className="text-white/50 text-xs">
                  Inconsistent execution (I don't always finish clearly)
                </p>
                <p className="text-white/50 text-xs">
                  Overthinking, which leads to confusion
                </p>
                <p className="text-white/50 text-xs">
                  Skill gap (design, layout, and structure still developing)
                </p>
                <p className="text-white/50 text-xs">
                  Communication (English and clarity)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Growth Direction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
              Growth Direction
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • Focus on execution, not just ideas
              </p>
              <p className="text-white/50 text-xs">
                • Practice consistently, even in small steps
              </p>
              <p className="text-white/50 text-xs">
                • Improve clarity in both design and communication
              </p>
              <p className="text-white/50 text-xs">
                • Turn my vision into real, finished work
              </p>
            </div>
            <div className="w-8 h-px bg-white/20 mt-3" />
          </motion.div>
        </div>

        {/* Reality Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 pt-5 border-t border-white/10"
        >
          <p className="text-white/70 text-xs leading-relaxed italic">
            I am not lacking creativity. I am building discipline to control it.
          </p>
          <p className="text-white text-[10px] mt-1">
            And once I do, I will turn my ideas into something real, strong, and
            professional.
          </p>
        </motion.div>

        {/* Oval Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <button className="px-6 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-500">
            <span className="text-white/70 hover:text-white text-[10px] tracking-[0.2em] uppercase">
              Continue Journey
            </span>
          </button>
        </motion.div>

        {/* Footer Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-6 right-6"
        >
          <p className="text-[8px] tracking-[0.2em] text-white/20">01 / 05</p>
        </motion.div>
      </div>
    </section>
  );
}
