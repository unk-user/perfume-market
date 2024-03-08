import { cartContext } from '../../hooks/CartContextProvider';
import { useContext } from 'react';
import CartItem from './CartItem';

export default function CartList() {
  const { cartState } = useContext(cartContext);

  return (
    <ul className='flex flex-col gap-2 lg:w-[800px]'>
    {cartState.map((product) => {
      return (
        <li key={product.id}>
          <CartItem id={product.id} quantity={product.quantity} />
        </li>
      );
    })}
  </ul>
  )
}