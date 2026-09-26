import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Sun, Compass } from 'lucide-react';
import { PROPERTY_INFO, CURRENCY_RATES } from '../data/mockData';
import { Currency } from '../types';

interface HeaderProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking
}) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms & Stay' },
    { path: '/about-location', label: 'About & Location' },
    { path: '/gallery-contact', label: 'Gallery & Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-purple-900/30 py-3 shadow-xl'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Title */}
        <Link to="/" className="group flex items-center gap-3.5 shrink-0 whitespace-nowrap py-1">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-900 border border-purple-400/30 flex items-center justify-center text-white shadow-md group-hover:border-purple-300 transition-colors shrink-0">
            <span className="font-serif font-bold text-xl tracking-wider leading-none">E</span>
          </div>
          <div className="flex flex-col justify-center pl-1 sm:pl-2">
            <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors whitespace-nowrap leading-tight">
              The Embassy B&B
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-purple-300/90 font-medium whitespace-nowrap leading-tight mt-0.5">
              Queenstown · New Zealand
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-all relative py-1 whitespace-nowrap shrink-0 ${
                isActive(link.path)
                  ? 'text-white font-semibold'
                  : 'text-purple-200/70 hover:text-white'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Primary Actions, Weather & Currency */}
        <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
          {/* Queenstown weather snippet */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/30 text-xs text-purple-200 whitespace-nowrap shrink-0">
            <Sun className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
            <span className="whitespace-nowrap">Queenstown 19°C</span>
          </div>

          {/* Currency Selector */}
          <div className="relative group shrink-0">
            <select
              value={currentCurrency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              aria-label="Select currency"
              className="bg-slate-900/80 border border-purple-700/40 rounded-lg px-2.5 py-1.5 text-xs text-purple-100 font-medium focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer hover:border-purple-500 transition-colors whitespace-nowrap"
            >
              {Object.entries(CURRENCY_RATES).map(([code, info]) => (
                <option key={code} value={code} className="bg-slate-900 text-white">
                  {info.symbol} {code}
                </option>
              ))}
            </select>
          </div>

          {/* Direct Phone Link */}
          <a
            href={`tel:${PROPERTY_INFO.phone}`}
            className="hidden md:flex items-center gap-1.5 text-xs text-purple-200 hover:text-white transition-colors px-2 py-1 whitespace-nowrap shrink-0"
            title="Call The Embassy B&B"
          >
            <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="font-mono whitespace-nowrap">{PROPERTY_INFO.phoneFormatted}</span>
          </a>

          {/* Book Your Stay CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg shadow-lg shadow-purple-950/50 hover:shadow-purple-900/60 transition-all transform active:scale-95 whitespace-nowrap shrink-0 border border-purple-400/30"
          >
            <Calendar className="w-4 h-4 text-purple-200 shrink-0" />
            <span className="whitespace-nowrap">Book Your Stay</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="sm:hidden flex items-center gap-1 bg-purple-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-purple-400/30"
          >
            <span>Book</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-purple-200 hover:text-white rounded-lg bg-slate-900/80 border border-purple-800/40 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-purple-900/40 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-purple-900/40 text-purple-100 font-semibold border-l-2 border-purple-400'
                    : 'text-purple-200/80 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-purple-900/30 flex flex-col space-y-3">
            <div className="flex items-center justify-between text-xs text-purple-300 px-3">
              <span>Display Currency:</span>
              <div className="flex gap-2">
                {Object.keys(CURRENCY_RATES).map((code) => (
                  <button
                    key={code}
                    onClick={() => onCurrencyChange(code as Currency)}
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      currentCurrency === code
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-900 text-purple-300'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={`tel:${PROPERTY_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 border border-purple-700/40 text-purple-200 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>Call Us: {PROPERTY_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Availability & Book</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
