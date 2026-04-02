import { Link } from "react-router";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { commonTranslations } from "../translations/common-translations";

export function MemberLogin() {
  const { language } = useLanguage();
  const t = commonTranslations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-primary mb-3">{t.loginHeroTitle}</h1>
            <p className="text-muted-foreground">{t.welcomeBack}</p>
          </motion.div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.emailAddress2}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.password}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    {t.rememberMeLabel}
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  {t.forgotPasswordLink}
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium"
              >
                {t.signIn}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Not a Member Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-6 text-center border border-secondary/20"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">{t.notMemberYet}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.notMemberDesc}</p>
            <Link
              to="/membership/become-member"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-50 transition-all shadow-sm hover:shadow-md font-medium border-2 border-primary"
            >
              {t.becomeMemberLink}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-6"
          >
            {t.needHelp}{" "}
            <Link to="/contact" className="text-primary hover:underline">
              {t.contactSupport}
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
