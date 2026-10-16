import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { motion } from "motion/react";

function Navigation({ onNavigate }){
  const { t } = useTranslation();
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={onNavigate}>
          {t('navbar.home')}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={onNavigate}>
          {t('navbar.about')}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={onNavigate}>
          {t('navbar.projects')}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#experience" onClick={onNavigate}>
          {t('navbar.experience')}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#testimonials" onClick={onNavigate}>
          {t('navbar.testimonials')}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={onNavigate}>
          {t('navbar.contact')}
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
            <a 
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
              leomoslab
            </a>
            <LanguageSwitcher />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex cursor-pointer text-neutral-400
              hover:text-white focus:outline-none sm:hidden"
              >
                <img
                 src={isOpen ?"assets/close.svg" : "assets/menu.svg"} 
                 className="w-6 h-6" 
                 alt="toggle" 
                 />
            </button>
            <nav className="hidden sm:flex">
              <Navigation onNavigate={() => setIsOpen(false)} />
            </nav>
        </div>
    </div>
    {isOpen && (
      <motion.div className="block overflow-hidden text-center
    sm:hidden" 
    initial={{ opacity:0, x: -10 }}
    animate={{ opacity: 1, x: 0}}
    style={{ maxHeight:"100vh" }}
    transition={{ duration: 1}}
    >
      <nav className="pn-5">
        <Navigation onNavigate={() => setIsOpen(false)} />
      </nav>
    </motion.div>
  )}
    </div>
  );
};

export default Navbar;
