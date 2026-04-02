import { motion } from "motion/react";
import { Link } from "react-router";
import { GraduationCap, Globe, Award } from "lucide-react";

export function LeadershipPrograms() {
  const programs = [
    {
      name: "CLIME",
      fullName: "Canadian Leadership in Medical Education",
      icon: GraduationCap,
      description: "Our flagship leadership development program for medical educators at all career stages",
      levels: [
        {
          name: "CLIME 1.0",
          path: "/professional-development/leadership/clime-1",
          focus: "Foundational Leadership Skills",
          duration: "6 months",
          format: "Blended (Virtual + In-person)"
        },
        {
          name: "CLIME 2.0",
          path: "/professional-development/leadership/clime-2",
          focus: "Advanced Leadership & Change Management",
          duration: "8 months",
          format: "Blended (Virtual + In-person)"
        }
      ],
      color: "primary"
    },
    {
      name: "ICLEM",
      fullName: "International Certificate in Leadership & Education in Medicine",
      icon: Globe,
      description: "Internationally recognized program designed for senior medical education leaders",
      levels: [
        {
          name: "ICLEM 1.0",
          path: "/professional-development/leadership/iclem-1",
          focus: "Strategic Leadership & Global Perspectives",
          duration: "12 months",
          format: "International Cohort"
        }
      ],
      color: "secondary"
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
            <h1 className="mb-6">Leadership Programs</h1>
            <p className="text-xl text-white/90">
              Develop your leadership skills and advance your career in medical education
              through our internationally recognized programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className={`bg-${program.color}/5 rounded-2xl p-8 mb-8`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-${program.color} rounded-xl flex items-center justify-center`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-${program.color} font-bold text-2xl mb-2`}>
                      {program.name}
                    </div>
                    <h2 className="mb-3">{program.fullName}</h2>
                    <p className="text-lg text-muted-foreground">{program.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {program.levels.map((level) => (
                  <Link
                    key={level.name}
                    to={level.path}
                    className="block bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="mb-4">{level.name}</h3>
                    <div className="space-y-3 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Focus Area</div>
                        <div className="font-medium">{level.focus}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-medium">{level.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Format</div>
                        <div className="font-medium">{level.format}</div>
                      </div>
                    </div>
                    <span className="text-primary font-semibold">
                      Learn More →
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Why Choose CAME Leadership Programs?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our programs combine evidence-based curriculum, expert faculty, and
              practical application to develop exceptional medical education leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">Expert Faculty</h3>
              <p className="text-muted-foreground">
                Learn from Canada's leading medical education experts and international
                thought leaders in the field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-3">Recognized Credentials</h3>
              <p className="text-muted-foreground">
                Earn certificates recognized across Canada and internationally, enhancing
                your professional credibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Network Building</h3>
              <p className="text-muted-foreground">
                Connect with a national and international cohort of medical education
                leaders and peers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground">
              Applications for the next cohort open in Fall 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-8 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Interested in learning more about our leadership programs? Sign up for
              information sessions and program updates.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              Request Program Information
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}