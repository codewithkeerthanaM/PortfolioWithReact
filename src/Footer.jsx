import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/10 border-t border-white/20 text-white py-6 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-3">

        <p className="text-lg font-semibold">Keerthana M</p>

        <div className="flex space-x-6 text-2xl">
          <a href="#" className="hover:text-gray-300"><FaGithub /></a>
          <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
        </div>

        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} Keerthana — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
