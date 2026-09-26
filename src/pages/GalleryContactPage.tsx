import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, ChevronDown, Sparkles, Image as ImageIcon, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROPERTY_INFO, GALLERY_IMAGES, FAQ_ITEMS } from '../data/mockData';
import { Lightbox } from '../components/Lightbox';

export const GalleryContactPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dates, setDates] = useState('');
  const [message, setMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#818cf8', '#c084fc']
    });
  };

  return (
    <div className="pt-24 pb-20 space-y-16">
      
      {/* Lightbox Component */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      {/* Page Banner */}
      <section className="relative py-16 bg-gradient-to-b from-purple-950 via-slate-950 to-slate-950 border-b border-purple-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-widest">
            <ImageIcon className="w-4 h-4 text-purple-400" />
            <span>Visual Tour & Host Direct Contact</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Gallery & Contact
          </h1>

          <p className="text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Browse our rooms, gardens, and Queenstown scenery, or reach out directly to hosts Sarah & David Mitchell.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — GALLERY
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-800/30 pb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Photo Gallery
            </h2>
            <p className="text-xs text-purple-300">Click any photograph to view high resolution lightbox</p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'bedrooms', label: 'Bedrooms' },
              { id: 'bathrooms', label: 'Bathrooms' },
              { id: 'breakfast', label: 'Breakfast' },
              { id: 'garden', label: 'Garden & Outdoor' },
              { id: 'scenery', label: 'Queenstown Scenery' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md font-semibold'
                    : 'bg-slate-900 text-purple-300/80 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-slate-950 border border-purple-800/30 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:border-purple-500/60 transition-all duration-300 aspect-square"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-300">{img.category}</span>
                <span className="font-serif text-sm font-semibold text-white leading-tight">{img.title}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          SECTION 2 — CONTACT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
              Direct Contact
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Get in Touch with Hosts
            </h2>

            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              We welcome inquiries regarding room availability, custom dietary breakfast requests, airport pickups, or local Queenstown travel recommendations.
            </p>

            {/* Business Contact Card */}
            <div className="bg-slate-950 border border-purple-800/40 rounded-3xl p-6 space-y-5 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-purple-900/30 pb-4">
                <div className="w-10 h-10 rounded-full bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-purple-200 font-serif font-bold text-lg">
                  E
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">{PROPERTY_INFO.name}</h3>
                  <p className="text-xs text-purple-300">Hosts: {PROPERTY_INFO.hostName}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-purple-200">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Address</strong>
                    <span className="text-purple-200/80">{PROPERTY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-purple-200">
                  <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <strong className="block text-white font-medium">Click-To-Call Phone</strong>
                    <a
                      href={`tel:${PROPERTY_INFO.phone}`}
                      className="text-purple-300 hover:text-white font-mono font-semibold hover:underline"
                    >
                      {PROPERTY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-purple-200">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <strong className="block text-white font-medium">Email Inquiry</strong>
                    <a href={`mailto:${PROPERTY_INFO.email}`} className="text-purple-300 hover:text-white hover:underline">
                      {PROPERTY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Click-To-Call Button */}
              <div className="pt-2">
                <a
                  href={`tel:${PROPERTY_INFO.phone}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {PROPERTY_INFO.phoneFormatted} Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 border border-purple-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              {!inquirySent ? (
                <form onSubmit={handleSendInquiry} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-white">Send Inquiry Message</h3>
                    <p className="text-xs text-purple-300">Fill out the details below and Sarah or David will reply within 2 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-purple-200">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-purple-200">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-purple-200">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+64..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-purple-200">Intended Dates (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Nov 12 - Nov 16"
                        value={dates}
                        onChange={(e) => setDates(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-purple-200">Message / Inquiry *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help make your Queenstown stay special?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Button</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 space-y-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-xs text-purple-200/80 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{name}</strong>. Your message has been sent to Sarah & David Mitchell at The Embassy B&B. We will respond to {email} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-slate-900 border border-purple-700/50 text-purple-200 text-xs font-semibold rounded-xl hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 pt-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">Guest FAQs</span>
          <h2 className="font-serif text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-slate-950 border border-purple-800/30 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-white font-serif text-base font-semibold hover:text-purple-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-0 text-xs sm:text-sm text-purple-200/80 leading-relaxed border-t border-purple-900/20 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
