import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <div className='flex justify-between w-[225px]'>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link> {/* Adjust paths */}
      <Link to='/about'>About Us</Link> {/* Adjust paths */}
    </div>
  );
}