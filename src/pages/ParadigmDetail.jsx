import React from "react";
import { motion } from "framer-motion";

export default function ParadigmDetail() {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505]" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-20 py-12">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-wide my-10 transition-colors"
        >
          ← BACK
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-3">
            My Paradigm
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            My paradigm is how I see myself and my journey. It's about the
            mindset I carry toward fashion, design, and building my future. I
            don't just think about learning skills—I think about vision, impact,
            and the bigger picture. I want my work to mean something, not just
            exist.
          </p>
          <div className="flex gap-6 mt-4">
            <p className="text-white/50 text-xs">
              Big-picture thinking (future brand, growth, influence)
            </p>
            <p className="text-white/50 text-xs">
              Purpose-driven work (storytelling, identity, emotion)
            </p>
            <p className="text-white/50 text-xs">
              Progress and improvement (learning every day, building discipline)
            </p>
          </div>
          <div className="w-12 h-px bg-white/20 mt-5" />
        </motion.div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
              The Hard Truth
            </p>
            <p className="text-white/70 text-xs leading-relaxed mb-2">
              Right now, my paradigm is strong in my mind—but not yet fully
              reflected in my actions.
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I often have the mindset of wanting to do everything
                perfectly, which sometimes stops me from starting
              </p>
              <p className="text-white/50 text-xs">
                • I think big, but I don't always follow through consistently
              </p>
              <p className="text-white/50 text-xs">
                • I understand the importance of discipline and focus, but I
                don't always apply it perfectly in practice
              </p>
            </div>
            <div className="w-8 h-px bg-white/20 mt-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
              My Paradigm Type
            </p>
            <p className="text-white/70 text-xs font-light mb-2">
              Visionary Beginner in mindset
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • That means I think like someone who is building a brand and a
                career
              </p>
              <p className="text-white/50 text-xs">
                • But I still need to train my habits, focus, and consistency
              </p>
            </div>
            <div className="w-8 h-px bg-white/20 mt-3" />
          </motion.div>

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
                <p className="text-white/50 text-xs">Big-picture thinker</p>
                <p className="text-white/50 text-xs">
                  Clear vision for the future
                </p>
                <p className="text-white/50 text-xs">
                  Care about meaning and impact, not just appearance
                </p>
                <p className="text-white/50 text-xs">
                  Willing to learn and grow
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
                Weaknesses
              </p>
              <div className="space-y-1">
                <p className="text-white/50 text-xs">
                  Overthinking can slow action
                </p>
                <p className="text-white/50 text-xs">
                  Sometimes inconsistent in applying discipline
                </p>
                <p className="text-white/50 text-xs">
                  Can get distracted or lost in ideas
                </p>
                <p className="text-white/50 text-xs">
                  Mindset is not always matched by execution
                </p>
              </div>
            </div>
          </motion.div>

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
                • Turn my ideas into consistent action
              </p>
              <p className="text-white/50 text-xs">
                • Apply discipline every day
              </p>
              <p className="text-white/50 text-xs">
                • Focus on progress, not perfection
              </p>
              <p className="text-white/50 text-xs">
                • Align my mindset with real results
              </p>
            </div>
            <div className="w-8 h-px bg-white/20 mt-3" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 pt-5 border-t border-white/10"
        >
          <p className="text-white/70 text-xs leading-relaxed italic">
            I am building a new mindset to match my vision. I am learning how to
            control my thoughts, focus my energy, and use my paradigm to create
            real, professional impact in fashion.
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-6 right-6"
        >
          <p className="text-[8px] tracking-[0.2em] text-white/20">02 / 05</p>
        </motion.div>
      </div>
    </section>
  );
}
