import React from 'react'
import FooterLogo from './footer/footerLogo'
import FooterNav from './footer/footerNav'

function Footer(){
    return(
        <footer className="footer_area clearfix">
            <div className="container">
                <div className="row align-items-center">
                    <FooterLogo />
                    <FooterNav />
                </div>
            </div>
        </footer>
    )
}
export default Footer