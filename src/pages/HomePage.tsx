import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight, BedDouble, HeartHandshake, Sparkles, MapPin, CheckCircle2, Star, ShieldCheck, Compass, Sun } from 'lucide-react';
import { PROPERTY_INFO, ROOMS_DATA, GUEST_EXPERIENCES, NEARBY_ATTRACTIONS, REVIEWS, CURRENCY_RATES, heroImage, gourmetBreakfastImage } from '../data/mockData';
import { Currency } from '../types';

interface HomePageProps {
  currentCurrency: Currency;
  onOpenBooking: () => void;
  onInspectRoom: (roomId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentCurrency,
  onOpenBooking,
  onInspectRoom
}) => {
  const rateInfo = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES['NZD'];

  return (
    <div className="space-y-0">
      
      {/* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Hero Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="The Embassy B&B Queenstown"
            className="w-full h-full object-cover scale-105 animate-purple-glow"
            referrerPolicy="no-referrer"
          />
          {/* Measured purple & dark scrim for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-purple-950/50" />
          <div className="absolute inset-0 bg-purple-950/30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 pt-8">
          
          {/* Kicker tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 backdrop-blur-md text-purple-200 text-xs font-semibold tracking-widest uppercase shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Frankton, Queenstown · New Zealand</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto text-balance">
            Welcome to <span className="bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-200 bg-clip-text text-transparent">The Embassy B&B</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl text-purple-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            An elegant, peaceful alpine sanctuary in Frankton. Experience refined comfort, panoramic Remarkables mountain views, and genuine Kiwi hospitality.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-base shadow-2xl shadow-purple-950/80 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 border border-purple-400/30"
            >
              <Calendar className="w-5 h-5 text-purple-200" />
              <span>Book Your Stay</span>
            </button>

            <Link
              to="/rooms"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-purple-200 hover:text-white font-semibold text-base border border-purple-700/50 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <BedDouble className="w-5 h-5 text-purple-400" />
              <span>Explore Rooms</span>
            </Link>
          </div>

          {/* Quick Check Availability Bar */}
          <div className="pt-8 max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-4 sm:p-5 shadow-2xl text-left border border-purple-500/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider block mb-1">
                    Check-In
                  </label>
                  <input
                    type="date"
                    defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                    className="w-full bg-slate-900/90 border border-purple-800/50 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider block mb-1">
                    Check-Out
                  </label>
                  <input
                    type="date"
                    defaultValue={new Date(Date.now() + 259200000).toISOString().split('T')[0]}
                    className="w-full bg-slate-900/90 border border-purple-800/50 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider block mb-1">
                    Guests
                  </label>
                  <select className="w-full bg-slate-900/90 border border-purple-800/50 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer">
                    <option value="2">2 Adults</option>
                    <option value="1">1 Adult</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold shadow-md transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Check Rates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WELCOME / ABOUT
          ========================================================================= */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
                <span>The Embassy Experience</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your Peaceful Retreat in the Heart of Queenstown
              </h2>

              <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed">
                Nestled in the quiet residential enclave of Frankton, <strong>The Embassy B&B</strong> combines timeless boutique elegance with the warmth of genuine New Zealand hospitality.
              </p>

              <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed">
                Whether you are visiting Queenstown to ski the world-famous Remarkables, hike pristine alpine trails, or relax by Lake Wakatipu, our lodge provides a serene, comfortable haven just 5 minutes from Queenstown International Airport.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-4">
                  <h4 className="font-serif font-bold text-white text-base">Complimentary Breakfast</h4>
                  <p className="text-xs text-purple-200/70 mt-1">Daily cooked Kiwi breakfast with fresh local produce & espresso.</p>
                </div>
                <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-4">
                  <h4 className="font-serif font-bold text-white text-base">5-Min Airport Proximity</h4>
                  <p className="text-xs text-purple-200/70 mt-1">Effortless arrival at 7 Viscount Lane without downtown traffic.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about-location"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
                >
                  <span>Learn more about our story & location</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image Showcase */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-purple-800/40 shadow-2xl">
                <img
                  src={gourmetBreakfastImage}
                  alt="Gourmet Kiwi Breakfast at The Embassy B&B"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-purple-500/30">
                  <div className="flex items-center gap-3 text-xs text-purple-100">
                    <Sun className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="font-serif font-bold text-sm text-white block">Daily Gourmet Kiwi Breakfast</span>
                      <span>Prepared fresh daily by hosts Sarah & David Mitchell</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ROOMS & ACCOMMODATION
          ========================================================================= */}
      <section className="py-20 bg-slate-900/60 relative border-t border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Luxury Suites & Private Rooms
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Accommodations Designed for Deep Rest
            </h2>
            <p className="text-sm text-purple-200/80">
              Each room features plush bedding, en-suite bathroom facilities, ultra-fast Wi-Fi, and stunning mountain or garden views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => {
              const converted = Math.round(room.pricePerNightNZD * rateInfo.rate);
              return (
                <div
                  key={room.id}
                  className="bg-slate-950 border border-purple-800/40 rounded-3xl overflow-hidden shadow-xl hover:border-purple-500/60 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-purple-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-purple-200 border border-purple-700/40">
                      {rateInfo.symbol}{converted} / night
                    </div>
                    <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] text-purple-300 font-medium">
                      {room.view}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-xs text-purple-200/70 line-clamp-2">
                        {room.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-purple-900/30">
                      <div className="flex justify-between text-xs text-purple-300">
                        <span>{room.bedType}</span>
                        <span>Up to {room.maxGuests} Guests</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => onInspectRoom(room.id)}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-purple-950 border border-purple-700/50 hover:bg-purple-900 text-purple-200 text-xs font-semibold transition-colors"
                        >
                          View Rooms Details
                        </button>
                        <button
                          onClick={onOpenBooking}
                          className="py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-purple-700/50 text-purple-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <span>Explore All Rooms & Full Amenities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — GUEST EXPERIENCE
          ========================================================================= */}
      <section className="py-20 bg-slate-950 relative border-t border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Why Guests Love The Embassy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Embassy Guest Experience
            </h2>
            <p className="text-sm text-purple-200/80">
              Thoughtfully curated details designed to make your Queenstown stay relaxed and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUEST_EXPERIENCES.map((exp) => {
              const IconComponent =
                exp.id === 'comfort' ? BedDouble :
                exp.id === 'hospitality' ? HeartHandshake :
                exp.id === 'peace' ? Sparkles : MapPin;

              return (
                <div
                  key={exp.id}
                  className="bg-slate-900/90 border border-purple-800/40 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 group shadow-xl flex flex-col"
                >
                  {/* Card Image Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 backdrop-blur-md border border-purple-500/40 flex items-center justify-center text-purple-200 shadow-lg group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col space-y-2 justify-between">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial Quote Spotlight */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 border border-purple-700/40 rounded-3xl p-8 sm:p-10 shadow-2xl max-w-4xl mx-auto text-center space-y-4">
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <blockquote className="font-serif text-lg sm:text-xl text-white italic leading-relaxed">
              “The Embassy B&B is a hidden gem in Frankton! The mountain views from the suite were unbelievable, and Sarah & David make the best cooked kiwi breakfast in New Zealand.”
            </blockquote>
            <p className="text-xs text-purple-300 font-mono">
              — Emily & James H. · Sydney, Australia (Stayed Feb 2026)
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — EXPLORE QUEENSTOWN
          ========================================================================= */}
      <section className="py-20 bg-slate-900/50 relative border-t border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Explore Queenstown & Frankton
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Discover Nearby Attractions
            </h2>
            <p className="text-sm text-purple-200/80">
              The Embassy B&B offers convenient access to Queenstown’s world-famous lakes, ski fields, and dining precincts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEARBY_ATTRACTIONS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-slate-950 border border-purple-800/30 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-purple-300 uppercase tracking-wider border border-purple-800/40">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-purple-950/80 backdrop-blur-md px-2.5 py-0.5 rounded text-xs text-white font-mono">
                    {item.driveTimeMin} min drive ({item.distanceKm} km)
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-purple-200/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/about-location"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
            >
              <Compass className="w-4 h-4 text-purple-400" />
              <span>View interactive map & directions guide</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — BOOKING / CONTACT CTA
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 border-t border-purple-800/40 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-xs text-purple-200">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Direct Booking Guaranteed Rates</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            Make Your Queenstown Stay Special
          </h2>

          <p className="text-sm sm:text-base text-purple-200/80 max-w-xl mx-auto">
            Book directly with us for the best room rates, flexible cancellation, and complimentary daily gourmet kiwi breakfast.
          </p>

          <div className="bg-slate-950/60 border border-purple-800/40 rounded-2xl p-6 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-purple-200">
            <div className="flex flex-col items-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span className="font-semibold text-white">Free Breakfast</span>
              <span>Daily cooked hot meal</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span className="font-semibold text-white">Free Wi-Fi & Parking</span>
              <span>Ultra-fast 300Mbps fiber</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span className="font-semibold text-white">5-Min to Airport</span>
              <span>7 Viscount Lane Frankton</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay Now</span>
            </button>

            <a
              href={`tel:${PROPERTY_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-purple-700/50 hover:bg-slate-800 text-purple-200 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>Call Us: {PROPERTY_INFO.phoneFormatted}</span>
            </a>

            <Link
              to="/gallery-contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/60 text-purple-300 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
