import React from "react";
import { motion } from "framer-motion";

export default function VersionDetail() {
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
            My Version
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            My version is who I am striving to become—the professional, the
            designer, the brand owner. It's about becoming the best version of
            myself, not just in fashion, but in mindset, discipline, and impact.
            I don't just want to dream; I want to execute and create something
            real.
          </p>
          <div className="flex gap-6 mt-4">
            <p className="text-white/50 text-xs">
              Self-improvement (building skills, habits, and knowledge)
            </p>
            <p className="text-white/50 text-xs">
              Personal growth (strength, discipline, and resilience)
            </p>
            <p className="text-white/50 text-xs">
              Professional identity (being recognized as a trusted, creative
              designer)
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
              Right now, my version exists more in my mind than in my reality.
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I know who I want to be, but I don't always take consistent
                steps toward it
              </p>
              <p className="text-white/50 text-xs">
                • I sometimes let fear or doubt slow me down
              </p>
              <p className="text-white/50 text-xs">
                • I have vision and ambition, but I need to match it with action
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
              My Version Type
            </p>
            <p className="text-white/70 text-xs font-light mb-2">
              Visionary Beginner in becoming
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                • I am aiming high and thinking big
              </p>
              <p className="text-white/50 text-xs">
                • But I still need to develop habits, discipline, and execution
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
                  Strong ambition and clarity about my goals
                </p>
                <p className="text-white/50 text-xs">
                  Willingness to learn and improve daily
                </p>
                <p className="text-white/50 text-xs">
                  Ability to imagine and plan my future
                </p>
                <p className="text-white/50 text-xs">
                  Care about impact and meaning, not just appearances
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-2">
                Weaknesses
              </p>
              <div className="space-y-1">
                <p className="text-white/50 text-xs">
                  Inconsistent action can delay growth
                </p>
                <p className="text-white/50 text-xs">
                  Overthinking slows execution
                </p>
                <p className="text-white/50 text-xs">
                  Sometimes distracted by too many ideas
                </p>
                <p className="text-white/50 text-xs">
                  Knowledge and vision not always matched by results
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
                • Turn my goals into consistent daily action
              </p>
              <p className="text-white/50 text-xs">
                • Strengthen discipline and focus
              </p>
              <p className="text-white/50 text-xs">
                • Learn from mistakes and progress step by step
              </p>
              <p className="text-white/50 text-xs">
                • Align my mindset, skills, and execution with my vision
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
            I am building the best version of myself. Every day I learn,
            practice, and improve to turn my vision into reality. My version is
            still growing—but it is clear, ambitious, and ready to take action
            in fashion and life.
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
          <p className="text-[8px] tracking-[0.2em] text-white/20">04 / 05</p>
        </motion.div>
      </div>
    </section>
  );
}
