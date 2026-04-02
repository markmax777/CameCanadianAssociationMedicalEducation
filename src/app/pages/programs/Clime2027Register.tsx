import { motion } from "motion/react";
import { Check, ArrowRight, Calendar, MapPin, Users, Building2 } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";

export function Clime2027Register() {
  const { language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<'member' | 'non-member'>('member');

  const programDetails = {
    title: language === 'fr' 
      ? "CLIME 1.0 : Leadership fondamental en éducation des professions de la santé"
      : "CLIME 1.0: Foundational Leadership in Health Professions Education",
    dates: language === 'fr' ? "1-4 février 2027" : "February 1-4, 2027",
    location: language === 'fr' ? "Toronto, Ontario" : "Toronto, Ontario",
    venue: "Li Ka Shing Knowledge Institute",
    participants: language === 'fr' ? "Maximum 35 participants" : "Maximum 35 Participants",
    deadline: language === 'fr' ? "1er janvier 2027" : "January 1, 2027"
  };

  const pricing = language === 'fr' ? [
    {
      type: "Membres de l'ACEM",
      earlyBird: "$4,463.50",
      earlyBirdBase: "$3,950.00 + $513.50 HST",
      earlyBirdDate: "Avant le 1er septembre 2026",
      regular: "$4,746.00",
      regularBase: "$4,200.00 + $546.00 HST",
      regularDate: "Après le 1er septembre 2026"
    },
    {
      type: "Non-membres",
      earlyBird: "$4,859.00",
      earlyBirdBase: "$4,300.00 + $559.00 HST",
      earlyBirdDate: "Avant le 1er septembre 2026",
      regular: "$5,198.00",
      regularBase: "$4,600.00 + $598.00 HST",
      regularDate: "Après le 1er septembre 2026"
    }
  ] : [
    {
      type: "CAME Members",
      earlyBird: "$4,463.50",
      earlyBirdBase: "$3,950.00 + $513.50 HST",
      earlyBirdDate: "Before September 1, 2026",
      regular: "$4,746.00",
      regularBase: "$4,200.00 + $546.00 HST",
      regularDate: "After September 1, 2026"
    },
    {
      type: "Non-Members",
      earlyBird: "$4,859.00",
      earlyBirdBase: "$4,300.00 + $559.00 HST",
      earlyBirdDate: "Before September 1, 2026",
      regular: "$5,198.00",
      regularBase: "$4,600.00 + $598.00 HST",
      regularDate: "After September 1, 2026"
    }
  ];

  const steps = language === 'fr' ? [
    { number: "1", title: "Vérifier l'éligibilité", description: "Confirmer que vous répondez aux critères du programme" },
    { number: "2", title: "Remplir le formulaire", description: "Compléter le formulaire d'inscription en ligne" },
    { number: "3", title: "Soumettre les documents", description: "Fournir les documents justificatifs requis" },
    { number: "4", title: "Paiement", description: "Compléter le paiement pour confirmer votre place" },
  ] : [
    { number: "1", title: "Check Eligibility", description: "Confirm you meet the program criteria" },
    { number: "2", title: "Complete Form", description: "Fill out the online registration form" },
    { number: "3", title: "Submit Documents", description: "Provide required supporting documents" },
    { number: "4", title: "Payment", description: "Complete payment to confirm your spot" },
  ];

  const whatsIncluded = language === 'fr' ? [
    "Toutes les sessions d'apprentissage",
    "Matériel et ressources du programme",
    "Repas et pauses pendant le programme",
    "Certificat ACEM à la fin",
    "Crédits de formation continue"
  ] : [
    "All learning sessions",
    "Program materials and resources",
    "Meals and refreshments during program",
    "CAME certificate upon completion",
    "Continuing education credits"
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
            <h1 className="mb-6">
              {language === 'fr' ? "Inscription à CLIME 1.0 2027" : "Register for CLIME 1.0 2027"}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {language === 'fr'
                ? "Inscrivez-vous au programme de leadership fondamental en éducation des professions de la santé"
                : "Register for the foundational leadership in health professions education program"}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{programDetails.dates}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{programDetails.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>{programDetails.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{programDetails.participants}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              {language === 'fr' ? "Tarifs d'inscription pour la livraison de Toronto" : "Registration Fees For Toronto Delivery"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === 'fr'
                ? "Inscrivez-vous avant le 1er septembre 2026 pour bénéficier du tarif préférentiel"
                : "Register before September 1, 2026 to receive early bird pricing"}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20"
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">{plan.type}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent/30">
                    <p className="font-bold text-accent text-sm mb-2">{plan.earlyBirdDate}</p>
                    <p className="text-2xl font-bold text-primary mb-1">{plan.earlyBird}</p>
                    <p className="text-sm text-gray-600">{plan.earlyBirdBase}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-bold text-gray-700 text-sm mb-2">{plan.regularDate}</p>
                    <p className="text-2xl font-bold text-primary mb-1">{plan.regular}</p>
                    <p className="text-sm text-gray-600">{plan.regularBase}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h4 className="text-xl font-bold text-primary mb-6">
                {language === 'fr' ? "Ce qui est inclus" : "What's Included"}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {whatsIncluded.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">
              {language === 'fr' ? "Comment s'inscrire" : "How to Register"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === 'fr'
                ? "Processus d'inscription en 4 étapes simples"
                : "Simple 4-step registration process"}
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
            className="text-center mt-16 space-y-6"
          >
            <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
              <p className="font-semibold mb-4">
                {language === 'fr' ? 'Sélectionnez votre type de membre :' : 'Select your member type:'}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setSelectedPlan('member')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    selectedPlan === 'member'
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  {language === 'fr' ? 'Membre ACEM' : 'CAME Member'}
                </button>
                <button
                  onClick={() => setSelectedPlan('non-member')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    selectedPlan === 'non-member'
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  {language === 'fr' ? 'Non-membre' : 'Non-Member'}
                </button>
              </div>
              <Link
                to={`/checkout?program=${encodeURIComponent(programDetails.title)}&price=${selectedPlan === 'member' ? '$4,463.50' : '$4,859.00'}&memberType=${encodeURIComponent(selectedPlan === 'member' ? (language === 'fr' ? 'Membre ACEM' : 'CAME Member') : (language === 'fr' ? 'Non-membre' : 'Non-Member'))}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg w-full justify-center"
              >
                {language === 'fr' ? "Commencer l'inscription" : "Start Registration"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'fr'
                ? 'Vous serez redirigé vers notre page de paiement sécurisé'
                : 'You will be redirected to our secure checkout page'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learn More CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">
              {language === 'fr' ? "Vous voulez en savoir plus?" : "Want to Learn More?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {language === 'fr'
                ? "Visitez la page complète du programme pour plus de détails sur CLIME 1.0"
                : "Visit the full program page for more details about CLIME 1.0"}
            </p>
            <Link
              to="/programs/clime-2027"
              className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
            >
              {language === 'fr' ? "Voir les détails du programme" : "View Program Details"}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}