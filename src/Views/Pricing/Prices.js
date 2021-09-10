import React from 'react';
import Menu from '../../Components/Menu';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
const Prices = () => {
  return (
    <div className='black-background white'>
      <Menu />
      <div className='padding-container'>
        <h1 className='big-title'> Pricing</h1>
        <p className='subtitle'>
          {' '}
          Test our app today! Choose from three subscription Based payment
          models{' '}
        </p>
        <div className='pricing-container row space-between'>
          <div className='pricing-container__plan col-3'>
            <div className='red'>
              <p className='subtitle'> BASIC </p>
              <div className={`row-lines red-border`}></div>
              <p className='subtitle'> MONTHLY</p>
              <p className='pricing-container__plan--price'> $9</p>
            </div>
            <ul>
              <li> Very good </li>
              <li> Amazing </li>
              <li> Perfect job </li>
              <li> Love this</li>
              <li> It's so good</li>
              <li> Features</li>
            </ul>
            <Link to='/payments'>
              <Button
                text='TRY IT NOW'
                btnClass='white red-background btn-medium '
              />
            </Link>
          </div>
          <div className='pricing-container__plan col-3'>
            <div className='dark-yellow'>
              <p className='subtitle'> ADVANCED </p>
              <div className={`row-lines dark-yellow-border`}></div>
              <p className='subtitle'> YEARLY</p>
              <p className='pricing-container__plan--price'> $99</p>
            </div>
            <ul>
              <li> Very very good </li>
              <li> Even Amazing </li>
              <li> Perfect job </li>
              <li> Love this more </li>
              <li> It's so so good</li>
              <li> More Features</li>
            </ul>
            <Link to='/payments'>
              <Button
                text='TRY IT NOW'
                btnClass='white dark-yellow-background btn-medium '
              />
            </Link>
          </div>
          <div className='pricing-container__plan col-3'>
            <div className='light-blue'>
              <p className='subtitle'> PRO </p>
              <div className={`row-lines light-blue-border`}></div>
              <p className='subtitle'>YEARLY</p>
              <p className='pricing-container__plan--price'> $120</p>
            </div>
            <ul>
              <li> Very very good </li>
              <li> Even more </li>
              <li> Perfect job </li>
              <li> Love this more </li>
              <li> It's so so good</li>
              <li> More Features</li>
            </ul>
            <Link to='/payments'>
              <Button
                text='TRY IT NOW'
                btnClass='white light-blue-background btn-medium '
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
