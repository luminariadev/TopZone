// src/data/gears.ts
export interface Gear {
  slug: string;
  name: string;
  img: string;
  price: number;
  tag: string;
  category: 'keyboard' | 'mouse' | 'headset' | 'monitor';
  description: string;
  specs: { label: string; value: string }[];
}

export const gears: Gear[] = [
  {
    slug: 'mechanical-keyboard',
    name: 'Mechanical Keyboard',
    img: '/assets/keyboard.png',
    price: 350000,
    tag: 'RGB Ready',
    category: 'keyboard',
    description: 'Keyboard mekanikal 75% compact dengan switch taktil dan RGB per-key. Cocok untuk gaming marathon.',
    specs: [
      { label: 'Layout', value: '75% Compact' },
      { label: 'Switch', value: 'Blue Tactile' },
      { label: 'Backlight', value: 'Per-key RGB' },
      { label: 'Interface', value: 'USB-C + Wireless' },
      { label: 'Battery', value: '4000 mAh' },
    ],
  },
  {
    slug: 'gaming-mouse',
    name: 'Gaming Mouse',
    img: '/assets/mouse.png',
    price: 250000,
    tag: '12000 DPI',
    category: 'mouse',
    description: 'Mouse gaming ergonomis dengan sensor optik presisi tinggi, 7 tombol programmable, dan RGB side strip.',
    specs: [
      { label: 'DPI', value: '200 – 12.000' },
      { label: 'Polling Rate', value: '1000 Hz' },
      { label: 'Buttons', value: '7 programmable' },
      { label: 'Weight', value: '88g' },
      { label: 'Interface', value: 'USB 2.0' },
    ],
  },
  {
    slug: 'rgb-headset',
    name: 'RGB Headset',
    img: '/assets/headset.png',
    price: 300000,
    tag: 'Surround Sound',
    category: 'headset',
    description: 'Headset gaming dengan virtual 7.1 surround sound, mikrofon noise-cancelling, dan RGB earcup.',
    specs: [
      { label: 'Driver', value: '50mm Neodymium' },
      { label: 'Frequency', value: '20Hz – 20kHz' },
      { label: 'Microphone', value: 'Noise-cancelling' },
      { label: 'Audio', value: 'Virtual 7.1 Surround' },
      { label: 'Interface', value: '3.5mm + USB' },
    ],
  },
];

export function getGearBySlug(slug: string): Gear | undefined {
  return gears.find((g) => g.slug === slug);
}
