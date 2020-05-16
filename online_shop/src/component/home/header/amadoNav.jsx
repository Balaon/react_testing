import React from 'react';

function AmadoNav(){ 

    return(
        <nav className="amado-nav">
            <ul>
                <li className="active"><a href="/home">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="product-details.html">Product</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
            </ul>
        </nav>
    );
}
export default AmadoNav