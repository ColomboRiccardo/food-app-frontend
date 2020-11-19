import React from 'react';

import './App.scss';

import Homepage from './components/Homepage/Homepage.component';
import TopBar from './components/TopBar/TopBar.component';

function App() {
	return (
		<div className='App'>
			<TopBar />
			<Homepage />
		</div>
	);
}

export default App;
