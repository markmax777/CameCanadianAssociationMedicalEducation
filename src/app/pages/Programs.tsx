import { motion } from "motion/react";
import { Link } from "react-router";
import { GraduationCap, Globe, BookOpen, Calendar, Users, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Programs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Programs & Education</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Transform your career with our nationally recognized leadership development programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* CLIME Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-6">
                Premier Leadership Program
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">CLIME</h2>
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Canadian Leaders in Medical Education
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                CLIME is a comprehensive leadership development program designed for emerging and established leaders in medical education. This intensive program combines theoretical foundations with practical application.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Duration</p>
                    <p className="text-gray-700">12-month cohort-based program</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Format</p>
                    <p className="text-gray-700">In-person workshops and online modules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Certification</p>
                    <p className="text-gray-700">CLIME Leadership Certificate</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg">
                  Register for CLIME 2027
                </button>
                <div className="text-sm text-gray-600">Next cohort starts: September 2027</div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616992510024-f1293eb00e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZSUyMHByb2Zlc3Npb25hbCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3NDI4MzE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CLIME Program"
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* CLIME 2.0 */}
          <motion.div {...fadeInUp} className="mt-16 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-primary mb-6">CLIME 2.0 - Advanced Leadership</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For CLIME graduates ready to advance their leadership journey. CLIME 2.0 focuses on organizational change, strategic planning, and executive leadership in medical education.
            </p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold">
              Learn More About CLIME 2.0
            </button>
          </motion.div>
        </div>
      </section>

      {/* ICLEM Conference */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBjb2xsYWJvcmF0aW9uJTIwdGVhbXxlbnwxfHx8fDE3NzQyODMxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ICLEM Conference"
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-1 md:order-2">
              <Globe className="w-12 h-12 text-secondary mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">ICLEM</h2>
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                International Conference on Learning in Medical Education
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ICLEM brings together medical educators, researchers, and innovators from around the world to share best practices, cutting-edge research, and transformative ideas in medical education.
              </p>
              
              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                <h4 className="text-xl font-bold text-primary mb-4">ICLEM 2027</h4>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold text-primary">Date:</span> June 14-17, 2027</p>
                  <p><span className="font-semibold text-primary">Location:</span> Vancouver, BC</p>
                  <p><span className="font-semibold text-primary">Theme:</span> Innovation and Equity in Medical Education</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-primary text-lg">Conference Highlights:</h4>
                <ul className="space-y-2">
                  {[
                    "Keynote presentations from global leaders",
                    "Interactive workshops and skill-building sessions",
                    "Research poster presentations",
                    "Networking opportunities",
                    "Awards and recognition ceremony"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg">
                Register for ICLEM 2027
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Educational Courses</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized courses designed to enhance your teaching and assessment skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Curriculum Design",
                description: "Learn to design innovative, competency-based curricula that meet modern medical education standards.",
                duration: "6 weeks",
                format: "Online"
              },
              {
                title: "Assessment & Evaluation",
                description: "Master various assessment methods and develop valid, reliable evaluation tools for learners.",
                duration: "4 weeks",
                format: "Hybrid"
              },
              {
                title: "Educational Leadership",
                description: "Develop the skills needed to lead educational initiatives and drive institutional change.",
                duration: "8 weeks",
                format: "Online"
              },
              {
                title: "Simulation-Based Education",
                description: "Explore best practices in simulation design, implementation, and debriefing techniques.",
                duration: "5 weeks",
                format: "In-person"
              },
              {
                title: "Faculty Development",
                description: "Learn strategies to mentor and develop faculty members as educators and scholars.",
                duration: "6 weeks",
                format: "Online"
              },
              {
                title: "Educational Scholarship",
                description: "Conduct meaningful educational research and contribute to the scholarship of teaching.",
                duration: "10 weeks",
                format: "Hybrid"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{course.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <span className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-semibold">
                    {course.format}
                  </span>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <GraduationCap className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advance Your Career
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of medical educators who have transformed their practice through CAME programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="px-10 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg shadow-xl"
              >
                Become a Member
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
