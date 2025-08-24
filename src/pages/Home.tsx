
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Shield, 
  MapPin, 
  Star, 
  CheckCircle, 
  Phone, 
  Calendar,
  Wrench,
  Users,
  Award,
  Zap,
  Heart,
  Calculator
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import HeroSlider from '../components/HeroSlider';
import { useServices } from '../hooks/useServices';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const { services } = useServices();

  // Afficher maximum 4 services
  const featuredServices = services.slice(0, 4);

  const features = [
    {
      icon: Clock,
      titleFr: "Service 7 jours",
      titleEn: "7 Days Service",
      descriptionFr: "Disponible tous les jours de la semaine pour vos urgences",
      descriptionEn: "Available every day of the week for your emergencies",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
    },
    {
      icon: Shield,
      titleFr: "Garantie qualité",
      titleEn: "Quality guarantee",
      descriptionFr: "Tous nos services sont garantis selon les normes OPC",
      descriptionEn: "All our services are guaranteed according to OPC standards",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
    },
    {
      icon: MapPin,
      titleFr: "Service mobile",
      titleEn: "Mobile service",
      descriptionFr: "Nous nous déplaçons dans un rayon de 100 km",
      descriptionEn: "We travel within a 100 km radius",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20"
    },
    {
      icon: Star,
      titleFr: "Expertise certifiée",
      titleEn: "Certified expertise",
      descriptionFr: "Mécaniciens certifiés avec plus de 10 ans d'expérience",
      descriptionEn: "Certified mechanics with over 10 years of experience",
      gradient: "from-yellow-500 to-yellow-600",
      bgGradient: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20"
    },
    {
      icon: Zap,
      titleFr: "Intervention rapide",
      titleEn: "Fast intervention",
      descriptionFr: "Temps de réponse moyen de 2 heures en urgence",
      descriptionEn: "Average response time of 2 hours in emergency",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
    },
    {
      icon: Heart,
      titleFr: "Satisfaction client",
      titleEn: "Customer satisfaction",
      descriptionFr: "Plus de 95% de clients satisfaits recommandent nos services",
      descriptionEn: "Over 95% of satisfied customers recommend our services",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-red-900/20">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Section Services Featured - NOUVELLE */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-red-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 rounded-full shadow-xl shadow-blue-500/20">
                <Wrench className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.serviceId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden"
              >
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-500 transform group-hover:scale-110">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {language === 'fr' ? service.nameFr : service.nameEn}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {language === 'fr' ? service.descriptionFr : service.descriptionEn}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {t('services.starting')} {(service.basePrice || 0).toFixed(2)}$
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {service.estimatedDuration} min
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bouton vers la réservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/service-booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transform hover:scale-105"
            >
              <Calendar className="h-5 w-5 mr-2" />
              {t('home.cta.book.now')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section "Pourquoi nous choisir ?" */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-red-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 rounded-full shadow-xl shadow-blue-500/20">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              {language === 'fr' ? 'Pourquoi nous choisir ?' : 'Why choose us?'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr' 
                ? 'Découvrez les avantages qui font de JJ Mécanique votre partenaire de confiance pour tous vos besoins automobiles'
                : 'Discover the advantages that make JJ Mécanique your trusted partner for all your automotive needs'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden"
                >
                  <div className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 group-hover:shadow-2xl`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                    
                    <div className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg shadow-${feature.gradient.split('-')[1]}-500/30 group-hover:shadow-xl group-hover:shadow-${feature.gradient.split('-')[1]}-500/40 transition-all duration-500 transform group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="relative">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                        {language === 'fr' ? feature.titleFr : feature.titleEn}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {language === 'fr' ? feature.descriptionFr : feature.descriptionEn}
                      </p>
                    </div>

                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-blue-600"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Prêt à commencer ?' : 'Ready to get started?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Contactez-nous dès maintenant pour un service professionnel et personnalisé'
                : 'Contact us now for professional and personalized service'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/service-booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Calendar className="h-5 w-5 mr-2" />
                {language === 'fr' ? 'Prendre rendez-vous' : 'Book appointment'}
              </a>
              <a
                href="/calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calculator className="h-5 w-5 mr-2" />
                {language === 'fr' ? 'Obtenir une estimation' : 'Get an estimate'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
