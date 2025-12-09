import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiC, SiTailwindcss } from "react-icons/si";
import { MdVideoLibrary } from "react-icons/md";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "C Language", icon: <SiC size={40} /> },
    { name: "Data Structures", icon: <SiTailwindcss size={40} /> },
    { name: "Video Editing", icon: <MdVideoLibrary size={40} /> },
  ];

  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-white mb-10">Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="backdrop-blur-xl bg-white/20 p-6 rounded-xl shadow-xl border border-white/30 flex flex-col items-center text-white"
          >
            {s.icon}
            <p className="font-semibold mt-3">{s.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
