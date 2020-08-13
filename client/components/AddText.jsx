import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddText = props => {
  const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const history = useHistory();

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const text = { title, body };
    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text),
    };

    fetch('http://localhost:8080/newText', postOptions)
    setTitle('');
		setBody('');
		history.push('/mnemos');
  }

  return (
		<React.Fragment>
			<img src="assets/mnemozine.png" />
			<h3>Learn and Remember More</h3>
			<div id="addTextWrapper">
				<h1>Create a New Mnemo</h1>
				<input 
					placeholder="Title"
					value={ title } 
					onChange={ onTitleChange }
				/>
				<textarea 
					placeholder="Copy and paste or add new text in Markdown"
					value={ body }
					onChange={ onBodyChange } 
				/>
				<button
					type="submit"
					onClick={ handleSubmit }
				>
				Create New Mnemo  
				</button>
		 </div>
	 </React.Fragment>
  );
}

export default AddText;