import React from 'react';

import Navbar from './components/Nav/navbar.js';
import Header from './components/Header/header.js';
import Clients from './components/clients/clients.js';
import Subscription from '../src/components/features/subscription';
import Metrix from '../src/components/features/metrix';
 import Package from './components/package/package';
import Pricing from './components/pricing/pricing';

function App() {
  // some changes 
  return (
    <div >
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
