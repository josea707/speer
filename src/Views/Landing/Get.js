import React from 'react';
import Menu from '../../Components/Menu';
import Logo from '../../Components/Logo';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
const Get = () => {
  return (
    <div className='black-background'>
      <Menu />
      <div className='padding-container row space-around'>
        <div>
          <h1 className='big-title red row space-around'>
            {' '}
            GET <Logo bigTitle={true} /> NOW
          </h1>
          <p className='subtitle white'> Purchase and download the app.</p>
        </div>
        <div className='row center-vertically'>
          <Link to='/pricing'>
            <Button text='TRY IT NOW' btnClass='white btn-gradient btn-large' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Get;
