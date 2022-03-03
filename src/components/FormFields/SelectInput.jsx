import React from 'react'

const SelectInput = ({types, input, errorMessage}) => {
  return (
    <>
        <select className="input select-input" {...input}>
            <option></option>
            {types && types.map((type, idx) => <option value={type} key={idx}>{type}</option>)}
        </select>
        {errorMessage && <p className='error'>{errorMessage}</p>}
    </>
  )
}

export default SelectInput