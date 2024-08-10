// src/App.js
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
