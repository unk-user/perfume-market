import { useContext } from 'react';
import { cartContext } from '../../hooks/CartContextProvider';

export default function Cart() {
  const { cartState } = useContext(cartContext);
  let totalQuantity = cartState.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  let totalPrice = cartState.reduce((total, item) => {
    const price = Number(item.price.slice(1));
    return total + price * item.quantity;
  }, 0);
  return (
    <>
      <p>{totalQuantity}</p>
      <p>${totalPrice}</p>
    </>
  );
}
