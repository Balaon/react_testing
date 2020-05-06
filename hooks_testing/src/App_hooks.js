import React, { useState } from 'react';

function App(){
  
  const [ cnt, setCnt ] = useState(0);
  const [ userName, setUserName ] = useState("Балаев");
  
  const handleClickBtn = (e)=> {
    const { target } = e;
    if (target.name === "up"){
      setCnt(cnt + 1);
    }else{
      setCnt( cnt - 1);
    }
  };

  const handleChangeName = (e)=>{
    const { value } = e.target;
    setUserName(value);  
  }

  return(
    <>
    <h3> count = { cnt }</h3>
      <div>
        <input name ="up" type="button" onClick={ handleClickBtn } value="увеличить" />
        <input name ="down" type="button" onClick={  handleClickBtn } value="уменьшить" />
      </div>
      <input type="text" name="name" value={ userName } onChange={ handleChangeName} />
    </>
  );
}


export default App;
