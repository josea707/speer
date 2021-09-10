import Logo from './Logo';
const Footer = () => {
  return (
    <footer className='purple-background white padding-container'>
      <p className='medium-text row'> &#128231; support@experienceoncerts.co</p>
      <div className='center footer-logo'>
        <Logo />
        <p className='small-text'>
          {' '}
          2019 © All rights Reserved | Speer Technologies Incorporated
        </p>
      </div>
    </footer>
  );
};

export default Footer;
