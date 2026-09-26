import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingDrawer } from './components/BookingDrawer';
import { RoomModal } from './components/RoomModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { AboutLocationPage } from './pages/AboutLocationPage';
import { GalleryContactPage } from './pages/GalleryContactPage';

import { Currency } from './types';
import { ROOMS_DATA } from './data/mockData';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('NZD');
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState<boolean>(false);
  const [selectedBookingRoomId, setSelectedBookingRoomId] = useState<string | undefined>(undefined);
  const [inspectedRoomId, setInspectedRoomId] = useState<string | null>(null);

  const handleOpenBookingWithRoom = (roomId?: string) => {
    if (roomId) setSelectedBookingRoomId(roomId);
    setBookingDrawerOpen(true);
  };

  const handleInspectRoom = (roomId: string) => {
    setInspectedRoomId(roomId);
  };

  const inspectedRoom = inspectedRoomId
    ? ROOMS_DATA.find((r) => r.id === inspectedRoomId) || null
    : null;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0b0614] text-slate-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
        
        {/* Global Subtle Background Wallpaper */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-cover bg-center bg-no-repeat mix-blend-overlay"
          style={{ backgroundImage: `url('https://res.cloudinary.com/k7og2ybq/image/upload/v1790425344/unnamed.jpg')` }}
        />
        
        {/* Global Navigation Header */}
        <Header
          currentCurrency={currentCurrency}
          onCurrencyChange={(c) => setCurrentCurrency(c)}
          onOpenBooking={() => handleOpenBookingWithRoom()}
        />

        {/* Main Content Viewport */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  currentCurrency={currentCurrency}
                  onOpenBooking={() => handleOpenBookingWithRoom()}
                  onInspectRoom={(id) => handleInspectRoom(id)}
                />
              }
            />
            <Route
              path="/rooms"
              element={
                <RoomsPage
                  currentCurrency={currentCurrency}
                  onOpenBookingWithRoom={(id) => handleOpenBookingWithRoom(id)}
                  onInspectRoom={(id) => handleInspectRoom(id)}
                />
              }
            />
            <Route
              path="/about-location"
              element={<AboutLocationPage onOpenBooking={() => handleOpenBookingWithRoom()} />}
            />
            <Route
              path="/gallery-contact"
              element={<GalleryContactPage />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Booking Slide-Over Drawer */}
        <BookingDrawer
          isOpen={bookingDrawerOpen}
          onClose={() => setBookingDrawerOpen(false)}
          currentCurrency={currentCurrency}
          initialRoomId={selectedBookingRoomId}
        />

        {/* Room Detail Modal */}
        <RoomModal
          room={inspectedRoom}
          onClose={() => setInspectedRoomId(null)}
          onSelectForBooking={(id) => {
            setInspectedRoomId(null);
            handleOpenBookingWithRoom(id);
          }}
          currentCurrency={currentCurrency}
        />

      </div>
    </BrowserRouter>
  );
}
