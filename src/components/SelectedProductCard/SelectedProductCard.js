import React from 'react';

import './SelectedProductCard.scss';

// import Button here - this will be an add to basket which will take in a function. the function will be handled in the SelectedProductPage

const SelectedProductCard = ({
  id,
  category,
  description,
  image,
  price,
  title,
}) => {
  return (
    <div className='SelectedProductCard' key={id}>
      <div className='SelectedProductCard__ProductDetails'>
          <div className='SelectedProductCard__Title'>{title}<span className='SelectedProductCard__Category'>{category}</span></div>
          <img className='SelectedProductCard__Image' src={image} alt={title} />
        <div className='SelectedProductCard__ProductDesc'>
          <h2 className='SelectedProductCard__ProductDescTitle'>About this product</h2>
          <div className='SelectedProductCard__ProductDescDetails'>{description}</div>
        </div>
      </div>
      <div className='SelectedProductCard__Info'>
        <div className='SelectedProductCard__Price'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price)}</div>
        <div className='SelectedProductCard__Button'>
          <button>Add to basket</button>
        </div>
      </div>
    </div>
  )
}

export default SelectedProductCard;
