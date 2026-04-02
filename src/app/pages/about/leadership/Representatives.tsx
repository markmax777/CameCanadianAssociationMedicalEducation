import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function Representatives() {
  const schools = [
    {
      name: "University of British Columbia",
      province: "British Columbia",
      representative: "Dr. Katherine Lee",
      region: "West"
    },
    {
      name: "University of Calgary",
      province: "Alberta",
      representative: "Dr. Thomas Anderson",
      region: "West"
    },
    {
      name: "University of Alberta",
      province: "Alberta",
      representative: "Dr. Robert Singh",
      region: "West"
    },
    {
      name: "University of Saskatchewan",
      province: "Saskatchewan",
      representative: "Dr. Maria Rodriguez",
      region: "Prairies"
    },
    {
      name: "University of Manitoba",
      province: "Manitoba",
      representative: "Dr. Jennifer Kim",
      region: "Prairies"
    },
    {
      name: "Western University",
      province: "Ontario",
      representative: "Dr. David Brown",
      region: "Central"
    },
    {
      name: "McMaster University",
      province: "Ontario",
      representative: "Dr. Sarah Miller",
      region: "Central"
    },
    {
      name: "University of Toronto",
      province: "Ontario",
      representative: "Dr. Sarah Chen",
      region: "Central"
    },
    {
      name: "Queen's University",
      province: "Ontario",
      representative: "Dr. Michael Stewart",
      region: "Central"
    },
    {
      name: "University of Ottawa",
      province: "Ontario",
      representative: "Dr. Anne Leblanc",
      region: "Central"
    },
    {
      name: "Northern Ontario School of Medicine",
      province: "Ontario",
      representative: "Dr. James Morrison",
      region: "Central"
    },
    {
      name: "McGill University",
      province: "Quebec",
      representative: "Dr. Michael Leblanc",
      region: "East"
    },
    {
      name: "Université de Montréal",
      province: "Quebec",
      representative: "Dr. Marie Tremblay",
      region: "East"
    },
    {
      name: "Université Laval",
      province: "Quebec",
      representative: "Dr. Pierre Gagnon",
      region: "East"
    },
    {
      name: "Université de Sherbrooke",
      province: "Quebec",
      representative: "Dr. Sophie Bélanger",
      region: "East"
    },
    {
      name: "Dalhousie University",
      province: "Nova Scotia",
      representative: "Dr. James Wilson",
      region: "Atlantic"
    },
    {
      name: "Memorial University of Newfoundland",
      province: "Newfoundland and Labrador",
      representative: "Dr. Patricia O'Brien",
      region: "Atlantic"
    }
  ];

  const regions = ["West", "Prairies", "Central", "East", "Atlantic"];

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
            <h1 className="mb-6">School Representatives</h1>
            <p className="text-xl text-white/90">
              Representatives from all 17 Canadian medical schools ensure national
              collaboration and knowledge sharing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Representatives by Region */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regions.map((region, regionIndex) => {
            const regionSchools = schools.filter(school => school.region === region);
            if (regionSchools.length === 0) return null;

            return (
              <div key={region} className="mb-16 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-primary" />
                    {region}
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  {regionSchools.map((school, index) => (
                    <motion.div
                      key={school.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary/30 transition-colors"
                    >
                      <h3 className="mb-2">{school.name}</h3>
                      <div className="text-sm text-muted-foreground mb-3">{school.province}</div>
                      <div className="text-primary font-semibold">
                        Representative: {school.representative}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Role Description */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6">Role of School Representatives</h2>
            <p className="text-lg text-muted-foreground mb-8">
              School representatives serve as vital links between their institutions and
              CAME, facilitating communication, sharing best practices, and ensuring that
              CAME's programs and initiatives reflect the diverse needs of medical
              education across Canada.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6">
                <h3 className="mb-3">Advocate</h3>
                <p className="text-muted-foreground">
                  Represent the interests and perspectives of their medical school within CAME.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="mb-3">Connect</h3>
                <p className="text-muted-foreground">
                  Share CAME resources and opportunities with colleagues at their institution.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="mb-3">Collaborate</h3>
                <p className="text-muted-foreground">
                  Participate in national initiatives and facilitate cross-institutional learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}