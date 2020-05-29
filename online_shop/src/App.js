import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/navigation';
import Letter from './components/letter';
import Footer from './components/footer';
import roots from './router/router' 
import { 
    loadCatalog, 
    loadBrands,
    loadColors,
    loadCategory
} from './store/action_creatores'


class App extends React.Component{
    
    componentDidMount(){
        this.props.loadCatalog()
        this.props.loadCategory()
        this.props.loadBrands()
        this.props.loadColors()

    }
    
    render(){
        return (
            <div className="mainBox">
                <div className="main-content-wrapper d-flex clearfix">
                    <Navigation />
                    {
                        roots
                    }
                </div>
                <Letter />
                <Footer />
            </div>
        );
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
const mapDispatchToProps = (dispatch)=>{
    return{
        loadCatalog: ()=>dispatch(loadCatalog()),
        loadBrands: ()=>dispatch(loadBrands()),
        loadColors: ()=>dispatch(loadColors()),
        loadCategory: ()=>dispatch(loadCategory()),

    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(App)

export default connected;
