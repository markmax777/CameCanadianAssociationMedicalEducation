import { motion } from "motion/react";
import { Heart, Target, Users, TrendingUp, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { commonTranslations } from "../translations/common-translations";

export function Donate() {
  const { language } = useLanguage();
  const t = commonTranslations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const impactAreas = [
    {
      icon: <Users className="w-10 h-10" />,
      title: t.leadershipDev,
      description: t.leadershipDevSupport,
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: t.researchGrants,
      description: t.researchGrantsDesc,
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: t.studentSupport,
      description: t.studentSupportDesc,
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: t.innovationInitiatives,
      description: t.innovationInitiativesDesc,
    },
  ];

  const donationLevels = [
    { amount: "$100", title: t.supporter, impact: t.supporterImpact },
    { amount: "$500", title: t.advocate, impact: t.advocateImpact },
    { amount: "$1,000", title: t.champion, impact: t.championImpact },
    { amount: "$5,000", title: t.benefactor, impact: t.benefactorImpact },
  ];

  const otherWays = [
    { title: t.monthlyGiving, description: t.monthlyGivingDesc },
    { title: t.legacyGifts, description: t.legacyGiftsDesc },
    { title: t.corporateSponsorship, description: t.corporateSponsorshipDesc },
    { title: t.inKindDonations, description: t.inKindDonationsDesc },
  ];

  const successStories = [
    { title: t.climeScholarships, stat: "50+", description: t.climeScholarshipsDesc, year: "2025" },
    { title: t.researchGrantsAwarded, stat: "$250K", description: t.researchGrantsAwardedDesc, year: "2025" },
    { title: t.studentBursaries, stat: "30+", description: t.studentBursariesDesc, year: "2025" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Heart className="w-16 h-16 text-accent mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.donateHeroTitle}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t.donateHeroDesc}
            </p>
            <button className="px-10 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl">
              {t.donateNow}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.impactTitle}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.impactDesc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-secondary mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">{t.waysToGive}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.chooseLevel}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationLevels.map((level, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="text-4xl font-bold text-secondary mb-3">{level.amount}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{level.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{level.impact}</p>
                <button className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold">
                  {t.givePrefix} {level.amount}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">{t.customAmount2}</p>
            <button className="px-10 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg">
              {t.makeCustomDonation}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">{t.fundedPrograms}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.seeHowDonations}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-secondary mb-3">{story.stat}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{story.title}</h3>
                <p className="text-gray-700 mb-2">{story.description}</p>
                <p className="text-sm text-gray-600">{story.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">{t.otherWays}</h2>
          </motion.div>

          <div className="space-y-6">
            {otherWays.map((option, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{option.title}</h3>
                <p className="text-gray-700 leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">{t.taxInfo}</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed text-center">{t.taxInfoDesc}</p>
            <p className="text-center text-gray-600">{t.charityNumber}</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.readyMakeDiff}</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">{t.supportShapes}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl">
                {t.donateNow}
              </button>
              <button className="px-10 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-xl">
                {t.contactUs}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
