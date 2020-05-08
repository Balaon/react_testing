import React from 'react';



class App extends React.Component{

  constructor(props){
    super(props)

    this.state={
      cnt: 0,
      msNum: 0,
      visibleCnt: true,
      userName: "Балаев",
      ms: [1,2,3,4,5,6,7,8,9,10],
    }
  }

  
  handleDeleteElem = (e)=>{
    this.state.ms.splice(this.state.msNum,1)
    const msResult = [].concat(this.state.ms); 
    this.setState(msResult);
  }

  handleClickBtn= (e)=>{
    const { target } = e;
    let { cnt } = this.state;
    if(target.name === "delete"){ 
      this.handleDeleteElem();
      return;
    }

    if(target.name === "up"){
      cnt++;
    }else{
      cnt--;
    }
    this.setState({cnt});
  }

   handleChange = (e)=>{
    const { value } = e.target;
    if(e.target.name ==="name"){
      this.setState({ userName: value });  
    }else{
      this.setState({ msNum: value });  
    }
  }

  render(){
    return(
      <>
      <h1> count = { this.state.cnt }</h1>
      <div>
        <input name ="up" type="button" onClick={ this.handleClickBtn } value="увеличить" />
        <input name ="down" type="button" onClick={ this.handleClickBtn } value="уменьшить" />
      </div>
      <input type="text" name="name" value={ this.state.userName } onChange={ this.handleChange} />
     
      <br/>
      <h3>
        {
          this.state.ms.join(",")
        }
      </h3>
      <input type="text" name="msnumber" value={ this.state.msNum } onChange={ this.handleChange} />
      <input name ="delete" type="button" onClick={ this.handleClickBtn } value="удалить" />
      
      <br/>

      </>
    );
  }



}


export default App;
