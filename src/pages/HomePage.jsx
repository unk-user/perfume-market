import BrandSlider from '../components/Hero/BrandSlider';
import HeroSlider from '../components/Hero/HeroSlider';
import HomeProduct from '../components/Home/HomeProduct';
import dataset from '../data/dataset.json';

export default function HomePage() {
  return (
    <main className="w-full relative overflow-hidden">
      <section className=" bg-gray-200 box-border pb-5">
        <h1 className="font-semibold text-7xl max-sm:text-5xl text-center py-12">
          Top Brands
        </h1>
        <BrandSlider className=' z-30'/>
      </section>
      <HeroSlider/>
      <section className="home__product__section flex flex-col items-center gap-12 box-border overflow-x-hidden p-12 xl:gap-24 xl:p-24 overflow-y-auto">
        <h1 className="text-7xl font-semibold max-sm:text-5xl text-center my-0">
          Popular Products
        </h1>
        <HomeProduct product={dataset[0]} position="right" />
        <HomeProduct product={dataset[20]} position="left" />
        <HomeProduct product={dataset[16]} position="right" />
      </section>
    </main>
  );
}
