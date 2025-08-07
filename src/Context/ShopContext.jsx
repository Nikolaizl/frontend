import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        { ...product, price: Number(product.price), quantity: 1 },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const [selectedCategory, setSelectedCategory] = useState("shop");
  const [selectedProduct, setSelectedProductState] = useState(
    JSON.parse(localStorage.getItem("selectedProduct")) || null
  );

  const setSelectedProduct = (product) => {
    setSelectedProductState(product);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalItems,
    selectedCategory,
    setSelectedCategory,
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
