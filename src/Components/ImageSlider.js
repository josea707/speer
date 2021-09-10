import { useState, useEffect } from 'react';
const ImageSlider = ({ images }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    startCount();
  }, [count]);
  const startCount = () => {
    setTimeout(() => setCount((count + 1) % images.length), 10000);
  };
  console.log(count);
  return (
    <div className='slideshow-container'>
      <div className='mySlides fade'>
        <img src={images[count]} />
      </div>
      <div className='center'>
        {images.map((product, index) => (
          <div key={index}>
            <span className='dot' onClick={() => setCount(index)}>
              {console.log(index)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
