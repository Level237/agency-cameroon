'use client';

import { motion } from 'framer-motion';

export default function PartnersSection() {
    const partners = [
        { name: 'TechCorp', logo: 'TC', industry: 'Technologie' },
        { name: 'GreenFood', logo: 'GF', industry: 'Alimentation' },
        { name: 'UrbanStyle', logo: 'US', industry: 'Mode' },
        { name: 'FinancePlus', logo: 'FP', industry: 'Finance' },
        { name: 'HealthCare', logo: 'HC', industry: 'Santé' },
        { name: 'EduTech', logo: 'ET', industry: 'Éducation' },
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechCorp',
            content: 'L\'équipe a transformé notre identité de marque avec créativité et professionnalisme. Résultats exceptionnels !',
            avatar: 'SJ'
        },
        {
            name: 'Marc Dubois',
            role: 'Directeur Marketing, GreenFood',
            content: 'Une collaboration fluide et des designs qui dépassent nos attentes. Vraiment recommandé !',
            avatar: 'MD'
        }
    ];

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'hello@agency.com' },
        { icon: '📱', label: 'Téléphone', value: '+33 1 23 45 67 89' },
        { icon: '📍', label: 'Adresse', value: '123 Rue de la Créativité, Paris' },
        { icon: '⏰', label: 'Horaires', value: 'Lun-Ven: 9h-18h' }
    ];

    return (
        <div className="h-full flex items-center justify-center bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-semibold text-[#513417] uppercase tracking-wider mb-4">
                        Nos Partenaires
                    </h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Ils nous
                        <span className="block text-[#513417]">font confiance</span>
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez les entreprises qui nous font confiance pour leurs projets
                        de branding et design digital.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Partners & Testimonials */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Partners Grid */}
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Nos Partenaires</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {partners.map((partner, index) => (
                                    <motion.div
                                        key={partner.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gray-50 p-4 rounded-xl text-center hover:bg-[#513417]/5 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-[#513417] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                                            {partner.logo}
                                        </div>
                                        <h5 className="font-semibold text-gray-900 mb-1">{partner.name}</h5>
                                        <p className="text-sm text-gray-600">{partner.industry}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Témoignages</h4>
                            <div className="space-y-4">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                                        className="bg-gray-50 p-6 rounded-xl"
                                    >
                                        <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#513417] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Contactez-nous</h4>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-[#513417]/5 transition-all duration-300"
                                    >
                                        <div className="text-2xl mr-4">{info.icon}</div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{info.label}</p>
                                            <p className="text-gray-600">{info.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="bg-gradient-to-br from-[#513417]/5 to-[#513417]/10 p-6 rounded-2xl"
                        >
                            <h5 className="text-xl font-semibold text-gray-900 mb-4">Démarrer un projet</h5>
                            <p className="text-gray-600 mb-6">
                                Prêt à transformer votre marque ? Parlons de votre projet !
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-[#513417] text-white py-3 rounded-full font-semibold hover:bg-[#513417]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Demander un devis
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-center"
                        >
                            <p className="text-gray-600 mb-4">Suivez-nous</p>
                            <div className="flex justify-center space-x-4">
                                {['LinkedIn', 'Twitter', 'Instagram', 'Behance'].map((platform, index) => (
                                    <motion.button
                                        key={platform}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-[#513417] text-white rounded-full flex items-center justify-center hover:bg-[#513417]/90 transition-all duration-300"
                                    >
                                        <span className="text-sm font-semibold">{platform[0]}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 