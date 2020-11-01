import React from "react";
import { useLocalStore } from "mobx-react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    cart: [],
    addToCart: (product) => {
      if (!addOrRemoveExistProduct(true, store.cart, product))
        store.cart.push({ product: product, count: 1 });
    },
    removeFromCart: (product) => {
      addOrRemoveExistProduct(false, store.cart, product);
    },
    getProductInCart: (product) => {
      const existproduct = store.cart.find(
        (c) => c.product.code === product.code
      );

      return existproduct;
    },
    get total() {
      const totalPrice = store.cart.reduce((acc, current) => {
        const prodPrice = current.product.price * current.count;
        return acc + prodPrice;
      }, 0);
      const totalCount = store.cart.length;
      return { totalPrice, totalCount };
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const addOrRemoveExistProduct = (isAdd, cart, product) => {
  const existProduct = cart.find((c) => c.product.code === product.code);
  if (existProduct) {
    const existIdxProduct = cart.indexOf(existProduct);
    if (isAdd) {
      cart[existIdxProduct].count++;
    } else {
      if (cart[existIdxProduct].count === 1) {
        cart.splice(existIdxProduct, 1);
        return;
      } else {
        cart[existIdxProduct].count--;
      }
    }
    return true;
  }

  return false;
};

export { StoreContext, StoreProvider };
