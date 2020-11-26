import React from 'react';

import './Homepage.styles.scss';
import homepagePhone from '../../assets/homepagePhone.png';

const Homepage = () => (
	<div className='homepage-container'>
		<div className='hero-container'>
			<h1>Take a picture of your ingredients,</h1>
			<p>
				We’ll use machine learning to identify them, and propose to you any
				recipe available where to use them!
			</p>
			<span>Start cooking!</span>
		</div>
		<div>
			<img className='main-image' src={homepagePhone} alt='homepage pic' />
		</div>
	</div>
);

export default Homepage;
