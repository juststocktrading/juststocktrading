import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  ratingCount?: number;
  addedAt: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (item: Omit<WishlistItem, "addedAt">) => void;
  removeItem: (id: string) => void;
  clearAll: () => void;
  isInWishlist: (id: string) => boolean;
  moveToCart: (id: string) => WishlistItem | undefined;
}

const useWishlist = create(
  persist<WishlistStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existing = currentItems.find((item) => item.id === data.id);

        if (existing) {
          toast("Item is already in your wishlist.");
          return;
        }

        const newItem: WishlistItem = {
          ...data,
          addedAt: new Date().toISOString(),
        };

        set({ items: [newItem, ...currentItems] });
        toast.success("Added to wishlist!");
      },
      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
        toast.success("Removed from wishlist.");
      },
      clearAll: () => {
        set({ items: [] });
        toast.success("Wishlist cleared.");
      },
      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id);
      },
      moveToCart: (id) => {
        const item = get().items.find((i) => i.id === id);
        if (item) {
          set({
            items: get().items.filter((i) => i.id !== id),
          });
          return item;
        }
        return undefined;
      },
    }),
    {
      name: "wishlist-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useWishlist;
