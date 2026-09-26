import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Check, Sparkles, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ROOMS_DATA, PROPERTY_INFO, CURRENCY_RATES } from '../data/mockData';
import { Currency } from '../types';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: Currency;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  initialRoomId,
  initialCheckIn,
  initialCheckOut
}) => {
  // Set default dates: checkIn = tomorrow, checkOut = 3 days later
  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 1);
  const defaultOut = new Date(today);
  defaultOut.setDate(today.getDate() + 4);

  const formatDateString = (d: Date) => d.toISOString().split('T')[0];

  const [roomId, setRoomId] = useState<string>(initialRoomId || ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || formatDateString(defaultIn));
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || formatDateString(defaultOut));
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialRoomId) {
      setRoomId(initialRoomId);
    }
    if (initialCheckIn) setCheckIn(initialCheckIn);
    if (initialCheckOut) setCheckOut(initialCheckOut);
  }, [initialRoomId, initialCheckIn, initialCheckOut]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const date1 = new Date(checkIn);
  const date2 = new Date(checkOut);
  const timeDiff = date2.getTime() - date1.getTime();
  const calculatedNights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

  // Currency conversion
  const rateInfo = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES['NZD'];
  const pricePerNightConverted = Math.round(selectedRoom.pricePerNightNZD * rateInfo.rate);
  const totalPriceConverted = pricePerNightConverted * calculatedNights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `EMB-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);

    // Launch celebratory confetti
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#818cf8', '#e9d5ff', '#38bdf8']
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-lg bg-slate-950 border-l border-purple-800/40 shadow-2xl h-full flex flex-col z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-md px-6 py-5 border-b border-purple-800/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-200">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Check Availability</h3>
              <p className="text-xs text-purple-300/80">Direct booking with instant confirmation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-purple-300 hover:text-white rounded-lg hover:bg-purple-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Room Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                  Select Room or Suite
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.id} className="bg-slate-900 text-white">
                      {r.name} — {rateInfo.symbol}{Math.round(r.pricePerNightNZD * rateInfo.rate)} / night
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Room Preview Card */}
              <div className="bg-purple-950/30 border border-purple-800/30 rounded-2xl p-4 flex gap-4 items-center">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0 border border-purple-700/30"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-base font-semibold text-white truncate">
                    {selectedRoom.name}
                  </h4>
                  <p className="text-xs text-purple-200/70 line-clamp-1">{selectedRoom.bedType}</p>
                  <div className="mt-1 flex items-center justify-between text-xs">
                    <span className="text-purple-300 font-mono">
                      {rateInfo.symbol}{pricePerNightConverted} <span className="text-[10px] text-purple-400">/ night ({currentCurrency})</span>
                    </span>
                    <span className="text-[11px] text-emerald-400 font-medium">Breakfast Included</span>
                  </div>
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-purple-200">Check-In Date</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={formatDateString(today)}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-purple-200">Check-Out Date</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-purple-200 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>Number of Guests</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setGuests(num)}
                      className={`py-2 rounded-xl text-xs font-semibold transition-colors border ${
                        guests === num
                          ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                          : 'bg-slate-900 text-purple-300 border-purple-800/40 hover:border-purple-600'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="bg-slate-900/90 border border-purple-800/40 rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex justify-between text-purple-200">
                  <span>Stay Duration:</span>
                  <span className="font-semibold text-white">{calculatedNights} {calculatedNights === 1 ? 'night' : 'nights'}</span>
                </div>
                <div className="flex justify-between text-purple-200">
                  <span>Rate per night ({currentCurrency}):</span>
                  <span>{rateInfo.symbol}{pricePerNightConverted}</span>
                </div>
                <div className="flex justify-between text-purple-200">
                  <span>Gourmet Kiwi Breakfast:</span>
                  <span className="text-emerald-400 font-medium">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between text-purple-200">
                  <span>On-site Parking & Fiber Wi-Fi:</span>
                  <span className="text-emerald-400 font-medium">FREE</span>
                </div>
                <div className="pt-2 border-t border-purple-800/30 flex justify-between items-center text-sm">
                  <span className="font-serif font-bold text-white">Estimated Total:</span>
                  <span className="font-mono text-lg font-bold text-purple-300">
                    {rateInfo.symbol}{totalPriceConverted} <span className="text-xs text-purple-400">{currentCurrency}</span>
                  </span>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4 pt-2 border-t border-purple-900/30">
                <h4 className="font-serif text-sm font-semibold text-white">Your Contact Details</h4>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-purple-200">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-purple-200">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-purple-200">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+6421..."
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-purple-200">Special Requests / Flight Arrival Info</label>
                  <textarea
                    rows={2}
                    placeholder="Dietary preferences, estimated arrival time, or ski storage requests..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-950/60 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Confirm Reservation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-purple-300/60 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>No instant charge — hosts review & confirm within 2 hours</span>
              </p>
            </form>
          ) : (
            /* Confirmation View */
            <div className="py-6 space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Reservation Pending Confirmation
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Thank You, {guestName || 'Guest'}!
                </h3>
                <p className="text-xs text-purple-200/80 max-w-sm mx-auto">
                  Your reservation request for <strong className="text-white">{selectedRoom.name}</strong> has been transmitted directly to hosts Sarah & David Mitchell at The Embassy B&B.
                </p>
              </div>

              {/* Reference Card */}
              <div className="bg-slate-900 border border-purple-700/40 rounded-2xl p-5 text-left space-y-3 shadow-inner">
                <div className="flex justify-between items-center border-b border-purple-800/30 pb-3">
                  <span className="text-xs text-purple-300">Booking Reference:</span>
                  <span className="font-mono text-sm font-bold text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded border border-purple-800/50">
                    {bookingRef}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-purple-400 block text-[10px] uppercase">Dates</span>
                    <span className="text-white font-medium">{checkIn} to {checkOut} ({calculatedNights} nights)</span>
                  </div>
                  <div>
                    <span className="text-purple-400 block text-[10px] uppercase">Guests</span>
                    <span className="text-white font-medium">{guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-purple-400 block text-[10px] uppercase">Total Estimate</span>
                    <span className="text-white font-medium">{rateInfo.symbol}{totalPriceConverted} {currentCurrency}</span>
                  </div>
                  <div>
                    <span className="text-purple-400 block text-[10px] uppercase">Location</span>
                    <span className="text-white font-medium">7 Viscount Lane, Frankton</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={`tel:${PROPERTY_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-purple-700/50 text-purple-200 text-xs font-medium hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>Call Hosts Directly: {PROPERTY_INFO.phoneFormatted}</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full py-3 px-4 rounded-xl bg-purple-700 text-white font-semibold text-xs hover:bg-purple-600 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
