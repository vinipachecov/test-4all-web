import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import ProductListPage from './containers/ProductListPage/index';
import Checkout from './containers/Checkout';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
