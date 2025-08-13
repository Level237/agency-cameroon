'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const sliderMessages = [
    { text: "Révéler votre essence.", color: "#a78bfa" },
    { text: "Captiver les regards.", color: "#22d3ee" },
    { text: "Transformer l’impact.", color: "#34d399" },

  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentMessageIndex((v) => (v + 1) % sliderMessages.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);
  return (
    <div className="h-screen overflow-hidden  relative cursor-none">
      {/* Creative Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient overlay to deepen tones */}
        <div className="absolute inset-0 " />

        {/* Gradient mesh blobs */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(closest-side, #7c3aed, transparent)" }}
        />
        <motion.div
          animate={{ scale: [1, 0.95, 1], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-[-10rem] w-[36rem] h-[36rem] rounded-full blur-3xl opacity-35"
          style={{ background: "radial-gradient(closest-side, #06b6d4, transparent)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 25, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-[-8rem] left-1/4 w-[48rem] h-[48rem] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(closest-side, #f472b6, transparent)" }}
        />

        {/* Moving light beam */}
        <motion.div
          initial={{ x: "-30%" }}
          animate={{ x: ["-30%", "130%", "-30%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 h-[2px] w-1/3 md:w-1/2 bg-[linear-gradient(90deg,transparent,rgba(232,209,187,0.4),transparent)] opacity-60"
        />

        {/* Subtle grain for texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl  font-bold text-[#e8d1bb]"
          >
            AGENCY
          </motion.div>

          {/* Right side */}
          <div className="flex  items-center space-x-6">
            {/* Theme toggle icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#e8d1bb]/80 hover:text-[#e8d1bb] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </motion.button>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e8d1bb] max-sm:hidden  text-[#09090B] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e8d1bb]/90 transition-all duration-300"
            >
              demandez un devis
            </motion.button>

            {/* Menu */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#e8d1bb] flex items-center space-x-2 hover:text-[#e8d1bb]/80 transition-colors"
            >
              <span className="text-sm max-sm:hidden ">menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center md:text-left max-w-6xl mx-auto px-6">
          <div className="md:max-w-2xl">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mb-10"
            >
              {/* Subtitle removed */}

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-4xl md:text-6xl lg:text-5xl font-bold text-white mb-2 leading-[1.05] tracking-tight"
              >
                <span>Pour vous, nous irons  </span>
                <br className="hidden md:block" />
                <span>bien au-delà du design</span>
              </motion.h1>

              {/* Large Animated Marketing Slider */}
              <div className="mt-3 h-[48px] md:h-[64px] relative overflow-hidden flex items-center justify-center md:justify-start">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.h2
                    key={currentMessageIndex}
                    initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -40, opacity: 0, filter: 'blur(6px)' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ color: sliderMessages[currentMessageIndex].color }}
                    className="text-4xl md:text-6xl lg:text-5xl font-bold leading-[1.05] tracking-tight"
                  >
                    {sliderMessages[currentMessageIndex].text}
                  </motion.h2>
                </AnimatePresence>
              </div>
              {/* Description removed */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center md:justify-start flex-wrap gap-3 mt-5"
              >
                <span className="px-3 py-1 rounded-full border border-[#e8d1bb]/30 text-xs tracking-wide text-[#e8d1bb]/90 bg-white/5 backdrop-blur-sm">Branding</span>
                <span className="px-3 py-1 rounded-full border border-[#e8d1bb]/30 text-xs tracking-wide text-[#e8d1bb]/90 bg-white/5 backdrop-blur-sm">Design UI/UX</span>
                <span className="px-3 py-1 rounded-full border border-[#e8d1bb]/30 text-xs tracking-wide text-[#e8d1bb]/90 bg-white/5 backdrop-blur-sm">Identité Visuelle</span>
                <span className="px-3 py-1 rounded-full border border-[#e8d1bb]/30 text-xs tracking-wide text-[#e8d1bb]/90 bg-white/5 backdrop-blur-sm">Sites Web</span>
              </motion.div>

            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Link href="/agence">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent cursor-pointer text-sm border-2 border-[#e8d1bb] text-[#e8d1bb] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#e8d1bb] hover:text-[#09090B] transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  découvrir l'agence
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40"
      >
        {[1, 2, 3, 4].map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-3 h-3 rounded-full bg-[#e8d1bb]/30 hover:bg-[#e8d1bb] transition-all duration-300"
          />
        ))}
      </motion.div>

      {/* Custom Animated Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ x: cursorX, y: cursorY, scale: isPressed ? 0.9 : 1 }}
        transition={{ type: 'spring', stiffness: 700, damping: 35, mass: 0.2 }}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e8d1bb] shadow-[0_0_8px_rgba(232,209,187,0.8)]" />
          <motion.div
            className="absolute inset-0 -m-2 rounded-full border border-[#e8d1bb]/70"
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
