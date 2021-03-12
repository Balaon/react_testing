import React, { Component } from 'react';
import * as PropTypes from 'prop-types';


export class User extends Component {

    static propTypes ={
        description: PropTypes.string.isRequired,
        id: PropTypes.number,
    };

    static defaultProps ={
        description: "no description",
    };

    constructor(props){
        super(props)
         
        this.state = {
            name: "Yurii",
            age: 24,
            gender: "",
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

    handleChange = (e) => {
        const { target } = e;
        const { name } = target;
        console.log(target.value)
        console.log(target.checked)

        const value = target.type === "radio" ? target.value : target.checked;
        this.setState( { 
            [name]: value,
         })
    };

    renderMale = (gender) => {
        return ({ 
            M: "Male",
            F: "Female",
        })[gender];
    }
    render() {
        const { name, age, gender, puppies, address, } = this.state
        const styles = {
            border: "2px solid red",
            borderRadius: "5px",
            color: "425112",
            width: "300px",
        };

        return (
            <div style={ styles }>
                <h3> user name: { name } </h3>
                <p> 
                    Gender: { this.renderMale(gender) } <br/>
                    Age: { age } <br />
                    Addres: { address } <br />
                    {
                        !!puppies.length && this.renderPuppies()
                    }
                </p>
                <hr/>
                <p>
                    {
                        this.props.description
                    }
                </p>
                <hr/>
                <input type="text" name="name" value = { name } onChange={ this.handleChange }/> <br/>

                <input 
                    type="radio" 
                    name="gender" 
                    value="M" 
                    onChange={ this.handleChange }
                /> -Male <br/>

                <input 
                    type="radio" 
                    name="gender" 
                    value="F" 
                    onChange={ this.handleChange }
                /> -Female <br/>

                <hr/>
                <button onClick={ this.hendleClick( "up" ) }> Up </button> &nbsp;
                <button onClick={ this.hendleClick() }> Down </button>;
            </div>
        )
    }
}

