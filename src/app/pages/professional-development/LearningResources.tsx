import { motion } from "motion/react";
import { BookOpen, FileText, Video, Download } from "lucide-react";

export function LearningResources() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Teaching Guides",
      count: 24,
      description: "Comprehensive guides for effective medical education teaching"
    },
    {
      icon: FileText,
      title: "Best Practice Papers",
      count: 18,
      description: "Evidence-based recommendations for curriculum development"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      count: 32,
      description: "Step-by-step instruction on medical education techniques"
    },
    {
      icon: Download,
      title: "Templates & Tools",
      count: 45,
      description: "Ready-to-use resources for educators"
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
            <h1 className="mb-6">Learning Resources</h1>
            <p className="text-xl text-white/90">
              Curated collection of tools, guides, and best practices for medical educators
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="mb-2">{category.title}</h2>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="text-primary font-semibold">{category.count} resources available</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Members-Only Access</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Full access to all learning resources is available to CAME members
            </p>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold">
              Become a Member
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
