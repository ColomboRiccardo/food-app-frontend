import React from 'react';

import './FormField.style.scss';

const FormField = ({ type, onInputChange, signin }) => {
	let firstCapital = '';
	// eslint-disable-next-line default-case
	firstCapital = type[0].toUpperCase() + type.slice(1);
	return (
		<div className='form-field'>
			<label htmlFor={type}>{firstCapital}</label>
			<input
				type={type}
				id={type}
				name={type}
				className='inputs'
				placeholder={`Please insert ${
					signin === true ? 'your registered' : 'your new'
				} ${type}`}
				onChange={onInputChange}
			/>
		</div>
	);
};
export default FormField;
