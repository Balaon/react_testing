import React, { useState } from 'react';

function App(){
  
  const [ cnt, setCnt ] = useState(0);
  const [ msNum, setMsNum ] = useState(0);
  const [ userName, setUserName ] = useState("Балаев");
  const [ ms, setMs ] = useState([1,2,3,4,5,6,7,8,9,10]);
  
  const handleDeleteElem = (e)=>{
    ms.splice(msNum,1)
    //const msResult = [].concat(ms); - эквивалентно записи ниже
    //setMs(msResult);
    setMs([...ms]);
  }

  const handleClickBtn = (e)=> {
    const { target } = e;
    if(e.target.name ==="delete"){ 
      handleDeleteElem();
      return;
    }
    if (target.name === "up"){
      setCnt(cnt + 1);
    }else{
      setCnt( cnt - 1);
    }
  };

  const handleChange = (e)=>{
    const { value } = e.target;
    if(e.target.name ==="name"){
      setUserName(value);  
    }else{
      setMsNum (+value)
    }
  }

  return(
    <>
    <h3> count = { cnt }</h3>
      <div>
        <input name ="up" type="button" onClick={ handleClickBtn } value="увеличить" />
        <input name ="down" type="button" onClick={  handleClickBtn } value="уменьшить" />
      </div>
      <input type="text" name="name" value={ userName } onChange={ handleChange} />
      <br/>
      <h3>
        {
          ms.join(",")
        }
      </h3>
      <input type="text" name="msnumber" value={ msNum } onChange={ handleChange} />
      <input name ="delete" type="button" onClick={ handleClickBtn } value="удалить" />
      
      <br/>

    </>
  );
}


export default App;
