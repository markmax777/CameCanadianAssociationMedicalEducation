import { motion } from "motion/react";
import { useSearchParams, Link } from "react-router";
import { Mail, ArrowRight, CheckCircle2, User, GraduationCap, Users, Shield } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { membershipTranslations } from "../../translations/membership-translations";

export function MembershipSignup() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") || "individual-member";
  const { language } = useLanguage();
  const t = membershipTranslations[language];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const plans = {
    "individual-member": {
      name: t.individualMember,
      price: t.individualPrice,
      icon: User,
      description: t.individualDesc,
    },
    "early-career-medical-educator": {
      name: t.earlyCareerMember,
      price: t.earlyCareerPrice,
      icon: GraduationCap,
      description: t.earlyCareerDesc,
    },
    "learner-student": {
      name: t.learnerMember,
      price: t.learnerPrice,
      icon: Users,
      description: t.learnerDesc,
    },
    "associate-member": {
      name: t.associateMember,
      price: t.associatePrice,
      icon: Shield,
      description: t.associateDesc,
    },
  };

  const selectedPlan = plans[planParam as keyof typeof plans] || plans["individual-member"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email, "for plan:", selectedPlan.name);
    setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="mb-4">{t.signupTitle}</h1>
            <p className="text-xl text-white/90">{t.signupSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Plan Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/20 sticky top-24">
                <h2 className="text-2xl font-bold text-primary mb-6">{t.yourSelection}</h2>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <selectedPlan.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedPlan.name}</h3>
                    <p className="text-sm text-gray-600">{selectedPlan.description}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">{t.annualMembership}</span>
                    <span className="text-2xl font-bold text-primary">{selectedPlan.price}</span>
                  </div>
                  <p className="text-sm text-gray-500">{t.billedAnnually}</p>
                </div>

                <div className="bg-accent/5 rounded-xl p-4">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    {t.whatsIncluded}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{t.includedBenefit1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{t.includedBenefit2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{t.includedBenefit3}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{t.includedBenefit4}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/membership/plans" className="text-sm text-primary hover:underline">
                    {t.changePlan}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Email Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {!submitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-8">
                    <Mail className="w-12 h-12 text-accent mb-4" />
                    <h2 className="text-2xl font-bold text-primary mb-2">{t.letsGetStarted}</h2>
                    <p className="text-gray-600">{t.emailPrompt}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors text-lg"
                        placeholder={t.emailPlaceholder}
                      />
                      <p className="text-sm text-gray-500 mt-2">{t.emailNote}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">{t.nextStepsTitle}</h4>
                      <ol className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-primary">1.</span>
                          <span>{t.step1}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-primary">2.</span>
                          <span>{t.step2}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-primary">3.</span>
                          <span>{t.step3}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-primary">4.</span>
                          <span>{t.step4}</span>
                        </li>
                      </ol>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                    >
                      {t.continueButton}
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-center text-gray-500">{t.termsText}</p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      {t.emailVerifiedTitle}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {t.emailSentText} <strong>{email}</strong>
                    </p>
                    <div className="bg-accent/10 rounded-xl p-6 mb-6">
                      <p className="text-gray-700 mb-4">
                        {t.checkInboxText} {selectedPlan.name} {t.checkInboxSuffix}
                      </p>
                      <p className="text-sm text-gray-600">{t.noEmailText}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/membership/plans"
                        className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold text-center"
                      >
                        {t.backToPlans}
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center"
                      >
                        {t.contactSupport}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.securePaymentTitle}</h3>
              <p className="text-sm text-gray-600">{t.securePaymentText}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.instantAccessTitle}</h3>
              <p className="text-sm text-gray-600">{t.instantAccessText}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.dedicatedSupportTitle}</h3>
              <p className="text-sm text-gray-600">{t.dedicatedSupportText}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
