import React from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home/login" component={Login} />
          <Route path="/home/register" component={Register} />
          <Route path="/home/productList" component={ProductList} />
          <Route path="/home/product" component={Product} />
          <Route path="/home/cart" component={Cart} />
        </Switch>
      </Router>
    </>
  )
}
