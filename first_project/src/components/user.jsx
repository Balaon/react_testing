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

    hendleClick = (type = "down") => (e) => {

        this.setState((prevState)=>({ age: type.toUpperCase() === "UP" ? prevState.age +1 : prevState.age -1 }))

    };

    hendleChange = (e) => {

        const { value } = e.target;
        this.setState( { name: value })
    };


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
                <input type="text" value = { this.state.name } onChange={ this.handleChange }/>
                <button onClick={ this.hendleClick( "up" ) }> Up </button> &nbsp;
                <button onClick={ this.hendleClick() }> Down </button>;
            </div>
        )
    }
}

