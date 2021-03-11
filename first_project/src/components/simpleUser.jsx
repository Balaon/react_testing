import React, { Component } from 'react';
import * as PropTypes from 'prop-types';


export function SimpleUser({
                            name,
                            age,
                            gender,
                            address, 
                            puppies,
                            description,
                                        }){

 
    const styles = {
        border: "2px solid red",
        borderRadius: "5px",
        color: "425112",
        width: "300px",
        margin: "20px"
    };

    const renderMale = (gender) => {
        return ({ 
            M: "Male",
            F: "Female",
        })[gender];
    };

    return (
        <div style={ styles }>
            <h3> user name: { name } </h3>
            <p> 
                Gender: { renderMale(gender) } <br/>
                Age: { age } <br />
                Addres: { address } <br />
                {
                    !!puppies.length && this.renderPuppies()
                }
            </p>
            <hr/>
            <p>
                {
                    description
                }
            </p>
                
        </div>
    );

}

SimpleUser.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    address: PropTypes.string, 
    gender: PropTypes.string,
    puppies: PropTypes.array,
    description: PropTypes.string,
}

SimpleUser.defaultProps = {
    address: null,
    gender: null,
    puppies: [],
    description: null,
}