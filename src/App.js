import React from 'react'
import Footer from './components/Footer';
import Header from './components/Head/Navbar';
import Home from './components/Home';
import Features from './Features';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
