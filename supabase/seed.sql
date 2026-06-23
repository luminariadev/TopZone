-- supabase/seed.sql
-- Seed data for TopZone local development
-- Populates products, product_packages, and gear_specs tables

-- Games
INSERT INTO products (slug, name, type, description, category, img, badge, color, currency, price) VALUES
('mobile-legends', 'Mobile Legends', 'game', 'Top up diamond Mobile Legends Bang Bang dengan harga terbaik. Instan, aman, dan terpercaya.', 'mobile', '/assets/mlbb.png', 'Terlaris', '#39FF14', 'Diamond', 0),
('valorant', 'Valorant', 'game', 'Beli Valorant Points (VP) untuk unlock agent, skin senjata, dan battle pass favoritmu.', 'pc', '/assets/valorant.png', 'Trending', '#FF007F', 'VP', 0),
('free-fire', 'Free Fire', 'game', 'Top up diamond Free Fire untuk beli skin karakter, senjata, dan item eksklusif lainnya.', 'mobile', '/assets/freefire.png', 'Hot Deal', '#FFE600', 'Diamond', 0);

-- Gear
INSERT INTO products (slug, name, type, description, category, img, tag, color, price) VALUES
('mechanical-keyboard', 'Mechanical Keyboard', 'gear', 'Keyboard mekanikal 75% compact dengan switch taktil dan RGB per-key. Cocok untuk gaming marathon.', 'keyboard', '/assets/keyboard.png', 'RGB Ready', '#39FF14', 350000),
('gaming-mouse', 'Gaming Mouse', 'gear', 'Mouse gaming ergonomis dengan sensor optik presisi tinggi, 7 tombol programmable, dan RGB side strip.', 'mouse', '/assets/mouse.png', '12000 DPI', '#FF007F', 250000),
('rgb-headset', 'RGB Headset', 'gear', 'Headset gaming dengan virtual 7.1 surround sound, mikrofon noise-cancelling, dan RGB earcup.', 'headset', '/assets/headset.png', 'Surround Sound', '#FFE600', 300000);

-- Mobile Legends packages
INSERT INTO product_packages (product_id, label, price)
SELECT p.id, '86 Diamond', 19000 FROM products p WHERE p.slug = 'mobile-legends'
UNION ALL SELECT p.id, '172 Diamond', 37000 FROM products p WHERE p.slug = 'mobile-legends'
UNION ALL SELECT p.id, '257 Diamond', 55000 FROM products p WHERE p.slug = 'mobile-legends'
UNION ALL SELECT p.id, '344 Diamond', 72000 FROM products p WHERE p.slug = 'mobile-legends'
UNION ALL SELECT p.id, '514 Diamond', 108000 FROM products p WHERE p.slug = 'mobile-legends'
UNION ALL SELECT p.id, '706 Diamond', 147000 FROM products p WHERE p.slug = 'mobile-legends';

-- Valorant packages
INSERT INTO product_packages (product_id, label, price)
SELECT p.id, '420 VP', 55000 FROM products p WHERE p.slug = 'valorant'
UNION ALL SELECT p.id, '740 VP', 95000 FROM products p WHERE p.slug = 'valorant'
UNION ALL SELECT p.id, '1.200 VP', 150000 FROM products p WHERE p.slug = 'valorant'
UNION ALL SELECT p.id, '2.050 VP', 255000 FROM products p WHERE p.slug = 'valorant'
UNION ALL SELECT p.id, '3.650 VP', 450000 FROM products p WHERE p.slug = 'valorant'
UNION ALL SELECT p.id, '5.350 VP', 650000 FROM products p WHERE p.slug = 'valorant';

-- Free Fire packages
INSERT INTO product_packages (product_id, label, price)
SELECT p.id, '70 Diamond', 14000 FROM products p WHERE p.slug = 'free-fire'
UNION ALL SELECT p.id, '140 Diamond', 27000 FROM products p WHERE p.slug = 'free-fire'
UNION ALL SELECT p.id, '355 Diamond', 66000 FROM products p WHERE p.slug = 'free-fire'
UNION ALL SELECT p.id, '720 Diamond', 132000 FROM products p WHERE p.slug = 'free-fire'
UNION ALL SELECT p.id, '1.450 Diamond', 260000 FROM products p WHERE p.slug = 'free-fire'
UNION ALL SELECT p.id, '2.180 Diamond', 385000 FROM products p WHERE p.slug = 'free-fire';

-- Gear specs
INSERT INTO gear_specs (product_id, label, value)
SELECT p.id, 'Layout', '75% Compact' FROM products p WHERE p.slug = 'mechanical-keyboard'
UNION ALL SELECT p.id, 'Switch', 'Blue Tactile' FROM products p WHERE p.slug = 'mechanical-keyboard'
UNION ALL SELECT p.id, 'Backlight', 'Per-key RGB' FROM products p WHERE p.slug = 'mechanical-keyboard'
UNION ALL SELECT p.id, 'Interface', 'USB-C + Wireless' FROM products p WHERE p.slug = 'mechanical-keyboard'
UNION ALL SELECT p.id, 'Battery', '4000 mAh' FROM products p WHERE p.slug = 'mechanical-keyboard'
UNION ALL SELECT p.id, 'DPI', '200 – 12.000' FROM products p WHERE p.slug = 'gaming-mouse'
UNION ALL SELECT p.id, 'Polling Rate', '1000 Hz' FROM products p WHERE p.slug = 'gaming-mouse'
UNION ALL SELECT p.id, 'Buttons', '7 programmable' FROM products p WHERE p.slug = 'gaming-mouse'
UNION ALL SELECT p.id, 'Weight', '88g' FROM products p WHERE p.slug = 'gaming-mouse'
UNION ALL SELECT p.id, 'Interface', 'USB 2.0' FROM products p WHERE p.slug = 'gaming-mouse'
UNION ALL SELECT p.id, 'Driver', '50mm Neodymium' FROM products p WHERE p.slug = 'rgb-headset'
UNION ALL SELECT p.id, 'Frequency', '20Hz – 20kHz' FROM products p WHERE p.slug = 'rgb-headset'
UNION ALL SELECT p.id, 'Microphone', 'Noise-cancelling' FROM products p WHERE p.slug = 'rgb-headset'
UNION ALL SELECT p.id, 'Audio', 'Virtual 7.1 Surround' FROM products p WHERE p.slug = 'rgb-headset'
UNION ALL SELECT p.id, 'Interface', '3.5mm + USB' FROM products p WHERE p.slug = 'rgb-headset';
