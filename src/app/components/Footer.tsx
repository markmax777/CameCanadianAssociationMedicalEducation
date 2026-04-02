import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Printer } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { footerTranslations } from "../translations/footer-translations";

export function Footer() {
  const { language } = useLanguage();
  const t = footerTranslations[language];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.aboutTitle}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  {t.missionVision}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  {t.leadership}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  {t.historyImpact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.programsTitle}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-white/80 hover:text-white transition-colors">
                  {t.climeConference}
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/80 hover:text-white transition-colors">
                  {t.iclem}
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/80 hover:text-white transition-colors">
                  {t.educationalCourses}
                </Link>
              </li>
            </ul>
          </div>

          {/* Membership Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.membershipTitle}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/membership" className="text-white/80 hover:text-white transition-colors">
                  {t.membershipBenefits}
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-white/80 hover:text-white transition-colors">
                  {t.membershipPlans}
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-white/80 hover:text-white transition-colors">
                  {t.memberLogin}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.resourcesTitle}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/awards" className="text-white/80 hover:text-white transition-colors">
                  {t.grantsAwards}
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-white/80 hover:text-white transition-colors">
                  {t.newsletter}
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-white/80 hover:text-white transition-colors">
                  {t.store}
                </Link>
              </li>
              <li>
                <Link to="/foundation/donate" className="text-white/80 hover:text-white transition-colors">
                  {t.donate}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white/90">150 Elgin Street, 10th Floor</p>
                <p className="text-white/90">Ottawa, Ontario K2P 1L4</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p className="text-white/90">613-730-8173</p>
            </div>
            <div className="flex items-center space-x-3">
              <Printer className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/60">{t.fax || 'Fax'}</p>
                <p className="text-white/90">(613) 730-1196</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:came@afmc.ca" className="text-white/90 hover:text-white transition-colors">
                came@afmc.ca
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4">{t.newsletterSignupTitle}</h3>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              {t.subscribeButton}
            </button>
          </form>
          <p className="mt-3 text-sm text-white/70">
            {t.haveQuestions} <Link to="/contact" className="text-accent hover:text-accent/90 underline font-medium">{t.contactUs}</Link>
          </p>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {t.copyright}
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/cameacem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/cameacem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/cameacem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Privacy & Terms */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/70">
            <a 
              href="https://www.came-acem.ca/wp-content/uploads/2018/01/PRIVACY-POLICY_2018_ENG.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              {t.privacyPolicy || 'Privacy Policy'}
            </a>
            <span className="hidden sm:inline">•</span>
            <a 
              href="https://www.came-acem.ca/wp-content/uploads/2018/01/TERMS-OF-USE_2018.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              {t.termsOfUse || 'Terms of Use'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}