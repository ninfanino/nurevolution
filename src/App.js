import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/Home';
import DemoDays from './components/pages/DemoDays';
import Promo from './components/pages/Promo';
import ProductCollection from './components/pages/ProductCollection';
import MagicalMagnetic from './components/products/dipping-power/MagicalMagnetic';
import Twinkle from './components/products/dipping-power/Twinkle';
import HightVoltage from './components/products/dipping-power/HightVoltage';
import Jolly from './components/products/dipping-power/Jolly';
import NudyNude from './components/products/dipping-power/NudyNude';
import Opal from './components/products/dipping-power/Opal';
import Starlet from './components/products/dipping-power/Starlet';
import Temperature from './components/products/dipping-power/Temperature';
import SolarGlitter from './components/products/dipping-power/SolarGlitter';
import ElectoGlow from './components/products/dipping-power/ElectroGlow';
import NudeGlow from './components/products/dipping-power/NudeGlow';
import BubbleTea from './components/products/dipping-power/BubbleTea';
import Dream from './components/products/dipping-power/Dream';
import Lollipop from './components/products/dipping-power/Lollipop';
import LooseGlitter from './components/products/dipping-power/LooseGlitter';
import Ombre from './components/products/dipping-power/Ombre';
import Pearl from './components/products/dipping-power/Pearl';
import RedSoul from './components/products/dipping-power/RedSoul';
import Diamond from './components/products/dipping-power/Diamond';




function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/promo" component={Promo} />
      <Route path="/product-line/:name" component={ProductCollection} />
      <Route path="/demodays" component={DemoDays} />

      <Route path="/product/dipping-power/magical-magnetic" component={MagicalMagnetic} />
      <Route path="/product/dipping-power/twinkle" component={Twinkle} />
      <Route path="/product/dipping-power/high-voltage" component={HightVoltage} />
      <Route path="/product/dipping-power/jolly" component={Jolly} />
      <Route path="/product/dipping-power/nudy-nude" component={NudyNude} />
      <Route path="/product/dipping-power/opal" component={Opal} />
      <Route path="/product/dipping-power/starlet" component={Starlet} />
      <Route path="/product/dipping-power/temperature" component={Temperature} />
      <Route path="/product/dipping-power/solar-glitter" component={SolarGlitter} />
      <Route path="/product/dipping-power/electro-glow" component={ElectoGlow} />
      <Route path="/product/dipping-power/nude-glow" component={NudeGlow} />
      <Route path="/product/dipping-power/bubble-tea" component={BubbleTea} />
      <Route path="/product/dipping-power/dream" component={Dream} />
      <Route path="/product/dipping-power/lollipop" component={Lollipop} />
      <Route path="/product/dipping-power/loose-glitter" component={LooseGlitter} />
      <Route path="/product/dipping-power/ombre" component={Ombre} />
      <Route path="/product/dipping-power/pearl" component={Pearl} />
      <Route path="/product/dipping-power/red-soul" component={RedSoul} />
      <Route path="/product/dipping-power/diamond" component={Diamond} />
    </Router>
  );
}

export default App;
