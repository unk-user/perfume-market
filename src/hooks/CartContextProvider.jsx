import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import data from '../data/dataset.json';

export const cartContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [cartState, setCartState] = useState([]);
  const addToCart = (id) => {
    const price = data.find((item) => {
      return item.id == id;
    }).price;
    let product = cartState.find((item) => {
      return item.id == id;
    });
    let newCart = cartState;

    if (!product) {
      let newProduct = {
        id: id,
        price: price,
        quantity: 1,
      };
      newCart.push(newProduct);
    } else {
      newCart[newCart.indexOf(product)] =
        product.quantity < 5
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product;
    }
    setCartState(newCart);
  };

  const removeFromCart = (id) => {
    let product = cartState.find((item) => {
      item.id == id;
    });
    if (!product) {
      return;
    }
    let newCart = cartState;
    if (product.quantity == 1) {
      newCart.filter((item) => {
        return item.id != id;
      });
    } else {
      newCart[newCart.indexOf(product)].quantity - 1;
    }
    setCartState(newCart);
  };

  const setQuantity = (id, quantity) => {
    const indexInCart = cartState.indexOf(
      cartState.find((item) => item.id == id)
    );
    let updatedCart = cartState;
    updatedCart[indexInCart].quantity = quantity;
    setCartState(updatedCart);
  };

  const cartContextValue = {
    cartState,
    addToCart,
    removeFromCart,
    setCartState,
    setQuantity,
  };

  return (
    <cartContext.Provider value={cartContextValue}>
      {children}
    </cartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.array,
};
