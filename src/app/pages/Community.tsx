import { motion } from "motion/react";
import { Users, Star, Mail, FileText, Calendar, MessageCircle, Network } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { communityTranslations } from "../translations/community-translations";

export function Community() {
  const { language } = useLanguage();
  const t = communityTranslations[language];

  const sigs = [
    {
      name: language === 'fr' ? "Éducateurs médicaux en début de carrière (EMDC)" : "Early Career Medical Educators (ECME)",
      description: language === 'fr'
        ? "Soutenir les éducateurs médicaux dans les 5 premières années de leur carrière avec du mentorat, des ressources et du réseautage"
        : "Supporting medical educators in the first 5 years of their careers with mentorship, resources, and networking",
      members: 350,
      featured: true,
    },
    {
      name: language === 'fr' ? "GIS Évaluation et appréciation" : "Assessment & Evaluation SIG",
      description: language === 'fr'
        ? "Faire progresser les meilleures pratiques en matière d'évaluation et d'appréciation de programme en éducation médicale"
        : "Advancing best practices in medical education assessment and program evaluation",
      members: 180,
      featured: false,
    },
    {
      name: language === 'fr' ? "GIS Éducation par simulation" : "Simulation-Based Education SIG",
      description: language === 'fr'
        ? "Explorer des approches innovantes de la simulation dans la formation médicale"
        : "Exploring innovative approaches to simulation in medical training",
      members: 210,
      featured: false,
    },
    {
      name: language === 'fr' ? "GIS Innovation curriculaire" : "Curriculum Innovation SIG",
      description: language === 'fr'
        ? "Développer et partager des conceptions de programmes innovants et des méthodes de prestation"
        : "Developing and sharing innovative curriculum designs and delivery methods",
      members: 165,
      featured: false,
    },
    {
      name: language === 'fr' ? "GIS Technologie en éducation médicale" : "Technology in Medical Education SIG",
      description: language === 'fr'
        ? "Exploiter la technologie éducative pour améliorer les expériences d'apprentissage"
        : "Leveraging educational technology to enhance learning experiences",
      members: 195,
      featured: false,
    },
    {
      name: language === 'fr' ? "GIS Diversité, équité et inclusion" : "Diversity, Equity & Inclusion SIG",
      description: language === 'fr'
        ? "Promouvoir les pratiques inclusives et remédier aux disparités en éducation médicale"
        : "Promoting inclusive practices and addressing disparities in medical education",
      members: 240,
      featured: false,
    },
  ];

  const recentIssues = [
    {
      title: language === 'fr' ? "Infolettre de mars 2026" : "March 2026 Newsletter",
      date: language === 'fr' ? "1er mars 2026" : "March 1, 2026",
      preview: language === 'fr'
        ? "Points saillants de la conférence annuelle de l'ACEM, annonces de nouveaux programmes de leadership et recherche en vedette en éducation médicale"
        : "Highlights from CAME's annual conference, new leadership program announcements, and featured research in medical education",
    },
    {
      title: language === 'fr' ? "Infolettre de février 2026" : "February 2026 Newsletter",
      date: language === 'fr' ? "1er février 2026" : "February 1, 2026",
      preview: language === 'fr'
        ? "Annonce des lauréats des prix, série de webinaires à venir et perspectives sur l'éducation médicale par compétences"
        : "Award winners announced, upcoming webinar series, and insights on competency-based medical education",
    },
    {
      title: language === 'fr' ? "Infolettre de janvier 2026" : "January 2026 Newsletter",
      date: language === 'fr' ? "1er janvier 2026" : "January 1, 2026",
      preview: language === 'fr'
        ? "Initiatives de la nouvelle année, opportunités de subventions et pleins feux sur les pratiques d'enseignement innovantes"
        : "New year initiatives, grant opportunities, and spotlight on innovative teaching practices",
    },
  ];

  const communityBenefits = [
    { icon: Users, title: t.networkingTitle, description: t.networkingDesc },
    { icon: MessageCircle, title: t.collaborativeTitle, description: t.collaborativeDesc },
    { icon: Network, title: t.mentorshipTitle, description: t.mentorshipDesc },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl pt-20"
          >
            <h1 className="mb-6">{t.pageTitle}</h1>
            <p className="text-xl text-white/90">{t.heroDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.whyJoinTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.whyJoinSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Interest Groups Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.sigTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.sigSubtitlePage}
            </p>
          </motion.div>

          <div className="space-y-6">
            {sigs.map((sig, index) => (
              <motion.div
                key={sig.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white border-2 rounded-2xl p-8 ${
                  sig.featured ? "border-accent" : "border-gray-100"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                    sig.featured ? "bg-accent/10" : "bg-primary/10"
                  }`}>
                    {sig.featured ? (
                      <Star className="w-8 h-8 text-accent-foreground" />
                    ) : (
                      <Users className="w-8 h-8 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="mb-3">{sig.name}</h3>
                        <p className="text-muted-foreground mb-4">{sig.description}</p>
                        <span className="text-sm text-muted-foreground">
                          {sig.members} {t.membersCount}
                        </span>
                      </div>
                      <button className={`px-6 py-2 rounded-lg transition-colors whitespace-nowrap ${
                        sig.featured
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}>
                        {t.joinGroup}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.newsletterTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.newsletterDesc}
            </p>
          </motion.div>

          {/* Subscribe Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto bg-primary/5 rounded-2xl p-8 text-center"
            >
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="mb-4">{t.subscribeTitle}</h3>
              <p className="text-muted-foreground mb-8">{t.subscribeDesc}</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                />
                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap">
                  {t.subscribe}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Recent Issues */}
          <div>
            <h2 className="mb-8 text-center">{t.recentIssues}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recentIssues.map((issue, index) => (
                <motion.div
                  key={issue.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-2">{issue.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{issue.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{issue.preview}</p>
                  <button className="text-primary font-semibold hover:underline">
                    {t.readFullIssue}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-white/90 mb-8">{t.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg">
                {t.ctaButton}
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                {t.subscribeButton}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
