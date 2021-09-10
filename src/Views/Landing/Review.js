import React from 'react';
import Button from '../../Components/Button';
import Menu from '../../Components/Menu';
import { Link } from 'react-router-dom';
const Review = () => {
  const message = '"Love it, it\'s the Best. I can\'t live without it!"';
  const additionalMenu = (text, btnSize) => {
    return (
      <Link to='/pricing'>
        <Button text={text} btnClass={`gradient-blue red ${btnSize}`}></Button>
      </Link>
    );
  };
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<span key={i}> &#9733;</span>);
  }

  return (
    <div className='light-blue-background'>
      <Menu
        AdittionalMenu={() =>
          additionalMenu('TRY IT NOW', 'btn-small light-blue')
        }
      />
      <div className='row space-between padding-container'>
        <div className='review-images'>
          <img
            src={`${window.location.origin}/images/small-speaker_1.png`}
            className='img-speaker one'
            alt='no speaker'
          />
          <img
            src={`${window.location.origin}/images/small-speaker_2.png`}
            className='img-speaker two'
            alt='no speaker'
          />
        </div>
        <div className='review-information'>
          <h1 className='big-title white'> REVIEWS </h1>
          <div className='row space-between'>
            <div className='col-3 medium-text  '>
              <p> {stars} </p>
              <p className='white'> ARTIST</p>
              <p> {message}</p>
            </div>
            <div className='col-3 medium-text  '>
              <p> {stars} </p>
              <p className='white'> PRODUCER</p>
              <p> {message}</p>
            </div>
            <div className='col-3 medium-text  '>
              <p> {stars} </p>
              <p className='white'> MUSIC FAN</p>
              <p> {message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
