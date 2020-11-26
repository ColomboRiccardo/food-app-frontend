import React from 'react';

import './TopBar.style.scss';
import Logo from '../../assets/Logo.png';

const TopBar = () => (
	<div className='topbar-container'>
		<div>
			<img className='Logo' src={Logo} alt='this is the logo' />
		</div>
		<div className='login-menu'>
			<p>Register</p>
			<p>Login</p>
		</div>
	</div>
);

export default TopBar;
