import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Logo Icon

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full
        backdrop-blur-2xl bg-white/20
        border-b border-white/30
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        z-50
        transition-all duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center text-white font-semibold">

        {/* ⭐ Logo + Name */}
        <div className="flex items-center gap-3">
          <FaStar size={26} className="text-yellow-300 drop-shadow-md" />
          <h2 className="text-3xl font-bold drop-shadow-md tracking-wide">
            Keerthana
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-lg items-center">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="hover:text-gray-200 transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>

              {/* Gradient Underline */}
              <span
                className="
                  absolute left-0 bottom-[-4px] w-0 h-[3px] 
                  bg-gradient-to-r from-teal-300 to-blue-400 
                  rounded-full 
                  transition-all duration-300 group-hover:w-full
                "
              ></span>
            </li>
          ))}
        </ul>

        {/* 🔥 Hire Me Button */}
        <a
          href="#contact"
          className="
            ml-6 px-5 py-2 rounded-xl 
            backdrop-blur-xl bg-white/30 border border-white/40 
            text-white font-bold 
            hover:bg-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            transition-all duration-300
          "
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
