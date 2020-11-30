import React, { Component } from 'react';
import FormField from '../../components/FormField/FormField.component';

import './Signin.style.scss';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	onInputChange = event => {
		const { type, value } = event.target;
		this.setState({ [type]: value });
		console.log(this.state);
	};

	onInputClick = event => {
		event.preventDefault();
		console.log(this.state);
		console.log(this.props.userLoggedIn);
		this.props.setUserLoggedIn(true);
		this.props.history.push('/');
	};

	render() {
		return (
			<div className='form-container'>
				<h2>SignIn</h2>
				<form className='form'>
					<FormField
						type='email'
						onInputChange={this.onInputChange}
						signin={true}
					/>
					<FormField
						type='password'
						onInputChange={this.onInputChange}
						signin={true}
					/>
					<input
						type='submit'
						value='Signin'
						className='primary-button signin-button'
						onClick={this.onInputClick}
					/>
				</form>
				<p onClick={() => this.props.history.push('/register')}>
					Already registered? Signin instead
				</p>
			</div>
		);
	}
}

export default Signin;
