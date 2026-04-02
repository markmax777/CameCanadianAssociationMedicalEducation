import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "figma:asset/91c6f9c42cc3e82082a1aa7925edfd3db6d1a414.png";
import { useLanguage } from "../contexts/LanguageContext";
import { navTranslations } from "../translations/nav-translations";

interface DropdownItem {
  name: string;
  nameFr: string;
  path: string;
  description?: string;
  descriptionFr?: string;
}

interface NavItem {
  name: string;
  nameFr: string;
  path?: string;
  dropdown?: DropdownItem[];
}

export function NavigationWithDropdown() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  const t = language === "en" ? navTranslations.en : navTranslations.fr;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  }, [location]);

  const navItems: NavItem[] = [
    {
      name: t.about,
      nameFr: "À propos",
      path: "/about",
      dropdown: [
        { name: t.missionVision, nameFr: "Mission et vision", path: "/about/mission-vision" },
        { name: t.leadership, nameFr: "Direction", path: "/about/leadership" },
        { name: t.historyImpact, nameFr: "Histoire et impact", path: "/about/history" },
      ]
    },
    {
      name: t.membership,
      nameFr: "Adhésion",
      path: "/membership",
      dropdown: [
        { name: t.becomeMember, nameFr: "Devenir membre", path: "/membership/become-member" },
        { name: t.membershipBenefits, nameFr: "Avantages de l'adhésion", path: "/membership/benefits" },
        { name: t.membershipPlans, nameFr: "Formules d'adhésion", path: "/membership/plans" },
        { name: t.memberDirectory, nameFr: "Répertoire des membres", path: "/membership/directory" },
      ]
    },
    {
      name: t.professionalDevelopment,
      nameFr: "Développement professionnel",
      path: "/professional-development",
      dropdown: [
        { name: t.leadershipPrograms, nameFr: "Programmes de leadership", path: "/professional-development/leadership" },
        { name: t.webinars, nameFr: "Webinaires", path: "/professional-development/webinars" },
        { name: t.podcasts, nameFr: "Balados", path: "/professional-development/podcasts" },
        { name: t.learningResources, nameFr: "Ressources d'apprentissage", path: "/professional-development/resources" },
      ]
    },
    {
      name: t.community,
      nameFr: "Communauté",
      path: "/community",
      dropdown: [
        { name: t.specialInterestGroups, nameFr: "Groupes d'intérêt spéciaux", path: "/community/groups" },
        { name: t.newsletter, nameFr: "Infolettre", path: "/community/newsletter" },
      ]
    },
    {
      name: t.more,
      nameFr: "Plus",
      dropdown: [
        { name: t.awardsGrants, nameFr: "Prix et subventions", path: "/awards-grants/awards", description: t.awardsGrantsDesc, descriptionFr: "Opportunités de reconnaissance et de financement" },
        { name: t.foundation, nameFr: "Fondation", path: "/foundation/about", description: t.foundationDesc, descriptionFr: "Soutenir l'éducation des professionnels de la santé" },
        { name: t.donate, nameFr: "Faire un don", path: "/foundation/donate", description: t.donateDesc, descriptionFr: "Soutenir l'éducation médicale au Canada" },
        { name: t.store, nameFr: "Boutique", path: "/store", description: t.storeDesc, descriptionFr: "Acheter des produits CAME" },
        { name: t.contact, nameFr: "Contact", path: "/contact", description: t.contactDesc, descriptionFr: "Communiquer avec nous" },
      ]
    },
  ];

  // Helper function to check if a path is active
  const isPathActive = (item: NavItem): boolean => {
    if (item.path) {
      return location.pathname === item.path;
    }
    if (item.dropdown) {
      return item.dropdown.some(subItem => location.pathname === subItem.path);
    }
    return false;
  };

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileDropdown = (itemName: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === itemName ? null : itemName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src={logoImage} 
              alt="CAME Logo" 
              className="w-12 h-12 object-contain rounded-full"
            />
            <div className="hidden md:block">
              <div className="text-primary font-bold text-base leading-tight">{t.logoName}</div>
              <div className="text-xs text-muted-foreground leading-tight">{t.logoLine1}</div>
              <div className="text-xs text-muted-foreground leading-tight">{t.logoLine2}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                        location.pathname === item.path
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`} />
                      )}
                    </Link>
                  ) : (
                    <button
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                        isPathActive(item)
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`} />
                      )}
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            location.pathname === subItem.path
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                          }`}
                        >
                          <div className="font-medium">{subItem.name}</div>
                          {subItem.description && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {language === "en" ? subItem.description : subItem.descriptionFr}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              title={language === "en" ? "Switch to French" : "Passer à l'anglais"}
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase">{language === "en" ? "FR" : "EN"}</span>
            </button>
            <Link
              to="/membership/login"
              className="px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
            >
              {t.memberLogin}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path ? (
                    <>
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? "bg-primary text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="w-full flex items-center justify-between px-4 py-2 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors mt-1"
                          >
                            {t.viewSections}
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform ${
                                mobileActiveDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {mobileActiveDropdown === item.name && (
                            <div className="ml-4 mt-1 space-y-1">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                                    location.pathname === subItem.path
                                      ? "bg-primary/10 text-primary"
                                      : "text-gray-600 hover:bg-gray-50"
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileActiveDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileActiveDropdown === item.name && item.dropdown && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                                location.pathname === subItem.path
                                  ? "bg-primary/10 text-primary"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
                <button
                  onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <Languages className="w-4 h-4" />
                  <span>{t.languageName}</span>
                </button>
                <Link
                  to="/membership/login"
                  className="block w-full px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-center shadow-sm"
                >
                  {t.memberLogin}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
