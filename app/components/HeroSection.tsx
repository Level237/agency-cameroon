'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-[#513417]/5 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
                    className="absolute top-20 right-20 w-64 h-64 bg-[#513417] rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.05, scale: 1 }}
                    transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-[#513417] rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-sm font-semibold text-[#513417] uppercase tracking-wider mb-4">
                        Agence de Branding & Design
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Nous créons des
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="block text-[#513417]"
                    >
                        expériences
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="block"
                    >
                        mémorables
                    </motion.span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#513417] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#513417]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Découvrir l'agence
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="border-2 border-[#513417] text-[#513417] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#513417] hover:text-white transition-all duration-300"
                    >
                        Voir nos projets
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-[#513417] rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 14, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-3 bg-[#513417] rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} 