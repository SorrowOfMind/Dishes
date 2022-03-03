import React, {useState, useEffect} from 'react';
import {Field, reduxForm} from 'redux-form';
import { motion, AnimatePresence } from "framer-motion";

import {isRequired, isTimeStrValid, isHrValid,isMinSecValid, isNumberValid, isDiameterValid, isRangeValid} from '../utils/validationFns';
import {createDish} from '../store/actions/postData';

import NumberInput from './FormFields/NumberInput';
import TextInput from './FormFields/TextInput';
import SelectInput from './FormFields/SelectInput';

const renderTextInput = ({placeholder, input, meta}) => (<TextInput placeholder={placeholder} input={input} errorMessage={meta.touched && meta.error}/>)
const renderNumberInput = ({placeholder, input, meta}) => (<NumberInput placeholder={placeholder} input={input} errorMessage={meta.touched && meta.error}/>)
const renderSelectInput = ({types, input, meta}) => (<SelectInput input={input} errorMessage={meta.touched && meta.error} types={types}/>)

const onSubmit = (values, dispatch) => dispatch(createDish(values));

let DishForm = ({handleSubmit}) => {
	const [type, setType] = useState(null);

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
								validate={[isRequired, isTimeStrValid, isHrValid]}
								placeholder="hour"
							/>
						</div>:
						<div className="prep-time-inner-wrapper">
							<Field 
								name="prep-time-min" 
								component={renderTextInput}
								validate={[isRequired, isTimeStrValid, isMinSecValid]}
								placeholder="minutes"
							/>
						</div>:
						<div className="prep-time-inner-wrapper">
							<Field 
								name="prep-time-sec" 
								component={renderTextInput}
								validate={[isRequired, isTimeStrValid, isMinSecValid]}
								placeholder="seconds"
							/>
						</div>
					</div>
				</div>
				<div className="field-wrapper select-wrapper">
					<label htmlFor="type" className="label">Type of dish *</label>
					<Field 
						name="type" 
						component={renderSelectInput}
						id="type"
						validate={[isRequired]}
						types={['pizza', 'soup', 'sandwich']}
						onChange={e => setType(e.target.value)}
						/>
				</div>
				<AnimatePresence>
					{type && 
					<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.6 }} exit={{ height: 0, opacity: 0 }}>
						{type === 'pizza' && (
							<div className="field-wrapper field-wrapper-inline">
								<div className="inner-field-wrapper">
									<label htmlFor="num-slices-pizza" className="label">No. of slices *</label>
									<Field
										name="slices-pizza" 
										component={renderNumberInput}
										id="num-slices-pizza"
										validate={[isRequired, isNumberValid]}
										placeholder="4"
									/>
								</div>
								<div className="inner-field-wrapper">
									<label htmlFor="diameter" className="label">Diameter *</label>
									<Field
										name="diameter" 
										component={renderNumberInput}
										id="diameter"
										validate={[isRequired, isNumberValid, isDiameterValid]}
										placeholder="15.0"
									/>
								</div>
							</div>
							
						)}
						{type === 'soup' && (
							<div className="field-wrapper">
								<label htmlFor="spiciness" className="label">Spiciness (1 -10) *</label>
								<Field
									name="spiciness" 
									component={renderNumberInput}
									id="spiciness"
									validate={[isRequired, isNumberValid, isRangeValid]}
									placeholder="5"
								/>
							</div>
						)}
						{type === 'sandwich' && (
							<div className="field-wrapper">
								<label htmlFor="num-slices-sand" className="label">No. of slices *</label>
								<Field
									name="slices-sandwich" 
									component={renderNumberInput}
									id="num-slices-sand"
									validate={[isRequired, isNumberValid]}
									placeholder="4"
								/>
							</div>
						)}
					</motion.div>}
				</AnimatePresence>
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