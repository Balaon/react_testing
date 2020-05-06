import React, { useState } from 'react';

function App(){
  
  const [ cnt, setCnt ] = useState(0);

  const hendleClickBtn = (e)=> {
    const { target } = e;
    if (target.name === "up"){
      setCnt(cnt + 1);
    }else{
      setCnt( cnt - 1);
    }
  };

  return(
    <>
    <h3> count = { cnt }</h3>
      <div>
        <input name ="up" type="button" onClick={ hendleClickBtn } value="увеличить" />
        <input name ="down" type="button" onClick={  hendleClickBtn } value="уменьшить" />
      </div>
    </>
  );
}


export default App;
