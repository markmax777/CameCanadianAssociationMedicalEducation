import { motion } from "motion/react";
import { Award, Star, TrendingUp, Heart, Trophy } from "lucide-react";

export function Awards() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const awards = [
    {
      name: "Rising Star Award",
      icon: <Star className="w-10 h-10" />,
      description: "Recognizes early-career medical educators who demonstrate exceptional promise and innovation in their teaching and educational scholarship.",
      eligibility: "Less than 5 years in medical education",
      deadline: "April 30, 2026"
    },
    {
      name: "Certificate of Excellence",
      icon: <Trophy className="w-10 h-10" />,
      description: "Honors outstanding achievements in medical education, including innovative teaching methods, curriculum development, or educational research.",
      eligibility: "All CAME members",
      deadline: "May 15, 2026"
    },
    {
      name: "Certificate of Merit",
      icon: <Award className="w-10 h-10" />,
      description: "Acknowledges significant contributions to medical education at the local or regional level.",
      eligibility: "All medical educators in Canada",
      deadline: "May 15, 2026"
    },
    {
      name: "Meredith Marks New Educator Award",
      icon: <Heart className="w-10 h-10" />,
      description: "Celebrates new educators who have made exceptional early contributions to medical education, embodying passion and dedication.",
      eligibility: "1-3 years in medical education",
      deadline: "June 1, 2026"
    },
    {
      name: "Ian Hart Distinguished Contribution Award",
      icon: <Trophy className="w-10 h-10" />,
      description: "CAME's highest honor, recognizing sustained excellence and national leadership in advancing medical education in Canada.",
      eligibility: "Senior medical educators",
      deadline: "June 1, 2026"
    },
    {
      name: "CAME Service Award",
      icon: <Heart className="w-10 h-10" />,
      description: "Recognizes individuals who have made exceptional contributions to CAME through volunteer service and leadership.",
      eligibility: "CAME members",
      deadline: "May 1, 2026"
    },
    {
      name: "Mid-Career Achievement Award",
      icon: <TrendingUp className="w-10 h-10" />,
      description: "Honors mid-career educators who have demonstrated excellence in teaching, scholarship, and leadership in medical education.",
      eligibility: "5-15 years in medical education",
      deadline: "May 15, 2026"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="w-16 h-16 text-accent mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Grants & Awards</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Recognizing and supporting excellence in medical education across Canada
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Celebrating Excellence
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              CAME celebrates educators and researchers who are advancing medical education across Canada through our prestigious awards program.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our awards recognize outstanding contributions to teaching, research, leadership, and innovation in medical education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-accent group-hover:scale-110 transition-transform">
                    {award.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {award.name}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {award.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-semibold">Eligibility:</span>
                    <span className="text-primary">{award.eligibility}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-semibold">Deadline:</span>
                    <span className="text-secondary font-semibold">{award.deadline}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold">
                    Apply
                  </button>
                  <button className="flex-1 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold">
                    Nominate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grants Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Health Professions Education Grants
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Supporting innovative research and educational initiatives in medical education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Research Grants</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Funding for educational research projects that advance the scholarship of teaching and learning in medical education.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Up to $25,000 per project</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">12-24 month duration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Open to all CAME members</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold">
                Apply for Grant
              </button>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Innovation Grants</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Seed funding for innovative educational initiatives and pilot projects that have potential for broader impact.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Up to $10,000 per project</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">6-12 month duration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Priority for early-career educators</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold">
                Apply for Grant
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past Recipients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              2025 Award Recipients
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Congratulations to our distinguished 2025 award recipients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Jennifer Liu", award: "Ian Hart Distinguished Contribution Award", institution: "University of Toronto" },
              { name: "Dr. Marcus Johnson", award: "Rising Star Award", institution: "McGill University" },
              { name: "Dr. Amara Singh", award: "Mid-Career Achievement Award", institution: "UBC Faculty of Medicine" },
              { name: "Dr. Thomas Bergeron", award: "Certificate of Excellence", institution: "Université Laval" },
              { name: "Dr. Rachel Foster", award: "Meredith Marks New Educator Award", institution: "Dalhousie University" },
              { name: "Dr. David Kim", award: "CAME Service Award", institution: "University of Calgary" }
            ].map((recipient, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {recipient.name.split(' ')[1][0]}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{recipient.name}</h3>
                <p className="text-secondary font-semibold mb-2 text-sm">{recipient.award}</p>
                <p className="text-gray-600 text-sm">{recipient.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Trophy className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nominate a Colleague
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Know someone who deserves recognition for their contributions to medical education?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl">
                Submit Nomination
              </button>
              <button className="px-10 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-xl">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
