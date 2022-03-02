import React from 'react'

const NumberInput = ({label, id, name, handleChange, ...rest}) => {
    return (
        <div className="field-wrapper">
            <label htmlFor={id} className="label">{label}</label>
            <input 
                type="number" 
                id="slices-bread" 
                className="input" 
                name={name}
                {...handleChange}
                {...rest}
            />
        </div>
    )
}

export default NumberInput