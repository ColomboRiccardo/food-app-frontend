import React from 'react';

import './TopBar.style.scss';
import Logo from '../../assets/Logo.png';

const TopBar = props => (
	<div className='topbar-container'>
		<div className='logo' onClick={() => props.history.push('/')}>
			<img className='logo-icon' src={Logo} alt='this is the logo' />
			<h2>Recipe-Ingredients App</h2>
		</div>
		<div className='login-menu'>
			<p onClick={() => props.history.push('/register')}>Register</p>
			<p
				className='primary-button'
				onClick={() => props.history.push('/signin')}
			>
				Signin
			</p>
		</div>
	</div>
);

export default TopBar;
