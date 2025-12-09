import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-10 shadow-xl max-w-xl w-full text-center"
      >
        
        <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>

        <form className="flex flex-col space-y-4">
          <input className="p-3 rounded-xl bg-white/30 border border-white/40 text-white" placeholder="Your Name" />

          <input className="p-3 rounded-xl bg-white/30 border border-white/40 text-white" placeholder="Your Email" />

          <textarea className="p-3 rounded-xl bg-white/30 border border-white/40 text-white h-32" placeholder="Your Message"></textarea>

          <button className="bg-white/30 border border-white/40 text-white font-semibold py-3 rounded-xl hover:bg-white/40 transition">
            Send Message
          </button>
        </form>

      </motion.div>
    </div>
  );
}
