import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { commonTranslations } from "../translations/common-translations";

export function NotFound() {
  const { language } = useLanguage();
  const t = commonTranslations[language];
  
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-primary mb-6">{t.notFoundTitle}</h2>
        <p className="text-xl text-gray-700 mb-8">
          {t.notFoundMessage}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            {t.backToHome}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.previous}
          </button>
        </div>
      </div>
    </div>
  );
}