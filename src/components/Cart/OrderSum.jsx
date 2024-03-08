import { cartContext } from '../../hooks/CartContextProvider';
import { useContext } from 'react';

export default function OrderSum() {
  const { cartState } = useContext(cartContext);
  const total = cartState.reduce((sum, item) => {
    return sum + Number(item.price.slice(1)) * item.quantity;
  }, 0);

  return (
    <section className="flex flex-col lg:min-w-[450px] max-sm:text-xs max-md:max-h-[200px] bg-gray-200 px-6 py-8 max-md:py-4 gap-2">
      <h1 className="text-2xl font-semibold mb-6 max-md:mb-2">Order Summary</h1>
      <ul className='flex flex-col gap-2'>
        <li className="flex justify-between">
          <p>Sub Total</p>
          <p>{'$' + total}</p>
        </li>
        <li className="flex justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </li>
        <li className="flex justify-between mt-2 max-md:mt-0 text-lg font-semibold">
          <p>Order Total</p>
          <p>{'$' + total}</p>
        </li>
      </ul>
      <button className='bg-red-500 h-[50px] mt-6 max-md:mt-0 text-white text-lg'>Checkout</button>
    </section>
  );
}
