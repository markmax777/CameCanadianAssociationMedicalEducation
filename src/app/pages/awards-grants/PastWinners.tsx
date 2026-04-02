import { motion } from "motion/react";
import { Award } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { awardsGrantsTranslations } from "../../translations/awards-grants-translations";

export function PastWinners() {
  const { language } = useLanguage();
  const t = awardsGrantsTranslations[language];

  const winners = [
    {
      year: "2025",
      award: t.winner1Award,
      recipient: "Dr. Jennifer Martinez",
      institution: "McMaster University",
      achievement: t.winner1Achievement,
    },
    {
      year: "2025",
      award: t.winner2Award,
      recipient: "Dr. Lisa Wong",
      institution: "University of Toronto",
      achievement: t.winner2Achievement,
    },
    {
      year: "2024",
      award: t.winner3Award,
      recipient: "Dr. James Wilson",
      institution: "Dalhousie University",
      achievement: t.winner3Achievement,
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
            <h1 className="mb-6">{t.pastWinnersTitle}</h1>
            <p className="text-xl text-white/90">{t.pastWinnersSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {winners.map((winner, index) => (
              <motion.div
                key={`${winner.year}-${winner.recipient}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary">{winner.year}</span>
                      <span className="text-muted-foreground">|</span>
                      <h3 className="text-lg">{winner.award}</h3>
                    </div>
                    <div className="mb-3">
                      <div className="font-semibold text-xl mb-1">{winner.recipient}</div>
                      <div className="text-muted-foreground">{winner.institution}</div>
                    </div>
                    <p className="text-muted-foreground italic">{winner.achievement}</p>
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
