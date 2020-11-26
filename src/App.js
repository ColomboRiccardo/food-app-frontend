import React from 'react';

import './App.scss';

import Background from './components/Background/Background.component';
import Homepage from './components/Homepage/Homepage.component';
import TopBar from './components/TopBar/TopBar.component';

function App() {
	return (
		<div className='App'>
			<TopBar />
			<Homepage />
			<Background />
		</div>
	);
}

export default App;
