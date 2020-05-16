import React from 'react';
import './App.css';
import Home from './component/home';
import Letter from './component/letter';
import Footer from './component/footer';
import Shop from './component/shop';


function App() {
  return (
    <div>
      <Home />
      {/* <Shop /> */}
      <Letter />
      <Footer />
    </div>
  );
}

export default App;
