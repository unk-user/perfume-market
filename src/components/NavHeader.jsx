import Searchbar from './Searchbar';
import Cart from './Cart';
import NavLinks from './NavLinks';

export default function NavHeader() {
  return (
    <div className="bg-slate-300 min-h-[60px] px-6 relative flex content-center flex-wrap gap-12">
      <img src="../../icons/Logo.svg" alt="Brand Logo" />
      <div className="md:flex hidden mx-auto gap-16 grow">
        <NavLinks />
        <Searchbar />
      </div>
      <div className="ml-auto">
        <Cart />
      </div>
    </div>
  );
}
