import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/productsActions';

const ProductsPage = ({
  dispatch,
  loading,
  hasErrors,
  products
}) => {

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <section>
      <h1>Products Page</h1>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  hasErrors: state.products.hasErrors,
  products: state.products.products,
})

export default connect(mapStateToProps)(ProductsPage);
