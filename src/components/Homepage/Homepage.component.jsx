import React from 'react';

import './Homepage.styles.scss';

const Homepage = () => (
	<div className='homepage-container'>
		<div>
			<h1>Recipes in the palm of your hand</h1>
			<p>Upload a picture of the ingredients, we'll give you the recipe</p>
			<button>Start cooking!</button>
		</div>
		<div>
			<img
				className='main-image'
				src='https://i.pinimg.com/originals/01/cf/89/01cf89a4f83bdfff65b9b5ec380a6c0e.jpg'
				alt='homepage pic'
			/>
		</div>
	</div>
);

export default Homepage;
