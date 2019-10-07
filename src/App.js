import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/Home';
import DemoDays from './components/pages/DemoDays';
import Promo from './components/pages/Promo';
import ProductCollection from './components/pages/ProductCollection';
import ProductDetails from './components/pages/ProductDetails';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/promo" component={Promo} />
      <Route path="/product-line/:name" component={ProductCollection} />
      <Route path="/product/:name/:collection" component={ProductDetails} />
      <Route path="/demodays" component={DemoDays} />
    </Router>
  );
}

export default App;
