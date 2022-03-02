import React from 'react';

const TextInput = ({placeholder, input, errorMessage}) => {
    return (
        <>
            <input type="text" className="input" {...input} placeholder={placeholder}/>
            {errorMessage && <p className="error">{errorMessage}</p>}
        </>
  )
}

export default TextInput;