import React from 'react';
import './App.css';
import Hero from './components/Hero/hero'
import About from './components/About/About'
import Services from './components/Services/service'
import Insight from './components/Insight/Insight'
import Ourwork from './components/Ourwork/Ourwork'
function App() {
  return (
    <div>
       <Hero/>
       <About/>
          <Insight/>
          <Services/>
          <Ourwork/>
    </div>
  );
}

export default App;
