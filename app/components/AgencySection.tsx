'use client';

import { motion } from 'framer-motion';

export default function AgencySection() {
    const services = [
        {
            title: 'Branding',
            description: 'Création d\'identités visuelles cohérentes et mémorables',
            icon: '🎨'
        },
        {
            title: 'Design UI/UX',
            description: 'Interfaces utilisateur intuitives et expériences digitales optimisées',
            icon: '💻'
        },
        {
            title: 'Design Graphique',
            description: 'Supports de communication visuelle impactants',
            icon: '📐'
        },
        {
            title: 'Stratégie',
            description: 'Positionnement et stratégie de marque sur mesure',
            icon: '🎯'
        }
    ];

    const stats = [
        { number: '150+', label: 'Projets réalisés' },
        { number: '50+', label: 'Clients satisfaits' },
        { number: '5', label: 'Années d\'expérience' },
        { number: '24/7', label: 'Support client' }
    ];

    return (
        <div className="h-full flex items-center justify-center bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-sm font-semibold text-[#513417] uppercase tracking-wider mb-4">
                                À propos de nous
                            </h2>
                            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Une agence créative
                                <span className="block text-[#513417]">passionnée</span>
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            Fondée en 2019, notre agence combine créativité, stratégie et innovation
                            pour transformer les marques et créer des expériences digitales exceptionnelles.
                            Notre équipe pluridisciplinaire s'engage à dépasser vos attentes à chaque projet.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            Nous croyons que chaque marque a une histoire unique à raconter.
                            Notre mission est de capturer cette essence et de la traduire en
                            designs visuels percutants qui résonnent avec votre audience.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-2 gap-6 pt-8"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold text-[#513417] mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Services Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#513417] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#513417]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Travailler avec nous
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
} 