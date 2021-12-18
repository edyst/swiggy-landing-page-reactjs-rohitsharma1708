import React from 'react';
import './App.css';
import Hero from './Components/Hero/herosect'
import Feature from './Components/Feature/features'
import Rest from './Components/Rest/restaurants'
import Footer from './Components/Footer/footer'
import './Components/FontAwesome'


function App() {
  return (
    <div className="App">
      <Hero />
      <Feature />
      <Rest />
      <Footer />
    </div>
  );
}

export default App;
