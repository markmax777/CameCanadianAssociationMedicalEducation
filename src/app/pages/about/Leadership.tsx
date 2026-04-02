import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { aboutTranslations } from "../../translations/about-translations";

export function Leadership() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  const boardMembers = [
    {
      name: "Dr. Sarah Chen",
      role: language === 'fr' ? "Présidente" : "President",
      institution: "University of Toronto",
      bio: language === 'fr'
        ? "Dr. Chen est professeure de médecine et vice-doyenne à l'éducation avec 20 ans d'expérience en leadership en éducation médicale."
        : "Dr. Chen is a Professor of Medicine and Vice Dean of Education with 20 years of experience in medical education leadership.",
    },
    {
      name: "Dr. Michael Leblanc",
      role: language === 'fr' ? "Vice-président" : "Vice President",
      institution: "McGill University",
      bio: language === 'fr'
        ? "Spécialisé dans le développement de programme et l'évaluation, Dr. Leblanc a dirigé de nombreuses innovations éducatives."
        : "Specializing in curriculum development and assessment, Dr. Leblanc has led numerous educational innovations.",
    },
    {
      name: "Dr. Priya Patel",
      role: language === 'fr' ? "Secrétaire-trésorière" : "Secretary-Treasurer",
      institution: "University of British Columbia",
      bio: language === 'fr'
        ? "Dr. Patel apporte son expertise en recherche éducative et en évaluation de programme à son rôle au conseil."
        : "Dr. Patel brings expertise in educational research and program evaluation to her role on the board.",
    },
    {
      name: "Dr. James Wilson",
      role: language === 'fr' ? "Président sortant" : "Past President",
      institution: "Dalhousie University",
      bio: language === 'fr'
        ? "Avec une vaste expérience en développement professoral, Dr. Wilson fournit une orientation stratégique à l'organisation."
        : "With extensive experience in faculty development, Dr. Wilson provides strategic guidance to the organization.",
    },
    {
      name: "Dr. Marie Tremblay",
      role: language === 'fr' ? "Directrice" : "Director",
      institution: "Université de Montréal",
      bio: language === 'fr'
        ? "Dr. Tremblay est une défenseure de l'éducation médicale bilingue et des pratiques d'enseignement inclusives."
        : "Dr. Tremblay is an advocate for bilingual medical education and inclusive teaching practices.",
    },
    {
      name: "Dr. Robert Singh",
      role: language === 'fr' ? "Directeur" : "Director",
      institution: "University of Alberta",
      bio: language === 'fr'
        ? "Axé sur l'éducation par simulation et l'intégration des technologies dans la formation médicale."
        : "Focused on simulation-based education and technology integration in medical training.",
    },
  ];

  const committees = [
    {
      name: language === 'fr' ? "Comité éducation et programmes" : "Education & Programs Committee",
      chair: "Dr. Jennifer Martinez",
      description: language === 'fr'
        ? "Supervise les programmes éducatifs de l'ACEM, notamment CLIME, ICLEM, les webinaires et les initiatives de développement professionnel."
        : "Oversees CAME's educational programs including CLIME, ICLEM, webinars, and professional development initiatives.",
      members: 8,
    },
    {
      name: language === 'fr' ? "Comité recherche et érudition" : "Research & Scholarship Committee",
      chair: "Dr. David Thompson",
      description: language === 'fr'
        ? "Soutient la recherche en éducation médicale, examine les demandes de subvention et promeut les activités savantes parmi les membres."
        : "Supports research in medical education, reviews grant applications, and promotes scholarly activities among members.",
      members: 6,
    },
    {
      name: language === 'fr' ? "Comité prix et reconnaissance" : "Awards & Recognition Committee",
      chair: "Dr. Lisa Wong",
      description: language === 'fr'
        ? "Gère les programmes de prix de l'ACEM, examine les mises en candidature et reconnaît l'excellence en éducation médicale."
        : "Manages CAME's awards programs, reviews nominations, and recognizes excellence in medical education.",
      members: 7,
    },
    {
      name: language === 'fr' ? "Comité adhésion et engagement" : "Membership & Engagement Committee",
      chair: "Dr. Ahmed Hassan",
      description: language === 'fr'
        ? "Développe des stratégies pour accroître l'adhésion, améliorer l'engagement des membres et soutenir les éducateurs en début de carrière."
        : "Develops strategies to grow membership, enhance member engagement, and support early career educators.",
      members: 6,
    },
    {
      name: language === 'fr' ? "Comité communications et rayonnement" : "Communications & Outreach Committee",
      chair: "Dr. Emily Roberts",
      description: language === 'fr'
        ? "Supervise la stratégie de communication, l'infolettre, les médias sociaux et les activités de sensibilisation publique de l'ACEM."
        : "Oversees CAME's communications strategy, newsletter, social media, and public engagement activities.",
      members: 5,
    },
    {
      name: language === 'fr' ? "Comité finances et vérification" : "Finance & Audit Committee",
      chair: "Dr. Robert MacDonald",
      description: language === 'fr'
        ? "Assure la surveillance financière, examine les budgets et veille à la gestion responsable des ressources de l'ACEM."
        : "Provides financial oversight, reviews budgets, and ensures responsible stewardship of CAME's resources.",
      members: 5,
    },
  ];

  const schools = [
    { name: "University of British Columbia", province: language === 'fr' ? "Colombie-Britannique" : "British Columbia", representative: "Dr. Katherine Lee", region: language === 'fr' ? "Ouest" : "West" },
    { name: "University of Calgary", province: language === 'fr' ? "Alberta" : "Alberta", representative: "Dr. Thomas Anderson", region: language === 'fr' ? "Ouest" : "West" },
    { name: "University of Alberta", province: language === 'fr' ? "Alberta" : "Alberta", representative: "Dr. Robert Singh", region: language === 'fr' ? "Ouest" : "West" },
    { name: "University of Saskatchewan", province: language === 'fr' ? "Saskatchewan" : "Saskatchewan", representative: "Dr. Maria Rodriguez", region: language === 'fr' ? "Prairies" : "Prairies" },
    { name: "University of Manitoba", province: language === 'fr' ? "Manitoba" : "Manitoba", representative: "Dr. Jennifer Kim", region: language === 'fr' ? "Prairies" : "Prairies" },
    { name: "Western University", province: language === 'fr' ? "Ontario" : "Ontario", representative: "Dr. David Brown", region: language === 'fr' ? "Centre" : "Central" },
    { name: "McMaster University", province: language === 'fr' ? "Ontario" : "Ontario", representative: "Dr. Sarah Miller", region: language === 'fr' ? "Centre" : "Central" },
    { name: "University of Toronto", province: language === 'fr' ? "Ontario" : "Ontario", representative: "Dr. Sarah Chen", region: language === 'fr' ? "Centre" : "Central" },
    { name: "Queen's University", province: language === 'fr' ? "Ontario" : "Ontario", representative: "Dr. Michael Stewart", region: language === 'fr' ? "Centre" : "Central" },
    { name: "University of Ottawa", province: language === 'fr' ? "Ontario" : "Ontario", representative: "Dr. Anne Leblanc", region: language === 'fr' ? "Centre" : "Central" },
    { name: "Northern Ontario School of Medicine", province: language === 'fr' ? "Ontario" : "Ontario", representative: "Dr. James Morrison", region: language === 'fr' ? "Centre" : "Central" },
    { name: "McGill University", province: language === 'fr' ? "Québec" : "Quebec", representative: "Dr. Michael Leblanc", region: language === 'fr' ? "Est" : "East" },
    { name: "Université de Montréal", province: language === 'fr' ? "Québec" : "Quebec", representative: "Dr. Marie Tremblay", region: language === 'fr' ? "Est" : "East" },
    { name: "Université Laval", province: language === 'fr' ? "Québec" : "Quebec", representative: "Dr. Pierre Gagnon", region: language === 'fr' ? "Est" : "East" },
    { name: "Université de Sherbrooke", province: language === 'fr' ? "Québec" : "Quebec", representative: "Dr. Sophie Bélanger", region: language === 'fr' ? "Est" : "East" },
    { name: "Dalhousie University", province: language === 'fr' ? "Nouvelle-Écosse" : "Nova Scotia", representative: "Dr. James Wilson", region: language === 'fr' ? "Atlantique" : "Atlantic" },
    { name: "Memorial University of Newfoundland", province: language === 'fr' ? "Terre-Neuve-et-Labrador" : "Newfoundland and Labrador", representative: "Dr. Patricia O'Brien", region: language === 'fr' ? "Atlantique" : "Atlantic" },
  ];

  const regions = language === 'fr'
    ? ["Ouest", "Prairies", "Centre", "Est", "Atlantique"]
    : ["West", "Prairies", "Central", "East", "Atlantic"];

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
            <h1 className="mb-6">{t.leadershipSection}</h1>
            <p className="text-xl text-white/90">{t.leadershipPageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">{t.boardTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{t.boardIntro}</p>
          </motion.div>

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
            <h2 className="mb-6">{t.governanceTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-3">{t.boardTermsTitle}</h3>
                <p className="text-muted-foreground">{t.boardTermsDesc}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.meetingsTitle}</h3>
                <p className="text-muted-foreground">{t.meetingsDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">{t.committeesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{t.committeesIntro}</p>
          </motion.div>

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
                      {t.chairLabel} {committee.chair}
                    </div>
                    <p className="text-muted-foreground mb-4">{committee.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:ml-6 md:text-right">
                    {committee.members} {t.membersLabel}
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
            <h2 className="mb-4">{t.getInvolvedTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">{t.getInvolvedDesc}</p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              {t.expressInterest}
            </button>
          </motion.div>
        </div>
      </section>

      {/* School Representatives Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">{t.representativesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{t.schoolRepsIntro}</p>
          </motion.div>

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
                        {t.representativeLabel} {school.representative}
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
            <h2 className="mb-6">{t.roleTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.roleDesc}</p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6">
                <h3 className="mb-3">{t.roleAdvocate}</h3>
                <p className="text-muted-foreground">{t.roleAdvocateDesc}</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="mb-3">{t.roleConnect}</h3>
                <p className="text-muted-foreground">{t.roleConnectDesc}</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="mb-3">{t.roleCollaborate}</h3>
                <p className="text-muted-foreground">{t.roleCollaborateDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
