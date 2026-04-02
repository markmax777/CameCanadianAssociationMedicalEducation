import { Link } from "react-router";
import { motion } from "motion/react";
import { Users, BookOpen, Award, TrendingUp, GraduationCap, Globe, Lightbulb, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { homeTranslations } from "../translations/home-translations";

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const { language } = useLanguage();
  const translations = homeTranslations[language];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1685022036532-ea7e3b114578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWVkaWNhbCUyMHN0dWRlbnRzJTIwZG9jdG9ycyUyMHdoaXRlJTIwY29hdHMlMjBzbWlsaW5nJTIwZ3JvdXB8ZW58MXx8fHwxNzc1MDg1NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Diverse medical professionals collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/60 to-primary/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-left">
              {translations.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed text-left">
              {translations.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/membership"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg text-center shadow-lg hover:shadow-xl"
              >
                {translations.heroButtonPrimary}
              </Link>
              <Link
                to="/professional-development"
                className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg text-center shadow-lg hover:shadow-xl"
              >
                {translations.heroButtonSecondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About CAME Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {translations.whoWeAreTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {translations.whoWeAreDesc1}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {translations.whoWeAreDesc2}
              </p>
              <Link
                to="/about"
                className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-semibold"
              >
                {translations.whoWeAreButton}
              </Link>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzQyODMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical education collaboration"
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What CAME Does Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {translations.whatCameDoesTitle}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {translations.whatCameDoesSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: translations.connectTitle,
                description: translations.connectDesc
              },
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: translations.learnGrowTitle,
                description: translations.learnGrowDesc
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: translations.shareKnowledgeTitle,
                description: translations.shareKnowledgeDesc
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: translations.shapeFutureTitle,
                description: translations.shapeFutureDesc
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="text-secondary mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {translations.programsTitle}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {translations.programsSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: translations.programsClime20Title,
                description: translations.programsClime20Desc,
                image: "https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwbGVhZGVyc2hpcCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzc1MDg4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                path: "/programs/clime-2-0"
              },
              {
                title: translations.programsClime2027Title,
                description: translations.programsClime2027Desc,
                image: "https://images.unsplash.com/photo-1646369505413-216676fef89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwdHJhaW5pbmclMjBzZW1pbmFyfGVufDF8fHx8MTc3NTA4ODg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                path: "/programs/clime-2027"
              },
              {
                title: translations.programsIclem1Title,
                description: translations.programsIclem1Desc,
                image: "https://images.unsplash.com/photo-1758691736082-b69a65770026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0b3JzJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NTA4ODg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                path: "/programs/iclem-1-0-2027"
              },
              {
                title: translations.programsCamePacccTitle,
                description: translations.programsCamePacccDesc,
                image: "https://images.unsplash.com/photo-1731419713280-34235a2ef1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGxlYXJuaW5nJTIwcHJvZ3JhbXxlbnwxfHx8fDE3NzUwODg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                path: "/programs/came-paccc",
                isComingSoon: true
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  {program.isComingSoon && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {translations.comingSoonBadge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">{program.description}</p>
                  <Link
                    to={program.path}
                    className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-semibold text-sm"
                  >
                    {program.isComingSoon ? translations.programsJoinWaitlist : translations.programsButton}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Award className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {translations.recognizingExcellenceTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {translations.recognizingExcellenceDesc1}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {translations.recognizingExcellenceDesc2}
              </p>
              <Link
                to="/awards-grants"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                {translations.viewAwardsButton}
              </Link>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-4">
              {[
                translations.risingStarAward,
                translations.certificateExcellence,
                translations.distinguishedContribution,
                translations.midCareerAchievement
              ].map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <p className="font-semibold text-primary">{award}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767023469101-d923c6c7e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJhaW5pbmclMjBjbGluaWNhbCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzQyODMxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical education community"
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {translations.joinCommunityTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {translations.joinCommunityDesc}
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Users className="w-6 h-6" />, text: translations.networkingBenefit },
                  { icon: <TrendingUp className="w-6 h-6" />, text: translations.leadershipBenefit },
                  { icon: <BookOpen className="w-6 h-6" />, text: translations.researchBenefit },
                  { icon: <Lightbulb className="w-6 h-6" />, text: translations.innovationBenefit }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-secondary flex-shrink-0">{benefit.icon}</div>
                    <p className="text-lg text-gray-700">{benefit.text}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/membership"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                {translations.becomeMemberButton}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {translations.supportFutureTitle}
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              {translations.supportFutureDesc1}
            </p>
            <p className="text-lg mb-10 text-white/90 leading-relaxed">
              {translations.supportFutureDesc2}
            </p>
            <Link
              to="/foundation/donate"
              className="inline-block px-10 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl"
            >
              {translations.donateNowButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
