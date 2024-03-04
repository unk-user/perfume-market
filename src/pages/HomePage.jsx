import BrandSlider from '../components/BrandSlider';
import HomeProduct from '../components/HomeProduct';

export default function HomePage() {
  return (
    <main>
      <h1 className='font-semibold text-7xl text-center my-16'>Top Brands</h1>
      <BrandSlider />
      <HomeProduct />
    </main>
  );
}
