import { Room, Attraction, GalleryImage, FAQItem } from '../types';

// Generated image assets
import heroImage from '../assets/images/hero_queenstown_embassy_1790421804178.jpg';
import deluxeRoomImage from '../assets/images/room_deluxe_king_suite_1790421816439.jpg';
import gourmetBreakfastImage from '../assets/images/breakfast_kiwi_gourmet_1790421828538.jpg';
import franktonTrailImage from '../assets/images/frankton_trail_1790424274567.jpg';
import queenstownAirportImage from '../assets/images/queenstown_airport_1790424290936.jpg';
import franktonVillageImage from '../assets/images/frankton_village_1790424311126.jpg';
import skylineGondolaImage from '../assets/images/skyline_gondola_1790424327373.jpg';
import remarkablesSkiImage from '../assets/images/remarkables_ski_1790424343390.jpg';
import arrowtownVillageImage from '../assets/images/arrowtown_village_1790424365412.jpg';
import alpineQueenRoomImage from '../assets/images/room_alpine_queen_1790424379763.jpg';
import franktonStudioRoomImage from '../assets/images/room_frankton_studio_1790424397718.jpg';
import coronetSuiteRoomImage from '../assets/images/room_coronet_suite_1790424413207.jpg';

export {
  heroImage,
  deluxeRoomImage,
  gourmetBreakfastImage,
  franktonTrailImage,
  queenstownAirportImage,
  franktonVillageImage,
  skylineGondolaImage,
  remarkablesSkiImage,
  arrowtownVillageImage,
  alpineQueenRoomImage,
  franktonStudioRoomImage,
  coronetSuiteRoomImage
};

export const PROPERTY_INFO = {
  name: 'The Embassy B&B',
  phone: '+64212401114',
  phoneFormatted: '+64 21 240 1114',
  address: '7 Viscount Lane, Frankton, Queenstown 9300, New Zealand',
  email: 'stays@theembassybb.co.nz',
  checkInTime: '3:00 PM - 8:00 PM',
  checkOutTime: '10:00 AM',
  hostName: 'Sarah & David Mitchell',
  gps: { lat: -45.0225, lng: 168.7360 }
};

export const CURRENCY_RATES: Record<string, { symbol: string, rate: number, label: string }> = {
  NZD: { symbol: 'NZ$', rate: 1.00, label: 'NZD (New Zealand Dollar)' },
  AUD: { symbol: 'A$', rate: 0.92, label: 'AUD (Australian Dollar)' },
  USD: { symbol: '$', rate: 0.61, label: 'USD (US Dollar)' },
  EUR: { symbol: '€', rate: 0.56, label: 'EUR (Euro)' },
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-king-suite',
    name: 'The Embassy Grand King Suite',
    tagline: 'Panoramic Remarkables mountain views with luxury king bedding and private balcony.',
    pricePerNightNZD: 285,
    maxGuests: 2,
    bedType: 'Super King Pillowtop Bed',
    sizeSqM: 38,
    image: deluxeRoomImage,
    galleryImages: [
      deluxeRoomImage,
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Our flagship suite featuring sweeping floor-to-ceiling mountain views, plush European velvet linens, and an en-suite marble bath.',
    longDescription: 'Designed for total indulgence, the Embassy Grand King Suite is our premier offering. Wake up to golden sunlight illuminating the snow-dusted peaks of The Remarkables range. Complete with a plush super king bed, warm hardwood accents, private sun deck, Nespresso espresso bar, ultra-fast fiber Wi-Fi, and a spa-like en-suite bathroom with heated floor tile and double vanity.',
    amenities: [
      'Gourmet Kiwi Breakfast Included',
      'Super King Bed with 100% Egyptian Cotton Sheets',
      'Private Furnished Sun Balcony',
      'Ultra-Fast Fiber Wi-Fi (300Mbps+)',
      'In-Room Nespresso Coffee & Organic Tea Station',
      '55" 4K Smart TV with Netflix & AirPlay',
      'Individual Climate Control & Heat Pump',
      'Silent Mini Fridge & Wine Glasses',
      'In-room Safe & Built-in Wardrobe'
    ],
    bathroomFeatures: [
      'Italian Marble En-Suite Bathroom',
      'Rainfall Walk-In Power Shower',
      'Underfloor Heating & Heated Towel Rail',
      'Eco-Conscious NZ Botanicals Toiletries',
      'Plush Organic Cotton Bathrobes & Slippers'
    ],
    view: 'Panoramic Remarkables Mountain View',
    category: 'suite',
    featured: true
  },
  {
    id: 'mountain-queen-room',
    name: 'Alpine Vista Queen Room',
    tagline: 'Peaceful garden access with serene views of Lake Wakatipu hills.',
    pricePerNightNZD: 220,
    maxGuests: 2,
    bedType: 'Luxury Queen Bed',
    sizeSqM: 30,
    image: alpineQueenRoomImage,
    galleryImages: [
      alpineQueenRoomImage,
      deluxeRoomImage,
      gourmetBreakfastImage
    ],
    description: 'A quiet, elegant retreat with direct French doors opening onto our lavender garden pathway.',
    longDescription: 'The Alpine Vista Queen Room offers tranquility and timeless comfort. Featuring a luxurious queen-sized bed, direct access to our manicured flower gardens, and soft ambient lighting. Perfect for couples or solo travelers seeking a peaceful base after exploring Queenstown hiking trails.',
    amenities: [
      'Gourmet Kiwi Breakfast Included',
      'Premium Queen Bed with Down Comforter',
      'Direct Lavender Garden Terrace Access',
      'High-Speed Wi-Fi',
      'Tea & Coffee Maker',
      'Smart HDTV',
      'Quiet Double-Glazed Windows',
      'Writing Desk & Chair'
    ],
    bathroomFeatures: [
      'Private En-Suite Bathroom',
      'Glass Walk-In Shower',
      'Heated Towel Rail',
      'Pure NZ Botanical Bath Products',
      'Fluffy Bath Sheet Towels'
    ],
    view: 'Garden & Alpine Hills View',
    category: 'queen',
    featured: true
  },
  {
    id: 'frankton-garden-studio',
    name: 'Frankton Haven Private Studio',
    tagline: 'Self-contained ground floor sanctuary with private entrance and kitchenette.',
    pricePerNightNZD: 250,
    maxGuests: 3,
    bedType: '1 King Bed + 1 Single Daybed',
    sizeSqM: 35,
    image: franktonStudioRoomImage,
    galleryImages: [
      franktonStudioRoomImage,
      deluxeRoomImage,
      gourmetBreakfastImage
    ],
    description: 'Generous ground floor suite with private entrance, small kitchenette, and flexible sleeping options.',
    longDescription: 'Ideal for extended stays or small groups of up to three. Frankton Haven features an independent ground floor entry, private courtyard patio, kitchenette with toaster, kettle, micro-fridge and microwave, alongside our full cooked breakfast delivered to your room or served in the main lodge.',
    amenities: [
      'Gourmet Kiwi Breakfast Included',
      'King Bed plus Convertible Single Daybed',
      'Private Exterior Entrance & Keyless Access',
      'Kitchenette (Fridge, Microwave, Kettle, Toaster)',
      'Private Outdoor Seating Area',
      'High-Speed Fiber Wi-Fi',
      'Large Work Desk',
      'Air Conditioning & Heating'
    ],
    bathroomFeatures: [
      'Spacious Modern Bathroom',
      'Double Overhead Rain Shower',
      'Underfloor Heating',
      'Premium Toiletries & Hairdryer'
    ],
    view: 'Courtyard & Private Garden View',
    category: 'studio',
    featured: true
  },
  {
    id: 'coronet-twin-suite',
    name: 'Coronet Sanctuary Twin/King Suite',
    tagline: 'Flexible bedding arrangements with warm wooden tones and mountain vista.',
    pricePerNightNZD: 235,
    maxGuests: 2,
    bedType: '2 King Single Beds OR 1 Super King',
    sizeSqM: 32,
    image: coronetSuiteRoomImage,
    galleryImages: [
      coronetSuiteRoomImage,
      deluxeRoomImage
    ],
    description: 'Versatile guest suite ideal for friends, corporate travelers, or couples seeking refined comfort.',
    longDescription: 'The Coronet Sanctuary offers custom bedding flexibility: configured either as two separate extra-long single beds or seamlessly combined into one plush super king. Adorned with natural oak timber, cozy wool carpets, and curated NZ art.',
    amenities: [
      'Gourmet Kiwi Breakfast Included',
      'Flexible Bedding Config (Twin Single or Super King)',
      'High-Speed Fiber Wi-Fi',
      'Smart TV with Streaming Services',
      'Espresso & Artisan Tea Tray',
      'Quiet Dual-Zone Air Conditioning',
      'Plush Armchairs & Coffee Table'
    ],
    bathroomFeatures: [
      'En-Suite Tile Bathroom',
      'Frameless Glass Shower',
      'Heated Towel Rails',
      'Natural Earth Organics Toiletries'
    ],
    view: 'Coronet Peak & Northern Valley Views',
    category: 'family',
    featured: false
  }
];

export const GUEST_EXPERIENCES = [
  {
    id: 'comfort',
    title: 'Comfortable Stay',
    iconName: 'BedDouble',
    description: 'Plush pillowtop beds, 100% Egyptian cotton sheets, silent double-glazed windows, and temperature-controlled rooms ensure deep restful sleep.'
  },
  {
    id: 'hospitality',
    title: 'Warm Kiwi Hospitality',
    iconName: 'HeartHandshake',
    description: 'Friendly local hosts dedicated to your comfort. Daily cooked gourmet Kiwi breakfast with local organic produce and tailor-made travel tips.'
  },
  {
    id: 'peace',
    title: 'Peaceful Environment',
    iconName: 'Sparkles',
    description: 'Situated in the quiet Viscount Lane residential enclave of Frankton, away from downtown noise while enjoying pure mountain air and garden views.'
  },
  {
    id: 'location',
    title: 'Convenient Location',
    iconName: 'MapPin',
    description: '5 minutes from Queenstown Airport (ZQN), 3 minutes to Frankton Beach & Lake Wakatipu trail, and 8 minutes to Queenstown Town Centre.'
  }
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: 'lake-wakatipu-frankton-arm',
    name: 'Frankton Arm & Lake Wakatipu Trail',
    category: 'Nature',
    distanceKm: 1.2,
    driveTimeMin: 3,
    description: 'Stunning lakeside walking and biking path connecting Frankton to Queenstown Gardens. Crystal clear alpine waters and mountain panoramas.',
    image: franktonTrailImage
  },
  {
    id: 'queenstown-airport',
    name: 'Queenstown International Airport (ZQN)',
    category: 'Shopping',
    distanceKm: 2.5,
    driveTimeMin: 5,
    description: 'Seamless 5-minute drive from our door. Effortless arrival and departure without town traffic stress.',
    image: queenstownAirportImage
  },
  {
    id: 'remarkables-shopping-center',
    name: 'Remarkables Park & Frankton Village',
    category: 'Dining',
    distanceKm: 1.8,
    driveTimeMin: 4,
    description: 'Vibrant local precinct featuring top craft breweries, artisan bakeries, supermarket, cafes, and outdoor gear stores.',
    image: franktonVillageImage
  },
  {
    id: 'queenstown-town-centre',
    name: 'Queenstown Town Centre & Skyline Gondola',
    category: 'Adventure',
    distanceKm: 7.5,
    driveTimeMin: 8,
    description: 'The world capital of adventure! Explore fine dining, TSS Earnslaw steamship cruises, Skyline Gondola & Luge, and boutique shopping.',
    image: skylineGondolaImage
  },
  {
    id: 'remarkables-ski-field',
    name: 'The Remarkables Ski Field Base',
    category: 'Ski',
    distanceKm: 16.0,
    driveTimeMin: 25,
    description: 'World-class winter skiing and snowboarding. Direct access via the Remarkables ski access road just minutes from Frankton.',
    image: remarkablesSkiImage
  },
  {
    id: 'arrowtown-historic',
    name: 'Historic Arrowtown Gold Mining Village',
    category: 'Nature',
    distanceKm: 14.2,
    driveTimeMin: 15,
    description: 'Charming 19th-century gold rush town with tree-lined avenues, boutique cafes, Chinese Settlement, and walking trails.',
    image: arrowtownVillageImage
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    title: 'The Embassy B&B Lodge Exterior at Twilight',
    category: 'scenery',
    url: heroImage,
    aspectRatio: 'wide'
  },
  {
    id: 'g2',
    title: 'Grand King Suite Master Bedroom',
    category: 'bedrooms',
    url: deluxeRoomImage,
    aspectRatio: 'square'
  },
  {
    id: 'g3',
    title: 'Fresh Gourmet Kiwi Breakfast Spread',
    category: 'breakfast',
    url: gourmetBreakfastImage,
    aspectRatio: 'wide'
  },
  {
    id: 'g4',
    title: 'Alpine Vista Queen Bedroom',
    category: 'bedrooms',
    url: alpineQueenRoomImage,
    aspectRatio: 'tall'
  },
  {
    id: 'g5',
    title: 'Frankton Haven Private Studio Suite',
    category: 'bedrooms',
    url: franktonStudioRoomImage,
    aspectRatio: 'square'
  },
  {
    id: 'g6',
    title: 'Coronet Sanctuary Twin/King Suite',
    category: 'bedrooms',
    url: coronetSuiteRoomImage,
    aspectRatio: 'wide'
  },
  {
    id: 'g7',
    title: 'Lake Wakatipu & Frankton Arm Scenic Trail',
    category: 'scenery',
    url: franktonTrailImage,
    aspectRatio: 'wide'
  },
  {
    id: 'g8',
    title: 'Remarkables Park & Frankton Village',
    category: 'garden',
    url: franktonVillageImage,
    aspectRatio: 'square'
  },
  {
    id: 'g9',
    title: 'Skyline Gondola Alpine Mountain Vista',
    category: 'scenery',
    url: skylineGondolaImage,
    aspectRatio: 'tall'
  },
  {
    id: 'g10',
    title: 'The Remarkables Winter Ski Slopes',
    category: 'scenery',
    url: remarkablesSkiImage,
    aspectRatio: 'wide'
  },
  {
    id: 'g11',
    title: 'Historic Arrowtown Village Foliage Street',
    category: 'scenery',
    url: arrowtownVillageImage,
    aspectRatio: 'square'
  },
  {
    id: 'g12',
    title: 'Queenstown Airport Mountain Backdrop',
    category: 'scenery',
    url: queenstownAirportImage,
    aspectRatio: 'wide'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What time is Check-in and Check-out?',
    answer: 'Standard check-in is between 3:00 PM and 8:00 PM. Check-out is by 10:00 AM. If you are arriving on an earlier or later flight, please let us know in advance and we will gladly store your luggage or arrange keyless self-check-in.',
    category: 'General'
  },
  {
    question: 'Is breakfast included in the room rate?',
    answer: 'Yes! Every stay includes our full cooked Kiwi breakfast served daily between 7:30 AM and 9:30 AM in the sunroom or delivered to your room. We cater to vegan, vegetarian, gluten-free, and dairy-free dietary preferences upon request.',
    category: 'Dining'
  },
  {
    question: 'Is parking available on site?',
    answer: 'Yes, we provide complimentary, secure off-street parking directly at 7 Viscount Lane for all guests. No reservation required.',
    category: 'Amenities'
  },
  {
    question: 'How close is The Embassy B&B to Queenstown Airport?',
    answer: 'We are located in Frankton, just a 5-minute drive (2.5 km) from Queenstown International Airport (ZQN). Uber, taxi, or local bus routes run frequently.',
    category: 'Location'
  },
  {
    question: 'Do you offer free Wi-Fi?',
    answer: 'Yes, unlimited ultra-fast fiber Wi-Fi (300Mbps+ speed) is free throughout all guest rooms, suites, and garden outdoor areas.',
    category: 'Amenities'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Full refunds are provided for cancellations made up to 14 days before your scheduled check-in date. Cancellations within 14 days receive a credit for future stay dates subject to availability.',
    category: 'Policies'
  }
];

export const REVIEWS = [
  {
    id: 'r1',
    author: 'Emily & James H.',
    location: 'Sydney, Australia',
    date: 'February 2026',
    rating: 5,
    title: 'Unforgettable Queenstown retreat!',
    text: 'The Embassy B&B exceeded all our expectations! The Grand King Suite has the most breathtaking mountain view, the bed felt like sleeping on a cloud, and the daily breakfast made by Sarah & David was 5-star quality. Being 5 minutes from Frankton beach was incredible.'
  },
  {
    id: 'r2',
    author: 'Michael R.',
    location: 'Auckland, New Zealand',
    date: 'January 2026',
    rating: 5,
    title: 'Peaceful luxury near airport and town',
    text: 'I travel to Queenstown frequently for business and leisure. Staying at 7 Viscount Lane in Frankton is infinitely better than staying in noisy downtown Queenstown. Super fast Wi-Fi, quiet sleep, easy parking, and warm kiwi hospitality.'
  },
  {
    id: 'r3',
    author: 'Sophie & Liam T.',
    location: 'London, UK',
    date: 'December 2025',
    rating: 5,
    title: 'A true home away from home in NZ',
    text: 'From the warm welcome upon arrival to the immaculate cleanliness and luxury bathroom amenities, everything was flawless. The recommendations for hikes and local vineyards were spot on. We cannot wait to return!'
  }
];
