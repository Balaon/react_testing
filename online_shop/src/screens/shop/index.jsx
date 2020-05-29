import React from 'react';
import { connect } from 'react-redux';
import ShopSidebar from './inner/shopSidebar';
import ShopSorting from './inner/shopSorting';
import ShopPagination from './inner/shopPagination';
import ShopCardRender from './inner/shopCardRender';

class Shop extends React.Component{
     
    componentDidMount(props){
        

     
    }

   

    render(){
        return(<>
            <ShopSidebar />
            <div className="amado_product_area section-padding-100">
                <div className="container-fluid">
                    <ShopSorting />
                    <ShopCardRender />
                    <ShopPagination />
                </div>
            </div>
       
        </>);
    }

}


const mapStateToProps = (store)=>{
    return{
        catalog: store.app.catalog,
        categories: store.app.categories,
        brands: store.app.brands,
        colors: store.app.colors,
        catalogLoading: store.app.isLoading.catalog || false,
        categoryLoading: store.app.isLoading.categories || false,
        brandsLoading: store.app.isLoading.brands || false,
        colorsLoading: store.app.isLoading.colors || false,
    }
};


const connected = connect(mapStateToProps)(Shop)

export default connected
