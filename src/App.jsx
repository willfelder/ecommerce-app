import React from 'react';
import { Home, ProductList, Product, Register, Login, Cart} from './pages/index';
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
