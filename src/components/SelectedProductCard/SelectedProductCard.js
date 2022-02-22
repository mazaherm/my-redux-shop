import React from 'react';

import ButtonPrimary from '../ButtonPrimary';

import './SelectedProductCard.scss';

const SelectedProductCard = ({
  id,
  category,
  description,
  image,
  price,
  title,
  onAddToBasket,
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
          <ButtonPrimary
            onClick={onAddToBasket}
            buttonText='Add to basket'
            add
          />
        </div>
      </div>
    </div>
  )
}

export default SelectedProductCard;
