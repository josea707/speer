import React, { useState, useEffect } from 'react';
import Menu from '../../Components/Menu';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
const Hero = () => {
  const images = [
    window.location.origin + '/images/hero_1.png',
    window.location.origin + '/images/hero_2.png',
    window.location.origin + '/images/hero_3.png',
  ];
  const message = `Experience your favourite artists like never \n
   before and from the comfort of your own home.`;
  const [count, setCount] = useState(0);
  useEffect(() => {
    startCount();
  }, [count]);
  const startCount = () => {
    setTimeout(() => setCount((count + 1) % images.length), 10000);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${images[count]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Menu />
      <div className='white center padding-container'>
        <h2 className='hero-title'> INTERACTIVE CONCERT EXPERIENCE</h2>
        <p className='hero-message center'>
          Experience your favourite artists like never
          {<br />}
          before and from the comfort of your own home.
        </p>
        <Link to='/pricing'>
          <Button text='TRY IT NOW' btnClass='white btn-gradient btn-medium' />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
