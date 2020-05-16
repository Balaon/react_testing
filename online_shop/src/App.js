import React from 'react';
import './App.css';
import Home from './component/home';
import Letter from './component/letter';
import Footer from './component/footer';
import Shop from './component/shop';
import { Route, BrowserRouter } from 'react-router-dom';
import MobileNav from './component/home/mobileNav';
import Header from './component/home/header';
import Cart from './component/cart';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="main-content-wrapper d-flex clearfix">

          <MobileNav />
          <Header />

          <Route exact path='/' component={ Home }/>
          <Route exact path='/home' component={ Home }/>
          <Route exact path='/shop' component={ Shop }/>
          <Route exact path='/cart' component={ Cart  }/>
          
        </div>
          
        {/* <Home />
        <Shop /> */}
        <Letter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
