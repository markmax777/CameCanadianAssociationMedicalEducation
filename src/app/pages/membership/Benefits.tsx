import { motion } from "motion/react";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  FileText,
  Network,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { membershipTranslations } from "../../translations/membership-translations";

export function Benefits() {
  const { language } = useLanguage();
  const t = membershipTranslations[language];

  const benefitCategories = [
    {
      icon: GraduationCap,
      title: t.benefitsCat1Title,
      color: "primary",
      benefits: [t.benefitsCat1b1, t.benefitsCat1b2, t.benefitsCat1b3, t.benefitsCat1b4],
    },
    {
      icon: Users,
      title: t.benefitsCat2Title,
      color: "secondary",
      benefits: [t.benefitsCat2b1, t.benefitsCat2b2, t.benefitsCat2b3, t.benefitsCat2b4],
    },
    {
      icon: Award,
      title: t.benefitsCat3Title,
      color: "accent",
      benefits: [t.benefitsCat3b1, t.benefitsCat3b2, t.benefitsCat3b3, t.benefitsCat3b4],
    },
    {
      icon: Calendar,
      title: t.benefitsCat4Title,
      color: "primary",
      benefits: [t.benefitsCat4b1, t.benefitsCat4b2, t.benefitsCat4b3, t.benefitsCat4b4],
    },
    {
      icon: BookOpen,
      title: t.benefitsCat5Title,
      color: "secondary",
      benefits: [t.benefitsCat5b1, t.benefitsCat5b2, t.benefitsCat5b3, t.benefitsCat5b4],
    },
    {
      icon: FileText,
      title: t.benefitsCat6Title,
      color: "accent",
      benefits: [t.benefitsCat6b1, t.benefitsCat6b2, t.benefitsCat6b3, t.benefitsCat6b4],
    },
    {
      icon: Network,
      title: t.benefitsCat7Title,
      color: "primary",
      benefits: [t.benefitsCat7b1, t.benefitsCat7b2, t.benefitsCat7b3, t.benefitsCat7b4],
    },
    {
      icon: TrendingUp,
      title: t.benefitsCat8Title,
      color: "secondary",
      benefits: [t.benefitsCat8b1, t.benefitsCat8b2, t.benefitsCat8b3, t.benefitsCat8b4],
    },
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
            <h1 className="mb-6">{t.benefitsPageTitle}</h1>
            <p className="text-xl text-white/90">{t.benefitsPageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {benefitCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 bg-${category.color}/10 rounded-xl flex items-center justify-center`}>
                    <category.icon className={`w-7 h-7 text-${category.color}`} />
                  </div>
                  <h2 className="flex-1">{category.title}</h2>
                </div>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">{t.benefitsExceptionalValueTitle}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.benefitsExceptionalValueDesc}
            </p>
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg">
              {t.benefitsViewPlansButton}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.benefitsMemberSayTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-primary/10 rounded-2xl p-8"
            >
              <p className="text-lg text-muted-foreground mb-6 italic">{t.testimonial1Text}</p>
              <div className="font-semibold">{t.testimonial1Name}</div>
              <div className="text-sm text-muted-foreground">{t.testimonial1Role}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-secondary/10 rounded-2xl p-8"
            >
              <p className="text-lg text-muted-foreground mb-6 italic">{t.testimonial2Text}</p>
              <div className="font-semibold">{t.testimonial2Name}</div>
              <div className="text-sm text-muted-foreground">{t.testimonial2Role}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-accent/10 rounded-2xl p-8"
            >
              <p className="text-lg text-muted-foreground mb-6 italic">{t.testimonial3Text}</p>
              <div className="font-semibold">{t.testimonial3Name}</div>
              <div className="text-sm text-muted-foreground">{t.testimonial3Role}</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
