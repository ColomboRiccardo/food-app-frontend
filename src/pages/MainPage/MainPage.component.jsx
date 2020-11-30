import React, { useState } from 'react';

import './MainPage.style.scss';

const MainPage = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [submitted, setSubmit] = useState(false);
	const [ingredients, setIngredients] = useState([]);
	const onImageSubmit = event => {
		setSubmit(true);
		event.preventDefault();
		console.log(imageUrl);
		fetch('http://localhost:3001/image', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				ingredientsUrl: imageUrl,
			}),
		})
			.then(response => response.json())
			.then(concept => {
				setIngredients(concept);
				console.log(ingredients);
			});
	};

	return (
		<div className='mainpage-container'>
			<h2>Hello there, user, how are you doing?</h2>
			{submitted === false ? (
				<p>Input the url of the picture you want to process</p>
			) : (
				<img
					src={imageUrl}
					alt='these are the ingredients'
					style={{ width: '300px' }}
				/>
			)}
			{ingredients.map(ingredient => (
				<p key={ingredient.id}>{ingredient.name}</p>
			))}
			<input
				type='text'
				id='imageUpload'
				onChange={event => setImageUrl(event.target.value)}
			/>
			<input
				type='submit'
				value='Submit'
				className='primary-button'
				onClick={onImageSubmit}
			/>
		</div>
	);
};

export default MainPage;
