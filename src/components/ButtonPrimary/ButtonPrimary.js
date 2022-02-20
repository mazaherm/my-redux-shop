import React from 'react';

import './ButtonPrimary.scss';

const ButtonPrimary = ({
  buttonText,
  onClick,
}) => {
  return (
    <div onClick={onClick} className='ButtonPrimary'>
      {buttonText}
    </div>
  )
}

export default ButtonPrimary;
