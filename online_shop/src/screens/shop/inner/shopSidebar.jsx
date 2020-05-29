import React from 'react';
import Category from './shopSidebar/sidebarCategory';
import Brands from './shopSidebar/sidebarBrands';
import { connect } from 'react-redux';
import Spinner from "../../../components/spinner/index"
import Colors from './shopSidebar/sidebarColors';


class ShopSidebar extends React.Component{


    // categoriesRender = ()=>{
    //     if(this.props.categoryLoading){
    //         return <Spinner />
    //     }
    //     if(this.props.categories.data && this.props.categories.data.length){
    //         return <Category />
    //     }
    // // }
    // brandsRender = ()=>{
    //     if(this.props.categoryLoading){
    //         return <Spinner />
    //     }
    //     if(this.props.brands.data && this.props.brands.data.length){
    //         return <Brands />
    //     }
    // }



    render(){
        return(

            <div className="shop_sidebar_area">
            {/* <!-- ##### Single Widget ##### --> */}
            <div className="widget catagory mb-50">
                {/* <!-- Widget Title --> */}
                <h6 className="widget-title mb-30">Catagories</h6>
    
                {/* <!--  Catagories  --> */}

                <Category />

                {/* {
                    this.categoriesRender()
                } */}
            </div>
    
            {/* <!-- ##### Single Widget ##### --> */}

            <Brands />
                {/* {

                    this.brandsRender()

                } */}
            {/* <!-- ##### Single Widget ##### --> */}
            <div className="widget color mb-50">
                {/* <!-- Widget Title --> */}
                <h6 className="widget-title mb-30">Color</h6>
    
                <Colors />
            </div>
    
            {/* <!-- ##### Single Widget ##### --> */}
            <div className="widget price mb-50">
                {/* <!-- Widget Title --> */}
                <h6 className="widget-title mb-30">Price</h6>
    
                <div className="widget-desc">
                    <div className="slider-range">
                        <div data-min="10" data-max="1000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="10" data-value-max="1000" data-label-result="">
                            <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: "0%"}}></span>
                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: "100%"}}></span>
                        <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: "0%", width: "100%"}}></div></div>
                        <div className="range-price">$10 - $1000</div>
                    </div>
                </div>
            </div>
            </div>
            
        );
    
    }
    
}
const mapStateToProps = (store)=>{
    return{
        categories: store.app.categories,
        brands: store.app.brands,
        colors: store.app.colors,
        categoryLoading: store.app.isLoading.categories || false,
        brandsLoading: store.app.isLoading.brands || false,
        colorsLoading: store.app.isLoading.colors || false,
    }
};


const connected = connect(mapStateToProps)(ShopSidebar)
export default connected