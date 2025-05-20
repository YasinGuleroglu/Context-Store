import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

// Context yapısını oluştur
const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  // Basket statae

  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const founded = basket.find((i) => i.id === product.id);

    if (founded) {

      const updated = { ...founded, amount: founded.amount + 1 };
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));

      setBasket(newBasket);
      toast.success(`Product amount updated:${updated.amount} `);
    } else {


      setBasket(basket.concat({ ...product, amount: 1 }));
      toast.success(`Product added to basket`);
    }
  };

  const removeFromBasket = (delete_id) => {
    const filtred = basket.filter((i) => i.id != delete_id);

    setBasket(filtred);
    toast.error(`Product removed from basket`);
  };

  const decreaseAmount = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id == updated.id ? updated : i));

      setBasket(newBasket);
    } else {

      removeFromBasket(delete_id);
    }
  };
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
