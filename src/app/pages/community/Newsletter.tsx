import { motion } from "motion/react";
import { Mail, FileText, Calendar } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { communityTranslations } from "../../translations/community-translations";

export function Newsletter() {
  const { language } = useLanguage();
  const t = communityTranslations[language];

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

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl pt-20"
          >
            <h1 className="mb-6">{t.newsletterTitle}</h1>
            <p className="text-xl text-white/90">{t.newsletterDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm text-center"
          >
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="mb-4">{t.subscribeTitle}</h2>
            <p className="text-muted-foreground mb-8">{t.subscribeDesc}</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                {t.subscribe}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">{t.recentIssues}</h2>
          <div className="space-y-6">
            {recentIssues.map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{issue.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{issue.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{issue.preview}</p>
                    <button className="text-primary font-semibold hover:underline">
                      {t.readFullIssue}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
