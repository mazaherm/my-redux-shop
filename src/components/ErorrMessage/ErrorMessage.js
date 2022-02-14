import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import './ErrorMessage.scss';

const ErrorMessage = () => {
  return (
    <div className='ErrorMessage'>
      <FontAwesomeIcon
        className='ErrorMessage__Icon'
        icon={faTriangleExclamation}
        size="3x"
      />
      <div className='ErrorMessage__Text'>
        Sorry, something wen't wrong!
      </div>
    </div>
  )
}

export default ErrorMessage