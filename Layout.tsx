import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Twitter, Facebook, Mail, MapPin, Phone, Monitor, Clock, ChevronRight } from 'lucide-react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Layanan', path: '/services' },
  { label: 'Keunggulan', path: '/why-us' },
  { label: 'Artikel', path: '/blog' },
  { label: 'Kontak', path: '/contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Header Container */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        
        {/* Top Bar - Hidden on scroll */}
        <div className={`bg-slate-900 text-slate-300 text-xs transition-all duration-300 hidden md:block overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
          <div className="container mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex items-center space-x-6">
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                 <Mail size={14} className="text-blue-500"/> hello@bluetech.co.id
               </span>
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                 <Phone size={14} className="text-blue-500"/> +62 21 555 0123
               </span>
            </div>
            <div className="flex items-center gap-2">
               <Clock size={14} className="text-blue-500"/> 
               <span>Senin - Jumat: 08:30 - 17:30</span>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white py-3' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-sm transition-colors duration-300 ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-900'}`}>
                <Monitor className="w-6 h-6" />
              </div>
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Blue<span className="text-blue-500">Tech</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold tracking-wide transition-colors relative group ${
                    location.pathname === item.path 
                      ? 'text-blue-500' 
                      : (isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-gray-100 hover:text-white')
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
              <Link to="/contact">
                  <button className={`px-6 py-2.5 rounded-sm text-sm font-bold transition-all shadow-sm ${
                      isScrolled 
                          ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/20' 
                          : 'bg-white text-blue-900 hover:bg-slate-100'
                  }`}>
                      Konsultasi
                  </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
          className={`fixed inset-0 bg-slate-900/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${
              isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-600 text-white rounded-sm">
                  <Monitor className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Blue<span className="text-blue-500">Tech</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Mitra teknologi terpercaya untuk transformasi digital bisnis Anda. Kami menghadirkan solusi inovatif yang scalable dan secure.
              </p>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Linkedin, Mail].map((Icon, idx) => (
                   <a key={idx} href="#" className="w-9 h-9 rounded-sm bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                     <Icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                   </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                Layanan
                <span className="absolute bottom-0 left-0 w-8 h-1 bg-blue-600 rounded-full translate-y-2"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'IT Consulting'].map((item, idx) => (
                  <li key={idx}>
                    <Link to="/services" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <ChevronRight className="w-3 h-3 text-blue-600" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                Perusahaan
                <span className="absolute bottom-0 left-0 w-8 h-1 bg-blue-600 rounded-full translate-y-2"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { l: 'Tentang Kami', p: '/about' },
                  { l: 'Karir', p: '/why-us' },
                  { l: 'Berita & Artikel', p: '/blog' },
                  { l: 'Hubungi Kami', p: '/contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.p} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <ChevronRight className="w-3 h-3 text-blue-600" /> {item.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                Hubungi Kami
                <span className="absolute bottom-0 left-0 w-8 h-1 bg-blue-600 rounded-full translate-y-2"></span>
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
                  <span className="leading-relaxed">Jalan Jendral Sudirman No. 45, Jakarta Pusat, 10220</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                  <span>+62 21 555 0123</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                  <span>hello@bluetech.co.id</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} BlueTech Solutions. All rights reserved.</p>
            <div className="flex gap-6">
               <Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
               <Link to="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};