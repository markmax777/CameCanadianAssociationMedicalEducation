import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Globe,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Award,
  BookOpen
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useLanguage } from "../../contexts/LanguageContext";
import { programDetailsTranslations } from "../../translations/program-details-translations";

export function Iclem102027() {
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
    "Éducation mondiale des professions de la santé",
    "Politique et gouvernance en éducation",
    "Diriger le changement organisationnel",
    "Collaboration internationale",
    "Innovation éducative et technologie",
    "Assurance qualité et accréditation",
    "Leadership en développement professoral",
    "Recherche en éducation médicale",
    "Compétences culturelles en leadership",
    "Systèmes éducatifs durables",
    "Prise de décision exécutive"
  ] : [
    "Strategic Leadership & Visioning",
    "Global Health Professions Education",
    "Educational Policy & Governance",
    "Leading Organizational Change",
    "International Collaboration",
    "Educational Innovation & Technology",
    "Quality Assurance & Accreditation",
    "Faculty Development Leadership",
    "Research in Medical Education",
    "Cultural Competency in Leadership",
    "Sustainable Educational Systems",
    "Executive Decision-Making"
  ];

  const idealCandidates = language === 'fr' ? [
    "Directeurs de programme et doyens associés",
    "Chefs de département en éducation médicale",
    "Directeurs de centres d'éducation médicale",
    "Leaders seniors en développement professoral",
    "Chercheurs en éducation avec des rôles de leadership",
    "Consultants internationaux en éducation médicale"
  ] : [
    "Program directors and associate deans",
    "Department chairs in medical education",
    "Medical education center directors",
    "Senior faculty development leaders",
    "Education researchers with leadership roles",
    "International medical education consultants"
  ];

  const prerequisites = language === 'fr' ? [
    "Minimum 5 ans en éducation médicale",
    "Poste de leadership actuel ou aspirant",
    "Diplôme d'études supérieures (MD, PhD, EdD ou équivalent)",
    "Engagement démontré envers le leadership",
    "Bonne maîtrise de l'anglais",
    "Soutien de l'institution d'origine"
  ] : [
    "Minimum 5 years in medical education",
    "Current or aspiring leadership position",
    "Graduate degree (MD, PhD, EdD, or equivalent)",
    "Demonstrated commitment to leadership",
    "Strong English proficiency",
    "Support from home institution"
  ];

  const whatsIncluded = language === 'fr' ? [
    "12 classes de maîtres virtuelles avec des experts mondiaux",
    "Deux tournées d'études internationales (1 semaine chacune)",
    "Tout le matériel et les ressources du programme",
    "Mentorat exécutif individuel",
    "Supervision du projet de synthèse",
    "Accès à la plateforme d'apprentissage internationale",
    "Certificat ICLEM à la fin",
    "Crédits de formation continue (60+ heures)",
    "Réseau international d'anciens à vie",
    "Soutien à la publication du projet de synthèse"
  ] : [
    "12 virtual masterclasses with global experts",
    "Two international study tours (1 week each)",
    "All program materials & resources",
    "Individual executive mentorship",
    "Capstone project supervision",
    "Access to international learning platform",
    "ICLEM certificate upon completion",
    "Continuing education credits (60+ hours)",
    "Lifetime international alumni network",
    "Publication support for capstone work"
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-12 h-12" />
              <span className="text-lg font-semibold">{t.internationalCert}</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <h1>{t.iclem1Title}</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">{t.iclemSubtitleHero}</p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">{t.iclem1Description}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{language === 'fr' ? '12 mois' : '12 Months'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{language === 'fr' ? 'Cohorte internationale' : 'International Cohort'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{language === 'fr' ? '15-20 participants mondiaux' : '15-20 Global Participants'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{language === 'fr' ? 'Début mars 2027' : 'Starts March 2027'}</span>
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
                <Award className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold">{t.internationallyRecognized}</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">{t.programOverview}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "ICLEM 1.0 2027 est un programme de leadership d'élite qui rassemble des leaders seniors en éducation médicale de partout dans le monde pour explorer le leadership stratégique, l'innovation et les meilleures pratiques mondiales en éducation des professions de la santé."
                  : "ICLEM 1.0 2027 is an elite leadership program that brings together senior medical education leaders from around the world to explore strategic leadership, innovation, and global best practices in health professions education."}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "Grâce à une combinaison de classes de maîtres virtuelles, de tournées d'études internationales et de projets collaboratifs, les participants développent des compétences avancées en leadership tout en construisant un réseau mondial de collègues et de leaders d'opinion."
                  : "Through a combination of virtual masterclasses, international study tours, and collaborative projects, participants develop advanced leadership competencies while building a global network of colleagues and thought leaders."}
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736082-b69a65770026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0b3JzJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NTA4ODg4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'fr' ? "Collaboration internationale en éducation médicale" : "International medical education collaboration"}
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Learning Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.keyLearningObjectives}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Compétences avancées en leadership pour les leaders seniors en éducation médicale"
                : "Advanced leadership competencies for senior medical education leaders"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningItems.map((item, index) => (
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
                ? "Expérience d'apprentissage internationale de 12 mois avec des perspectives mondiales"
                : "12-month international learning experience with global perspectives"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white border-2 border-primary/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.virtualMasterclasses}</h3>
              <p className="text-gray-700 mb-4">{t.virtualMasterclassesDesc}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Séminaires animés par des experts" : "Expert-led seminars"}</li>
                <li>• {language === 'fr' ? "Discussions d'études de cas" : "Case study discussions"}</li>
                <li>• {language === 'fr' ? "Sessions de panel mondial" : "Global panel sessions"}</li>
                <li>• {language === 'fr' ? "Échanges d'apprentissage entre pairs" : "Peer learning exchanges"}</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white border-2 border-secondary/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.internationalStudyTours}</h3>
              <p className="text-gray-700 mb-4">{t.internationalStudyToursDesc}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Canada (juin 2027)" : "Canada (June 2027)"}</li>
                <li>• {language === 'fr' ? "Site partenaire international (à confirmer)" : "International partner site (TBD)"}</li>
                <li>• {language === 'fr' ? "Visites de sites et réseautage" : "Site visits & networking"}</li>
                <li>• {language === 'fr' ? "Ateliers de leadership" : "Leadership workshops"}</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white border-2 border-accent/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.capstoneProject}</h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? "Initiative de leadership stratégique à impact mondial"
                  : "Strategic leadership initiative with global impact"}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {language === 'fr' ? "Projet individuel ou d'équipe" : "Individual or team project"}</li>
                <li>• {language === 'fr' ? "Mentorat expert" : "Expert mentorship"}</li>
                <li>• {language === 'fr' ? "Collaboration internationale" : "International collaboration"}</li>
                <li>• {language === 'fr' ? "Présentation finale" : "Final showcase presentation"}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.whoShouldApply}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "ICLEM est conçu pour les professionnels seniors en éducation médicale"
                : "ICLEM is designed for senior medical education professionals"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">{t.idealCandidates}</h3>
              <ul className="space-y-3">
                {idealCandidates.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">{t.prerequisites}</h3>
              <ul className="space-y-3">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.programInvestment}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Programme international complet de leadership de 12 mois"
                : "Comprehensive 12-month international leadership program"}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20">
              <div className="bg-gradient-to-r from-secondary to-primary text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">
                  {language === 'fr' ? "Frais du programme ICLEM 1.0 2027" : "ICLEM 1.0 2027 Program Fee"}
                </h3>
                <div className="text-5xl font-bold mb-4">$12,500 CAD</div>
                <p className="text-white/90">
                  {language === 'fr' ? "Programme international complet de 12 mois" : "Complete 12-month international program"}
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

                <div className="bg-primary/10 rounded-xl p-6 mb-8">
                  <h5 className="font-bold text-primary mb-3">{t.travelNote}</h5>
                  <p className="text-gray-700 mb-2">
                    {language === 'fr'
                      ? "Les frais du programme n'incluent pas les dépenses de voyage, d'hébergement ou de repas pour les deux tournées d'études internationales."
                      : "The program fee does not include travel, accommodation, or meal expenses for the two international study tours."}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'fr'
                      ? "Coût supplémentaire estimé : 4 000 - 6 000 $ CAD selon la destination et les arrangements de voyage."
                      : "Estimated additional cost: $4,000-6,000 CAD depending on location and travel arrangements."}
                  </p>
                </div>

                <div className="bg-accent/10 rounded-xl p-6 mb-8">
                  <h5 className="font-bold text-primary mb-3">{t.memberDiscount}</h5>
                  <p className="text-gray-700 mb-2">
                    {language === 'fr'
                      ? "Membres de l'ACEM : 11 500 $ CAD (Économisez 1 000 $)"
                      : "CAME Members: $11,500 CAD (Save $1,000)"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' ? "Pas encore membre? " : "Not a member? "}
                    <Link to="/membership" className="text-primary hover:underline">
                      {language === 'fr' ? "Rejoindre l'ACEM" : "Join CAME"}
                    </Link>
                    {language === 'fr' ? " pour accéder aux tarifs membres." : " to access member pricing."}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="font-bold text-primary mb-3">{t.flexPayment}</h5>
                  <p className="text-gray-700 mb-4">
                    {language === 'fr'
                      ? "Nous offrons des plans de paiement pour soutenir votre développement professionnel :"
                      : "We offer payment plans to support your professional development:"}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• {language === 'fr' ? "Plan de paiement en 4 mois (sans intérêts)" : "4-month payment plan (no interest)"}</li>
                    <li>• {language === 'fr' ? "Plan de paiement en 6 mois (faibles intérêts)" : "6-month payment plan (low interest)"}</li>
                    <li>• {language === 'fr' ? "Programmes de parrainage institutionnel disponibles" : "Institutional sponsorship programs available"}</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">{t.joinInternational}</h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'fr'
                ? "Les candidatures pour ICLEM 1.0 2027 sont maintenant ouvertes. Limité à 20 participants à l'échelle mondiale."
                : "Applications for ICLEM 1.0 2027 are now open. Limited to 20 participants worldwide."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs/iclem-1-0-2027/apply"
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
                ? "Date limite de candidature : 15 décembre 2026 | Début du programme : mars 2027"
                : "Application deadline: December 15, 2026 | Program starts: March 2027"}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
