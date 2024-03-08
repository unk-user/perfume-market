import { useParams } from 'react-router-dom';
import ProductDetails from '../components/Product/ProductDetails';
import data from '../data/dataset.json';
import ProductPreview from '../components/Product/ProductPreview';
import Products from '../components/Shop/Products';

export default function ProductPage() {
  const { productId } = useParams();
  let product = data.find((item) => item.id == productId);
  const products = data.filter((item) => {
    return item.id != productId && item.category === product.category;
  });

  if (!product) {
    return (
      <main>
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className="px-12">
      <div className="flex justify-center py-16">
        <div className="flex flex-col gap-2 lg:flex-row">
          <ProductPreview product={product} />
          <ProductDetails product={product} />
        </div>
      </div>
      <div className='lg:px-32'>
        <h1 className='text-xl'>More Products</h1>
        <Products products={products}/>
      </div>
    </main>
  );
}
