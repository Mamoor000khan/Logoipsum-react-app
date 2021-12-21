import React from 'react';

import Navbar from './components/Nav/Navbar.js';
import Header from './components/Header/Header.js';
import Clients from './components/Clients/Clients.js';
import Subscription from './components/Features/Subscription';
import Metrix from './components/Features/Metrix';
import Package from './components/Package/Package';
import Pricing from './components/Pricing/Pricing';

function App() {
  // some changes 
  return (
    <div>
      <Navbar/>

      <Header />

      <Clients/>

       <Subscription /> 

       <Metrix/>

     <Package />
 
      <Pricing/>

    </div>
  );
}

export default App;
