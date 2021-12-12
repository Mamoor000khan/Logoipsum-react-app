import React from 'react';


import Header from './components/Header/header.js';
import Features from '../src/components/features/features';
import Package from './components/package/package';
import Pricing from './components/pricing/pricing';

function App() {
  // some changes 
  return (
    <div className="App" style={{backgroundColor:'#F2F2F2'}}>
      <Header />

       <Features /> 

     <Package />
 
      <Pricing/>

    </div>
  );
}

export default App;
