import { useState, useEffect } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import sliderImages from '../../constants/heroslider';

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
  }, [activeSlide]);

  return (
    <section className="hero__slider relative slide-container w-full h-[600px]">
      <IoIosArrowDropleft
        className="absolute hover:text-gray-600 hover:text-opacity-50 left-0 z-10 slider-arrow max-md:w-[50px]"
        onClick={handlePrevSlide}
      />
      <IoIosArrowDropright
        className="absolute hover:text-gray-600 hover:text-opacity-50 right-0 z-10 slider-arrow max-md:w-[50px]"
        onClick={handleNextSlide}
      />
      {sliderImages.map((slide, index) => {
        return (
          <div
            key={slide.img}
            className={`slide bg-zinc-600 absolute w-full h-full ${
              activeSlide === index ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(../../carousel/${slide.img}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="slide-content text-sky-50 absolute bottom-12 sm:bottom-12 mx-12 md:bottom-24">
              <h3 className="text-[20px] sm:text-xl md:text-5xl  md:mb-4">
                {slide.title}
              </h3>
              <p className="text-[16px] sm:text-lg">{slide.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
