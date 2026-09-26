import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ArrowUp, Compass, Heart } from 'lucide-react';
import { PROPERTY_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-purple-900/30 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle purple background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/20">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-950 border border-purple-400/30 flex items-center justify-center text-white font-serif font-bold text-xl shadow-inner">
                E
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                The Embassy B&B
              </span>
            </div>
            <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed">
              Boutique bed & breakfast accommodation offering quiet luxury, alpine serenity, and genuine kiwi hospitality in Frankton, Queenstown, New Zealand.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-purple-300">
              <Compass className="w-4 h-4 text-purple-400 shrink-0" />
              <span>5 mins from Queenstown Airport (ZQN)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-purple-800/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-purple-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-purple-400">›</span> Home Overview
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-purple-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-purple-400">›</span> Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/about-location" className="text-purple-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-purple-400">›</span> About & Location
                </Link>
              </li>
              <li>
                <Link to="/gallery-contact" className="text-purple-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-purple-400">›</span> Photo Gallery & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-purple-800/30 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-purple-200/80">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{PROPERTY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`tel:${PROPERTY_INFO.phone}`}
                  className="text-purple-200 hover:text-white font-mono transition-colors font-medium hover:underline"
                >
                  {PROPERTY_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-purple-200/80">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${PROPERTY_INFO.email}`} className="hover:text-white transition-colors">
                  {PROPERTY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Details & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-purple-800/30 pb-2">
              Guest Services
            </h4>
            <div className="bg-purple-950/40 border border-purple-800/30 rounded-xl p-3.5 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-purple-300">Check-in:</span>
                <span className="text-white font-medium">{PROPERTY_INFO.checkInTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Check-out:</span>
                <span className="text-white font-medium">{PROPERTY_INFO.checkOutTime}</span>
              </div>
              <div className="pt-2 border-t border-purple-900/30 text-[11px] text-purple-300/80">
                Gourmet Kiwi cooked breakfast served daily from 7:30 AM.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/60 gap-4">
          <p>© {new Date().getFullYear()} {PROPERTY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Frankton, Queenstown 9300</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors bg-purple-950/60 hover:bg-purple-900 px-3 py-1.5 rounded-lg border border-purple-800/40"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
