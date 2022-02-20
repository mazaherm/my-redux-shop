import React from 'react';
import { connect } from 'react-redux';

import './BasketPage.scss';

const BasketPage = ({
  basket,
}) => {
  const renderBasket = () => {
    switch(true) {
      case basket.length >= 1:
        return (
          basket.map(item => (
            <div className='BasketPage__BasketItem' key={item.product.id}>
              <img className='BasketPage__Image' src={item.product.image} alt={item.product.title} />
              <div className='BasketPage__Details'>
                <div className='BasketPage__Title'>{item.product.title}</div>
                <div className='BasketPage__Desc'>{item.product.description}</div>
              </div>
              <div className='BasketPage__PriceDetails'>
                <div className='BasketPage__Price'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(item.product.price)}</div>
                <div className='BasketPage__Quantity'>Qty: {item.quantity}</div>
              </div>
            </div>
          ))
        )
      default:
        return (
          <div className='BasketPage__Empty'>Your basket is empty</div>
        )
    }
  };

  return (
    <section className='BasketPage'>
      <h1 className='BasketPage__PageTitle'>Basket</h1>
      {renderBasket()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket.basket,
})

export default connect(mapStateToProps)(BasketPage);
