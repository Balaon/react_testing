import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
      <ClipLoader 
      color={'#123abc'} 
      loading  
      size={150} />
     ); 
}

export default React.memo(Spinner);