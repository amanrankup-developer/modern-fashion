"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState([]);

  const toggle = (id) => {
    setIds((prev) => {
      const exists = prev.includes(id);

      if (exists) {
        return prev.filter((itemId) => itemId !== id);
      }

      return [...prev, id];
    });
  };

  const isWishlisted = (id) => {
    return ids.includes(id);
  };

  const count = useMemo(() => {
    return ids.length;
  }, [ids]);

  const value = {
    ids,
    count,
    toggle,
    isWishlisted,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used within WishlistProvider"
    );
  }

  return context;
}