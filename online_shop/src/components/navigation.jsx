import React from 'react';
import * as URL from '../router/url'

function Navigation (props){

    return(<>
    <header className="header-area clearfix">
            {/* <!-- Close Icon --> */}
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>
            {/* <!-- Logo --> */}
            <div className="logo">
                <a href="index.html"><img src="img/core-img/logo.png" alt=""/></a>
            </div>
            {/* <!-- Amado Nav --> */}
            <nav className="amado-nav">
                <ul>
                    <li className="active"><a href={URL.HOME}>Home</a></li>
                    <li><a href={URL.SHOP}>Shop</a></li>
                    <li><a href={URL.PRODUCT}>Product</a></li>
                    <li><a href={URL.CART}>Cart</a></li>
                    <li><a href={URL.CHECKOUT}>Checkout</a></li>
                </ul>
            </nav>
            {/* <!-- Button Group --> */}
            <div className="amado-btn-group mt-30 mb-100">
                <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                <a href="#" className="btn amado-btn active">New this week</a>
            </div>
            {/* <!-- Cart Menu --> */}
            <div className="cart-fav-search mb-100">
                <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt=""/> Cart <span>(0)</span></a>
                <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt=""/> Favourite</a>
                <a href="#" className="search-nav"><img src="img/core-img/search.png" alt=""/> Search</a>
            </div>
            {/* <!-- Social Button --> */}
            <div className="social-info d-flex justify-content-between">
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>

    </>);

}
export default Navigation