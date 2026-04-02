import { motion } from "motion/react";
import { Check, GraduationCap, User, Users } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";
import { membershipTranslations } from "../../translations/membership-translations";

export function Plans() {
  const { language } = useLanguage();
  const t = membershipTranslations[language];

  const plans = [
    {
      name: t.individualMember,
      price: t.individualPrice,
      period: t.perYear,
      description: t.individualDesc,
      features: [
        t.feature1,
        t.feature2,
        t.feature3,
        t.feature4,
        t.feature5,
        t.feature6,
        t.feature7,
        t.feature8,
        t.feature9,
        t.feature10,
        t.feature11,
        t.feature12
      ],
      popular: false,
      icon: User,
      slug: "individual-member"
    },
    {
      name: t.earlyCareerMember,
      price: t.earlyCareerPrice,
      period: t.perYear,
      description: t.earlyCareerDesc,
      features: [
        t.featureEC1,
        t.featureEC2,
        t.featureEC3,
        t.featureEC4,
        t.featureEC5,
        t.featureEC6,
        t.featureEC7,
        t.featureEC8,
        t.featureEC9,
        t.featureEC10,
        t.featureEC11
      ],
      popular: false,
      icon: GraduationCap,
      slug: "early-career-medical-educator"
    },
    {
      name: t.learnerMember,
      price: t.learnerPrice,
      period: t.perYear,
      description: t.learnerDesc,
      features: [
        t.featureLearner1,
        t.featureLearner2,
        t.featureLearner3,
        t.featureLearner4,
        t.featureLearner5,
        t.featureLearner6,
        t.featureLearner7,
        t.featureLearner8,
        t.featureLearner9
      ],
      popular: false,
      icon: Users,
      slug: "learner-student"
    }
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
            <h1 className="mb-6">{t.plansTitle}</h1>
            <p className="text-xl text-white/90">
              {t.plansSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-8">
                  {plan.icon && (
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                  )}
                  <h2 className="mb-2">{plan.name}</h2>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/membership/signup?plan=${plan.slug}`}
                  className="block w-full py-3 rounded-lg font-semibold transition-colors bg-primary text-white hover:bg-primary/90 text-center"
                >
                  {t.selectPlan} {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retired/Associate Member Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-4">
              {t.associateQuestion}
            </p>
            <Link
              to="/membership/signup?plan=associate-member"
              className="inline-block px-6 py-2 text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
            >
              {t.associateLink}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.infoTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="mb-3">{t.renewalTitle}</h3>
              <p className="text-muted-foreground">
                {t.renewalText}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="mb-3">{t.groupDiscountsTitle}</h3>
              <p className="text-muted-foreground">
                {t.groupDiscountsText}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="mb-3">{t.paymentTitle}</h3>
              <p className="text-muted-foreground">
                {t.paymentText}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="mb-3">{t.cancellationTitle}</h3>
              <p className="text-muted-foreground">
                {t.cancellationText}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              {t.questionsText}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              {t.contactButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}