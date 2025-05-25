import Button from './Button';
import JayLogo from "../assets/images/JayLogo.png"
import React, { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import {  motion } from 'framer-motion';
import { HashLink as Link } from "react-router-hash-link";

function scrollWithOffset(el: HTMLElement) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -120; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5,  ease: [0.42, 0, 0.58, 1] }}
    className="bg-white text-black shadow-lg opacity-95 fixed z-50 w-full">
      <div className="max-w-7xl md:mx-auto md:px-4 px-3 sm:px-6 lg:px-8 flex md:justify-evenly justify-between items-center md:h-24 h-20">
        {/* Logo */}
        <img src={JayLogo} className='w-40' />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link smooth to="#Solution" scroll={el => scrollWithOffset(el)} className="hover:text-blue-600">Our Services</Link>
          <Link smooth to="#FAQ" scroll={el => scrollWithOffset(el)} className="hover:text-blue-600">FAQs</Link>
          <Link smooth to="#Testimonial" scroll={el => scrollWithOffset(el)} className="hover:text-blue-600">Testimonials</Link>
          <Link smooth to="#Blog" scroll={el => scrollWithOffset(el)} className="hover:text-blue-600">Blogs</Link>
          
        </div>

        <motion.div 
        whileHover={{ scale: 1.05}} 
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className='hidden md:flex -mt-3'>
            <Button 
            whatsapp 
            phone="2348168500993" 
            message="Hello, i am _______. i want to trade a gift card!"
            variant="primary" 
            size="medium" 
            className='mt-3 mx-5 flex items-center gap-x-1'>Get Started <MoveUpRight className='w-4 font-bold' /></Button>
        </motion.div>

        {/* Hamburger/X Button */}
        <div className="md:hidden hover:border border-blue-50 hover:bg-blue-50 hover:rounded-lg hover:py-2 pl-2" onClick={toggleMenu}>
          <div className="relative w-8 h-6 cursor-pointer">
            {/* Top bar */}
            <span
              className={`absolute top-0 right-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                isOpen
                  ? 'rotate-45 top-2.5 left-0 right-0 w-6'
                  : 'w-3 ml-auto top-0.5 right-2'
              }`}
            />
            {/* Middle bar */}
            <span
              className={`absolute top-2.5 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'w-6 -top-2.5'
              }`}
            />
            {/* Bottom bar */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                isOpen
                  ? '-rotate-45 bottom-2.5 left-0 right-0 w-6'
                  : 'w-3 mr-auto top-4.5'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='pb-4 '>
          <div className="md:hidden  px-4 pb-4 space-y-2 flex flex-col items-start justify-center gap-y-5 border-0 rounded-3xl bg-gray-50 w-full shadow-lg">
            <Link smooth to="#Solution" scroll={el => scrollWithOffset(el)} onClick={toggleMenu} className="block hover:text-blue-600 mt-5 ml-4 font-serif font-medium text-lg">Our Services</Link>
            <Link smooth to="#FAQ" scroll={el => scrollWithOffset(el)} onClick={toggleMenu} className="block hover:text-blue-600 font-serif ml-4 font-medium text-lg">FAQs</Link>
            <Link smooth to="#Testimonial" scroll={el => scrollWithOffset(el)} onClick={toggleMenu} className="block hover:text-blue-600 font-serif ml-4 font-medium text-lg">Testimonial</Link>
            <Link smooth to="#Blog" scroll={el => scrollWithOffset(el)} onClick={toggleMenu} className="block hover:text-blue-600 font-serif ml-4 font-medium text-lg">Blogs</Link>
          </div>
          <motion.div
          whileTap={{ scale: 1.05}} 
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
            whatsapp 
            phone="2348168500993" 
            message="Hello, i am _______. i want to trade a gift card!"
            variant="primary" 
            size="medium" 
            className='mt-3 mx-5 md:hidden flex shadow-2xl items-center gap-x-1'>Get Started <MoveUpRight className='w-4 font-bold' /></Button>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
