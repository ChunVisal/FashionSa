import React from "react";
import { motion } from "framer-motion";

export default function MissionDetail() {
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
            My Mission
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            My mission is the purpose that drives me in fashion, design, and
            building my future. It's not just about creating clothes—it's about
            creating meaning, impact, and connection. I want my work to inspire
            confidence, tell a story, and reflect identity. My mission guides
            every step I take, every skill I learn, and every project I pursue.
          </p>
          <div className="flex gap-6 mt-4">
            <p className="text-white/50 text-xs">
              Purpose-driven work (creating designs with meaning)
            </p>
            <p className="text-white/50 text-xs">
              Impactful outcomes (empowering people through fashion)
            </p>
            <p className="text-white/50 text-xs">
              Growth and progress (improving skills, building a brand, learning
              daily)
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
              Right now, my mission is clear in my mind—but not always fully
              realized in my actions.
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I know my purpose, but I don't always turn it into consistent
                action
              </p>
              <p className="text-white/50 text-xs">
                • I want my work to have impact, but sometimes I focus too much
                on perfection instead of execution
              </p>
              <p className="text-white/50 text-xs">
                • I understand the importance of combining creativity with
                discipline, but I don't always apply it perfectly
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
              My Mission Type
            </p>
            <p className="text-white/70 text-xs font-light mb-2">
              Visionary Beginner in purpose
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I see the bigger picture and understand my goals
              </p>
              <p className="text-white/50 text-xs">
                • But I still need to develop habits, consistency, and
                follow-through
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
                <p className="text-white/50 text-xs">
                  Clear sense of purpose and direction
                </p>
                <p className="text-white/50 text-xs">
                  Passion for meaningful work, not just appearance
                </p>
                <p className="text-white/50 text-xs">
                  Willingness to learn, improve, and grow
                </p>
                <p className="text-white/50 text-xs">
                  Ability to plan long-term and think strategically
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
                  Execution is sometimes inconsistent
                </p>
                <p className="text-white/50 text-xs">
                  Can get distracted by too many ideas
                </p>
                <p className="text-white/50 text-xs">
                  Purpose is not always matched by real-world results
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
                • Turn purpose into daily, consistent action
              </p>
              <p className="text-white/50 text-xs">
                • Apply discipline and focus even when it's challenging
              </p>
              <p className="text-white/50 text-xs">
                • Align my creativity and skills with meaningful outcomes
              </p>
              <p className="text-white/50 text-xs">
                • Learn from every mistake and grow stronger each day
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
            I am building a mission that guides me in every step of my fashion
            journey. I am learning how to act on my purpose, stay focused, and
            create work that has real impact. My mission is clear, ambitious,
            and becoming stronger every day.
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
          <p className="text-[8px] tracking-[0.2em] text-white/20">05 / 05</p>
        </motion.div>
      </div>
    </section>
  );
}
