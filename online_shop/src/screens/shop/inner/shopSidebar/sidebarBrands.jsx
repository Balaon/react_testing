import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from "../../../../components/spinner/index"


function Brands(){
    
    const brands  = useSelector(state => state.app.brands || {})

    
    const brandsRender =()=>{
        const { data } = brands;
        const categoriesBox = data.map(elem =>{
            return(
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id={elem.id}/>
                    <label className="form-check-label" >{elem.title}</label>
                </div>
            );
        })
        return categoriesBox;
    }
    return(
        <div className="widget brands mb-50">
        {/* <!-- Widget Title --> */}
            <h6 className="widget-title mb-30">Brands</h6>

            <div className="widget-desc">
            {
               brands.data && brandsRender() || <Spinner />
            }       
            
            </div>
        </div>

    );
}
export default Brands