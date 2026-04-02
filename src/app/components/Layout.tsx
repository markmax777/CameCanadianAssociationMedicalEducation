import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { NavigationWithDropdown } from "./NavigationWithDropdown";
import { Footer } from "./Footer";
import { LanguageProvider } from "../contexts/LanguageContext";

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <NavigationWithDropdown />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}