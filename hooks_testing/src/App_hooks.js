import React, { useState } from 'react';

function App(){
  
  const [ cnt, setCnt ] = useState(0);


  return(
    <>
    <h3> count = { cnt }</h3>
      <div>
        <input name ="up" type="button" onClick={ ()=> setCnt(cnt + 1) } value="увеличить" />
        <input name ="down" type="button" onClick={  ()=> setCnt(cnt - 1) } value="уменьшить" />
      </div>
    </>
  );
}


export default App;
