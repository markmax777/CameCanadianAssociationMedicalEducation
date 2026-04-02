import { motion } from "motion/react";
import { Users, Star } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { communityTranslations } from "../../translations/community-translations";

export function SpecialInterestGroups() {
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
            <h1 className="mb-6">{t.sigTitle}</h1>
            <p className="text-xl text-white/90">{t.sigSubtitlePage}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <h2 className="mb-3">{sig.name}</h2>
                    <p className="text-muted-foreground mb-4">{sig.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {sig.members} {t.membersCount}
                      </span>
                      <button className={`px-6 py-2 rounded-lg transition-colors ${
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
    </div>
  );
}
