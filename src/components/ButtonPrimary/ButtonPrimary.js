import React from 'react';
import classNames from 'classnames';

import './ButtonPrimary.scss';

const ButtonPrimary = ({
  buttonText,
  onClick,
  remove,
  add,
}) => {

  const buttonStyles = classNames({
    'ButtonPrimary__Remove': remove,
    'ButtonPrimary__Add': add,
  })
  return (
    <div onClick={onClick} className={buttonStyles}>
      {buttonText}
    </div>
  )
}

export default ButtonPrimary;
