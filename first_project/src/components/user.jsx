import React, { Component } from 'react'

export class User extends Component {

    constructor(props){
        super(props)
         
        this.state = {
            name: "Yurii",
            age: 24,
            puppies: [],
            address: "Moscow, st. Stroitelei 50, flat 200",
        }
    }

    renderPuppies = () =>{
        return "";
    }

    hendlerClick = (e)=>{

        const { age } = this.state
        if(e.target.innerText==="Up"){
            this.setState({ age: age+1,})
        }else{
            this.setState((curState)=>( {age: curState.age-1}))
        }
    }

    render() {
        const { name, age, puppies, address } = this.state
        const styles = {
            border: "2px solid red",
            borderRadius: "5px",
            color: "425112"
        };

        return (
            <div style={ styles }>
                <h3> user name: { name } </h3>
                <p> 
                    Age: { age } <br />
                    Addres: { address } <br />
                    {
                        !!puppies.length && this.renderPuppies()
                    }
                </p>
                <button onClick={ this.hendlerClick }> Up </button> &nbsp;
                <button onClick={ this.hendlerClick }> Down </button>;
            </div>
        )
    }
}

