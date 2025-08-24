
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, AlertCircle, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useServices } from '../hooks/useServices';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const { services, loading, error, fetchServices } = useServices();

  useEffect(() => {
    if (error) {
      // Retry automatique après erreur
      const timer = setTimeout(() => {
        fetchServices();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, fetchServices]);

  // 🔄 Interface de chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-red-900/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">{t('services.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  // ❌ Interface d'erreur
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-red-900/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.error')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
            <button
              onClick={fetchServices}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              <RefreshCw className="h-5 w-5 mr-2" />
              {t('services.retry')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-red-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec gradients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 rounded-full shadow-xl shadow-blue-500/20">
              <DollarSign className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Arrière-plan avec gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-red-50/50 dark:from-blue-900/20 dark:to-red-900/20"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

              {/* Image du service */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden">
                <img
                  src={getServiceImage(service.serviceId)}
                  alt={language === 'fr' ? service.nameFr : service.nameEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Contenu */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                  {language === 'fr' ? service.nameFr : service.nameEn}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {language === 'fr' ? service.descriptionFr : service.descriptionEn}
                </p>

                {/* Informations du service */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-1 rounded mr-2">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                        À partir de {service.basePrice}$ CAD
                      </span>
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-1 rounded mr-2">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {t('services.duration')}: <span className="font-semibold">{service.duration} {t('services.minutes')}</span>
                    </span>
                  </div>
                </div>

                {/* Options du service */}
                {service.options && service.options.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {language === 'fr' ? 'Options disponibles:' : 'Available options:'}
                    </h4>
                    <div className="space-y-1">
                      {service.options.slice(0, 2).map((option, idx) => (
                        <div key={idx} className="flex justify-between text-xs bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 p-2 rounded-lg backdrop-blur-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            {language === 'fr' ? option.nameFr : option.nameEn}
                          </span>
                          <span className="text-gray-900 dark:text-white font-medium">
                            +{option.price}$
                          </span>
                        </div>
                      ))}
                      {service.options.length > 2 && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 italic">
                          +{service.options.length - 2} autres options...
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Boutons de réservation */}
                <div className="flex space-x-3">
                  <a
                    href="/service-booking"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-center py-3 px-4 rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105"
                  >
                    {t('services.book.now')}
                  </a>
                  <a
                    href="/calculator"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center py-3 px-4 rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
                  >
                    {language === 'fr' ? 'Estimation' : 'Estimate'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message si aucun service */}
        {services.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {language === 'fr' ? 'Aucun service disponible pour le moment.' : 'No services available at the moment.'}
            </p>
          </div>
        )}

        {/* Section CTA avec gradients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'fr' ? 'Besoin d\'un service personnalisé ?' : 'Need a custom service?'}
              </h2>
              <p className="text-xl mb-6 opacity-90">
                {language === 'fr' 
                  ? 'Contactez-nous pour un devis personnalisé selon vos besoins spécifiques'
                  : 'Contact us for a personalized quote according to your specific needs'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white/90 backdrop-blur-sm text-red-600 px-8 py-3 rounded-xl hover:bg-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                </a>
                <a
                  href="tel:+15145550123"
                  className="bg-transparent border-2 border-white/80 text-white px-8 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  (514) 555-0123
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 🖼️ Images spécialisées pour chaque service
const getServiceImage = (serviceId: string): string => {
  const images: Record<string, string> = {
    'tire-seasonal': 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
    'tire-repair': 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800',
    'oil-change': 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=800',
    'brake-replacement': 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800',
    'battery-replacement': 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
    'diagnostic': 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    'maintenance-custom': 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800'
  };

  return images[serviceId] || 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800';
};

export default Services;
