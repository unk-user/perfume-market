import data from '../../data/dataset.json';
import PropTypes from 'prop-types';
import { cartContext } from '../../hooks/CartContextProvider';
import { useContext } from 'react';

export default function CartItem({ id, quantity }) {
  const product = data.find((item) => item.id === id);
  const { setCartState, setQuantity } = useContext(cartContext);

  const handleQuantity = (e) => {
    setQuantity(id, Number(e.target.value));
    setCartState((prevState) => [...prevState]);
  };

  return (
    <div className="flex items center">
      <div>
        <img
          src={`../../images/${id}-0.jpg`}
          className="w-[100px]"
          loading="lazy"
          alt={product.name}
        />
      </div>
      <ul>
        <li>
          <p className='text-xl font-bold'>{product.name}</p>
          <p>{'$' + Number(product.price.slice(1)) * quantity}</p>
        </li>
        <li>
          {product.category + "'s"}
        </li>
        <li>
          {product.brand}
        </li>
        <li>
          <p>Qty:</p>
          <select name="quantity" onChange={handleQuantity}>
            <option value="1" selected={quantity == 1}>1</option>
            <option value="2" selected={quantity == 2}>2</option>
            <option value="3" selected={quantity == 3}>3</option>
            <option value="4" selected={quantity == 4}>4</option>
            <option value="5" selected={quantity == 5}>5</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
};
