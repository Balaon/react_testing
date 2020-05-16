import React from 'react';

function FooterLogo (){

    return(
        <div className="col-12 col-lg-4">
                        <div className="single_widget_area">
                            <div className="footer-logo mr-50">
                                <a href="index.html"><img src="img/core-img/logo2.png" alt=""/></a>
                            </div>
                            <p className="copywrite"></p>
                                        Copyright ©
                                        <script>document.write(new Date().getFullYear());</script>
                                        2020 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="#" target="_blank">Colorlib</a>
                        </div>
                    </div>
    );

}
export default FooterLogo 