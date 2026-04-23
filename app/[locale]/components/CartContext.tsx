"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  slug: string;
  titre: string;
  type: string;
  prix: number;
  photo: string;
};

type CartContextType = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (slug: string) => void;
  isInCart: (slug: string) => boolean;
  count: number;
  clear: () => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  add: () => {},
  remove: () => {},
  isInCart: () => false,
  count: 0,
  clear: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("zoh-panier");
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("zoh-panier", JSON.stringify(items));
  }, [items]);

  const add = (item: CartItem) => {
    setItems((prev) => prev.find((i) => i.slug === item.slug) ? prev : [...prev, item]);
  };

  const remove = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const isInCart = (slug: string) => items.some((i) => i.slug === slug);

  return (
    <CartContext.Provider value={{ items, add, remove, isInCart, count: items.length, clear: () => setItems([]) }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
