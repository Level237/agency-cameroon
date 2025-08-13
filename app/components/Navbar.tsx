'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

interface NavbarProps {
    currentSection: number;
    setCurrentSection: (section: number) => void;
}

export default function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Accueil', section: 0 },
        { name: 'L\'Agence', section: 1 },
        { name: 'Projets', section: 2 },
        { name: 'Partenaires', section: 3 },
    ];

    const handleNavClick = (section: number) => {
        setCurrentSection(section);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0"
                    >
                        <h1 className="text-2xl font-bold text-[#513417]">AGENCY</h1>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.section)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${currentSection === item.section
                                        ? 'text-[#513417] bg-[#513417]/10'
                                        : 'text-gray-600 hover:text-[#513417] hover:bg-[#513417]/5'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block bg-[#513417] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#513417]/90 transition-colors duration-300"
                    >
                        Contactez-nous
                    </motion.button>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#513417] hover:text-[#513417] hover:bg-[#513417]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#513417]"
                        >
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => {
                                        handleNavClick(item.section);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${currentSection === item.section
                                        ? 'text-[#513417] bg-[#513417]/10'
                                        : 'text-gray-600 hover:text-[#513417] hover:bg-[#513417]/5'
                                        }`}
                                    whileHover={{ x: 10 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[#513417] text-white hover:bg-[#513417]/90 transition-colors duration-300 mt-4"
                            >
                                Contactez-nous
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
} 