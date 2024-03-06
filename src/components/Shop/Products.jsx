import ProductCard from './ProductCard';
import data from '../../data/dataset.json';

export default function Products() {
  const products = data;

  return (
    <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}
