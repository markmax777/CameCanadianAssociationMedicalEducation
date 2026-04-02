import { motion } from "motion/react";
import { DollarSign, FileText, Calendar } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { awardsGrantsTranslations } from "../../translations/awards-grants-translations";

export function EducationGrants() {
  const { language } = useLanguage();
  const t = awardsGrantsTranslations[language];

  const grants = [
    {
      name: t.grant1Name,
      amount: t.grant1Amount,
      deadline: t.grant1Deadline,
      description: t.grant1Desc,
    },
    {
      name: t.grant2Name,
      amount: t.grant2Amount,
      deadline: t.grant2Deadline,
      description: t.grant2Desc,
    },
    {
      name: t.grant3Name,
      amount: t.grant3Amount,
      deadline: t.grant3Deadline,
      description: t.grant3Desc,
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
            <h1 className="mb-6">{t.grantsTitle}</h1>
            <p className="text-xl text-white/90">{t.grantsSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {grants.map((grant, index) => (
              <motion.div
                key={grant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-3">{grant.name}</h2>
                    <p className="text-muted-foreground mb-4">{grant.description}</p>
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">
                          {t.amountLabel}{" "}
                          <span className="font-semibold text-primary">{grant.amount}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">
                          {t.deadlineLabel}{" "}
                          <span className="font-semibold text-primary">{grant.deadline}</span>
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      {t.applyNow}
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
