import React, { Component } from 'react';
import AddText from './components/AddText.jsx';

import './stylesheets/styles.css';

const App = props => {
	return (
		<div>
			<h2>Create a New Mnemo</h2>
			<AddText />
		</div>
	);
};

export default App;