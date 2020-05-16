
import React from 'react';
import Logo from './header/logo';
import AmadoNav from './header/amadoNav';
import AmadoDiscon from './header/amadoDiscon';
import AmadoCart from './header/amadoCart';
import AmadoIcon from './header/amadoIcon';

function Header(){
    return(
            <header className ="header-area clearfix">
                <div className="nav-close">
                    <i className="fa fa-close" aria-hidden="true"></i>
                </div>
                <Logo/>
                <AmadoNav />
                <AmadoDiscon />
                <AmadoCart />
                <AmadoIcon />
            </header>
    );
}

export default Header
