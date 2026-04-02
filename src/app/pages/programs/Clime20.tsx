import { motion } from "motion/react";
import { Link } from "react-router";
import {
  GraduationCap,
  Users,
  Globe,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useLanguage } from "../../contexts/LanguageContext";
import { programDetailsTranslations } from "../../translations/program-details-translations";

export function Clime20() {
  const { language } = useLanguage();
  const t = programDetailsTranslations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const learningItems = language === 'fr' ? [
    "Leadership stratégique et vision",
    "Gestion du changement et innovation",
    "Développement organisationnel",
    "Théorie du leadership éducatif",
    "Stratégies de développement professoral",
    "Amélioration de la qualité en éducation médicale",
    "Leadership académique et gouvernance",
    "Résolution de conflits et négociation",
    "Érudition et recherche en éducation"
  ] : [
    "Strategic Leadership & Visioning",
    "Change Management & Innovation",
    "Organizational Development",
    "Educational Leadership Theory",
    "Faculty Development Strategies",
    "Quality Improvement in Medical Education",
    "Academic Leadership & Governance",
    "Conflict Resolution & Negotiation",
    "Educational Scholarship & Research"
  ];

  const whatsIncluded = language === 'fr' ? [
    "Toutes les sessions d'apprentissage virtuel",
    "Retraite intensive en personne de 4 jours",
    "Matériel et ressources du programme",
    "Mentorat individuel",
    "Soutien au projet de synthèse",
    "Certificat ACEM à la fin",
    "Accès à vie au réseau d'anciens",
    "Crédits de formation continue"
  ] : [
    "All virtual learning sessions",
    "4-day in-person intensive retreat",
    "Program materials and resources",
    "Individual mentorship",
    "Capstone project support",
    "CAME certificate upon completion",
    "Lifetime access to alumni network",
    "Continuing education credits"
  ];

  const memberPricing = language === 'fr'
    ? "Membres de l'ACEM : 6 500 $ CAD (Économisez 1 000 $)"
    : "CAME Members: $6,500 CAD (Save $1,000)";

  const notMemberText = language === 'fr'
    ? "Pas encore membre? Rejoignez l'ACEM pour accéder aux tarifs membres et aux avantages exclusifs."
    : "Not a member yet? Join CAME to access member pricing and exclusive benefits.";

  const joinText = language === 'fr' ? "Rejoindre l'ACEM" : "Join CAME";

  const flexPaymentDesc = language === 'fr'
    ? "Nous offrons des plans de paiement flexibles pour rendre cet investissement plus accessible. Contactez-nous pour discuter des options de paiement qui vous conviennent."
    : "We offer flexible payment plans to make this investment more accessible. Contact us to discuss payment options that work for you.";

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-12 h-12" />
              <span className="text-lg font-semibold">{t.professionalDevProgram}</span>
            </div>
            <h1 className="mb-6">{t.clime20Title}</h1>
            <p className="text-xl text-white/90 mb-8">{t.clime20SubtitleHero}</p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">{t.clime20Description}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{language === 'fr' ? '8 mois' : '8 Months'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{language === 'fr' ? 'Hybride (virtuel + en personne)' : 'Blended (Virtual + In-person)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{language === 'fr' ? '20-25 participants par cohorte' : '20-25 Participants per Cohort'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-primary mb-6">{t.programOverview}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "CLIME 2.0 est conçu pour les leaders en éducation médicale qui se sont déjà établis dans le domaine et sont prêts à faire progresser leurs compétences en leadership et à conduire des changements transformateurs dans leurs institutions."
                  : "CLIME 2.0 is designed for medical education leaders who have already established themselves in the field and are ready to advance their leadership skills and drive transformational change in their institutions."}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "Ce programme combine la théorie de leadership de pointe avec une application pratique, vous fournissant les outils et stratégies nécessaires pour naviguer dans des défis organisationnels complexes et diriger des initiatives éducatives innovantes."
                  : "This program combines cutting-edge leadership theory with practical application, providing you with the tools and strategies needed to navigate complex organizational challenges and lead innovative educational initiatives."}
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwbGVhZGVyc2hpcCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzc1MDg4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'fr' ? "Leadership en éducation médicale" : "Medical education leadership"}
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.whatYouLearn}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Programme complet conçu pour développer des compétences en leadership avancé"
                : "Comprehensive curriculum designed to develop advanced leadership competencies"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningItems.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.programStructure}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Expérience d'apprentissage hybride de 8 mois avec des composantes virtuelles et en personne"
                : "8-month blended learning experience with virtual and in-person components"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white border-2 border-primary/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.virtualSessions}</h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? "Ateliers en ligne mensuels en direct et classes de maîtres avec des animateurs experts"
                  : "Monthly live online workshops and masterclasses with expert facilitators"}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Webinaires interactifs" : "Interactive webinars"}</li>
                <li>• {language === 'fr' ? "Cercles d'apprentissage entre pairs" : "Peer learning circles"}</li>
                <li>• {language === 'fr' ? "Sessions questions-réponses avec experts" : "Expert Q&A sessions"}</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white border-2 border-secondary/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.inPersonIntensive}</h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? "Retraite immersive de 4 jours axée sur le développement du leadership et le réseautage"
                  : "4-day immersive retreat focused on leadership development and networking"}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Simulations de leadership" : "Leadership simulations"}</li>
                <li>• {language === 'fr' ? "Projets collaboratifs" : "Collaborative projects"}</li>
                <li>• {language === 'fr' ? "Opportunités de réseautage" : "Networking opportunities"}</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white border-2 border-accent/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.capstoneProject}</h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? "Appliquez votre apprentissage à travers une initiative de leadership concrète"
                  : "Apply your learning through a real-world leadership initiative"}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Mentorat individuel" : "Individual mentorship"}</li>
                <li>• {language === 'fr' ? "Projet d'apprentissage par l'action" : "Action learning project"}</li>
                <li>• {language === 'fr' ? "Présentation finale" : "Final presentation"}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.investment}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.investmentDesc}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">
                  {language === 'fr' ? "Frais du programme CLIME 2.0" : "CLIME 2.0 Program Fee"}
                </h3>
                <div className="text-5xl font-bold mb-4">$7,500 CAD</div>
                <p className="text-white/90">
                  {language === 'fr' ? "Programme complet de 8 mois" : "Complete 8-month program"}
                </p>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold text-primary mb-6">{t.whatsIncluded}</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {whatsIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 rounded-xl p-6 mb-8">
                  <h5 className="font-bold text-primary mb-3">{t.specialMemberPricing}</h5>
                  <p className="text-gray-700 mb-2">{memberPricing}</p>
                  <p className="text-sm text-gray-600">
                    {notMemberText}{" "}
                    <Link to="/membership" className="text-primary hover:underline">{joinText}</Link>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="font-bold text-primary mb-3">{t.flexPaymentPlans}</h5>
                  <p className="text-gray-700">{flexPaymentDesc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">{t.readyAdvanceLeadership}</h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'fr'
                ? "Les candidatures pour la prochaine cohorte CLIME 2.0 sont maintenant ouvertes. Les places sont limitées à 25 participants."
                : "Applications for the next CLIME 2.0 cohort are now open. Spaces are limited to 25 participants."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs/clime-2-0/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl"
              >
                {t.applyNow}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-xl"
              >
                {t.contactUs}
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              {language === 'fr'
                ? "Date limite de candidature : 30 juin 2026 | Début du programme : septembre 2026"
                : "Application deadline: June 30, 2026 | Program starts: September 2026"}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
