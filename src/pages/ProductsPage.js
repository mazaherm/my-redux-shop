import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/productsActions';

import ProductCard from '../components/ProductCard';
import ErorrMessage from '../components/ErorrMessage';
import Loading from '../components/Loading';

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

  const renderProducts = () => {
    return (
      products.map(product => (
        <ProductCard
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          stockCount={product.rating.count}
        />
      ))
    )
  }

  const renderProductsPage = () => {
    switch(true) {
      case loading:
        return <Loading />;
      case hasErrors:
        return <ErorrMessage />;
      default:
        return (
          <div className='ProductsPage__Container'>
            {renderProducts()}
          </div>
        );
    }
  }

  return (
    <section className='ProductsPage'>
      {renderProductsPage()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  hasErrors: state.products.hasErrors,
  products: state.products.products,
})

export default connect(mapStateToProps)(ProductsPage);
