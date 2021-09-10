import React from 'react';

const Logo = ({ bigTitle }) => {
  return <h1 className={bigTitle ? 'big-title' : 'nav-text'}> EXP|CON </h1>;
};

export default Logo;
