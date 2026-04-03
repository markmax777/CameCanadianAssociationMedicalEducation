import Navbar from './Navbar';

export default function NavbarDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Demo Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <section id="home" className="text-center py-20">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Responsive Navbar Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A clean, modern navigation bar with dropdown menu support. Fully
              responsive with hamburger menu on mobile devices.
            </p>
          </section>

          {/* Features Section */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mobile Responsive
              </h3>
              <p className="text-gray-600">
                Automatically adapts to mobile screens with a hamburger menu and
                smooth transitions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dropdown Menu
              </h3>
              <p className="text-gray-600">
                Support for dropdown menus with smooth animations and hover
                effects on desktop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600">
                Built with Tailwind CSS for easy customization and modern
                styling.
              </p>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">
              This navbar component is built with React and styled using Tailwind
              CSS. It features a clean, modern design with support for dropdown
              menus and mobile responsiveness. The component uses React hooks
              (useState) for state management and includes smooth transitions and
              hover effects.
            </p>
          </section>

          {/* Services Section */}
          <section id="services" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Our Services
            </h2>

            <div id="web-design" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Web Design
              </h3>
              <p className="text-gray-600">
                Create beautiful, user-friendly websites that engage your
                audience and drive results.
              </p>
            </div>

            <div id="development" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Development
              </h3>
              <p className="text-gray-600">
                Build robust, scalable applications using modern technologies and
                best practices.
              </p>
            </div>

            <div id="consulting" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Consulting
              </h3>
              <p className="text-gray-600">
                Get expert advice on technology strategy, architecture, and
                implementation.
              </p>
            </div>

            <div id="support" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Support
              </h3>
              <p className="text-gray-600">
                Reliable ongoing support and maintenance to keep your systems
                running smoothly.
              </p>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-gray-600 leading-relaxed">
              Explore our collection of successful projects and see how we've
              helped businesses achieve their goals through innovative digital
              solutions.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-blue-600 rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ready to start your next project? Contact us today and let's
              discuss how we can help bring your vision to life.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Navbar Demo. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
