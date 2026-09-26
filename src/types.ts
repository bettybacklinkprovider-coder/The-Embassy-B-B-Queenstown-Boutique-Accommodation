export type Currency = 'NZD' | 'AUD' | 'USD' | 'EUR';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  pricePerNightNZD: number;
  maxGuests: number;
  bedType: string;
  sizeSqM: number;
  image: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  amenities: string[];
  bathroomFeatures: string[];
  view: string;
  category: 'suite' | 'queen' | 'studio' | 'family';
  featured?: boolean;
}

export interface Attraction {
  id: string;
  name: string;
  category: 'Nature' | 'Dining' | 'Adventure' | 'Shopping' | 'Ski';
  distanceKm: number;
  driveTimeMin: number;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'bedrooms' | 'bathrooms' | 'breakfast' | 'garden' | 'scenery';
  url: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GuestExperience {
  id: string;
  title: string;
  iconName: string;
  image: string;
  description: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  selectedRoomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
}
