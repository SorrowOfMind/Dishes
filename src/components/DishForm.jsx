import React, {useState, useEffect} from 'react';
import {Field, reduxForm} from 'redux-form';

import {createDish} from '../store/actions/postData';

import NumberInput from './FormFields/NumberInput';
import TextInput from './FormFields/TextInput';

const renderTextInput = ({placeholder, input, meta}) => (<TextInput placeholder={placeholder} input={input} errorMessage={meta.touched && meta.error}/>)

const onSubmit = (values, dispatch) => {
	return dispatch(createDish(values));
}

const isRequired = value => !value ? "Required" : undefined;
const isTimeStrValid = timeStr => {
	if (timeStr.length > 2) return "Max 2 digits";

	const rgx = /[0-9]+/;
	if (!timeStr.match(rgx)) return "Digits allowed";
}

let DishForm = ({handleSubmit}) => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">REGISTER YOUR DISH</h2>
      <form onSubmit={handleSubmit}>
				<div className="field-wrapper">
					<label htmlFor="name" className="label">Dish name *</label>
					<Field 
						name="name" 
						component={renderTextInput}
						id="name"
						validate={[isRequired]}
						/>
				</div>
				<div className="field-wrapper">
					<label className="label">Preparation time (00:00:00) *</label>
					<div className="prep-time-wrapper">
						<div className="prep-time-inner-wrapper">
							<Field 
								name="prep-time-hr" 
								component={renderTextInput}
								validate={[isRequired, isTimeStrValid]}
								placeholder="hour"
							/>
						</div>:
						<div className="prep-time-inner-wrapper">
							<Field 
								name="prep-time-min" 
								component={renderTextInput}
								validate={[isRequired, isTimeStrValid]}
								placeholder="minutes"
							/>
						</div>:
						<div className="prep-time-inner-wrapper">
							<Field 
								name="prep-time-sec" 
								component={renderTextInput}
								validate={[isRequired, isTimeStrValid]}
								placeholder="seconds"
							/>
						</div>
					</div>
				</div>
				<button type="submit" className='form-btn'>SUBMIT</button>
      </form>
    </div>
  )
}

DishForm =  reduxForm({
	form: 'dish-form',
	onSubmit
})(DishForm);

export default DishForm;