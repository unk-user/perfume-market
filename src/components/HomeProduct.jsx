import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HomeProduct({ product, position }) {
  return (
    <div
      className={`home__product__container pos__${position} flex flex-col items-center max-w-[1000px] pb-4 bg-slate-400`}
    >
      <div className=" w-1/2 sm:w-[400px]">
        <img
          src={`../../images/${product.id}-0.jpg`}
          alt="Product Image"
          loading="lazy"
        />
      </div>
      <div
        className={`home__product__text__${position} text-center px max-w-[600px]`}
      >
        <h3 className="text-4xl mb-2">{product.name}</h3>
        <p className="mb-4">{product.description}</p>
        <Link
          to={`/product:${product.id}`}
          className=" bg-slate-600 px-4 py-2 rounded-md text-lg text-center"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

HomeProduct.propTypes = {
  product: PropTypes.object,
  position: PropTypes.string,
};
