import React from 'react';
import CardRender from './inner/homeCardRender';

class Home extends React.Component{

  

    render(){
        return(<>
            <div className="products-catagories-area clearfix">
                <div className="amado-pro-catagory clearfix" style={{position: "relative", height: "1100.59px"}}>
                <CardRender />
                </div>
            </div>
            
            </>);   
    }
 
}


export default Home
