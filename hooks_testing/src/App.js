import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state={
      cnt: 0,
    }
  }

  hendleClickBtn= (e)=>{
    const { target } = e;
    let { cnt } = this.state;

    if(target.name === "up"){
      cnt++;
    }else{
      cnt--;
    }
    this.setState({cnt});
  }

  render(){
    return(
      <>

      <h3> count = { this.state.cnt }</h3>
      <div>
        <input name ="up" type="button" onClick={ this.hendleClickBtn } value="увеличить" />
        <input name ="down" type="button" onClick={ this.hendleClickBtn } value="уменьшить" />
      </div>

      </>
    );
  }



}


export default App;
