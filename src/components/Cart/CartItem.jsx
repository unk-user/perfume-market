import data from '../../data/dataset.json';
import PropTypes from 'prop-types';
import { cartContext } from '../../hooks/CartContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function CartItem({ id, quantity }) {
  const product = data.find((item) => item.id === id);
  const { setCartState, setQuantity, removeFromCart } = useContext(cartContext);

  const handleQuantity = (e) => {
    setQuantity(id, Number(e.target.value));
    setCartState((prevState) => [...prevState]);
  };
  const handleRemove = () => {
    removeFromCart(id);
    setCartState((prevState) => [...prevState]);
  };

  return (
    <div className="flex p-2 bg-orange-200">
      <div className="w-[120px] overflow-hidden p-2">
        <img
          src={`../../images/${id}-0.jpg`}
          className="w-[120px]"
          loading="lazy"
          alt={product.name}
        />
      </div>
      <ul className='grow w-min'>
        <li className="flex items-end justify-between w-full pr-2">
          <Link to={`/shop/products/${id}`}>
            <p className="text-xl font-bold h-fit underline">{product.name}</p>
          </Link>
          <p className="font-bold">
            {'$' + Number(product.price.slice(1)) * quantity}
          </p>
        </li>
        <li className="-mt-1 -mb-2">{product.category[0].toUpperCase() + product.category.slice(1) + "'s"}</li>
        <li>{product.brand}</li>
        <li className="flex items-center mt-1 gap-4">
          <p className="text-sm">Qty:</p>
          <select
            name="quantity"
            defaultValue={`${quantity}`}
            onChange={handleQuantity}
            className="text-[14px] w-[35px] shadow-md focus:outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>
        <li
          onClick={() => {
            handleRemove();
          }}
          className="font-semibold underline hover:cursor-pointer w-fit mt-6"
        >
          Remove
        </li>
      </ul>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
};
