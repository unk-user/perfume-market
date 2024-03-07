import PropTypes from 'prop-types';
import { CiDeliveryTruck } from 'react-icons/ci';
import { cartContext } from '../../hooks/CartContextProvider';
import { useContext, useEffect, useState } from 'react';

export default function ProductDetails({ product }) {
  const { cartState, addToCart, setCartState } = useContext(cartContext);
  const [reachedMax, setReachedMax] = useState(false);

  const cartItem = cartState.find((item) => item.id === product.id);

  useEffect(() => {
    if (cartItem) {
      setReachedMax(cartItem.quantity >= 5);
    }
  }, [cartItem]);

  const handleClick = () => {
    addToCart(product.id);
    setCartState((prevCartState) => [...prevCartState]);
  };

  return (
    <section className="flex flex-col gap-2 py-4 px-6 bg-blue-300 sm:max-w-[500px]">
      <button
        className=" bg-green-700 w-full h-[40px] text-white self-center"
        onClick={handleClick}
      >
        {!cartItem ? <>Add to cart</> : <>Added {cartItem.quantity}</>}
      </button>
      {reachedMax && (
        <div className=' text-red-700 border-2 p-2 rounded-md border-red-700 bg-opacity-50 bg-red-200'>
          You&apos;ve added the maximum quantity of this perfume to your cart (5
          items)
        </div>
      )}
      <div>
        <p className="text-xl text-wrap">{product.name}</p>
        <p className="font-semibold text-lg ml-2">{product.price}</p>
        <p className="text-sm ml-2">{product.brand}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">Description</p>
        <p className="text-sm">{product.description}</p>
      </div>
      <div className="flex items-center gap-1 rounded-md pl-2 border border-gray-50 h-12">
        <CiDeliveryTruck className="text-[24px]" />
        <p className=" text-base">Free Delivery</p>
      </div>
    </section>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object,
};
