import Searchbar from './Searchbar';
import Cart from './Cart';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

export default function NavHeader() {
  return (
    <header className="bg-slate-300 min-h-[60px] px-6 relative flex items-center gap-12 shadow-md">
      <img src="../../icons/Logo.svg" alt="Brand Logo" />
      <div className="md:flex hidden mx-auto gap-16 grow">
        <NavLinks />
        <Searchbar />
      </div>
      <Link to='cart' className="ml-auto relative w-[50px] justify-between text-center flex items-center">
        <Cart />
      </Link>
    </header>
  );
}
