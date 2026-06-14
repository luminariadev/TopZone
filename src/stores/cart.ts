// src/stores/cart.ts
import { atom, computed } from 'nanostores';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  img: string;
  type: 'game' | 'gear';
}

export const cartItems = atom<CartItem[]>([]);

export const cartCount = computed(cartItems, (items) =>
  items.reduce((sum, item) => sum + item.qty, 0)
);

export const cartTotal = computed(cartItems, (items) =>
  items.reduce((sum, item) => sum + item.price * item.qty, 0)
);

export function addToCart(item: Omit<CartItem, 'qty'>) {
  const current = cartItems.get();
  const existing = current.find((i) => i.id === item.id);
  if (existing) {
    cartItems.set(
      current.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
    );
  } else {
    cartItems.set([...current, { ...item, qty: 1 }]);
  }
}

export function removeFromCart(id: string) {
  cartItems.set(cartItems.get().filter((i) => i.id !== id));
}

export function updateQty(id: string, qty: number) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  cartItems.set(
    cartItems.get().map((i) => (i.id === id ? { ...i, qty } : i))
  );
}

export function clearCart() {
  cartItems.set([]);
}
