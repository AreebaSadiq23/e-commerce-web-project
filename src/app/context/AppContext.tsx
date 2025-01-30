"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface AppContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  wishlist: CartItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  wishlistCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CartItem[]>([]);
  const router = useRouter();

  const [users, setUsers] = useState<{
    [email: string]: { name: string; password: string };
  }>({
    "user@example.com": { name: "John Doe", password: "password" },
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save user, cart, and wishlist to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userInfo = users[email];
    if (userInfo && userInfo.password === password) {
      const user: User = { id: Date.now(), name: userInfo.name, email: email };
      setUser(user);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  // Register function
  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (users[email]) {
      return false;
    }

    setUsers((prevUsers) => ({
      ...prevUsers,
      [email]: { name, password },
    }));

    const user: User = { id: Date.now(), name, email };
    setUser(user);
    setIsLoggedIn(true);
    return true;
  };

  // Logout function
  const logout = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setUser(null);
    setIsLoggedIn(false);
    setCart([]);
    setWishlist([]);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    router.push("/login");
  };

  // Add item to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update item quantity in cart
  const updateCartItemQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Add item to wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((item) => item.id === product.id);
      if (existingItem) {
        return prevWishlist.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevWishlist, { ...product, quantity: 1 }];
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  // Calculate total wishlist count
  const wishlistCount = wishlist.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <AppContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        register,
        logout,
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        wishlistCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
