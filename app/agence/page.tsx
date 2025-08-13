'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AgencySection from '../components/AgencySection';
import ProjectsSection from '../components/ProjectsSection';
import PartnersSection from '../components/PartnersSection';

export default function AgencyPage() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Sections configuration
    const sections = [
        { id: 'hero', component: HeroSection },
        { id: 'agency', component: AgencySection },
        { id: 'projects', component: ProjectsSection },
        { id: 'partners', component: PartnersSection },
    ];

    // Smooth scroll with debouncing
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let scrollTimeout: NodeJS.Timeout;
        let isScrolling = false;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (isScrolling) return;

            const delta = e.deltaY;
            const currentIndex = currentSection;

            if (Math.abs(delta) < 50) return; // Ignore small scroll movements

            isScrolling = true;
            setIsScrolling(true);

            if (delta > 0 && currentIndex < sections.length - 1) {
                // Scroll down - go to next section
                setCurrentSection(currentIndex + 1);
            } else if (delta < 0 && currentIndex > 0) {
                // Scroll up - go to previous section
                setCurrentSection(currentIndex - 1);
            }

            // Debounce scroll events
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                setIsScrolling(false);
            }, 800);
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            container.removeEventListener('wheel', handleWheel);
            clearTimeout(scrollTimeout);
        };
    }, [currentSection, sections.length]);

    // Handle keyboard navigation with smooth transitions
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isScrolling) return;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                if (currentSection < sections.length - 1) {
                    setIsScrolling(true);
                    setCurrentSection(currentSection + 1);
                    setTimeout(() => setIsScrolling(false), 800);
                }
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                if (currentSection > 0) {
                    setIsScrolling(true);
                    setCurrentSection(currentSection - 1);
                    setTimeout(() => setIsScrolling(false), 800);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSection, sections.length, isScrolling]);

    const handleSectionClick = (index: number) => {
        if (isScrolling) return;
        setIsScrolling(true);
        setCurrentSection(index);
        setTimeout(() => setIsScrolling(false), 800);
    };

    // Smooth spring animation for progress bar
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="h-screen overflow-hidden bg-white">
            <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />

            {/* Back to home button */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="fixed top-20 left-8 z-50"
            >
                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 shadow-lg border border-gray-200 flex items-center space-x-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Retour</span>
                    </motion.button>
                </Link>
            </motion.div>

            {/* Horizontal Scroll Container */}
            <div
                ref={containerRef}
                className="h-full w-full relative"
                style={{ cursor: isScrolling ? 'grabbing' : 'grab' }}
            >
                <motion.div
                    className="flex h-full"
                    animate={{ x: `-${currentSection * 100}vw` }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 25,
                        mass: 1,
                        duration: 1.2
                    }}
                >
                    {/* Hero Section */}
                    <div className="w-screen h-full flex-shrink-0">
                        <HeroSection />
                    </div>

                    {/* Agency Section */}
                    <div className="w-screen h-full flex-shrink-0">
                        <AgencySection />
                    </div>

                    {/* Projects Section */}
                    <div className="w-screen h-full flex-shrink-0">
                        <ProjectsSection />
                    </div>

                    {/* Partners Section */}
                    <div className="w-screen h-full flex-shrink-0">
                        <PartnersSection />
                    </div>
                </motion.div>

                {/* Scroll Progress Indicator */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#513417] to-[#513417]/80 origin-left z-50"
                    style={{
                        scaleX: smoothProgress
                    }}
                />

                {/* Section indicators */}
                <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-40">
                    {sections.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleSectionClick(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-500 ${index === currentSection
                                ? 'bg-[#513417] scale-125'
                                : 'bg-gray-300 hover:bg-[#513417]/50'
                                }`}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                {currentSection > 0 && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSectionClick(currentSection - 1)}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 backdrop-blur-md rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                        <svg className="w-6 h-6 text-[#513417]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>
                )}

                {currentSection < sections.length - 1 && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSectionClick(currentSection + 1)}
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 backdrop-blur-md rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                        <svg className="w-6 h-6 text-[#513417]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                )}

                {/* Section Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-8 left-8 z-40 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-gray-100"
                >
                    <span className="text-sm font-medium text-[#513417]">
                        {currentSection + 1} / {sections.length}
                    </span>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isScrolling ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-1/2 transform translate-x-1/2 z-40 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-100"
                >
                    <span className="text-xs text-gray-600">Utilisez la molette pour naviguer</span>
                </motion.div>
            </div>
        </div>
    );
} 