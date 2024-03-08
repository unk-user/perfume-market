import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function HomeProduct({ product, position }) {
  const initial = { opacity: 0, transition: { delay: 4, duration: 4 } };
  position === 'right' ? (initial.left = 100) : (initial.right = 100);

  return (
    <motion.div
      className={`home__product__container pos__${position} relative flex flex-col items-center p-4 bg-gray-300 bg-opacity-50 rounded-lg shadow-lg`}
      initial={initial}
      whileInView={{ opacity: 1, right: 0, left: 0 }}
      viewport={{ once: true }}
    >
      <div className=" w-1/2 sm:w-[400px]">
        <img
          src={`../../images/${product.id}-0.jpg`}
          alt="Product Image"
          loading="lazy"
        />
      </div>
      <motion.div
        className={`home__product__text__${position} relative text-center px max-w-[600px]`}
        initial={initial}
        whileInView={{
          opacity: 1,
          right: 0,
          left: 0,
          transition: { delay: 0.5 },
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl mb-2">{product.name}</h3>
        <p className="mb-6">{product.description}</p>
        <Link
          to={`shop/products/${product.id}`}
          className=" border-yellow-600 border-2 px-4 py-2 rounded-md text-lg text-center"
        >
          Shop Now
        </Link>
      </motion.div>
    </motion.div>
  );
}

HomeProduct.propTypes = {
  product: PropTypes.object,
  position: PropTypes.string,
};
