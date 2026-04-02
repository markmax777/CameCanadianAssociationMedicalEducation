import { motion } from "motion/react";

export function Committees() {
  const committees = [
    {
      name: "Education & Programs Committee",
      chair: "Dr. Jennifer Martinez",
      description: "Oversees CAME's educational programs including CLIME, ICLEM, webinars, and professional development initiatives.",
      members: 8
    },
    {
      name: "Research & Scholarship Committee",
      chair: "Dr. David Thompson",
      description: "Supports research in medical education, reviews grant applications, and promotes scholarly activities among members.",
      members: 6
    },
    {
      name: "Awards & Recognition Committee",
      chair: "Dr. Lisa Wong",
      description: "Manages CAME's awards programs, reviews nominations, and recognizes excellence in medical education.",
      members: 7
    },
    {
      name: "Membership & Engagement Committee",
      chair: "Dr. Ahmed Hassan",
      description: "Develops strategies to grow membership, enhance member engagement, and support early career educators.",
      members: 6
    },
    {
      name: "Communications & Outreach Committee",
      chair: "Dr. Emily Roberts",
      description: "Oversees CAME's communications strategy, newsletter, social media, and public engagement activities.",
      members: 5
    },
    {
      name: "Finance & Audit Committee",
      chair: "Dr. Robert MacDonald",
      description: "Provides financial oversight, reviews budgets, and ensures responsible stewardship of CAME's resources.",
      members: 5
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
            <h1 className="mb-6">Committees</h1>
            <p className="text-xl text-white/90">
              Our committees drive CAME's key initiatives and ensure excellence across
              all aspects of our organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="mb-2">{committee.name}</h2>
                    <div className="text-primary font-semibold mb-3">
                      Chair: {committee.chair}
                    </div>
                    <p className="text-muted-foreground mb-4">{committee.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:ml-6 md:text-right">
                    {committee.members} members
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-secondary/10 rounded-2xl p-8 text-center"
          >
            <h2 className="mb-4">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              CAME members are encouraged to participate in committee work. Committee
              positions are announced annually with opportunities to contribute your
              expertise and shape the future of medical education in Canada.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Express Your Interest
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}