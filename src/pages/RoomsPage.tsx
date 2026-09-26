import React, { useState } from 'react';
import { Calendar, Check, BedDouble, Wifi, Coffee, Sparkles, ShieldCheck, Maximize, ExternalLink } from 'lucide-react';
import { ROOMS_DATA, CURRENCY_RATES, PROPERTY_INFO } from '../data/mockData';
import { Currency } from '../types';

interface RoomsPageProps {
  currentCurrency: Currency;
  onOpenBookingWithRoom: (roomId: string) => void;
  onInspectRoom: (roomId: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  currentCurrency,
  onOpenBookingWithRoom,
  onInspectRoom
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const rateInfo = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES['NZD'];

  const filteredRooms = filterCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === filterCategory);

  return (
    <div className="pt-24 pb-20 space-y-16">
      
      {/* Page Hero Banner */}
      <section className="relative py-16 bg-gradient-to-b from-purple-950 via-slate-950 to-slate-950 border-b border-purple-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-widest">
            <BedDouble className="w-4 h-4 text-purple-400" />
            <span>The Embassy B&B Accommodations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Rooms & Stay Experience
          </h1>

          <p className="text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Every suite at The Embassy B&B is tailored for supreme tranquility, featuring premium pillowtop beds, en-suite bathrooms, mountain vistas, and daily gourmet Kiwi breakfast.
          </p>

          {/* Interactive Filter Control */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Accommodations' },
              { id: 'suite', label: 'Grand Suites' },
              { id: 'queen', label: 'Queen Rooms' },
              { id: 'studio', label: 'Private Studios' },
              { id: 'family', label: 'Twin / Versatile' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filterCategory === tab.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/60 border border-purple-400/40 font-semibold'
                    : 'bg-slate-900 text-purple-200/80 hover:bg-slate-800 hover:text-white border border-purple-800/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Room Showcases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredRooms.map((room, index) => {
          const convertedPrice = Math.round(room.pricePerNightNZD * rateInfo.rate);
          const isEven = index % 2 === 0;

          return (
            <div
              key={room.id}
              className={`bg-slate-950 border border-purple-800/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-purple-500/50 grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Side (7 cols on desktop) */}
              <div className={`relative h-72 sm:h-96 lg:h-auto ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'} bg-slate-900 overflow-hidden group`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
                
                <div className="absolute top-4 left-4 bg-purple-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-200 border border-purple-700/40">
                  {room.view}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs">
                  <span className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-purple-300 font-mono">
                    {room.sizeSqM} m² space
                  </span>
                  <button
                    onClick={() => onInspectRoom(room.id)}
                    className="bg-purple-900/80 hover:bg-purple-800 backdrop-blur-md text-white px-3 py-1 rounded-lg flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Photo Gallery ({room.galleryImages.length})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Text / Details Side (5 cols on desktop) */}
              <div className={`p-6 sm:p-8 ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'} flex flex-col justify-between space-y-6`}>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        {room.name}
                      </h2>
                      <p className="text-xs text-purple-300 mt-1 font-medium">{room.tagline}</p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="bg-purple-950/40 border border-purple-800/40 rounded-2xl p-3.5 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-purple-300 block">Nightly Rate</span>
                      <span className="font-mono text-2xl font-bold text-white">
                        {rateInfo.symbol}{convertedPrice}
                      </span>
                      <span className="text-xs text-purple-300"> / night ({currentCurrency})</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
                      Breakfast Included
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Features Grid */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                      Suite Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-purple-200">
                      <div className="flex items-center gap-2">
                        <BedDouble className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>300Mbps Fiber Wi-Fi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coffee className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>Espresso Bar & Tea</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>En-suite Marble Bath</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-purple-900/30 flex gap-3">
                  <button
                    onClick={() => onInspectRoom(room.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-purple-700/50 hover:bg-purple-950 text-purple-200 text-xs font-semibold transition-colors"
                  >
                    Full Room Details
                  </button>
                  <button
                    onClick={() => onOpenBookingWithRoom(room.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Room</span>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Global Inclusions Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-700/40 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Included with Every Stay
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/80">
              We ensure your time at The Embassy B&B in Queenstown is seamless and relaxing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-purple-100 pt-2">
            <div className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-2xl border border-purple-800/30">
              <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold text-sm">Gourmet Kiwi Breakfast</strong>
                <span className="text-purple-200/70">Cooked to order daily with artisan coffees, local jams & fresh fruits.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-2xl border border-purple-800/30">
              <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold text-sm">Free On-site Parking</strong>
                <span className="text-purple-200/70">Secure off-street parking directly at 7 Viscount Lane Frankton.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-2xl border border-purple-800/30">
              <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold text-sm">Ultra-Fast Fiber Wi-Fi</strong>
                <span className="text-purple-200/70">Unlimited high-speed 300Mbps internet across all rooms & gardens.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-2xl border border-purple-800/30">
              <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold text-sm">Ski & Gear Storage</strong>
                <span className="text-purple-200/70">Safe dry room storage for winter skis, snowboards, and summer bikes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
