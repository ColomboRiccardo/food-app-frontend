import React from 'react';

import './TopBar.style.scss';
import Logo from '../../assets/Logo.png';

const TopBar = () => (
	<div className='topbar-container'>
		<div className='logo'>
			<img className='logo-icon' src={Logo} alt='this is the logo' />
			<h2>Recipe-Ingredients App</h2>
		</div>
		<div className='login-menu'>
			<p>Register</p>
			<p className='primary-button'>Login</p>
		</div>
	</div>
);

export default TopBar;
