import React from 'react';

const Button = ({ action, btnClass, text }) => {
  return (
    <div>
      <button className={btnClass} onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default Button;
