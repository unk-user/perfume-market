import dataset from '../../data/dataset.json';

export default function BrandSlider() {
  const brands = dataset
    .map((product) => {
      return product.brand;
    })
    .reduce((arr, item) => {
      if (!arr.includes(item)) arr.push(item);
      return arr;
    }, [])
    .sort(() => Math.random() - 0.5);

  return (
    <div className="flex items-center justify-center gap-1 flex-wrap  mx-6">
      {brands?.map((brand) => {
        return (
          <div
            key={brand}
            className="bg-slate-400 px-4 py-1 rounded-md w-max text-xs"
          >
            {brand}
          </div>
        );
      })}
    </div>
  );
}
