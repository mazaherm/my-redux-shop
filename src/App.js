import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductsPage} />
        <Route exact path='/products/:id' component={ProductPage} />
        <Route exact path='/basket' component={BasketPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App;
