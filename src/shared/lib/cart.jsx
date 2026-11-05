import { createContext, useContext, useState } from "react";

const CartCtx = createContext({ items: [], add: () => {}, count: 0 });
export const useCart = () => useContext(CartCtx);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const add = (product, qty = 1) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      return found
        ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
        : [...prev, { id: product.id, title: product.title, qty }];
    });

  const count = items.reduce((s, i) => s + i.qty, 0);

  return <CartCtx.Provider value={{ items, add, count }}>{children}</CartCtx.Provider>;
}