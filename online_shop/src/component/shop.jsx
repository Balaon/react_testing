import React from 'react';
import Header from './home/header';
import MobileNav from './home/mobileNav';
import Products from './home/products';
import ShopSidebar from './shopSidebar/shopSidebar';
import AmadoProductsArea from './shopSidebar/amadoProductsArea';

function Shop(){

    return(
        <div className="main-content-wrapper d-flex clearfix">

            <MobileNav />

            <Header />

            <ShopSidebar />
            <AmadoProductsArea />
        </div>
        
    );

}
export default Shop