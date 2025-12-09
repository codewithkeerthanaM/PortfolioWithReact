import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Glassmorphism portfolio built with React, Tailwind & Framer Motion.",
      link: "#"
    },
    {
      name: "DSA Visualizer",
      desc: "Visual tool to understand Linked List, Stack, Queue, Trees & Graphs.",
      link: "#"
    },
    {
      name: "C Mini Projects",
      desc: "Advanced memory management + DSA-based algorithms in C.",
      link: "#"
    }
  ];

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/20 p-6 rounded-xl w-[260px] shadow-xl border border-white/30 text-white"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-white/80 mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="underline text-blue-300 hover:text-blue-400">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
