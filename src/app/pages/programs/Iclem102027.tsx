import { motion } from "motion/react";
import { Link } from "react-router";
import {
  GraduationCap,
  Calendar,
  Users,
  Globe,
  CheckCircle2,
  MapPin,
  ArrowRight,
  AlertCircle,
  Building2
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

  const learningObjectives = language === 'fr' ? [
    "Identifier leurs objectifs personnels en tant qu'éducateurs et administrateurs dans le domaine des sciences de la santé et discuter des moyens d'atteindre ces objectifs",
    "Prendre conscience de leur style de communication et développer des stratégies pour communiquer efficacement avec leur entourage",
    "Analyser leur style de leadership et considérer comment ce style influence leur comportement, en tenant compte de différents modèles de leadership et de changement",
    "Appliquer une approche d'analyse du changement à des situations concrètes dans leurs environnements professionnels et académiques",
    "Analyser différents styles de gestion des conflits et réfléchir aux stratégies de négociation",
    "Décrire comment bâtir et diriger efficacement des équipes",
    "Définir l'érudition dans le contexte de l'éducation médicale et discuter des stratégies qui favorisent l'acquisition de ces connaissances",
    "Faire des choix éclairés et gérer leur temps plus efficacement dans leur vie professionnelle et personnelle"
  ] : [
    "Identify their personal goals as educators and administrators in the health sciences field and discuss ways to achieve those goals",
    "Become aware of their communication style and develop strategies to communicate effectively with those around them",
    "Analyze their leadership style and consider how this style influences their behavior, taking into account different models of leadership and change",
    "Apply a change analysis approach to concrete situations in their professional and academic environments",
    "Analyze different styles of conflict management and reflect on negotiation strategies",
    "Describe how to effectively build and lead teams",
    "Define scholarship in the context of medical education and discuss strategies that promote the acquisition of this knowledge",
    "Make informed choices and manage their time more effectively in both their professional and personal lives"
  ];

  const weekSchedule = language === 'fr' ? [
    {
      day: "Lundi 25 janvier 2027",
      topics: [
        "Leadership 101 : se définir comme leader",
        "Efficacité interpersonnelle"
      ]
    },
    {
      day: "Mardi 26 janvier 2027",
      topics: [
        "Styles de leadership : la flexibilité est essentielle!",
        "Acteurs efficaces pour un changement majeur"
      ]
    },
    {
      day: "Mercredi 27 janvier 2027",
      topics: [
        "Équipe fonctionnelle = performance accrue",
        "Résolution de conflits et négociation"
      ]
    },
    {
      day: "Jeudi 28 janvier 2027",
      topics: [
        "Érudition en éducation médicale",
        "Leadership 201 : Soyez organisé!"
      ]
    }
  ] : [
    {
      day: "Monday, January 25, 2027",
      topics: [
        "Leadership 101: defining yourself as a leader",
        "Interpersonal effectiveness"
      ]
    },
    {
      day: "Tuesday, January 26, 2027",
      topics: [
        "Leadership styles: flexibility is essential!",
        "Effective actors for major change"
      ]
    },
    {
      day: "Wednesday, January 27, 2027",
      topics: [
        "Functional team = increased performance",
        "Conflict resolution and negotiation"
      ]
    },
    {
      day: "Thursday, January 28, 2027",
      topics: [
        "Scholarship in Medical Education",
        "Leadership 201: Be organized!"
      ]
    }
  ];

  const whatsIncluded = language === 'fr' ? [
    "Toutes les sessions d'apprentissage",
    "Matériel et ressources du programme",
    "Repas et pauses pendant le programme",
    "Certificat ACEM à la fin",
    "Crédits de formation continue"
  ] : [
    "All learning sessions",
    "Program materials and resources",
    "Meals and refreshments during program",
    "CAME certificate upon completion",
    "Continuing education credits"
  ];

  const teachingMethods = language === 'fr' ? [
    "Conférences interactives",
    "Travaux individuels",
    "Auto-réflexion",
    "Sessions en petits groupes",
    "Travail d'équipe",
    "Opportunités de réseautage",
    "Exemples de cas applicables à l'éducation en sciences de la santé"
  ] : [
    "Interactive lectures",
    "Individual assignments",
    "Self-reflection",
    "Small-group sessions",
    "Team work",
    "Networking opportunities",
    "Case examples applicable to Health Sciences education"
  ];

  const planningCommittee = [
    { name: "Dr. Renée Turgeon", role: language === 'fr' ? "Présidente" : "Chair" },
    { name: "Dr. Véronique Castonguay", role: "" },
    { name: "Dr. Nathalie Gingras", role: "" },
    { name: "Dr. Marie Giroux", role: "" },
    { name: "Dr. Eric Lachance", role: "" },
    { name: "Mme Michelle Matte", role: "" }
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
              <span className="text-lg font-semibold">
                {language === 'fr' ? "Programme de développement professionnel" : "Professional Development Program"}
              </span>
            </div>
            <h1 className="mb-6">
              {language === 'fr' 
                ? "ICLÉM 1.0 2027 : Leadership fondamental en éducation des professions de la santé"
                : "ICLEM 1.0 2027: Foundational Leadership in Health Professions Education"}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                {language === 'fr' ? "Inscription ouverte!" : "Registration Open!"}
              </span>
            </div>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              {language === 'fr'
                ? "L'ACEM a créé CLIME 1.0 : Leadership fondamental en éducation des professions de la santé pour développer des leaders nationaux en éducation des sciences de la santé et est conçu pour répondre aux besoins des personnes engagées dans la direction d'initiatives qui favoriseront l'excellence, l'innovation, le changement et l'érudition dans les sciences de la santé."
                : "CAME created CLIME 1.0: Foundation Leadership in Health professions Education to develop national leaders in health sciences education and is designed to meet the needs of individuals who are engaged in leading initiatives that will promote excellence, innovation, change, and scholarship in Health Sciences."}
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {language === 'fr'
                ? "Cet institut est destiné aux éducateurs en sciences de la santé qui sont en mesure de mettre en œuvre de nouvelles compétences sur le lieu de travail."
                : "This Institute is geared towards Health Sciences educators who are in a position to implement new skills in the workplace."}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{language === 'fr' ? '25-28 janvier 2027' : 'January 25-28, 2027'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{language === 'fr' ? 'Bécancour, Québec' : 'Bécancour, Quebec'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Auberge Godefroy</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{language === 'fr' ? 'Maximum 32 participants' : 'Maximum 32 Participants'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>{language === 'fr' ? 'Cours offert en français' : 'Course offered in French'}</span>
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
                  ? "Les méthodes d'enseignement et d'apprentissage comprendront : des conférences interactives, des travaux individuels, de l'auto-réflexion, des sessions en petits groupes, du travail d'équipe et des opportunités de réseautage."
                  : "Teaching and learning methods will include: interactive lectures, individual assignments, self-reflection, small-group sessions, team work, and opportunities for networking."}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "De plus, les exemples de cas utilisés pendant le programme seront directement applicables à l'éducation en sciences de la santé. CLIME 1.0 : Leadership fondamental en éducation des professions de la santé se tiendra à l'Auberge Godefroy, 17575 Boul. Bécancour, Bécancour, Québec G9H 1A5."
                  : "Moreover, case examples used during the program will be directly applicable to Health Sciences education. CLIME 1.0: Foundation Leadership in Health professions Education will be held at Auberge Godefroy, 17575 Bécancour Blvd., Bécancour, Quebec G9H 1A5."}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "Ce cours sera offert en français et le nombre de participants est limité à 32."
                  : "This course will be offered in French, and the number of participants is limited to 32."}
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

      {/* Learning Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {language === 'fr' ? "Objectifs" : "Objectives"}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Après avoir complété la formation ICLÉM 1.0, les participants seront en mesure de :"
                : "After completing the ICLÉM 1.0 training, participants will be able to:"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningObjectives.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-secondary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview Schedule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {language === 'fr' ? "Aperçu du programme" : "Program Overview"}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Expérience d'apprentissage intensive sur 4 jours (sujet à changement)"
                : "Intensive 4-day learning experience (subject to change)"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {weekSchedule.map((day, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-primary/20 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-primary mb-6">{day.day}</h3>
                <div className="space-y-3">
                  {day.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{topic}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Teaching Methods */}
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              {language === 'fr' ? "Méthodes d'enseignement et d'apprentissage" : "Teaching and Learning Methods"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teachingMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="text-gray-700">{method}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Planning Committee */}
          <motion.div {...fadeInUp} className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-6">
              {language === 'fr' ? "Comité de planification ICLÉM 1.0 2027" : "ICLÉM 1.0 2027 Planning Committee"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {planningCommittee.map((member, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">{member.name}</p>
                    {member.role && <p className="text-sm text-gray-600">{member.role}</p>}
                  </div>
                </div>
              ))}
            </div>
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
            <p className="text-sm text-gray-600 mt-2">
              {language === 'fr' 
                ? "Date d'inscription préférentielle : 15 octobre 2026" 
                : "Early Bird Registration Date: October 15, 2026"}
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
                        {language === 'fr' ? "Avant le 15 octobre 2026" : "Before October 15, 2026"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' ? "Tarif préférentiel" : "Early Bird Rate"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$4,541.51</p>
                      <p className="text-sm text-gray-600">{language === 'fr' ? "$3,950.00 + Taxes applicables" : "$3,950.00 + Applicable Taxes"}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-700 text-lg">
                        {language === 'fr' ? "Après le 15 octobre 2026" : "After October 15, 2026"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' ? "Tarif régulier" : "Regular Rate"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$4,828.95</p>
                      <p className="text-sm text-gray-600">{language === 'fr' ? "$4,200.00 + Taxes applicables" : "$4,200.00 + Applicable Taxes"}</p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/checkout?program=${encodeURIComponent(language === 'fr' ? 'ICLÉM 1.0 2027 - Leadership fondamental (en français)' : 'ICLÉM 1.0 2027 - Foundational Leadership (French)')}&price=$4,541.51&memberType=${encodeURIComponent(language === 'fr' ? 'Membre ACEM' : 'CAME Member')}`}
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
                        {language === 'fr' ? "Avant le 15 octobre 2026" : "Before October 15, 2026"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' ? "Tarif préférentiel" : "Early Bird Rate"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$4,943.93</p>
                      <p className="text-sm text-gray-600">{language === 'fr' ? "$4,300.00 + Taxes applicables" : "$4,300.00 + Applicable Taxes"}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-700 text-lg">
                        {language === 'fr' ? "Après le 15 octobre 2026" : "After October 15, 2026"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' ? "Tarif régulier" : "Regular Rate"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$5,288.85</p>
                      <p className="text-sm text-gray-600">{language === 'fr' ? "$4,600.00 + Taxes applicables" : "$4,600.00 + Applicable Taxes"}</p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/checkout?program=${encodeURIComponent(language === 'fr' ? 'ICLÉM 1.0 2027 - Leadership fondamental (en français)' : 'ICLÉM 1.0 2027 - Foundational Leadership (French)')}&price=$4,943.93&memberType=${encodeURIComponent(language === 'fr' ? 'Non-membre' : 'Non-Member')}`}
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
                  ? "Pas encore membre? Rejoignez l'ACEM pour accéder aux tarifs membres et économiser jusqu'à 402,42 $ sur ce programme."
                  : "Not a member yet? Join CAME to access member pricing and save up to $402.42 on this program."}
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
                      {language === 'fr' ? "20 novembre 2026" : "November 20, 2026"}
                    </p>
                    <p>
                      {language === 'fr'
                        ? "L'annulation par écrit avant le 20 novembre 2026 entraînera des frais d'administration de 500 $. Les demandes de remboursement reçues après le 20 novembre 2026 ne seront pas possibles."
                        : "Cancellation in writing before November 20, 2026 will result in an administration fee of $500. Requests for refunds received after November 20, 2026 will not be possible."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tax Registration Numbers */}
            <motion.div {...fadeInUp} className="mt-6 text-center space-y-1">
              <p className="text-sm text-gray-600">
                {language === 'fr' ? "N° d'inscription TPS" : "GST Registration No."}: 83184 8726 RT0001
              </p>
              <p className="text-sm text-gray-600">
                {language === 'fr' ? "N° d'inscription TVQ" : "QST Registration No."}: 1222544625TQ0001
              </p>
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
                ? "Prêt à développer vos compétences en leadership?" 
                : "Ready to Develop Your Leadership Skills?"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'fr'
                ? "L'inscription est maintenant ouverte pour ICLÉM 1.0 2027. Les places sont limitées à 32 participants."
                : "Registration is now open for ICLEM 1.0 2027. Spaces are limited to 32 participants."}
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
                ? "Date limite d'inscription : 20 novembre 2026 | Dates du programme : 25-28 janvier 2027"
                : "Registration deadline: November 20, 2026 | Program dates: January 25-28, 2027"}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}