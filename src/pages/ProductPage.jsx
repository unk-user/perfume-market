import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductPage/ProductDetails';
import data from '../data/dataset.json';
import ProductPreview from '../components/ProductPage/ProductPreview';

export default function ProductPage() {
  const { productId } = useParams();
  let product = data.find((item) => item.id == productId);

  if (!product) {
    return (
      <main>
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className="px-12">
      <div className="flex justify-center py-12">
        <div className="flex flex-col gap-2 sm:flex-row">
          <ProductPreview product={product} />
          <ProductDetails product={product} />
        </div>
      </div>
      <div>
        <p>More Products</p>
      </div>
    </main>
  );
}
