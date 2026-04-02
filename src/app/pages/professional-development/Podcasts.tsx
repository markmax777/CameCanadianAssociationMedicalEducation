import { motion } from "motion/react";
import { Headphones, Play } from "lucide-react";

export function Podcasts() {
  const episodes = [
    {
      title: "The Future of Competency-Based Medical Education",
      guest: "Dr. James Wilson",
      duration: "45 min",
      description: "Exploring trends and innovations in CBME across Canadian medical schools"
    },
    {
      title: "Addressing Burnout in Medical Education",
      guest: "Dr. Priya Patel",
      duration: "38 min",
      description: "Strategies for supporting student and faculty wellness"
    },
    {
      title: "Leadership Lessons from Medical Education",
      guest: "Dr. Sarah Chen",
      duration: "52 min",
      description: "Insights from two decades of leading educational transformation"
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
            <h1 className="mb-6">CAME Podcasts</h1>
            <p className="text-xl text-white/90">
              Insightful conversations with medical education thought leaders
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{episode.title}</h3>
                    <p className="text-muted-foreground mb-3">{episode.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Guest: {episode.guest}</span>
                      <span>•</span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Play className="w-5 h-5 text-white ml-1" />
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
