import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImg = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="text-xs sm:text-sm font-medium text-purple-200">
          <span className="font-serif font-bold text-base sm:text-lg block text-white">{currentImg.title}</span>
          <span className="text-[11px] uppercase tracking-wider text-purple-400 font-mono">
            {currentIndex + 1} of {images.length} · Category: {currentImg.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-slate-900 border border-purple-700/50 text-white hover:bg-purple-900/60 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImg.url}
          alt={currentImg.title}
          className="max-h-[80vh] max-w-full object-contain rounded-2xl border border-purple-800/30 shadow-2xl"
          referrerPolicy="no-referrer"
        />

        {/* Prev / Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 text-white hover:bg-purple-900 transition-colors border border-purple-700/50 shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 text-white hover:bg-purple-900 transition-colors border border-purple-700/50 shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Bar */}
      <div className="flex justify-center gap-2 overflow-x-auto py-2 px-4 max-w-2xl mx-auto">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(idx);
            }}
            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
              idx === currentIndex ? 'border-purple-400 scale-105' : 'border-purple-900/40 opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img.url} alt={img.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </button>
        ))}
      </div>
    </div>
  );
};
