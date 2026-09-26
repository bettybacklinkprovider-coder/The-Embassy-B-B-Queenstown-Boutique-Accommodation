import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Compass, Heart, Phone, ExternalLink, Plane, Coffee, Mountain, ShieldCheck, Car } from 'lucide-react';
import { PROPERTY_INFO, NEARBY_ATTRACTIONS, heroImage } from '../data/mockData';

interface AboutLocationPageProps {
  onOpenBooking: () => void;
}

export const AboutLocationPage: React.FC<AboutLocationPageProps> = ({ onOpenBooking }) => {
  const [selectedPin, setSelectedPin] = useState<string | null>('embassy');

  const mapPoints = [
    {
      id: 'embassy',
      name: 'The Embassy B&B',
      desc: '7 Viscount Lane, Frankton',
      type: 'Primary',
      time: 'Your Location',
      top: '50%',
      left: '48%'
    },
    {
      id: 'airport',
      name: 'Queenstown Airport (ZQN)',
      desc: '5 minutes drive (2.5 km)',
      type: 'Transit',
      time: '5 min drive',
      top: '65%',
      left: '70%'
    },
    {
      id: 'lake',
      name: 'Frankton Beach & Lake Wakatipu',
      desc: 'Lakeside trail & swimming spot',
      type: 'Nature',
      time: '3 min drive',
      top: '38%',
      left: '32%'
    },
    {
      id: 'shopping',
      name: 'Remarkables Park Shopping & Dining',
      desc: 'Supermarket, cafes, breweries',
      type: 'Dining',
      time: '4 min drive',
      top: '72%',
      left: '52%'
    },
    {
      id: 'town',
      name: 'Queenstown Town Centre',
      desc: 'Skyline Gondola & Lake cruises',
      type: 'Adventure',
      time: '8 min drive',
      top: '25%',
      left: '18%'
    },
    {
      id: 'ski',
      name: 'The Remarkables Ski Field Base',
      desc: 'World-class winter skiing',
      type: 'Ski',
      time: '25 min drive',
      top: '80%',
      left: '82%'
    }
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROPERTY_INFO.address)}`;

  return (
    <div className="pt-24 pb-20 space-y-16">
      
      {/* Page Banner */}
      <section className="relative py-16 bg-gradient-to-b from-purple-950 via-slate-950 to-slate-950 border-b border-purple-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-purple-400" />
            <span>Story & Prime Location</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            About & Location
          </h1>

          <p className="text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Discover the heritage, peaceful atmosphere, and ideal Frankton location of The Embassy B&B in Queenstown, New Zealand.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
              Hospitality Focused
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              A Quiet Haven of Kiwi Hospitality
            </h2>

            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
              Founded with a passion for genuine hospitality, <strong>The Embassy B&B</strong> was created as an antidote to crowded corporate hotels. Situated in Viscount Lane, Frankton, our lodge offers guests a serene residential setting framed by the breathtaking snow-capped peaks of The Remarkables.
            </p>

            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
              Hosts <strong>Sarah & David Mitchell</strong> take pride in offering a welcoming, pristine environment. From fresh organic coffee each morning to local knowledge on hidden hiking trails and wine tours, every detail is handled with personal care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900 border border-purple-800/40 rounded-2xl p-4 space-y-1">
                <Heart className="w-5 h-5 text-purple-400" />
                <h4 className="font-serif font-bold text-white text-sm">Personal Host Touch</h4>
                <p className="text-xs text-purple-200/70">Custom itinerary advice & daily breakfast.</p>
              </div>

              <div className="bg-slate-900 border border-purple-800/40 rounded-2xl p-4 space-y-1">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                <h4 className="font-serif font-bold text-white text-sm">Peaceful Enclave</h4>
                <p className="text-xs text-purple-200/70">Quiet nights away from noisy downtown bars.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-purple-800/40 shadow-2xl">
              <img
                src={heroImage}
                alt="The Embassy B&B Lodge"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-2xl border border-purple-500/30 text-xs text-white space-y-1">
                <strong className="font-serif text-sm block">7 Viscount Lane, Frankton</strong>
                <span className="text-purple-200/80">Located in Queenstown's most convenient residential hub.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Custom Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Interactive Map & Proximity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Our Queenstown Location
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/80">
            Click markers to view driving distance to key Queenstown landmarks.
          </p>
        </div>

        {/* Custom Map Box */}
        <div className="bg-slate-950 border border-purple-800/40 rounded-3xl overflow-hidden shadow-2xl relative p-6 lg:p-8">
          
          <div className="relative w-full h-[400px] sm:h-[480px] bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-900 rounded-2xl overflow-hidden border border-purple-900/40 shadow-inner flex items-center justify-center">
            
            {/* Map Contour Background Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* SVG Topographical Lake Wakatipu Shape */}
            <svg className="absolute inset-0 w-full h-full text-purple-900/30" viewBox="0 0 800 500" fill="currentColor">
              <path d="M 50 150 Q 200 120 300 250 T 600 350 Q 700 400 750 450 L 800 500 L 0 500 Z" opacity="0.6" />
            </svg>

            {/* Map Markers */}
            {mapPoints.map((pt) => {
              const isSelected = selectedPin === pt.id;
              const isEmbassy = pt.id === 'embassy';

              return (
                <div
                  key={pt.id}
                  style={{ top: pt.top, left: pt.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => setSelectedPin(pt.id)}
                >
                  <div className={`relative flex items-center justify-center transition-transform ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border ${
                      isEmbassy
                        ? 'bg-purple-600 text-white border-purple-300 ring-4 ring-purple-600/30 animate-bounce'
                        : 'bg-slate-900 text-purple-300 border-purple-700/60'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Tooltip */}
                    <div className={`absolute bottom-full mb-2 whitespace-nowrap bg-slate-950/95 border border-purple-700/50 rounded-xl p-2.5 text-left text-xs shadow-xl transition-all ${
                      isSelected ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100'
                    }`}>
                      <strong className="block text-white font-serif">{pt.name}</strong>
                      <span className="text-[10px] text-purple-300 block">{pt.desc}</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">{pt.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Map Legend */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-purple-800/40 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-white font-semibold">{PROPERTY_INFO.address}</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-white px-3.5 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Quick Distance Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 text-xs">
            {mapPoints.slice(1).map((pt) => (
              <button
                key={pt.id}
                onClick={() => setSelectedPin(pt.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPin === pt.id
                    ? 'bg-purple-950 border-purple-500 text-white'
                    : 'bg-slate-900/60 border-purple-800/30 text-purple-200/80 hover:border-purple-700'
                }`}
              >
                <span className="font-semibold block text-white truncate">{pt.name}</span>
                <span className="text-[10px] text-emerald-400 font-mono font-medium">{pt.time}</span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Directions & Nearby Attractions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Driving & Transport Directions */}
          <div className="bg-slate-950 border border-purple-800/40 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              <Navigation className="w-5 h-5 text-purple-400" />
              <span>How to Reach Us</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="bg-purple-950/30 border border-purple-800/30 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Plane className="w-4 h-4 text-purple-400" />
                  <span>From Queenstown Airport (5 Mins / 2.5 km)</span>
                </div>
                <p className="text-purple-200/70 leading-relaxed text-xs">
                  Head east on Sir Tim Wallis Drive toward Frankton Road, turn onto Kawarau Road, then turn left into Viscount Lane. Number 7 is on your right with private parking in front.
                </p>
              </div>

              <div className="bg-purple-950/30 border border-purple-800/30 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Car className="w-4 h-4 text-purple-400" />
                  <span>From Queenstown Town Centre (8 Mins / 7.5 km)</span>
                </div>
                <p className="text-purple-200/70 leading-relaxed text-xs">
                  Drive east along Frankton Road (SH6) along the lake edge. At the Frankton roundabout, continue straight onto Kawarau Road, then turn onto Viscount Lane.
                </p>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/gallery-contact"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-purple-700/50 hover:bg-slate-800 text-purple-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Contact Hosts</span>
              </Link>
            </div>
          </div>

          {/* Local Queenstown Highlights */}
          <div className="bg-slate-950 border border-purple-800/40 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              <Mountain className="w-5 h-5 text-purple-400" />
              <span>Queenstown & Frankton Highlights</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {NEARBY_ATTRACTIONS.map((attraction) => (
                <div key={attraction.id} className="bg-slate-900 rounded-2xl border border-purple-800/30 overflow-hidden space-y-2 flex flex-col group hover:border-purple-600/50 transition-colors">
                  <div className="h-28 overflow-hidden relative">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-semibold text-purple-300 uppercase tracking-wider border border-purple-800/40">
                      {attraction.category}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-purple-950/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-mono">
                      {attraction.driveTimeMin}m drive
                    </div>
                  </div>
                  <div className="p-3 pt-1 space-y-1 flex-1">
                    <strong className="text-white block font-semibold text-xs leading-snug">{attraction.name}</strong>
                    <p className="text-purple-200/70 text-[11px] leading-relaxed line-clamp-2">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-700/40 rounded-3xl p-8 sm:p-10 space-y-4 shadow-2xl">
          <h3 className="font-serif text-3xl font-bold text-white">
            Plan Your Stay in Queenstown
          </h3>
          <p className="text-xs sm:text-sm text-purple-200/80 max-w-md mx-auto">
            Experience peaceful alpine comfort at 7 Viscount Lane, Frankton.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-semibold shadow-xl transition-colors"
            >
              Check Availability & Rates
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
