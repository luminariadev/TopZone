import { atom, computed } from 'nanostores';

export interface WishlistItem {
  id: string;
  name: string;
  img: string;
  price: number;
  type: 'game' | 'gear';
  slug: string;
}

const STORAGE_KEY = 'topzone_wishlist';

function loadWishlist(): WishlistItem[] {
  try {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return saved ? JSON.parse(saved) : [];
  } catch { return []; }
}

function saveWishlist(items: WishlistItem[]) {
  try {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

export const wishlistItems = atom<WishlistItem[]>(loadWishlist());
export const wishlistCount = computed(wishlistItems, (items) => items.length);

export function addToWishlist(item: WishlistItem) {
  const current = wishlistItems.get();
  if (current.some((i) => i.id === item.id)) return;
  const updated = [...current, item];
  wishlistItems.set(updated);
  saveWishlist(updated);
}

export function removeFromWishlist(id: string) {
  const updated = wishlistItems.get().filter((i) => i.id !== id);
  wishlistItems.set(updated);
  saveWishlist(updated);
}

export function toggleWishlist(item: WishlistItem): boolean {
  const current = wishlistItems.get();
  if (current.some((i) => i.id === item.id)) {
    removeFromWishlist(item.id);
    return false;
  }
  addToWishlist(item);
  return true;
}

export function isInWishlist(id: string): boolean {
  return wishlistItems.get().some((i) => i.id === id);
}
