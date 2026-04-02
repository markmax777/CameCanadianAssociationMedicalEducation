import { motion } from "motion/react";
import { Calendar, Users, Award, CheckCircle } from "lucide-react";

export function Clime2() {
  const modules = [
    "Advanced Leadership Strategies",
    "Organizational Change & Innovation",
    "Strategic Planning in Medical Education",
    "Quality Improvement & Program Evaluation",
    "Conflict Resolution & Negotiation",
    "Building High-Performing Teams"
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-accent font-bold mb-4">CLIME 2.0</div>
            <h1 className="mb-6">Advanced Leadership in Medical Education</h1>
            <p className="text-xl text-white/90">
              For experienced leaders ready to drive transformational change
            </p>
          </motion.div>
        </div>
      </section>

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
              <p className="text-muted-foreground">8 months, part-time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <Users className="w-8 h-8 text-secondary mb-4" />
              <h3 className="mb-2">Prerequisites</h3>
              <p className="text-muted-foreground">CLIME 1.0 completion or equivalent experience</p>
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
              <p className="text-muted-foreground">CAME Advanced Leadership Certificate</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Program Modules</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {modules.map((module) => (
                <li key={module} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
