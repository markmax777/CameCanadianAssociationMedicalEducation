import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { commonTranslations } from "../translations/common-translations";

export function Contact() {
  const { language } = useLanguage();
  const t = commonTranslations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const faqs = [
    { question: t.faq1Q, answer: t.faq1A },
    { question: t.faq2Q, answer: t.faq2A },
    { question: t.faq3Q, answer: t.faq3A },
    { question: t.faq4Q, answer: t.faq4A },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.contactHeroTitle}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{t.contactHeroTeam}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-primary mb-8">{t.contactHeroTitle}</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{t.officeAddress}</h3>
                    <p className="text-gray-700">150 Elgin Street, 10th Floor</p>
                    <p className="text-gray-700">Ottawa, Ontario K2P 1L4</p>
                    <p className="text-gray-700">Canada</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{t.phone}</h3>
                    <p className="text-gray-700">613-730-8173</p>
                    <p className="text-gray-600 text-sm">{language === 'fr' ? 'Télécopieur' : 'Fax'}: 613-730-1196</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{t.email}</h3>
                    <a href="mailto:came@afmc.ca" className="text-secondary hover:underline">
                      came@afmc.ca
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-3">{t.officeHours}</h3>
                <p className="text-gray-700">{t.mondayFriday}: 9:00 AM - 5:00 PM EST</p>
                <p className="text-gray-600 text-sm mt-2">{t.closedHolidays}</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">{t.sendMessageTitle}</h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.name} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.organizationLabel}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder={language === 'fr' ? 'Votre institution ou organisation' : 'Your institution or organization'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.subject}
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary">
                      <option>{t.generalInquiry}</option>
                      <option>{t.membershipQuestion}</option>
                      <option>{t.programsEvents}</option>
                      <option>{language === 'fr' ? 'Prix et subventions' : 'Awards & Grants'}</option>
                      <option>{t.partnershipOpportunity}</option>
                      <option>{t.other}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.message} *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder={language === 'fr' ? 'Dites-nous comment nous pouvons vous aider...' : 'Tell us how we can help you...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t.sendMessage}</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">{t.visitOffice}</h2>
            <p className="text-xl text-gray-700">{t.locatedOttawa}</p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xl text-gray-700 font-semibold">150 Elgin Street, 10th Floor</p>
              <p className="text-gray-600">Ottawa, Ontario K2P 1L4</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">{t.faqTitle}</h2>
            <p className="text-xl text-gray-700">{t.faqQuickAnswers}</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
