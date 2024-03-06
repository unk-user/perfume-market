import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className=" w-[250px] my-4 relative left-1/2 -translate-x-1/2">
      <Link>
        <div className="img__container bg-slate-400 rounded-lg">
          <img
            src={`../../images/${product.id}-0.jpg`}
            alt="product"
            loading="lazy"
          />
        </div>
        <div className="h-max px-2 pb-1">
          <p className="font-semibold text-lg font h-[20px]">{product.price}</p>
          <p className="text-sm">{product.name}</p>
        </div>
      </Link>
    </div>
  );
}
