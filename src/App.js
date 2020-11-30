import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import Background from './components/Background/Background.component';
import Homepage from './pages/Homepage/Homepage.component';
import MainPage from './pages/MainPage/MainPage.component';
import TopBar from './components/TopBar/TopBar.component';
import Signin from './pages/Signin/Signin.component';
import Register from './pages/Register/Register.component';

function App() {
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	return (
		<div className='App'>
			<Route path='/' render={props => <TopBar {...props} />} />
			<Route
				exact
				path='/'
				render={props =>
					userLoggedIn ? <MainPage {...props} /> : <Homepage {...props} />
				}
			/>
			<Route
				exact
				path='/register'
				render={props => (
					<Register
						{...props}
						userLoggedIn={userLoggedIn}
						setUserLoggedIn={setUserLoggedIn}
					/>
				)}
			/>
			<Route
				exact
				path='/signin'
				render={props => (
					<Signin
						{...props}
						userLoggedIn={userLoggedIn}
						setUserLoggedIn={setUserLoggedIn}
					/>
				)}
			/>
			<Background />
		</div>
	);
}

export default App;
