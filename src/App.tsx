import React from 'react';
import './App.css';

// importing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Roadmap from './components/Roadmap';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Carousel />
      <Roadmap />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
