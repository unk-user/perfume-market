import { useState, useEffect } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import sliderImages from '../constants/heroslider';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + sliderImages.length) % sliderImages.length
    );
  };

  useEffect(() => {
    const handleAutoplay = () => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    };

    const intervalId = setInterval(handleAutoplay, 10000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section className="relative bg-neutral-800 slide-container aspect-[2.5/1]">
      <IoIosArrowDropleft
        className="absolute left-0 z-10 slider-arrow max-md:w-[30px]"
        onClick={handlePrevSlide}
      />
      <IoIosArrowDropright
        className="absolute right-0 z-10 slider-arrow max-md:w-[30px]"
        onClick={handleNextSlide}
      />
      {sliderImages.map((slide, index) => {
        return (
          <div
            key={slide.img}
            className={`slide bg-zinc-600 absolute w-full h-full ${activeSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(../../carousel/${slide.img}.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="slide-content text-sky-50 absolute bottom-6 sm:bottom-12 mx-12 md:bottom-24">
              <h3 className='text-[14px] sm:text-xl md:text-5xl  md:mb-4'>{slide.title}</h3>
              <p className='text-[10px] sm:text-lg'>{slide.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
