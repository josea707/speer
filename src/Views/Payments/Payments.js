import React, { useState } from 'react';
import Menu from '../../Components/Menu';
import Button from '../../Components/Button';
const Payments = () => {
  const [payment, setPayment] = useState({
    plan: 'BASIC',
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    ccv: '',
  });
  const onChange = (e) =>
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  return (
    <div>
      <Menu />
      <div className='padding-container'>
        <h1 className='big-title'> Payment</h1>
        <div className='pricing-plan row'>
          <div className='col-2'>
            <h2 className='form-title'> 1. Select your plan</h2>
            <div className='form-selection row space-between'>
              <div>
                <input
                  type='radio'
                  name='plan'
                  id='basic'
                  value='BASIC'
                  onClick={onChange}
                />
                <label htmlFor='basic' className='red form-selection__text'>
                  BASIC
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  name='plan'
                  id='advanced'
                  value='ADVANCED'
                  onClick={onChange}
                />
                <label
                  htmlFor='advanced'
                  className='dark-yellow form-selection__text'
                >
                  ADVANCED
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  name='plan'
                  id='pro'
                  value='PRO'
                  onClick={onChange}
                />
                <label
                  htmlFor='pro'
                  className='light-blue form-selection__text'
                >
                  PRO
                </label>
              </div>
            </div>
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <h2 className='form-title'> 2. Billing Information</h2>
            <div className='col'>
              <label htmlFor='fullName'> FULL NAME</label>
              <input
                type='text'
                name='fullName'
                id='fullName'
                value={payment.fullName}
                onChange={onChange}
              />
              <label htmlFor='address'>BILLING ADDRESS</label>
              <input
                type='text'
                name='address'
                id='address'
                value={payment.address}
                onChange={onChange}
              />
              <div className='row'>
                <label htmlFor='city'>CITY</label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  value={payment.city}
                  onChange={onChange}
                />
                <label htmlFor='postalCode'>POSTAL CODE</label>
                <input
                  type='text'
                  name='postalCode'
                  id='postalCode'
                  value={payment.postalCode}
                  onChange={onChange}
                />
              </div>
              <label htmlFor='country'>COUNTRY</label>
              <select
                id='country'
                name='country'
                value={payment.country}
                onChange={onChange}
              >
                <option value=''> </option>
                <option value='Canada'>Canada</option>
              </select>
            </div>
          </div>
          <div className='col-2'>
            <h2 className='form-title'> 2. Credit Card Information</h2>
            <div className='col'>
              <label htmlFor='cardName'> CARDHOLDER’S NAME</label>
              <input
                type='text'
                name='cardName'
                id='cardName'
                value={payment.cardName}
                onChange={onChange}
              />
              <label htmlFor='cardNumber'> CARD NUMBER </label>
              <input
                type='text'
                name='cardNumber'
                id='cardNumber'
                value={payment.cardNumber}
                onChange={onChange}
              />
              <div className='row'>
                <label htmlFor='expiryMonth'>EXPIRY MONTH</label>
                <select
                  id='expiryMonth'
                  name='expiryMonth'
                  value={payment.expiryMonth}
                  onChange={onChange}
                >
                  <option value=''> </option>
                </select>
                <label htmlFor='expiryYear'>EXPIRY YEAR</label>
                <select
                  id='expiryYear'
                  name='expiryYear'
                  value={payment.expiryYear}
                  onChange={onChange}
                >
                  <option value=''> </option>
                </select>
              </div>
              <label htmlFor='ccv'> CCV</label>
              <input
                type='text'
                name='ccv'
                id='ccv'
                value={payment.ccv}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <p>
          {' '}
          By continuining, I acknowledge that I've read and agree to the{' '}
          <span className='purple'> Terms of Service </span>
          &amp; <span className='purple'> Privacy Policy</span>
        </p>
        <Button text='DOWNLOAD' btnClass='white btn-gradient' />
      </div>
    </div>
  );
};

export default Payments;
