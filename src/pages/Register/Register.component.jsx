import React, { useState } from 'react';

import FormField from '../../components/FormField/FormField.component';

//*This component uses react hooks. The signin component uses a class. That is because i want to be able to use both.

const Register = props => {
	const inputs = ['name', 'email', 'password'];

	const [allInputs, setAllInputs] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onInputChange = event => {
		setAllInputs({ ...allInputs, [event.target.name]: event.target.value });
		console.log(allInputs);
	};

	const onInputClick = event => {
		event.preventDefault();
		console.log(allInputs);
		event.preventDefault();
		console.log(props.userLoggedIn);
		props.setUserLoggedIn(true);
		props.history.push('/');
	};

	return (
		<div className='form-container'>
			<h2>Register</h2>
			{inputs.map((input, index) => (
				<FormField type={input} onInputChange={onInputChange} key={index} />
			))}
			<input
				type='submit'
				value='Register'
				className='primary-button signin-button'
				onClick={onInputClick}
			/>
			<p onClick={() => props.history.push('/signin')}>
				Already registered? Signin instead
			</p>
		</div>
	);
};

export default Register;
