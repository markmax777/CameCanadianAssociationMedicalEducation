import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";
import { membershipTranslations } from "../../translations/membership-translations";

export function BecomeMember() {
  const { language } = useLanguage();
  const t = membershipTranslations[language];

  const steps = [
    { number: "1", title: t.stepTitle1, description: t.stepDesc1 },
    { number: "2", title: t.stepTitle2, description: t.stepDesc2 },
    { number: "3", title: t.stepTitle3, description: t.stepDesc3 },
    { number: "4", title: t.stepTitle4, description: t.stepDesc4 },
  ];

  const benefits = [
    t.quickBenefit1,
    t.quickBenefit2,
    t.quickBenefit3,
    t.quickBenefit4,
    t.quickBenefit5,
    t.quickBenefit6,
    t.quickBenefit7,
    t.quickBenefit8,
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
            <h1 className="mb-6">{t.becomeMemberTitle}</h1>
            <p className="text-xl text-white/90 mb-8">{t.becomeMemberHeroSubtitle}</p>
            <Link
              to="/membership/plans"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg"
            >
              {t.becomeMemberViewPlans}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Join CAME */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.becomeMemberWhyJoinTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.becomeMemberWhyJoinSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.becomeMemberHowToJoinTitle}</h2>
            <p className="text-xl text-muted-foreground">
              {t.becomeMemberHowToJoinSubtitle}
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
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg">
              {t.becomeMemberStartApp}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8">{t.becomeMemberEligibilityTitle}</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="mb-2">{t.regularMembershipTitle}</h3>
                <p className="text-muted-foreground">{t.regularMembershipDesc}</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="mb-2">{t.studentMembershipTitle}</h3>
                <p className="text-muted-foreground">{t.studentMembershipDesc}</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="mb-2">{t.institutionalMembershipTitle}</h3>
                <p className="text-muted-foreground">{t.institutionalMembershipDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
