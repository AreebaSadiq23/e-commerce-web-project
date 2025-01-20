"use client";
import React, { createContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {
    console.warn("addToCart called without a CartProvider");
  },
  removeFromCart: () => {
    console.warn("removeFromCart called without a CartProvider");
  },
  clearCart: () => {
    console.warn("clearCart called without a CartProvider");
  },
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    console.log("Removing from cart:", id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    console.log("Clearing cart");
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
