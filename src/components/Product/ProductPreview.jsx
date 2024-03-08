import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function ProductPreview({ product }) {
  const [imageElements, setImageElements] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const loadImage = async (url, index) => {
      try {
        const img = new Image();
        img.src = url;
        await img.decode(); // Wait until the image is fully loaded
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
      } catch (error) {
        return;
      }
    };

    const urls = getImageUrls(product.id);
    const elements = urls.map((url, index) => {
      loadImage(url, index);
      return (
        <img
          key={index}
          src={url}
          onClick={() => setActiveSlide(index)}
          alt={product.name}
          loading="lazy"
        />
      );
    });

    setImageElements(elements);
  }, [product.id, product.name]);

  const getImageUrls = (productId) => {
    const imageUrls = [];
    for (let i = 0; i <= 5; i++) {
      const imageUrl = `../../images/${productId}-${i}-preview.jpg`;
      imageUrls.push(imageUrl);
    }
    return imageUrls;
  };

  return (
    <section className="flex bg-gray-300 relative grow-0 sm:max-w-[500px] h-max">
      <div className="flex flex-col h-fit gap-2 w-1/6 my-2 -left-8 absolute opacity-50 hover:opacity-100 duration-200">
        {imageElements.map((element, index) => (
          <div className="hover:cursor-pointer bg-gray-200" key={index}>
            {loadedImages.includes(index) && <>{element}</>}
          </div>
        ))}
      </div>
      <div className="overflow-hidden">
        <img
          src={`../../images/${product.id}-${activeSlide}.jpg`}
          loading="lazy"
          className=" duration-500"
        />
      </div>
    </section>
  );
}
ProductPreview.propTypes = {
  product: PropTypes.object,
};
