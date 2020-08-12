import React, { Component } from 'react';
import GetUser from './components/GetUser.jsx';
import AddText from './components/AddText.jsx';

import './stylesheets/styles.css';

const App = props => {
	return (
		<React.Fragment>
		  <GetUser />
          <AddText />
		</React.Fragment>
	);
};

export default App;