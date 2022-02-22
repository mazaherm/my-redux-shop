// Libraries
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

// Actions
import { fetchSelectedProduct } from '../actions/selectedProductActions';
import { addToBasket } from '../actions/basketActions';

// Components
import SelectedProductCard from '../components/SelectedProductCard';
import ErrorMessage from '../components/ErorrMessage';
import Loading from '../components/Loading';

// Styles
import './SelectedProductPage.scss';

const SelectedProductPage = ({
  match,
  loading,
  hasErrors,
  product,
  addToBasket,
}) => {

  const getProductDispatch = useDispatch()

  useEffect(() => {
  getProductDispatch(fetchSelectedProduct(match.params.id))
  }, [getProductDispatch, match.params.id])

  const renderSelectedProduct = () => {
    return (
      <SelectedProductCard
        id={product.id}
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        title={product.title}
        onAddToBasket={() => addToBasket(product)}
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

const mapDispatchToProps = (dispatch) => ({
  addToBasket: (product) => dispatch(addToBasket(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProductPage);
