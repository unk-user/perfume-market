import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <div className=" w-[240px] max-md:w-[200px] max-sm:w-[160px] my-4 relative left-1/2 -translate-x-1/2">
      <Link to={`products/${product.id}`}>
        <div className="img__container h-[300px] max-md:h-[250px] max-sm:h-[200px] relative bg-slate-400 rounded-sm">
          <img
            src={`../../images/${product.id}-0.jpg`}
            alt="product"
            loading="lazy"
            className="absolute top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="h-12 px-2 pb-1 w-full">
          <p className="font-semibold text-lg font h-[25px]">{product.price}</p>
          <p className="text-sm truncate text-nowrap">{product.name}</p>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
