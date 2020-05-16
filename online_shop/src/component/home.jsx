import React from 'react';
import Header from './home/header';
import MobileNav from './home/mobileNav';
import Products from './home/products';
import ShopSidebar from './shopSidebar/shopSidebar';

function Home(){
    return(
        <div className="main-content-wrapper d-flex clearfix">

            <MobileNav />

            <Header />

            <Products />
        </div>
    );
}
export default Home