import { motion } from "motion/react";
import { Mail } from "lucide-react";

export function BoardDirectors() {
  const boardMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "President",
      institution: "University of Toronto",
      bio: "Dr. Chen is a Professor of Medicine and Vice Dean of Education with 20 years of experience in medical education leadership."
    },
    {
      name: "Dr. Michael Leblanc",
      role: "Vice President",
      institution: "McGill University",
      bio: "Specializing in curriculum development and assessment, Dr. Leblanc has led numerous educational innovations."
    },
    {
      name: "Dr. Priya Patel",
      role: "Secretary-Treasurer",
      institution: "University of British Columbia",
      bio: "Dr. Patel brings expertise in educational research and program evaluation to her role on the board."
    },
    {
      name: "Dr. James Wilson",
      role: "Past President",
      institution: "Dalhousie University",
      bio: "With extensive experience in faculty development, Dr. Wilson provides strategic guidance to the organization."
    },
    {
      name: "Dr. Marie Tremblay",
      role: "Director",
      institution: "Université de Montréal",
      bio: "Dr. Tremblay is an advocate for bilingual medical education and inclusive teaching practices."
    },
    {
      name: "Dr. Robert Singh",
      role: "Director",
      institution: "University of Alberta",
      bio: "Focused on simulation-based education and technology integration in medical training."
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
            <h1 className="mb-6">Board of Directors</h1>
            <p className="text-xl text-white/90">
              Our board members provide strategic leadership and governance, ensuring
              CAME continues to advance medical education excellence across Canada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="mb-1">{member.name}</h3>
                    <div className="text-primary font-semibold mb-1">{member.role}</div>
                    <div className="text-sm text-muted-foreground">{member.institution}</div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
                <p className="text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Governance Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <h2 className="mb-6">Governance & Elections</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-3">Board Terms</h3>
                <p className="text-muted-foreground">
                  Board members serve three-year terms and are elected by CAME's voting
                  members. Elections are held annually to fill expiring positions.
                </p>
              </div>
              <div>
                <h3 className="mb-3">Meetings</h3>
                <p className="text-muted-foreground">
                  The Board meets quarterly to review organizational strategy, approve
                  budgets, and provide oversight of CAME's programs and initiatives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}