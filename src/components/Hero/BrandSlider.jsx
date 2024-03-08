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
    const colorsArray = [
      '#ad7d64',
      '#6D5B3F',
      '#989898',
      '#8B7A6C',
      '#3A4F46',
      '#727272',
      '#A09581',
      '#DAAA68',
      '#522732'
    ];

  return (
    <div className="flex items-center justify-center gap-1 flex-wrap  mx-4">
      {brands?.map((brand) => {
        return (
          <div
            key={brand}
            className=" px-2 py-1 rounded-md w-max text-xs"
            style={{
              backgroundColor:  colorsArray[Math.floor(Math.random() * 9)]
            }}
          >
            {brand}
          </div>
        );
      })}
    </div>
  );
}
