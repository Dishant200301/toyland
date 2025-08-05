import { useState, useCallback } from "react";

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set());

  const toggleWishlist = useCallback((productId: number) => {
    setWishlistItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  }, []);

  const isInWishlist = useCallback(
    (productId: number): boolean => {
      return wishlistItems.has(productId);
    },
    [wishlistItems]
  );

  return { toggleWishlist, isInWishlist };
};
