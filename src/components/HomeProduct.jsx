import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function HomeProduct({ product, position, index}) {
  const [stickyPos, setStickyPos] = useState({
    bool: false,
    pos: 'top',
  });
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`.home-product-section.section-${index}`);
      const div = section.querySelector(`.home__product__container`);
      const divHeight = div.clientHeight;
      const sectionHeight = section.clientHeight;
      const sectionTop = section.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const offSet = sectionTop + divHeight / 2 - windowHeight / 2;

      if (scrollTop > offSet && scrollTop < offSet + sectionHeight - divHeight) {
        setStickyPos({
          bool: true,
          pos: 'top',
        });
      } else if (scrollTop > offSet + sectionHeight - divHeight) {
        setStickyPos({ bool: false, pos: 'bottom' });
      } else {
        setStickyPos({
          bool: false,
          pos: 'top',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`home__product__container pos__${position} ${
        stickyPos.bool && 'fixed-element'
      } flex flex-col absolute ${stickyPos.pos === 'top' ? 'top-0' : 'bottom-0'} items-center max-w-[1000px] pb-4 bg-slate-400`}
    >
      <div className=" w-1/2 sm:w-[400px]">
        <img
          src={`../../images/${product.id}-0.jpg`}
          alt="Product Image"
          loading="lazy"
        />
      </div>
      <div
        className={`home__product__text__${position} text-center px max-w-[600px]`}
      >
        <h3 className="text-4xl mb-2">{product.name}</h3>
        <p className="mb-4">{product.description}</p>
        <Link
          to={`/product:${product.id}`}
          className=" bg-slate-600 px-4 py-2 rounded-md text-lg text-center"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

HomeProduct.propTypes = {
  product: PropTypes.object,
  position: PropTypes.string,
};
