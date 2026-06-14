// src/data/games.ts
export interface GamePackage {
  id: string;
  label: string;
  price: number;
}

export interface Game {
  slug: string;
  name: string;
  img: string;
  color: string;
  badge: string;
  category: 'mobile' | 'pc' | 'console';
  currency: string;
  description: string;
  packages: GamePackage[];
}

export const games: Game[] = [
  {
    slug: 'mobile-legends',
    name: 'Mobile Legends',
    img: '/assets/mlbb.png',
    color: '#39FF14',
    badge: 'Terlaris',
    category: 'mobile',
    currency: 'Diamond',
    description: 'Top up diamond Mobile Legends Bang Bang dengan harga terbaik. Instan, aman, dan terpercaya.',
    packages: [
      { id: 'mlbb-86', label: '86 Diamond', price: 19000 },
      { id: 'mlbb-172', label: '172 Diamond', price: 37000 },
      { id: 'mlbb-257', label: '257 Diamond', price: 55000 },
      { id: 'mlbb-344', label: '344 Diamond', price: 72000 },
      { id: 'mlbb-514', label: '514 Diamond', price: 108000 },
      { id: 'mlbb-706', label: '706 Diamond', price: 147000 },
    ],
  },
  {
    slug: 'valorant',
    name: 'Valorant',
    img: '/assets/valorant.png',
    color: '#FF007F',
    badge: 'Trending',
    category: 'pc',
    currency: 'VP',
    description: 'Beli Valorant Points (VP) untuk unlock agent, skin senjata, dan battle pass favoritmu.',
    packages: [
      { id: 'valo-420', label: '420 VP', price: 55000 },
      { id: 'valo-740', label: '740 VP', price: 95000 },
      { id: 'valo-1200', label: '1.200 VP', price: 150000 },
      { id: 'valo-2050', label: '2.050 VP', price: 255000 },
      { id: 'valo-3650', label: '3.650 VP', price: 450000 },
      { id: 'valo-5350', label: '5.350 VP', price: 650000 },
    ],
  },
  {
    slug: 'free-fire',
    name: 'Free Fire',
    img: '/assets/freefire.png',
    color: '#FFE600',
    badge: 'Hot Deal',
    category: 'mobile',
    currency: 'Diamond',
    description: 'Top up diamond Free Fire untuk beli skin karakter, senjata, dan item eksklusif lainnya.',
    packages: [
      { id: 'ff-70', label: '70 Diamond', price: 14000 },
      { id: 'ff-140', label: '140 Diamond', price: 27000 },
      { id: 'ff-355', label: '355 Diamond', price: 66000 },
      { id: 'ff-720', label: '720 Diamond', price: 132000 },
      { id: 'ff-1450', label: '1.450 Diamond', price: 260000 },
      { id: 'ff-2180', label: '2.180 Diamond', price: 385000 },
    ],
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
