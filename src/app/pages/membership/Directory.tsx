import { motion } from "motion/react";
import { Search, MapPin, Briefcase, Mail } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { membershipTranslations } from "../../translations/membership-translations";

export function Directory() {
  const { language } = useLanguage();
  const t = membershipTranslations[language];
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    {
      name: "Dr. Sarah Chen",
      title: "Vice Dean of Education",
      institution: "University of Toronto",
      province: "Ontario",
      interests: ["Curriculum Development", "Assessment"],
      email: "sarah.chen@example.ca",
    },
    {
      name: "Dr. Michael Leblanc",
      title: "Associate Professor",
      institution: "McGill University",
      province: "Quebec",
      interests: ["Simulation", "Clinical Skills"],
      email: "michael.leblanc@example.ca",
    },
    {
      name: "Dr. Priya Patel",
      title: "Program Director",
      institution: "University of British Columbia",
      province: "British Columbia",
      interests: ["Faculty Development", "Leadership"],
      email: "priya.patel@example.ca",
    },
    {
      name: "Dr. James Wilson",
      title: "Department Chair",
      institution: "Dalhousie University",
      province: "Nova Scotia",
      interests: ["Medical Education Research", "Professionalism"],
      email: "james.wilson@example.ca",
    },
    {
      name: "Dr. Jennifer Martinez",
      title: "Associate Dean",
      institution: "McMaster University",
      province: "Ontario",
      interests: ["Problem-Based Learning", "Innovation"],
      email: "jennifer.martinez@example.ca",
    },
    {
      name: "Dr. Robert Singh",
      title: "Medical Educator",
      institution: "University of Alberta",
      province: "Alberta",
      interests: ["Technology Integration", "E-Learning"],
      email: "robert.singh@example.ca",
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.interests.some((interest) =>
        interest.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

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
            <h1 className="mb-6">{t.directoryPageTitle}</h1>
            <p className="text-xl text-white/90">{t.directoryPageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.directorySearchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directory Listing */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-muted-foreground"
          >
            {t.showingMembers.replace("{count}", String(filteredMembers.length))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="mb-1">{member.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{member.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {member.institution}, {member.province}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
              {t.loadMoreMembers}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Member-Only Notice */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">{t.membersOnlyTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.membersOnlyDesc}</p>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold">
              {t.membersOnlyButton}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
