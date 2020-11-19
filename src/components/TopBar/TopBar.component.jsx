import React from 'react';

import './TopBar.style.scss';

const TopBar = () => (
	<div className='topbar-container'>
		<div>
			<p>Logo</p>
		</div>
		<div className='login-menu'>
			<p>Register</p>
			<p>Login</p>
		</div>
	</div>
);

export default TopBar;
