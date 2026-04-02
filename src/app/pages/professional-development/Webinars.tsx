import { motion } from "motion/react";
import { Video, Calendar, Users } from "lucide-react";

export function Webinars() {
  const upcomingWebinars = [
    {
      title: "Assessment Strategies for Clinical Skills",
      date: "April 15, 2026",
      presenter: "Dr. Sarah Chen",
      attendees: 150
    },
    {
      title: "Integrating AI in Medical Education",
      date: "April 22, 2026",
      presenter: "Dr. Michael Leblanc",
      attendees: 200
    },
    {
      title: "Faculty Development Best Practices",
      date: "May 6, 2026",
      presenter: "Dr. Jennifer Martinez",
      attendees: 180
    }
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
            <h1 className="mb-6">Webinars</h1>
            <p className="text-xl text-white/90">
              Expert-led online sessions on the latest topics in medical education
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Upcoming Webinars</h2>
          <div className="space-y-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-3">{webinar.title}</h3>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        <span>{webinar.presenter}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
