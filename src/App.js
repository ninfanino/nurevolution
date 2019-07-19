import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/Home';
import Promo from './components/pages/Promo';
import ProductCollection from './components/pages/ProductCollection';
import ProductDetails from './components/pages/ProductDetails';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/promo" component={Promo} />
      <Route path="/product-line/:id" component={ProductCollection} />
      <Route path="/product/:id" component={ProductDetails} />
    </Router>
  );
}

export default App;
