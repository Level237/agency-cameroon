'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: 'Rebranding TechCorp',
            category: 'Branding',
            description: 'Identité visuelle complète pour une startup technologique',
            image: '/api/placeholder/400/300',
            color: 'from-blue-500 to-purple-600'
        },
        {
            id: 2,
            title: 'E-commerce Platform',
            category: 'UI/UX Design',
            description: 'Interface utilisateur moderne pour une plateforme e-commerce',
            image: '/api/placeholder/400/300',
            color: 'from-green-500 to-teal-600'
        },
        {
            id: 3,
            title: 'Restaurant Identity',
            category: 'Design Graphique',
            description: 'Logo et supports de communication pour un restaurant gastronomique',
            image: '/api/placeholder/400/300',
            color: 'from-orange-500 to-red-600'
        },
        {
            id: 4,
            title: 'Mobile App Design',
            category: 'UI/UX Design',
            description: 'Application mobile intuitive pour service de livraison',
            image: '/api/placeholder/400/300',
            color: 'from-purple-500 to-pink-600'
        },
        {
            id: 5,
            title: 'Corporate Branding',
            category: 'Branding',
            description: 'Identité de marque pour une entreprise internationale',
            image: '/api/placeholder/400/300',
            color: 'from-indigo-500 to-blue-600'
        },
        {
            id: 6,
            title: 'Event Campaign',
            category: 'Design Graphique',
            description: 'Campagne visuelle pour un événement culturel majeur',
            image: '/api/placeholder/400/300',
            color: 'from-yellow-500 to-orange-600'
        }
    ];

    const categories = ['Tous', 'Branding', 'UI/UX Design', 'Design Graphique'];

    return (
        <div className="h-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-semibold text-[#513417] uppercase tracking-wider mb-4">
                        Nos Réalisations
                    </h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Projets
                        <span className="block text-[#513417]">Créatifs</span>
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre portfolio de projets qui illustrent notre expertise
                        en branding, design UI/UX et création graphique.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${category === 'Tous'
                                ? 'bg-[#513417] text-white'
                                : 'bg-white text-gray-600 hover:bg-[#513417] hover:text-white border border-gray-200'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                {/* Project Image */}
                                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="bg-white text-[#513417] p-3 rounded-full"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#513417] transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#513417] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#513417]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Voir tous les projets
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
} 