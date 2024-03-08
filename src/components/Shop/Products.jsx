import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

export default function Products({products}) {

  return (
    <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}


Products.propTypes = {
  products: PropTypes.array
}
