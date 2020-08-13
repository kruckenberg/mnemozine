import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const DisplayTexts = props => {
  const [texts, setTexts] = useState([]);
	const history = useHistory();

	useEffect(() => {
		fetch('/getTexts')
			.then(queryResults => queryResults.json())
			.then((queryResults) => {
				const textList = queryResults.map((text) => {
				return (
					<button 
						key={ text._id } 
						className="titles" 
						id={ text._id } 
						onClick={handleClick} 
					>
						{text.title}
					</button>
				)
				});
				setTexts(textList);
			});
	}, [setTexts]);

	const handleClick = (e) => {
		if (e.target.id === 'createNew') {
			history.push('/addText');
		} else {
			history.push(`/mnemos/${e.target.id}`);
		}
	}

  return (
		<React.Fragment>
		  <img src="assets/mnemozine.png" />
			<h3>Learn and Remember More</h3>
			<div id="outerTextsWrapper">
				<h1 id="textsWrapperHeader">Choose a Mnemo</h1>		
				<div id="textsWrapper">
					<button className="titles" id="createNew" onClick={handleClick}>
						Create a New Mnemo
					</button>
					{ texts }	
				</div>
			</div>
		</React.Fragment>
  );
}

export default DisplayTexts;