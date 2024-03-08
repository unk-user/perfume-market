import { useContext } from 'react';
import { cartContext } from '../../hooks/CartContextProvider';
import { IoCartOutline } from "react-icons/io5";

export default function Cart() {
  const { cartState } = useContext(cartContext);
  let totalQuantity = cartState.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  return (
    <>
      <IoCartOutline className="text-[32px]" />
      <p className="w-[25px]">
        {totalQuantity}
      </p>
    </>
  );
}
