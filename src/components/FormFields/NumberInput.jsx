import React from 'react'

const NumberInput = ({placeholder, input, errorMessage}) => {
    return (
        <>
            <input type="number" className="input" {...input} placeholder={placeholder}/>
            {errorMessage && <p className="error">{errorMessage}</p>}
        </>
  )
    
}

export default NumberInput