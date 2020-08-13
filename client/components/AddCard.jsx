import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddCard = props => {
  const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const history = useHistory();

  const onQuestionChange = e => setQuestion(e.target.value);
  const onAnswerChange = e => setAnswer(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { text_id: props.textId, question, answer, position: props.position };
    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };

		fetch('/newCard', postOptions)
			.then(response => {
				return response.json()
			})
		  .then((response) => {
				setQuestion('');
				setAnswer('');
				props.dismissCard(false);
			});
		
  }

  return (
		<div className="modal">
			<div id="addCardWrapper">
				<h1>Add a Card After {props.position}</h1>
				<textarea 
					placeholder="Add a question"
					value={ question } 
					onChange={ onQuestionChange }
				/>
				<textarea 
					placeholder="Answer your question"
					value={ answer }
					onChange={ onAnswerChange } 
				/>
				<button
					type="submit"
					onClick={ handleSubmit }
				>
				Create New Card  
				</button>
				<button
					type='submit'
					onClick={ () => props.dismissCard(false) }
				>
					Cancel
				</button>
		  </div>
	 </div>
  );
}

export default AddCard;