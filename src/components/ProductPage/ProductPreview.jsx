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
        console.error(`Error loading image at index ${index}: ${error}`);
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
        />
      );
    });

    setImageElements(elements);
  }, [product.id]);

  const getImageUrls = (productId) => {
    const imageUrls = [];
    for (let i = 0; i <= 5; i++) {
      const imageUrl = `../../images/${productId}-${i}-preview.jpg`;
      imageUrls.push(imageUrl);
    }
    return imageUrls;
  };

  return (
    <section>
      <div className="flex flex-col gap-2 w-fit mb-2">
        {imageElements.map((element, index) => (
          <>
            {loadedImages.includes(index) && (
              <div className="w-[50px] hover:cursor-pointer bg-gray-200" key={index}>
                {element}
              </div>
            )}
          </>
        ))}
      </div>
      <div>
        <img src={`../../images/${product.id}.jpg`} alt="" />
      </div>
    </section>
  );
}
ProductPreview.propTypes = {
  product: PropTypes.object,
};
