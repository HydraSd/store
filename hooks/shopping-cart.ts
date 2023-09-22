import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartProduct[];
  addItem: (data: CartProduct, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateQuantity: (id: string, quantity: number) => void; // New action to update quantity
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: CartProduct, quantity: number) => {
      const currentItems = get().items;
      const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);

      if (existingItemIndex !== -1) {
        // If item already exists, update its quantity instead of adding a new one
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += quantity;
        set({ items: updatedItems });
        toast.success("Item quantity updated in cart");
      } else {
        set((state: any) => ({
          items: [...state.items, { ...data, quantity }],
        }));
        toast.success("Item added to cart");
      }
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success("Item removed from the cart");
    },
    removeAll: () => set({ items: [] }),
    updateQuantity: (id: string, quantity: number) => {
      const currentItems = get().items;
      const existingItemIndex = currentItems.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity = quantity;
        set({ items: updatedItems });
        toast.success(`Item quantity updated to ${quantity}`);
      }
    },
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage),
  })
);

export default useCart;
