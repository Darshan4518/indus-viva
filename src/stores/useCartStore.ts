import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  pv: number;
  price: number;
  quantity: number;
  img: string;
}

interface CartStore {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  incQuantity: (id: number) => void;
  decQuantity: (id: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (cartItem) => cartItem.id === item.id
          );

          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + quantity }
                  : cartItem
              ),
            };
          } else {
            return {
              items: [...state.items, { ...item, quantity }],
            };
          }
        });
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      incQuantity: (id) => {
        const item = get().items.find((item) => item.id === id);
        if (item) {
          get().updateQuantity(id, item.quantity + 1);
        }
      },

      decQuantity: (id) => {
        const item = get().items.find((item) => item.id === id);
        if (item && item.quantity > 1) {
          get().updateQuantity(id, item.quantity - 1);
        } else {
          get().removeFromCart(id);
        }
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
