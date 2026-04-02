import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Sparkles,
  Mail,
  Users,
  CheckCircle2,
  ArrowRight,
  Bell,
  TrendingUp
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { programDetailsTranslations } from "../../translations/program-details-translations";

export function CamePaccc() {
  const { language } = useLanguage();
  const t = programDetailsTranslations[language];

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist submission:", { name, email, institution });
    setSubmitted(true);
  };

  const waitlistBenefits = language === 'fr' ? [
    "Notification anticipée de l'ouverture des inscriptions",
    "Tarifs de lancement exclusifs (économisez jusqu'à 20 %)",
    "Accès prioritaire aux informations sur le programme",
    "Invitations aux webinaires de pré-lancement"
  ] : [
    "Early notification when enrollment opens",
    "Exclusive early bird pricing (save up to 20%)",
    "Priority access to program information",
    "Invitations to pre-launch webinars"
  ];

  const features = [
    {
      icon: TrendingUp,
      title: t.careerAdvancement,
      description: language === 'fr'
        ? "Planification de carrière stratégique, image de marque professionnelle et stratégies d'avancement adaptées à l'éducation médicale."
        : "Strategic career planning, professional branding, and advancement strategies tailored to medical education.",
    },
    {
      icon: Users,
      title: t.mentorshipNetwork,
      description: language === 'fr'
        ? "Se connecter avec des mentors expérimentés et construire un réseau professionnel de soutien."
        : "Connecting with experienced mentors and building a supportive professional network.",
    },
    {
      icon: CheckCircle2,
      title: t.coreCompetencies,
      description: language === 'fr'
        ? "Développer des compétences essentielles pour réussir dans des rôles de leadership en éducation médicale."
        : "Developing essential competencies for success in medical education leadership roles.",
    },
  ];

  const faqs = language === 'fr' ? [
    {
      question: "Quand l'ACEM-PACCC sera-t-il lancé?",
      answer: "Nous visons un lancement à la fin de 2027. Les membres de la liste d'attente seront informés 3 à 6 mois avant l'ouverture des inscriptions."
    },
    {
      question: "Quelle sera la durée du programme?",
      answer: "Nous prévoyons un format de programme de 6 mois, bien que les détails finals soient encore en cours de finalisation en fonction des commentaires des parties prenantes."
    },
    {
      question: "Quel sera le coût du programme?",
      answer: "La tarification est en cours de finalisation. Les membres de la liste d'attente recevront des tarifs de lancement exclusifs (estimation de 20 % de réduction par rapport aux tarifs réguliers)."
    },
    {
      question: "Le programme sera-t-il en ligne ou en personne?",
      answer: "Nous prévoyons un format hybride avec principalement des sessions virtuelles et une retraite en personne facultative."
    },
    {
      question: "Pour qui ce programme est-il conçu?",
      answer: "L'ACEM-PACCC est conçu pour les éducateurs médicaux à toutes les étapes de leur carrière cherchant à faire progresser leur développement professionnel et leur trajectoire de carrière."
    }
  ] : [
    {
      question: "When will CAME-PACCC launch?",
      answer: "We're targeting a launch in late 2027. Waitlist members will be notified 3-6 months before enrollment opens."
    },
    {
      question: "How long will the program be?",
      answer: "We're planning for a 6-month program format, though final details are still being finalized based on stakeholder feedback."
    },
    {
      question: "What will the program cost?",
      answer: "Pricing is being finalized. Waitlist members will receive exclusive early bird pricing (estimated 20% discount off regular rates)."
    },
    {
      question: "Will the program be online or in-person?",
      answer: "We're planning a blended format with primarily virtual sessions and one optional in-person retreat."
    },
    {
      question: "Who is this program designed for?",
      answer: "CAME-PACCC is being designed for medical educators at all career stages looking to advance their professional development and career trajectory."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-12 h-12" />
              <span className="text-lg font-semibold">{t.comingSoonLabel}</span>
            </div>
            <h1 className="mb-6">{t.camePacccTitle}</h1>
            <p className="text-xl text-white/90 mb-8">{t.camePacccFullName}</p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">{t.camePacccDescription}</p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <Bell className="w-5 h-5" />
              <span className="font-semibold">{t.launching2027}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Waitlist Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Mail className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-4">{t.joinWaitlistTitle}</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">{t.joinWaitlistDesc}</p>
          </motion.div>

          {!submitted ? (
            <motion.div
              {...fadeInUp}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-accent/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? "Nom complet *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder={language === 'fr' ? "Dr. Jane Smith" : "Dr. Jane Smith"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? "Adresse courriel *" : "Email Address *"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder="jane.smith@university.ca"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? "Institution/Organisation (facultatif)" : "Institution/Organization (Optional)"}
                  </label>
                  <input
                    type="text"
                    id="institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder={language === 'fr' ? "Université de Toronto" : "University of Toronto"}
                  />
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-primary mb-2">
                    {language === 'fr' ? "Ce que vous recevrez :" : "What You'll Receive:"}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {waitlistBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  {t.joinWaitlistBtn}
                </button>

                <p className="text-xs text-center text-gray-500">
                  {language === 'fr'
                    ? "En rejoignant, vous acceptez de recevoir des mises à jour sur l'ACEM-PACCC. Nous respectons votre vie privée et vous pouvez vous désabonner à tout moment."
                    : "By joining, you agree to receive updates about CAME-PACCC. We respect your privacy and you can unsubscribe anytime."}
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent/10 rounded-2xl p-12 text-center shadow-xl border-2 border-accent/30"
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">{t.youreOnList}</h3>
              <p className="text-lg text-gray-700 mb-6">
                {language === 'fr'
                  ? `Merci pour votre intérêt pour l'ACEM-PACCC, ${name}. Nous vous enverrons des mises à jour du programme et des informations d'accès anticipé à `
                  : `Thank you for your interest in CAME-PACCC, ${name}. We'll send program updates and early access information to `}
                <strong>{email}</strong>.
              </p>
              <p className="text-gray-600">
                {language === 'fr'
                  ? "Vérifiez votre boîte de réception pour un courriel de confirmation avec plus de détails sur ce qui vous attend."
                  : "Check your inbox for a confirmation email with more details about what to expect."}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Program Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-primary mb-6">{t.whatToExpect}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "L'ACEM-PACCC sera un programme complet de développement professionnel axé sur l'aide aux éducateurs médicaux pour faire progresser leur carrière grâce à un développement de compétences stratégiques."
                  : "CAME-PACCC will be a comprehensive professional development program focused on helping medical educators advance their careers through strategic competency development."}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'fr'
                  ? "Le programme combinera le développement de compétences pratiques, la planification de carrière, le mentorat et le réseautage professionnel pour accélérer votre trajectoire de carrière en éducation médicale."
                  : "The program will combine practical skill-building, career planning, mentorship, and professional networking to accelerate your career trajectory in medical education."}
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1731419713280-34235a2ef1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGxlYXJuaW5nJTIwcHJvZ3JhbXxlbnwxfHx8fDE3NzUwODg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'fr' ? "Programme de développement professionnel" : "Professional development program"}
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anticipated Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.anticipatedFeatures}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.heresPlanning}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.faqTitle}</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">{t.stayConnected}</h2>
            <p className="text-xl text-white/90 mb-8">{t.stayConnectedDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-xl"
              >
                <Mail className="w-5 h-5" />
                {t.joinWaitlistBtn}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all font-semibold text-lg"
              >
                {t.contactUs}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
