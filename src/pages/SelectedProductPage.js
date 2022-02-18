import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSelectedProduct } from '../actions/selectedProductActions';

import SelectedProductCard from '../components/SelectedProductCard';
import ErrorMessage from '../components/ErorrMessage';
import Loading from '../components/Loading';

import './SelectedProductPage.scss';

const SelectedProductPage = ({
  dispatch,
  match,
  loading,
  hasErrors,
  product,
}) => {

  useEffect(() => {
    dispatch(fetchSelectedProduct(match.params.id))
  }, [dispatch, match.params.id])

  const renderSelectedProduct = () => {
    return (
      <SelectedProductCard
        id={product.id}
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        title={product.title}
      />
    )
  }

  const renderSelectedProductPage = () => {
    switch(true) {
      case loading:
        return <Loading />;
      case hasErrors:
        return <ErrorMessage />;
      default:
        return renderSelectedProduct();
    }
  }

  return (
    <section className='SelectedProductPage'>
      {renderSelectedProductPage()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  hasErrors: state.product.hasErrors,
  product: state.product.product,
})

export default connect(mapStateToProps)(SelectedProductPage);
