import { motion } from "motion/react";
import { Link } from "react-router";
import {
  GraduationCap,
  Video,
  Calendar,
  Users,
  Headphones,
  Play,
  BookOpen,
  FileText,
  Download,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { professionalDevelopmentTranslations } from "../translations/professional-development-translations";

export function ProfessionalDevelopment() {
  const { language } = useLanguage();
  const t = professionalDevelopmentTranslations[language];

  const programs = [
    {
      title: t.clime20Title,
      description: t.clime20Description,
      image: "https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwbGVhZGVyc2hpcCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzc1MDg4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      path: "/programs/clime-2-0",
      duration: t.clime20Duration,
      format: t.clime20Format,
    },
    {
      title: t.clime2027Title,
      description: t.clime2027Description,
      image: "https://images.unsplash.com/photo-1646369505413-216676fef89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwdHJhaW5pbmclMjBzZW1pbmFyfGVufDF8fHx8MTc3NTA4ODg4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      path: "/programs/clime-2027",
      duration: t.clime2027Duration,
      format: t.clime2027Format,
    },
    {
      title: t.iclem1Title,
      description: t.iclem1Description,
      image: "https://images.unsplash.com/photo-1758691736082-b69a65770026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0b3JzJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NTA4ODg4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      path: "/programs/iclem-1-0-2027",
      duration: t.iclem1Duration,
      format: t.iclem1Format,
    },
    {
      title: t.camePacccTitle,
      description: t.camePacccDescription,
      image: "https://images.unsplash.com/photo-1731419713280-34235a2ef1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGxlYXJuaW5nJTIwcHJvZ3JhbXxlbnwxfHx8fDE3NzUwODg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      path: "/programs/came-paccc",
      isComingSoon: true,
    },
  ];

  const upcomingWebinars = [
    {
      title: language === 'fr' ? "Stratégies d'évaluation des compétences cliniques" : "Assessment Strategies for Clinical Skills",
      date: language === 'fr' ? "15 avril 2026" : "April 15, 2026",
      presenter: "Dr. Sarah Chen",
      attendees: 150,
      description: language === 'fr'
        ? "Apprenez des approches fondées sur des preuves pour évaluer les compétences cliniques"
        : "Learn evidence-based approaches to assessing clinical competencies",
    },
    {
      title: language === 'fr' ? "Intégrer l'IA en éducation médicale" : "Integrating AI in Medical Education",
      date: language === 'fr' ? "22 avril 2026" : "April 22, 2026",
      presenter: "Dr. Michael Leblanc",
      attendees: 200,
      description: language === 'fr'
        ? "Explorer les opportunités et défis de l'IA dans la formation médicale"
        : "Explore opportunities and challenges of AI in medical training",
    },
    {
      title: language === 'fr' ? "Meilleures pratiques en développement professoral" : "Faculty Development Best Practices",
      date: language === 'fr' ? "6 mai 2026" : "May 6, 2026",
      presenter: "Dr. Jennifer Martinez",
      attendees: 180,
      description: language === 'fr'
        ? "Stratégies pour développer et soutenir les éducateurs médicaux"
        : "Strategies for developing and supporting medical educators",
    },
  ];

  const podcastEpisodes = [
    {
      title: language === 'fr' ? "L'avenir de l'éducation médicale par compétences" : "The Future of Competency-Based Medical Education",
      guest: "Dr. James Wilson",
      duration: "45 min",
      description: language === 'fr'
        ? "Explorer les tendances et innovations en EMBC dans les écoles de médecine canadiennes"
        : "Exploring trends and innovations in CBME across Canadian medical schools",
    },
    {
      title: language === 'fr' ? "Lutter contre l'épuisement professionnel en éducation médicale" : "Addressing Burnout in Medical Education",
      guest: "Dr. Priya Patel",
      duration: "38 min",
      description: language === 'fr'
        ? "Stratégies pour soutenir le bien-être des étudiants et du corps professoral"
        : "Strategies for supporting student and faculty wellness",
    },
    {
      title: language === 'fr' ? "Leçons de leadership en éducation médicale" : "Leadership Lessons from Medical Education",
      guest: "Dr. Sarah Chen",
      duration: "52 min",
      description: language === 'fr'
        ? "Perspectives tirées de deux décennies de transformation éducative"
        : "Insights from two decades of leading educational transformation",
    },
    {
      title: language === 'fr' ? "Innovations en conception curriculaire" : "Innovations in Curriculum Design",
      guest: "Dr. Robert Singh",
      duration: "41 min",
      description: language === 'fr'
        ? "Comment la technologie remodèle les programmes d'éducation médicale"
        : "How technology is reshaping medical education curricula",
    },
  ];

  const resourceCategories = [
    {
      icon: BookOpen,
      title: language === 'fr' ? "Guides pédagogiques" : "Teaching Guides",
      count: 24,
      description: language === 'fr'
        ? "Guides complets pour un enseignement efficace en éducation médicale"
        : "Comprehensive guides for effective medical education teaching",
    },
    {
      icon: FileText,
      title: language === 'fr' ? "Documents de meilleures pratiques" : "Best Practice Papers",
      count: 18,
      description: language === 'fr'
        ? "Recommandations fondées sur des preuves pour le développement de programmes"
        : "Evidence-based recommendations for curriculum development",
    },
    {
      icon: Video,
      title: language === 'fr' ? "Tutoriels vidéo" : "Video Tutorials",
      count: 32,
      description: language === 'fr'
        ? "Instructions pas à pas sur les techniques d'éducation médicale"
        : "Step-by-step instruction on medical education techniques",
    },
    {
      icon: Download,
      title: language === 'fr' ? "Modèles et outils" : "Templates & Tools",
      count: 45,
      description: language === 'fr'
        ? "Ressources prêtes à l'emploi pour les éducateurs"
        : "Ready-to-use resources for educators",
    },
  ];

  const durationLabel = language === 'fr' ? "Durée" : "Duration";
  const formatLabel = language === 'fr' ? "Format" : "Format";
  const presenterLabel = language === 'fr' ? "Présentateur" : "Presenter";
  const guestLabel = language === 'fr' ? "Invité" : "Guest";
  const registeredLabel = language === 'fr' ? "inscrits" : "registered";
  const registerNow = language === 'fr' ? "S'inscrire maintenant" : "Register Now";
  const viewAllWebinars = language === 'fr' ? "Voir tous les webinaires" : "View All Webinars";
  const listenNow = language === 'fr' ? "Écouter maintenant" : "Listen Now";
  const viewAllEpisodes = language === 'fr' ? "Voir tous les épisodes" : "View All Episodes";
  const exploreResources = language === 'fr' ? "Explorer toutes les ressources" : "Explore All Resources";

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
            <p className="text-xl text-white/90">{t.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.programsTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.programsSubtitle}
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">{program.title}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{program.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    to={program.path}
                    className="block bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors"
                  >
                    <h4 className="mb-4">{program.title}</h4>
                    {program.duration && (
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold">{durationLabel}:</span> {program.duration}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold">{formatLabel}:</span> {program.format}
                        </p>
                      </div>
                    )}
                    <span className="text-primary font-semibold">{t.learnMore} →</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{language === 'fr' ? "Webinaires" : "Webinars"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? "Sessions en ligne animées par des experts sur les derniers sujets en éducation médicale"
                : "Expert-led online sessions on the latest topics in medical education"}
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Video className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2">{webinar.title}</h3>
                        <p className="text-muted-foreground mb-3">{webinar.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{webinar.attendees} {registeredLabel}</span>
                          </div>
                          <div>
                            <span className="font-semibold">{presenterLabel}:</span> {webinar.presenter}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap">
                    {registerNow}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/professional-development/webinars"
              className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
            >
              {viewAllWebinars}
            </Link>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{language === 'fr' ? "Balados de l'ACEM" : "CAME Podcasts"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? "Des conversations perspicaces avec des leaders d'opinion en éducation médicale"
                : "Insightful conversations with medical education thought leaders"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {podcastEpisodes.map((episode, index) => (
              <motion.div
                key={episode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{episode.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold">{guestLabel}:</span> {episode.guest}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold">{durationLabel}:</span> {episode.duration}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{episode.description}</p>
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors font-semibold">
                  <Play className="w-4 h-4" />
                  {listenNow}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/professional-development/podcasts"
              className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
            >
              {viewAllEpisodes}
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{language === 'fr' ? "Ressources d'apprentissage" : "Learning Resources"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? "Collection curatée d'outils, de guides et de meilleures pratiques pour les éducateurs médicaux"
                : "Curated collection of tools, guides, and best practices for medical educators"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2">{category.title}</h3>
                <div className="text-3xl font-bold text-primary mb-3">{category.count}</div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/professional-development/resources"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              {exploreResources}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-white/90 mb-8">{t.ctaSubtitle}</p>
            <Link
              to="/membership/become-member"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg"
            >
              {language === 'fr' ? "Devenir membre" : "Become a Member"}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
