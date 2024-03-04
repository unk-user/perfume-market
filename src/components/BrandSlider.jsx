export default function BrandSlider() {
  const brands = ['brand', 'brand', 'brand', 'brand', 'brand', 'brand'];

  return (<div className="flex w-full justify-evenly px-4">
    {
      brands?.map((brand) => {
        return (
          <div key={brand} className="bg-slate-400 px-4 py-1 rounded-md">
            {brand}
          </div>
        )
      })
    }
  </div>)
}
