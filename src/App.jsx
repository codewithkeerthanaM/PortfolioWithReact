import Navbar from "./Navbar";
import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-300 via-cyan-400 to-blue-500 text-white overflow-hidden">

      {/* 🔥 Animated Glowing Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-teal-400 opacity-40 rounded-full blur-3xl animate-pulse left-[-150px] top-[100px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-ping right-[-200px] top-[200px]"></div>
        <div className="absolute w-[450px] h-[450px] bg-cyan-300 opacity-20 rounded-full blur-3xl animate-pulse left-[300px] bottom-[50px]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="flex items-center justify-center h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="
            backdrop-blur-2xl
            bg-white/20
            border border-white/40
            rounded-3xl
            p-12
            w-[600px]
            text-center
            shadow-[0_0_40px_rgba(255,255,255,0.3)]
            hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]
            transition-all duration-500
          "
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl font-extrabold drop-shadow-xl mb-4"
          >
            Keerthana M
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl text-white/90 drop-shadow-lg"
          >
            Web Developer | C Programmer | DSA Learner | Creative Editor
          </motion.p>
        </motion.div>
      </div>

      {/* Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
