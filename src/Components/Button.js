import React from 'react';
import './style.css'

const Button = ({text}) => {
    const handleClick = () => {
        console.log(`hello ${text}`)
    }

    return (
        <button
            className={'customButton'}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button


export const Input = () => {

    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return(
        <input
            onChange={handleChange}
            placeholder={'Its my input'}
        />
    );
}