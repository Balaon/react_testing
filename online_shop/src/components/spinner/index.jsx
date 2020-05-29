import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = ()=>{
    return(
        <ClipLoader 
        size={50}
        color={'#123abc'}
        loading
        />
    );
}
export default React.memo(Spinner);