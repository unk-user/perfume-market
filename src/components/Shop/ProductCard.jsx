import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className=" w-[250px] my-4 relative left-1/2 -translate-x-1/2">
      <Link>
        <div className="img__container h-[300px] relative bg-slate-400 rounded-lg">
          <img
            src={`../../images/${product.id}-0.jpg`}
            alt="product"
            loading="lazy"
            className='absolute top-1/2 -translate-y-1/2'
          />
        </div>
        <div className="h-12 px-2 pb-1">
          <p className="font-semibold text-lg font h-[20px]">{product.price}</p>
          <p className="text-sm text-ellipsis text-nowrap">{product.name}</p>
        </div>
      </Link>
    </div>
  );
}
