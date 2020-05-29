import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from "../../../../components/spinner/index"

function Category(){

    
    const categories  = useSelector(state => state.app.categories || {})

  
    const categoryRender =()=>{
        const { data } = categories;
        const categoriesBox = data.map(elem =>{
            return(
                <li ><a href="#" id={ elem.id } >{elem.title}</a></li>
            );
        })
        return categoriesBox;
    }

    return(
        <div className="catagories-menu">
                <ul>
                    {
                      categories.data &&  categoryRender() || <Spinner />
                    }
                    
                </ul>
        </div>
    );
}
export default Category