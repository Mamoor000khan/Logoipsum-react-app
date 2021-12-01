import React from 'react';


import Header from './components/layout/header';
import Features from '../src/components/features/features';
import Package from './components/package/package';
import Content from './components/pricing/pricing';

function App() {
  return (
    <div className="App">
      <Header />

      <Features />

      <Package />

      <Content/>

    </div>
  );
}

export default App;
