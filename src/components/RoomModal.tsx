import React, { useState } from 'react';
import { X, Check, BedDouble, Maximize, ShieldCheck, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Room, Currency } from '../types';
import { CURRENCY_RATES } from '../data/mockData';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onSelectForBooking: (roomId: string) => void;
  currentCurrency: Currency;
}

export const RoomModal: React.FC<RoomModalProps> = ({
  room,
  onClose,
  onSelectForBooking,
  currentCurrency
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const rateInfo = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES['NZD'];
  const convertedPrice = Math.round(room.pricePerNightNZD * rateInfo.rate);

  const images = room.galleryImages && room.galleryImages.length > 0
    ? room.galleryImages
    : [room.image];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-slate-900 border border-purple-800/40 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 border border-purple-700/50 text-white hover:bg-purple-900/60 transition-colors shadow-lg"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery / Image Carousel */}
        <div className="relative h-72 sm:h-96 w-full bg-slate-950 overflow-hidden">
          <img
            src={images[activeImageIndex]}
            alt={room.name}
            className="w-full h-full object-cover transition-all duration-500"
            referrerPolicy="no-referrer"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-purple-900/80 transition-colors border border-purple-700/40"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-purple-900/80 transition-colors border border-purple-700/40"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Thumbnail Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-950/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-800/40">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === activeImageIndex ? 'bg-purple-400 w-6' : 'bg-purple-900/80'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute top-4 left-4 bg-purple-950/80 backdrop-blur-md border border-purple-700/40 px-3 py-1 rounded-full text-xs font-semibold text-purple-200">
            {room.view}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-800/30 pb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {room.name}
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 mt-1">{room.tagline}</p>
            </div>

            <div className="bg-purple-950/50 border border-purple-700/40 rounded-2xl p-3.5 text-right shrink-0">
              <span className="text-xs text-purple-300 block">From</span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-white">
                {rateInfo.symbol}{convertedPrice}
              </span>
              <span className="text-xs text-purple-300 block">/ night ({currentCurrency})</span>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-950/60 border border-purple-800/30 rounded-xl p-3 flex items-center gap-2.5">
              <BedDouble className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <span className="text-purple-300 block text-[10px]">Bedding</span>
                <span className="text-white font-medium">{room.bedType}</span>
              </div>
            </div>
            <div className="bg-slate-950/60 border border-purple-800/30 rounded-xl p-3 flex items-center gap-2.5">
              <Maximize className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <span className="text-purple-300 block text-[10px]">Room Size</span>
                <span className="text-white font-medium">{room.sizeSqM} m² ({Math.round(room.sizeSqM * 10.764)} sq ft)</span>
              </div>
            </div>
            <div className="bg-slate-950/60 border border-purple-800/30 rounded-xl p-3 flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <span className="text-purple-300 block text-[10px]">Capacity</span>
                <span className="text-white font-medium">Up to {room.maxGuests} Guests</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-white">About This Suite</h3>
            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
              {room.longDescription}
            </p>
          </div>

          {/* Room Amenities Grid */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-white">Suite Features & Comforts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-purple-200">
                  <div className="w-4 h-4 rounded-full bg-purple-900/60 text-purple-300 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* En-Suite Bathroom Features */}
          <div className="space-y-3 bg-purple-950/30 border border-purple-800/30 rounded-2xl p-4">
            <h3 className="font-serif text-base font-semibold text-white">En-Suite Bathroom Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.bathroomFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-purple-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action */}
        <div className="bg-slate-950 p-6 border-t border-purple-800/30 flex items-center justify-between gap-4">
          <div className="text-xs text-purple-300 hidden sm:block">
            Includes Daily Cooked Kiwi Breakfast & Free On-site Parking
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectForBooking(room.id);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve {room.name}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
