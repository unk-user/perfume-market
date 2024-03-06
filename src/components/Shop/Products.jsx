import ProductCard from './ProductCard';
import data from '../../data/dataset.json';

export default function Products() {
  const products = data;

  return (
    <div className='grid '>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
