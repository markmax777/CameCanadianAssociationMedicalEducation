import { motion } from "motion/react";
import { Link } from "react-router";
import {
  GraduationCap,
  Calendar,
  Users,
  Globe,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useLanguage } from "../../contexts/LanguageContext";
import { programDetailsTranslations } from "../../translations/program-details-translations";

export function Clime2027() {
  const { language } = useLanguage();
  const t = programDetailsTranslations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const curriculumItems = language === 'fr' ? [
    "Compétences fondamentales en leadership",
    "Innovation éducative et design thinking",
    "Création d'équipe et collaboration",
    "Communication pour les leaders",
    "Développement de programme",
    "Stratégies d'évaluation",
    "Diversité, équité et inclusion",
    "Gestion de projet en éducation",
    "Formation de l'identité professionnelle",
    "Mentorat et coaching",
    "Érudition en éducation",
    "Diriger à travers le changement"
  ] : [
    "Foundational Leadership Skills",
    "Educational Innovation & Design Thinking",
    "Team Building & Collaboration",
    "Communication for Leaders",
    "Curriculum Development",
    "Assessment & Evaluation Strategies",
    "Diversity, Equity & Inclusion",
    "Project Management in Education",
    "Professional Identity Formation",
    "Mentorship & Coaching",
    "Educational Scholarship",
    "Leading Through Change"
  ];

  const whatsIncluded = language === 'fr' ? [
    "Plus de 20 sessions virtuelles interactives",
    "Deux retraites en personne de 3 jours",
    "Tout le matériel et les ressources du programme",
    "Mentorat individuel (10 mois)",
    "Soutien au projet de leadership",
    "Accès à la plateforme d'apprentissage en ligne",
    "Certificat de leadership ACEM",
    "Crédits de formation continue (40+ heures)",
    "Accès à vie au réseau d'anciens",
    "Portfolio de développement professionnel"
  ] : [
    "20+ interactive virtual sessions",
    "Two 3-day in-person retreats",
    "All program materials & resources",
    "Individual mentorship (10 months)",
    "Leadership project support",
    "Access to online learning platform",
    "CAME leadership certificate",
    "Continuing education credits (40+ hours)",
    "Lifetime alumni network access",
    "Professional development portfolio"
  ];

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
              <span className="text-lg font-semibold">{t.flagshipProgram}</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <h1>{t.clime2027Title}</h1>
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                {language === 'fr' ? "Lancement 2027" : "Launching 2027"}
              </span>
            </div>
            <p className="text-xl text-white/90 mb-8">{t.clime2027SubtitleHero}</p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">{t.clime2027Description}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{language === 'fr' ? '10 mois' : '10 Months'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{language === 'fr' ? 'Hybride (virtuel + en personne)' : 'Blended (Virtual + In-person)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{language === 'fr' ? '30 participants par cohorte' : '30 Participants per Cohort'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{language === 'fr' ? 'Début janvier 2027' : 'Starts January 2027'}</span>
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
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold">{t.newFor2027}</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">{t.programOverview}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "CLIME 2027 représente la prochaine évolution de notre programme phare de développement du leadership. Conçu pour les leaders émergents en éducation médicale, ce programme complet combine les compétences fondamentales en leadership avec des approches innovantes de la transformation éducative."
                  : "CLIME 2027 represents the next evolution of our flagship leadership development program. Designed for emerging medical education leaders, this comprehensive program combines foundational leadership skills with innovative approaches to educational transformation."}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "En tant que participant à la cohorte 2027, vous rejoindrez un groupe sélect d'éducateurs médicaux de partout au Canada qui s'engagent à faire progresser l'excellence en éducation médicale."
                  : "As a participant in the 2027 cohort, you'll join a select group of medical educators from across Canada who are committed to advancing excellence in medical education."}
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646369505413-216676fef89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwdHJhaW5pbmclMjBzZW1pbmFyfGVufDF8fHx8MTc3NTA4ODg4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'fr' ? "Formation en leadership en éducation médicale" : "Medical education leadership training"}
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.curriculumHighlights}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Formation complète en leadership, innovation et excellence éducative"
                : "Comprehensive training in leadership, innovation, and educational excellence"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumItems.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
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
                ? "Parcours d'apprentissage complet de 10 mois de janvier à octobre 2027"
                : "10-month comprehensive learning journey from January to October 2027"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white border-2 border-primary/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.onlineLearning}</h3>
              <p className="text-gray-700 mb-4">{t.onlineLearningDesc}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Webinaires en direct avec Q&R" : "Live webinars with Q&A"}</li>
                <li>• {language === 'fr' ? "Discussions en petits groupes" : "Small group discussions"}</li>
                <li>• {language === 'fr' ? "Analyse d'études de cas" : "Case study analysis"}</li>
                <li>• {language === 'fr' ? "Modules d'apprentissage autonome" : "Self-paced learning modules"}</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white border-2 border-secondary/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.twoInPersonRetreats}</h3>
              <p className="text-gray-700 mb-4">{t.twoInPersonRetreatsDesc}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Retraite de printemps (avril 2027)" : "Spring retreat (April 2027)"}</li>
                <li>• {language === 'fr' ? "Retraite d'automne (septembre 2027)" : "Fall retreat (September 2027)"}</li>
                <li>• {language === 'fr' ? "Ateliers de leadership" : "Leadership workshops"}</li>
                <li>• {language === 'fr' ? "Opportunités de réseautage" : "Networking opportunities"}</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white border-2 border-accent/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.mentorshipProgram}</h3>
              <p className="text-gray-700 mb-4">{t.mentorshipProgramDesc}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Jumelage personnalisé" : "Personalized mentorship matching"}</li>
                <li>• {language === 'fr' ? "Sessions mensuelles de mentorat" : "Monthly mentorship sessions"}</li>
                <li>• {language === 'fr' ? "Planification du développement de carrière" : "Career development planning"}</li>
                <li>• {language === 'fr' ? "Coaching en leadership" : "Leadership coaching"}</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-white border-2 border-primary/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.leadershipProject}</h3>
              <p className="text-gray-700 mb-4">{t.leadershipProjectDesc}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Soutien à la planification du projet" : "Project planning support"}</li>
                <li>• {language === 'fr' ? "Encadrement par le corps professoral" : "Faculty guidance"}</li>
                <li>• {language === 'fr' ? "Rétroaction entre pairs" : "Peer feedback"}</li>
                <li>• {language === 'fr' ? "Présentation finale" : "Final showcase presentation"}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.programInvestment}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Programme complet de développement du leadership de 10 mois"
                : "Comprehensive 10-month leadership development program"}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">
                  {language === 'fr' ? "Frais du programme CLIME 2027" : "CLIME 2027 Program Fee"}
                </h3>
                <div className="text-5xl font-bold mb-4">$6,800 CAD</div>
                <p className="text-white/90">
                  {language === 'fr' ? "Programme complet de 10 mois (tarif de lancement)" : "Complete 10-month program (Early Bird Pricing)"}
                </p>
              </div>

              <div className="p-8">
                <div className="bg-accent/10 rounded-xl p-6 mb-8">
                  <h5 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    {t.earlyBirdDiscount}
                  </h5>
                  <p className="text-gray-700 mb-2">
                    {language === 'fr'
                      ? "Inscrivez-vous avant le 30 septembre 2026 et payez seulement 6 800 $ CAD (prix régulier : 7 500 $ CAD)"
                      : "Register by September 30, 2026 and pay only $6,800 CAD (Regular price: $7,500 CAD)"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'fr'
                      ? "Les membres de l'ACEM économisent 500 $ supplémentaires - Prix final : 6 300 $ CAD"
                      : "CAME Members save an additional $500 - Final Price: $6,300 CAD"}
                  </p>
                </div>

                <h4 className="text-xl font-bold text-primary mb-6">{t.whatsIncluded}</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {whatsIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="font-bold text-primary mb-3">{t.flexPaymentPlans}</h5>
                  <p className="text-gray-700 mb-4">
                    {language === 'fr' ? "Nous comprenons la valeur de cet investissement. Nous offrons :" : "We understand the value of this investment. We offer:"}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• {language === 'fr' ? "Plan de paiement en 3 mois (sans intérêts)" : "3-month payment plan (no interest)"}</li>
                    <li>• {language === 'fr' ? "Plan de paiement en 6 mois (faibles intérêts)" : "6-month payment plan (low interest)"}</li>
                    <li>• {language === 'fr' ? "Options de parrainage institutionnel" : "Institutional sponsorship options"}</li>
                  </ul>
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
            <h2 className="text-4xl font-bold mb-6">{t.joinClime2027}</h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'fr'
                ? "Les candidatures ouvrent le 1er août 2026. Limité à 30 participants - réservez votre place tôt!"
                : "Applications open August 1, 2026. Limited to 30 participants - secure your spot early!"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs/clime-2027/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl"
              >
                {t.applyNow}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-xl"
              >
                {t.requestInfo}
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              {language === 'fr'
                ? "Date limite de candidature : 15 novembre 2026 | Début du programme : janvier 2027"
                : "Application deadline: November 15, 2026 | Program starts: January 2027"}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
