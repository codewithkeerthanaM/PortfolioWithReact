import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-xl border border-white/30 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>

        <p className="text-lg text-white/90 leading-relaxed">
          Hi! I'm <span className="font-semibold">Keerthana M</span>, a passionate 
          web developer with strong foundations in HTML, CSS, JavaScript, React,
          and Data Structures. I enjoy building clean UI designs, solving logical
          problems using C and DSA, and editing videos creatively.
        </p>
      </motion.div>
    </div>
  );
}
