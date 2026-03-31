import React from "react";
import { motion } from "framer-motion";

export default function EnlightenmentDetail() {
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
            My Enlightenment
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            My enlightenment is about how I see my purpose, my growth, and my
            path in fashion and life. It's the clarity I gain when I understand
            what I truly want and how I need to act to get there. It's more than
            learning skills—it's realizing my mindset, vision, and
            responsibilities. My work isn't just about making designs; it's
            about creating meaning and leaving an impact.
          </p>
          <div className="flex gap-6 mt-4">
            <p className="text-white/50 text-xs">
              Self-awareness (understanding my strengths, weaknesses, and
              habits)
            </p>
            <p className="text-white/50 text-xs">
              Growth-oriented thinking (learning from mistakes, improving daily)
            </p>
            <p className="text-white/50 text-xs">
              Purpose-driven action (making every step count toward my vision)
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
              Right now, my enlightenment is strong in my mind—but not yet fully
              lived in my daily actions.
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I understand what I need to do, but sometimes I procrastinate
                or overthink
              </p>
              <p className="text-white/50 text-xs">
                • I know that discipline and consistency are key, but I don't
                always follow through
              </p>
              <p className="text-white/50 text-xs">
                • I have clarity about my vision, but translating it into
                results is still a challenge
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
              My Enlightenment Type
            </p>
            <p className="text-white/70 text-xs font-light mb-2">
              Visionary Beginner in awareness
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I can see the bigger picture of my journey and future
              </p>
              <p className="text-white/50 text-xs">
                • But I still need to develop habits, focus, and real-world
                execution
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
                <p className="text-white/50 text-xs">Strong self-awareness</p>
                <p className="text-white/50 text-xs">
                  Clear vision for my future
                </p>
                <p className="text-white/50 text-xs">
                  I care about growth, not just appearances
                </p>
                <p className="text-white/50 text-xs">
                  Willing to learn, adapt, and reflect
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
                Weaknesses
              </p>
              <div className="space-y-1">
                <p className="text-white/50 text-xs">
                  Overthinking can hold me back from action
                </p>
                <p className="text-white/50 text-xs">Inconsistent discipline</p>
                <p className="text-white/50 text-xs">
                  Can get distracted or stuck in ideas
                </p>
                <p className="text-white/50 text-xs">
                  Knowledge and clarity are not always matched by results
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
                • Turn understanding into consistent action
              </p>
              <p className="text-white/50 text-xs">
                • Apply discipline every day
              </p>
              <p className="text-white/50 text-xs">
                • Focus on progress, not perfection
              </p>
              <p className="text-white/50 text-xs">
                • Align my clarity with real results in design and business
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
            I am building a clear mindset to match my vision. I am learning how
            to control my thoughts, focus my energy, and turn enlightenment into
            professional impact in fashion.
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
          <p className="text-[8px] tracking-[0.2em] text-white/20">03 / 05</p>
        </motion.div>
      </div>
    </section>
  );
}
