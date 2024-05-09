"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    let getItem = localStorage.getItem("cart");
    let getItemParse = JSON.parse(getItem);
    if (getItemParse) {
      setBasket(getItemParse);
    }
  }, []);

  const addToBasket = useCallback(
    (newItem) => {
      let upBasket = [...basket];
      if (newItem.quantity === 10) {
        return toast.error("Daha fazla ekleyemezsin...");
      }

      const Index = upBasket.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );
      if (Index !== -1) {
        upBasket[Index].quantity += newItem.quantity || 1;
        if (upBasket[Index].quantity > 10) upBasket[Index].quantity = 10;
      } else {
        upBasket = [...upBasket, newItem];
      }

      setBasket(upBasket);
      localStorage.setItem("cart", JSON.stringify(upBasket));
    },
    [basket]
  );

  const removeBasket = useCallback(
    (newItem) => {
      let upBasket = [...basket];
      const Index = upBasket.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (Index !== -1) {
        upBasket.splice(Index, 1);
        setBasket(upBasket);
        localStorage.setItem("cart", JSON.stringify(upBasket));
      }
    },
    [basket]
  );

  let value = {
    basket,
    addToBasket,
    removeBasket,
  };
  return <CartContext.Provider value={value} {...props} />;
};

const UseCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("Bir hata durumu mevcut");
  }
  return context;
};

export default UseCart;
