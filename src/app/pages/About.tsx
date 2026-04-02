import { motion } from "motion/react";
import { Link } from "react-router";
import { Target, Eye, Heart, Users, GitBranch, Building2, Calendar, Award, BookOpen } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { aboutTranslations } from "../translations/about-translations";

export function About() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  const milestones = [
    { year: "1975", title: t.milestone1Title, description: t.milestone1Desc },
    { year: "1985", title: t.milestone2Title, description: t.milestone2Desc },
    { year: "2000", title: t.milestone3Title, description: t.milestone3Desc },
    { year: "2010", title: t.milestone4Title, description: t.milestone4Desc },
    { year: "2015", title: t.milestone5Title, description: t.milestone5Desc },
    { year: "2020", title: t.milestone6Title, description: t.milestone6Desc },
  ];

  const impactStats = [
    { icon: Users, number: "2,500+", label: t.statsActiveMembers },
    { icon: Award, number: "500+", label: t.statsAwardsGiven },
    { icon: BookOpen, number: "1,000+", label: t.statsPrograms },
    { icon: Calendar, number: "48", label: t.statsYears },
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
            <p className="text-xl text-white/90">{t.heroSince}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.missionVisionTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.missionVisionIntro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-primary/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="mb-4">{t.missionTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.missionTextFull}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-secondary/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="mb-4">{t.visionTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.visionTextFull}
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-accent/10 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2>{t.coreValuesTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="mb-3">{t.value1}</h3>
                <p className="text-muted-foreground">{t.value1DescFull}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value3}</h3>
                <p className="text-muted-foreground">{t.value3DescFull}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value2}</h3>
                <p className="text-muted-foreground">{t.value2DescFull}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value5}</h3>
                <p className="text-muted-foreground">{t.value5Desc}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value6}</h3>
                <p className="text-muted-foreground">{t.value6Desc}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value7}</h3>
                <p className="text-muted-foreground">{t.value7Desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.leadershipSection}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.leadershipCardDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about/leadership/board"
                className="block bg-white border-2 border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-colors h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="mb-4">{t.boardTitle}</h2>
                <p className="text-muted-foreground mb-6">{t.boardDesc}</p>
                <span className="text-primary font-semibold">{t.viewBoardMembers}</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/about/leadership/committees"
                className="block bg-white border-2 border-secondary/10 rounded-2xl p-8 hover:border-secondary/30 transition-colors h-full"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <GitBranch className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="mb-4">{t.committeesTitle}</h2>
                <p className="text-muted-foreground mb-6">{t.committeesDesc}</p>
                <span className="text-secondary font-semibold">{t.viewCommittees}</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/about/leadership/representatives"
                className="block bg-white border-2 border-accent/10 rounded-2xl p-8 hover:border-accent/30 transition-colors h-full"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="mb-4">{t.representativesTitle}</h2>
                <p className="text-muted-foreground mb-6">{t.representativesDesc}</p>
                <span className="text-accent-foreground font-semibold">
                  {t.viewRepresentatives}
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.historyImpactTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.historyImpactSubtitle}
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">{t.journeyTitle}</h2>
              <p className="text-xl text-muted-foreground">{t.journeySubtitle}</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                    <h3 className="mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.legacyTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.legacySubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8"
            >
              <h3 className="mb-4">{t.educationalExcellenceTitle}</h3>
              <p className="text-muted-foreground">{t.educationalExcellenceDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8"
            >
              <h3 className="mb-4">{t.leadershipDevTitle}</h3>
              <p className="text-muted-foreground">{t.leadershipDevDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8"
            >
              <h3 className="mb-4">{t.researchInnovationTitle}</h3>
              <p className="text-muted-foreground">{t.researchInnovationDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Truth and Reconciliation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-6">{t.truthTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6">{t.truthText1}</p>
            <p className="text-lg text-muted-foreground">{t.truthText2}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
