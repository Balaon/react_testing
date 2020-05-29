import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from "../../../../components/spinner/index"

function Colors(){

    
    const colors  = useSelector(state => state.app.colors || {})

  
    const colorsRender =()=>{
        const { data } = colors;
        const colorsBox = data.map(elem =>{
            console.log(elem)

            const style = {backgroundColor: `#${elem.color}`}


            return <div className="categoryColors" style={ style }></div>
        })
        return colorsBox;
    }

    return(
     
        <div className="widget-desc">
                    <div className="colorsBox">

                        {
                            colors.data && colorsRender() || <Spinner />
                        }
                        
                    </div>
                </div>
    );
}
export default Colors