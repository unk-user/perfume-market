import BrandSlider from '../components/BrandSlider';
import HeroSlider from '../components/HeroSlider';
import HomeProduct from '../components/HomeProduct';
import dataset from '../data/dataset.json';

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden h-[5000px]">
      <section className=" bg-orange-400 box-border pb-2">
        <h1 className="font-semibold text-7xl text-center py-16">Top Brands</h1>
        <BrandSlider />
      </section>
      <HeroSlider />
      <section className="home-product-section flex flex-col items-center box-border overflow-x-hidden gap-52 p-12 my-2 xl:p-24 overflow-y-auto bg-amber-600">
        <HomeProduct product={dataset[0]} position="right" />
        <HomeProduct product={dataset[20]} position="left" />
      </section>
    </main>
  );
}
