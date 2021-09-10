import React from 'react';
import Menu from '../../Components/Menu';
const Perks = ({
  backgroundC,
  subscriptionColour,
  cancellationColour,
  paymentColour,
}) => {
  const warningMessage = () => {
    return (
      <p className='medium-text'>
        No commitment, cancel anytime. Never worry about forgetting a payment
        again!
      </p>
    );
  };
  return (
    <div className={`${backgroundC} white`}>
      <Menu />
      <div className='padding-container'>
        <h1 className='big-title'> Perks</h1>
        <div className='row space-between perks-container'>
          <div className='col-3'>
            <div className={`row-lines ${subscriptionColour}-border`}></div>
            <h2 className={`subtitle ${subscriptionColour}`}>
              {' '}
              Subscription Payment Model
            </h2>
            {warningMessage()}
          </div>
          <div className='col-3'>
            <div className={`row-lines ${cancellationColour}-border`}></div>
            <h2 className={`subtitle ${cancellationColour}`}>
              {' '}
              No Fee Cancellation Policy
            </h2>
            {warningMessage()}
          </div>
          <div className='col-3'>
            <div className={`row-lines ${paymentColour}-border`}></div>
            <h2 className={`subtitle ${paymentColour}`}>
              {' '}
              Subscription Payment Model
            </h2>
            {warningMessage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
