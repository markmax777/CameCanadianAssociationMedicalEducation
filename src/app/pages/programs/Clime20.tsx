import { motion } from "motion/react";
import { Link } from "react-router";
import {
  GraduationCap,
  Users,
  Globe,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  AlertCircle
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

  const learningObjectives = language === 'fr' ? [
    "Gérer l'impact de l'équité, de la diversité et de l'inclusion sur notre système d'éducation médicale et comment, en tant que leaders, nous pouvons travailler vers des changements structurels en utilisant ces perspectives",
    "Développer des techniques d'analyse des situations et de prise de décisions lorsque les décisions sont difficiles",
    "Élaborer des stratégies pour atténuer les conséquences des différences de pouvoir, y compris les perceptions erronées, les projections, les obstacles et la déconnexion",
    "Appliquer des compétences en leadership pour encadrer efficacement dans des contextes d'éducation médicale",
    "Construire des coalitions pour atteindre des groupes avec lesquels ils n'ont pas déjà de relations de collaboration pour améliorer le fonctionnement de leur groupe",
    "Identifier en tant que leaders les collègues difficiles et perturbateurs, se préparer à traiter avec ces collègues et mener des discussions et des pratiques efficaces",
    "Appliquer des stratégies de leadership pour améliorer la sécurité psychologique et favoriser des environnements d'apprentissage et de travail positifs"
  ] : [
    "Manage the impact of equity, diversity and inclusivity on our medical education system and how as leaders, we can work towards structural changes using these lenses",
    "Develop techniques for analyzing situations and making decisions when making decisions is tough",
    "Develop strategies to mitigate the consequences of power differentials, including misperception, projection, barriers and disconnection",
    "Apply leadership skills to coach effectively in medical education settings",
    "Construct coalition to reach out to groups with whom they don't already have collaborative relationships to improve their group's function",
    "Identify as leaders challenging and disruptive colleagues, prepare themselves to deal with those colleagues and carry out effective discussions and practices",
    "Apply leadership strategies to enhance psychological safety and foster positive learning and work environments"
  ];

  const programDays = language === 'fr' ? [
    {
      day: "Jour 1",
      topics: [
        "Marcher la marche : Équité et antiracisme pour les leaders en éducation des professions de la santé",
        "Pouvoir ('Amour' et justice) pour le leadership",
        "Encadrement en leadership de l'éducation médicale",
        "Gestion des comportements perturbateurs",
        "Événement social : 18h00-20h00 HE"
      ]
    },
    {
      day: "Jour 2",
      topics: [
        "Prise de décisions",
        "Développement de coalitions",
        "Intégrer la joie dans le leadership"
      ]
    }
  ] : [
    {
      day: "Day 1",
      topics: [
        "Walking the Walk: Equity and Antiracism for Leaders in Health Professions Education",
        "Power ('Love' & Justice) for Leadership",
        "Coaching in Medical Education Leadership",
        "Managing Disruptive Behavior",
        "Social Event: 6:00pm-8:00pm Eastern"
      ]
    },
    {
      day: "Day 2",
      topics: [
        "Decision Making",
        "Developing Coalitions",
        "Embedding Joy in Leadership"
      ]
    }
  ];

  const whatsIncluded = language === 'fr' ? [
    "Toutes les sessions d'apprentissage",
    "Matériel et ressources du programme",
    "Certificat ACEM à la fin",
    "Crédits de formation continue"
  ] : [
    "All learning sessions",
    "Program materials and resources",
    "CAME certificate upon completion",
    "Continuing education credits"
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
              <span className="text-lg font-semibold">{t.professionalDevProgram}</span>
            </div>
            <h1 className="mb-6">
              {language === 'fr' 
                ? "CLIME 2.0 : Leadership transformationnel en éducation des professions de la santé"
                : "CLIME 2.0: Transformational Leadership in Health Professions Education"}
            </h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              {language === 'fr'
                ? "Ce cours se concentre sur les compétences en leadership transformationnel, notamment l'antiracisme et la justice sociale, le coaching, la construction de coalitions, la prise de décisions, la gestion des comportements perturbateurs et l'intégration de la joie et de la durabilité dans la pratique du leadership."
                : "This course focuses on transformational leadership skills, including antiracism and social justice, coaching, coalition building, decision making, managing disruptive behaviour, and embedding joy and sustainability in leadership practice."}
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {language === 'fr'
                ? "Il est conçu pour le corps professoral qui est prêt à accroître son impact, à promouvoir le changement institutionnel et à renforcer ses capacités de leadership."
                : "It is designed for faculty who are ready to increase their impact, promote institutional change, and strengthen their leadership abilities."}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{language === 'fr' ? 'Maximum 40 participants' : 'Maximum 40 Participants'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>{language === 'fr' ? 'Cours offert en anglais' : 'Course offered in English'}</span>
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
            {learningObjectives.map((item, index) => (
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
                ? "Expérience d'apprentissage intensive avec des sessions sur 3 jours"
                : "Intensive learning experience with sessions over 3 days"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {programDays.map((day, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-primary/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">{day.day}</h3>
                <ul className="space-y-3">
                  {day.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              {language === 'fr' ? "Note importante" : "Important Note"}
            </h3>
            <p className="text-gray-700">
              {language === 'fr'
                ? "Les participants sont encouragés à suivre soit CLIME/ICLEM 1.0, Leadership fondamental en éducation des professions de la santé, soit CLIME 2.0, Leadership transformationnel en éducation des professions de la santé, dans n'importe quel ordre, car il n'y a pas de prérequis. Les deux cours sont autonomes et adaptés au corps professoral à n'importe quelle étape de leur carrière."
                : "Participants are encouraged to take either CLIME/ICLEM 1.0, Foundational Leadership in Health Professions Education or CLIME 2.0, Transformational Leadership in Health Professions Education in any order, as there are no prerequisites. Both courses are self-contained and suitable for faculty at any stage of their careers."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {language === 'fr' ? "Tarifs d'inscription" : "Registration Fees"}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr' 
                ? "Tarifs préférentiels disponibles pour les membres de l'ACEM" 
                : "Preferential rates available for CAME members"}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            {/* CAME Members Pricing */}
            <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {language === 'fr' ? "Membres de l'ACEM" : "CAME Members"}
                </h3>
                <p className="text-sm text-white/80">
                  {language === 'fr' ? "Tarifs préférentiels pour les membres" : "Preferential member rates"}
                </p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent/30">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-accent text-lg">
                        {language === 'fr' ? "Tarif préférentiel prolongé!" : "Early Bird Rate Extended!"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' ? "Économisez maintenant" : "Save now"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$3,220.50</p>
                      <p className="text-sm text-gray-600">$2,850.00 + HST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-700 text-lg">
                        {language === 'fr' ? "Tarif régulier" : "Regular Rate"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$3,446.50</p>
                      <p className="text-sm text-gray-600">$3,050.00 + HST</p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/checkout?program=${encodeURIComponent(language === 'fr' ? 'CLIME 2.0 - Leadership transformationnel' : 'CLIME 2.0 - Transformational Leadership')}&price=$3,220.50&memberType=${encodeURIComponent(language === 'fr' ? 'Membre ACEM' : 'CAME Member')}`}
                  className="block w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-center text-lg mt-4"
                >
                  {language === 'fr' ? "S'inscrire maintenant" : "Register Now"}
                </Link>
              </div>
            </motion.div>

            {/* Non-Members Pricing */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-secondary/50">
              <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {language === 'fr' ? "Non-membres" : "Non-Members"}
                </h3>
                <p className="text-sm text-white/80">
                  {language === 'fr' ? "Tarifs standard" : "Standard rates"}
                </p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent/30">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-accent text-lg">
                        {language === 'fr' ? "Tarif préférentiel prolongé!" : "Early Bird Rate Extended!"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' ? "Économisez maintenant" : "Save now"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$3,672.50</p>
                      <p className="text-sm text-gray-600">$3,250.00 + HST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-700 text-lg">
                        {language === 'fr' ? "Tarif régulier" : "Regular Rate"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$3,898.50</p>
                      <p className="text-sm text-gray-600">$3,450.00 + HST</p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/checkout?program=${encodeURIComponent(language === 'fr' ? 'CLIME 2.0 - Leadership transformationnel' : 'CLIME 2.0 - Transformational Leadership')}&price=$3,672.50&memberType=${encodeURIComponent(language === 'fr' ? 'Non-membre' : 'Non-Member')}`}
                  className="block w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-center text-lg mt-4"
                >
                  {language === 'fr' ? "S'inscrire maintenant" : "Register Now"}
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* What's Included */}
            <motion.div {...fadeInUp} className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h4 className="text-xl font-bold text-primary mb-6">
                {language === 'fr' ? "Ce qui est inclus" : "What's Included"}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {whatsIncluded.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Join CAME Section */}
            <motion.div {...fadeInUp} className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 mb-8 border-2 border-accent/20">
              <h5 className="font-bold text-primary mb-3 text-lg">
                {language === 'fr' ? "Économisez avec l'adhésion à l'ACEM" : "Save with CAME Membership"}
              </h5>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? "Pas encore membre? Rejoignez l'ACEM pour accéder aux tarifs membres et économiser jusqu'à 226,00 $ sur ce programme."
                  : "Not a member yet? Join CAME to access member pricing and save up to $226.00 on this program."}
              </p>
              <Link 
                to="/membership" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold"
              >
                {language === 'fr' ? "Rejoindre l'ACEM" : "Join CAME"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Deadline and Cancellation Policy */}
            <motion.div {...fadeInUp} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-primary mb-3 text-lg">
                    {language === 'fr' 
                      ? "Politique d'inscription et d'annulation" 
                      : "Registration and Cancellation Policy"}
                  </h5>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>{language === 'fr' ? "Date limite d'inscription : " : "Registration deadline: "}</strong>
                      {language === 'fr' ? "2 janvier 2026" : "January 2, 2026"}
                    </p>
                    <p>
                      {language === 'fr'
                        ? "L'annulation par écrit avant le 2 janvier 2026 entraînera des frais d'administration de 500 $. Les demandes de remboursement reçues après le 2 janvier 2026 ne seront pas possibles."
                        : "Cancellation in writing before January 2, 2026 will result in an administration fee of $500. Requests for refunds received after January 2, 2026 will not be possible."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* GST/HST Registration */}
            <motion.div {...fadeInUp} className="mt-6 text-center text-sm text-gray-600">
              <p>{language === 'fr' ? "N° d'inscription TPS/TVH" : "GST/HST Registration No."}: 83184 8726 RT0001</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">
              {language === 'fr' 
                ? "Prêt à faire progresser votre leadership?" 
                : "Ready to Advance Your Leadership?"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'fr'
                ? "Les candidatures pour la prochaine cohorte CLIME 2.0 sont maintenant ouvertes. Les places sont limitées à 40 participants."
                : "Applications for the next CLIME 2.0 cohort are now open. Spaces are limited to 40 participants."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl"
              >
                {language === 'fr' ? "S'inscrire maintenant" : "Register Now"}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-xl"
              >
                {language === 'fr' ? "Nous contacter" : "Contact Us"}
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              {language === 'fr'
                ? "Date limite d'inscription : 2 janvier 2026"
                : "Registration deadline: January 2, 2026"}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}