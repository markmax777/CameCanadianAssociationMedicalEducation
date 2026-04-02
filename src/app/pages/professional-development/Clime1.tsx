import { motion } from "motion/react";
import { Calendar, Users, Award, CheckCircle } from "lucide-react";

export function Clime1() {
  const modules = [
    "Educational Leadership Foundations",
    "Curriculum Design & Development",
    "Teaching & Learning Strategies",
    "Assessment & Evaluation",
    "Faculty Development",
    "Change Management in Medical Education"
  ];

  const benefits = [
    "Develop core leadership competencies",
    "Network with emerging leaders across Canada",
    "Apply learning through a capstone project",
    "Earn a recognized certificate in medical education leadership",
    "Access to ongoing mentorship and support"
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
            className="max-w-3xl"
          >
            <div className="text-accent font-bold mb-4">CLIME 1.0</div>
            <h1 className="mb-6">Canadian Leaders in Medical Education</h1>
            <p className="text-xl text-white/90">
              Build foundational leadership skills for emerging medical education leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="mb-2">Duration</h3>
              <p className="text-muted-foreground">6 months, part-time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <Users className="w-8 h-8 text-secondary mb-4" />
              <h3 className="mb-2">Format</h3>
              <p className="text-muted-foreground">Blended: Virtual sessions + 2 in-person retreats</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <Award className="w-8 h-8 text-accent-foreground mb-4" />
              <h3 className="mb-2">Certificate</h3>
              <p className="text-muted-foreground">CAME Leadership Certificate</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Program Modules</h2>
              <ul className="space-y-3">
                {modules.map((module) => (
                  <li key={module} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="mb-6">Program Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Ready to Apply?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Applications for the next CLIME 1.0 cohort open Fall 2026
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              Request Information
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
