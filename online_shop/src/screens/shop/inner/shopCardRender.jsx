import React from 'react'
import { connect } from 'react-redux';
import Spinner from '../../../components/spinner/index'
import '../../../assets/main.css'

const SERVER_URL = "http://test-api.ipromote.ru/img/";

class ShopCardRender extends React.Component{

    
    cardRender = ()=>{
        if(this.props.catalogLoading){
            return <Spinner />
        }
        if(this.props.catalog && this.props.catalog.data && this.props.catalog.data.length){
            const { data } = this.props.catalog
            const cardsArr = data.map((elem)=>{

                return(
                        <div className="shopCard">
                            <div className="shopCardImg" style={{ backgroundImage: `url(${SERVER_URL}${elem.img_url})` }}></div>
                            <div className="shopCardBorder"></div>
                            <div className="shopCardCost">${elem.price}</div>
                            <div className="shopCardName">{elem.title}</div>
                        </div>
                );
                

            })


            return (cardsArr);
        }
       

    }



    render(){

        return(<div className="shopCardBox">
        {
            this.cardRender()
        }
            
        </div>);
    }
    
}

const mapStateToProps = (store)=>{
    return{
        catalog: store.app.catalog,
        brands: store.app.brands,
        colors: store.app.colors,
        catalogLoading: store.app.isLoading.catalog || false,
        categoryLoading: store.app.isLoading.categories || false,
        brandsLoading: store.app.isLoading.brands || false,
        colorsLoading: store.app.isLoading.colors || false,
    }
};
const connected = connect(mapStateToProps)(ShopCardRender)

export default connected
