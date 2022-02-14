import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/productsActions';

import ProductCard from '../components/ProductCard';

import './ProductsPage.scss';

const ProductsPage = ({
  dispatch,
  loading,
  hasErrors,
  products
}) => {

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  console.log('products', products.data);

  return (
    <section className='ProductsPage'>
      <div className='ProductsPage__Container'>
        {products.data.map(product => (
          <ProductCard
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            stockCount={product.rating.count}
          />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  hasErrors: state.products.hasErrors,
  products: state.products.products,
})

export default connect(mapStateToProps)(ProductsPage);
