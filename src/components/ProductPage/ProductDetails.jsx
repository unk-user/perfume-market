import PropTypes from 'prop-types';

export default function ProductDetails({ product }) {
  return (
    <section className="flex flex-col py-4 px-6 bg-blue-300">
      <button className=" bg-green-700 w-full h-[40px] text-white self-center">
        Add to cart
      </button>
      <div>
        <p className="text-xl text-wrap">{product.name}</p>
        <p className="font-semibold">{product.price}</p>
        <p className="text-sm ml-2">{product.brand}</p>
      </div>
      <div className="text-lg">Delivery info</div>
      <div>
        <p className="text-lg">Description</p>
        <p className='text-sm'>{product.description}</p>
      </div>
    </section>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object,
};
