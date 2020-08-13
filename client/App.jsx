import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header.jsx';
import GetUser from './components/GetUser.jsx';
import AddText from './components/AddText.jsx';
import DisplayTexts from './components/DisplayTexts.jsx';

import './stylesheets/styles.css';

const App = props => {
  return (
    <Router>
			<Switch>
        <Route path='/addText' > 
					<AddText />	
				</Route>
				<Route path='/mnemos' >
					<DisplayTexts />
				</Route>
        <Route path='/' component={GetUser} />
			</Switch>
		</Router>
  );
};

export default App;