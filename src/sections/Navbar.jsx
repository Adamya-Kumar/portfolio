import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-aqua hover:text-mint" href="/resume.pdf" target="_blank">
          Resume
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            >
                Adamya Kumar
            </a>
            <div className="flex gap-2">
              <a 
                href="https://github.com/Adamya-Kumar/" 
                target="_blank"
                className="text-sm transition-colors text-neutral-400 hover:text-white"
              >
                GitHub
              </a>
              <span className="text-neutral-400">|</span>
              <a 
                href="https://www.linkedin.com/in/adamya-kumar" 
                target="_blank"
                className="text-sm transition-colors text-neutral-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
