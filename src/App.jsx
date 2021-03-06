import React from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return(
    
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/productList" component={ProductList} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
