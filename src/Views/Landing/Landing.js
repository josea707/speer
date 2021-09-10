import React, { Fragment } from 'react';
import Hero from './Hero';
import Red from './Red';
import Perks from '../Pricing/Perks';
import Review from './Review';
import Get from './Get';
const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Red />
      <Perks
        backgroundC='black-background'
        subscriptionColour='red'
        cancellationColour='light-blue'
        paymentColour='dark-yellow'
      />
      <Review />
      <Get />
    </Fragment>
  );
};

export default Landing;
