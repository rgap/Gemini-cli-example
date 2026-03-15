import {
  ChevronRight,
  Github,
  Globe,
  Linkedin,
  Menu,
  Shield,
  Smartphone,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600">
              Lumina
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`${
                    currentPage === item.id
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 hover:text-indigo-500"
                  } transition-colors duration-200 text-sm font-medium`}
                >
                  {item.name}
                </button>
              ))}
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                {item.name}
              </button>
            ))}
            <button className="w-full mt-2 bg-indigo-600 text-white px-3 py-3 rounded-md text-base font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-indigo-400 w-6 h-6" />
            <span className="text-xl font-bold">Lumina</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building the next generation of digital infrastructure for
            high-growth teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Product
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Social
          </h4>
          <div className="flex space-x-4">
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Lumina Technologies Inc. All rights
        reserved.
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  const features = [
    {
      title: "Global Performance",
      desc: "Edge computing that brings your apps closer to users for sub-millisecond latency.",
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Ironclad Security",
      desc: "Enterprise-grade encryption and automated threat detection built-in from day one.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Mobile First",
      desc: "Optimized for the next billion users accessing the web through handheld devices.",
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide uppercase mb-4 animate-fade-in">
            New: Lumina OS 2.0 is here
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            Everything you need <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600">
              to scale faster.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-2xl text-gray-600 mb-10 leading-relaxed">
            Lumina is the world&apos;s most advanced platform for building,
            deploying, and scaling modern web applications without managing
            infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group">
              Start Building Free{" "}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
              Book a Demo
            </button>
          </div>

          <div className="mt-20 border border-gray-200 rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto bg-white p-2">
            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center border border-gray-200">
              <div className="text-gray-400 font-medium">
                Platform Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The power of modern stacks
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Designed for teams that demand excellence and speed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-indigo-100 text-lg mb-10">
            Join over 10,000 teams building on Lumina today.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  );
};

const AboutPage = () => {
  return (
    <main className="pt-16 min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                Our mission is to democratize high-end infrastructure.
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2021, Lumina started with a simple observation: great
                ideas are often stifled by complex infrastructure requirements.
                We set out to build a platform that abstracts away the noise,
                allowing developers to focus purely on their code and product
                experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Developer Obsessed
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Every feature we build is designed with the developer
                      experience as the first priority.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Global Scale</h4>
                    <p className="text-gray-600 text-sm">
                      We operate nodes in 45+ regions globally to ensure your
                      users are always close to your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-8 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-indigo-600 mb-2">
                  120+
                </span>
                <span className="text-gray-600 font-medium">Countries</span>
              </div>
              <div className="bg-violet-50 p-8 rounded-2xl flex flex-col items-center justify-center translate-y-8">
                <span className="text-4xl font-black text-violet-600 mb-2">
                  15M+
                </span>
                <span className="text-gray-600 font-medium">Requests/sec</span>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-blue-600 mb-2">
                  99.9%
                </span>
                <span className="text-gray-600 font-medium">Uptime</span>
              </div>
              <div className="bg-indigo-600 p-8 rounded-2xl flex flex-col items-center justify-center translate-y-8">
                <span className="text-4xl font-black text-white mb-2">
                  10k+
                </span>
                <span className="text-white font-medium opacity-80">
                  Active Teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-gray-200 rounded-2xl mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Users className="w-12 h-12" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-900">Team Member {i}</h4>
                <p className="text-gray-500 text-sm">Executive Leadership</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page Transitions could be added here, but simple conditional rendering for now */}
      <div className="animate-in fade-in duration-500">{renderPage()}</div>

      <Footer />
    </div>
  );
}
