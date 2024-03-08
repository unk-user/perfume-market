import Products from '../components/Shop/Products';
import data from '../data/dataset.json';

export default function ShopPage() {

  return (
    <main className="xl:w-[1250px] lg:w-[950px] md:w-[750px] w-[350px] sm:w-[700px] m-auto">
      <Products products={data}/>
    </main>
  );
}
