import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

const ProductCard = ({
  id,
  title,
  image,
  price,
  stockCount
}) => {

  const stockAvailability = classNames({
    'ProductCard__InStock': stockCount > 0,
    'ProductCard__OutOfStock': stockCount < 1,
  });
  return (
    <div className='ProductCard' key={id}>
      <Link className='ProductCard__Link' to={`/products/${id}`}>
        <img className='ProductCard__Image' src={image} alt={title} />
        <div className='ProductCard__Title'>{title}</div>
        <div className='ProductCard__Details'>
          <div className='ProductCard__Price'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price)}</div>
          <div className={stockAvailability}>
            {stockCount > 0 ? `${stockCount} Available` : 'Out of Stock'}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard