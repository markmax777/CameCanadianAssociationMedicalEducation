import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Check,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  TrendingUp,
  User,
  Shield,
  Search,
  MapPin,
  Briefcase,
  Mail
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { membershipTranslations } from "../translations/membership-translations";

export function Membership() {
  const { language } = useLanguage();
  const t = membershipTranslations[language];
  const [searchTerm, setSearchTerm] = useState("");

  const reasons = [
    { number: "1", title: t.reason1Title, desc: t.reason1Desc },
    { number: "2", title: t.reason2Title, desc: t.reason2Desc },
    { number: "3", title: t.reason3Title, desc: t.reason3Desc },
    { number: "4", title: t.reason4Title, desc: t.reason4Desc },
    { number: "5", title: t.reason5Title, desc: t.reason5Desc },
    { number: "6", title: t.reason6Title, desc: t.reason6Desc },
    { number: "7", title: t.reason7Title, desc: t.reason7Desc },
  ];

  const steps = [
    { number: "1", title: t.stepTitle1, description: t.stepDesc1 },
    { number: "2", title: t.stepTitle2, description: t.stepDesc2 },
    { number: "3", title: t.stepTitle3, description: t.stepDesc3 },
    { number: "4", title: t.stepTitle4, description: t.stepDesc4 },
  ];

  const quickBenefits = [
    t.quickBenefit1,
    t.quickBenefit2,
    t.quickBenefit3,
    t.quickBenefit4,
    t.quickBenefit5,
    t.quickBenefit6,
    t.quickBenefit7,
    t.quickBenefit8,
  ];

  const benefitCategories = [
    {
      icon: GraduationCap,
      title: t.hubBenefitCat1Title,
      color: "primary",
      benefits: [t.hubBenefitCat1b1, t.hubBenefitCat1b2, t.hubBenefitCat1b3, t.hubBenefitCat1b4],
    },
    {
      icon: Users,
      title: t.hubBenefitCat2Title,
      color: "secondary",
      benefits: [t.hubBenefitCat2b1, t.hubBenefitCat2b2, t.hubBenefitCat2b3, t.hubBenefitCat2b4],
    },
    {
      icon: Award,
      title: t.hubBenefitCat3Title,
      color: "accent",
      benefits: [t.hubBenefitCat3b1, t.hubBenefitCat3b2, t.hubBenefitCat3b3, t.hubBenefitCat3b4],
    },
    {
      icon: Calendar,
      title: t.hubBenefitCat4Title,
      color: "primary",
      benefits: [t.hubBenefitCat4b1, t.hubBenefitCat4b2, t.hubBenefitCat4b3, t.hubBenefitCat4b4],
    },
    {
      icon: BookOpen,
      title: t.hubBenefitCat5Title,
      color: "secondary",
      benefits: [t.hubBenefitCat5b1, t.hubBenefitCat5b2, t.hubBenefitCat5b3, t.hubBenefitCat5b4],
    },
    {
      icon: TrendingUp,
      title: t.hubBenefitCat6Title,
      color: "accent",
      benefits: [t.hubBenefitCat6b1, t.hubBenefitCat6b2, t.hubBenefitCat6b3, t.hubBenefitCat6b4],
    },
  ];

  const plans = [
    {
      name: t.individualMember,
      price: t.individualPrice,
      period: t.perYear,
      description: t.individualDesc,
      features: [
        t.feature1, t.feature2, t.feature3, t.feature4,
        t.feature5, t.feature6, t.feature7, t.feature8,
        t.feature9, t.feature10, t.feature11, t.feature12,
      ],
      icon: User,
      slug: "individual-member",
    },
    {
      name: t.earlyCareerMember,
      price: t.earlyCareerPrice,
      period: t.perYear,
      description: t.earlyCareerDesc,
      features: [
        t.featureEC1, t.featureEC2, t.featureEC3, t.featureEC4,
        t.featureEC5, t.featureEC6, t.featureEC7, t.featureEC8,
        t.featureEC9, t.featureEC10, t.featureEC11,
      ],
      icon: GraduationCap,
      slug: "early-career-medical-educator",
    },
    {
      name: t.learnerMember,
      price: t.learnerPrice,
      period: t.perYear,
      description: t.learnerDesc,
      features: [
        t.featureLearner1, t.featureLearner2, t.featureLearner3,
        t.featureLearner4, t.featureLearner5, t.featureLearner6,
        t.featureLearner7, t.featureLearner8, t.featureLearner9,
      ],
      icon: Users,
      slug: "learner-student",
    },
  ];

  const members = [
    {
      name: "Dr. Sarah Chen",
      title: "Vice Dean of Education",
      institution: "University of Toronto",
      province: "Ontario",
      interests: ["Curriculum Development", "Assessment"],
      email: "sarah.chen@example.ca",
    },
    {
      name: "Dr. Michael Leblanc",
      title: "Associate Professor",
      institution: "McGill University",
      province: "Quebec",
      interests: ["Simulation", "Clinical Skills"],
      email: "michael.leblanc@example.ca",
    },
    {
      name: "Dr. Priya Patel",
      title: "Program Director",
      institution: "University of British Columbia",
      province: "British Columbia",
      interests: ["Faculty Development", "Leadership"],
      email: "priya.patel@example.ca",
    },
    {
      name: "Dr. James Wilson",
      title: "Department Chair",
      institution: "Dalhousie University",
      province: "Nova Scotia",
      interests: ["Medical Education Research", "Professionalism"],
      email: "james.wilson@example.ca",
    },
    {
      name: "Dr. Jennifer Martinez",
      title: "Associate Dean",
      institution: "McMaster University",
      province: "Ontario",
      interests: ["Problem-Based Learning", "Innovation"],
      email: "jennifer.martinez@example.ca",
    },
    {
      name: "Dr. Robert Singh",
      title: "Medical Educator",
      institution: "University of Alberta",
      province: "Alberta",
      interests: ["Technology Integration", "E-Learning"],
      email: "robert.singh@example.ca",
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.interests.some((interest) =>
        interest.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

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
            <h1 className="mb-6">{t.membershipPageTitle}</h1>
            <p className="text-xl text-white/90 mb-8">{t.membershipHeroSubtitle}</p>
            <Link
              to="/membership/plans"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg"
            >
              {t.viewPlansButton}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reasons to Join CAME */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.reasonsTitle}</h2>
          </motion.div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-[#4FA3FF]" />

            <div className="grid grid-cols-7 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#0B2D5B] bg-white flex items-center justify-center mb-5 flex-shrink-0">
                    <span className="text-xl font-bold text-[#4FA3FF]">{reason.number}</span>
                  </div>
                  <h4 className="mb-2 text-[#0B2D5B]">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet: 2-column grid cards */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex gap-4 bg-gray-50 rounded-2xl p-5"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#0B2D5B] bg-white flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#4FA3FF]">{reason.number}</span>
                </div>
                <div>
                  <h4 className="mb-1 text-[#0B2D5B]">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.howToJoinTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.howToJoinSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.comprehensiveBenefitsTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.comprehensiveBenefitsSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8"
              >
                <div className={`w-16 h-16 bg-${category.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className={`w-8 h-8 text-${category.color}`} />
                </div>
                <h3 className="mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.plansTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.plansSubtitle}
            </p>
          </motion.div>

          {/* 3 Main Plan Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {plans.map((plan, index) => {
              const cardStyles = [
                { topBorder: "border-t-[#0B2D5B]", iconBg: "bg-[#0B2D5B]/10", iconColor: "text-[#0B2D5B]", badgeBg: "bg-[#0B2D5B]" },
                { topBorder: "border-t-[#4FA3FF]", iconBg: "bg-[#4FA3FF]/15", iconColor: "text-[#4FA3FF]", badgeBg: "bg-[#4FA3FF]" },
                { topBorder: "border-t-[#7FC4FF]", iconBg: "bg-[#7FC4FF]/20", iconColor: "text-[#4FA3FF]", badgeBg: "bg-[#7FC4FF]" },
              ];
              const style = cardStyles[index] ?? cardStyles[0];
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl border-2 border-gray-100 border-t-4 ${style.topBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
                >
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Icon + Title row */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 ${style.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <plan.icon className={`w-7 h-7 ${style.iconColor}`} />
                      </div>
                      <h3 className="leading-tight">{plan.name}</h3>
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2 text-sm">/ {plan.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 pb-6 border-b border-gray-100">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to={`/membership/signup?plan=${plan.slug}`}
                      className="block w-full py-3 rounded-xl font-semibold text-center bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      {t.selectPlan} {plan.name}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Associate Member — less prominent option */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-gray-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-gray-700 mb-0.5">{t.associateMember}</h4>
                  <p className="text-sm text-muted-foreground">{t.associateDesc}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-500">{t.associatePrice}</span>
                  <span className="text-xs text-muted-foreground ml-1">/ {t.perYear}</span>
                </div>
                <Link
                  to="/membership/signup?plan=associate-member"
                  className="px-5 py-2.5 border-2 border-gray-300 text-gray-500 rounded-xl hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors font-semibold text-sm whitespace-nowrap"
                >
                  {t.selectPlan}
                </Link>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              {t.associateQuestion}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Member Directory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.directoryTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t.directorySubtitleHub}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholderHub}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-lg"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.email}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="mb-2">{member.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{member.title}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {member.institution}, {member.province}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm hover:text-primary"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {member.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">{t.noMembersFound}</p>
            </div>
          )}
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
            <h2 className="mb-6">{t.readyToJoinTitle}</h2>
            <p className="text-xl text-white/90 mb-8">{t.readyToJoinSubtitle}</p>
            <Link
              to="/membership/become-member"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg"
            >
              {t.startApplication}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}