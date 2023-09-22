// store/cart.js
import create from "zustand";

export const useCartStore = create((set) => ({
  items: [],

  addItem: (item: any, quantity: number) =>
  set((state: any) => ({
    items: [...state.items, { ...item, quantity }],
  })),

  removeItem: (itemId: string) =>
    set((state: any) => ({
      items: state.items.filter((item: any) => item.id !== itemId),
    })),

  clearCart: () => set({ items: [] }),
}));
