import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const RenderEditableText = props => {
	const [body, setBody] = useState([]);
	const [title, setTitle] = useState('')
	const { textId } = useParams();
	
	useEffect(() => {
		fetch(`/getTextContent/${textId}`)
			.then(queryResults => queryResults.json())
		  .then((queryResults) => {
				const bodyElements = queryResults.text.map((chunk) => {
					const { type, position, content } = chunk;
					let element;
					
					if (type === 'heading-1') {
						element = <h1 key={position} id={`heading-${position}`}>{content}</h1>
					} else if (type === 'heading-2') {
						element = <h2 key={position} id={`heading-${position}`}>{content}</h2>
					} else if (type === 'heading-3') {
						element = <h3 key={position} id={`heading-${position}`}>{content}</h3>
					} else if (type === 'paragraph') {
						element = <p key={position} id={`paragraph-${position}`}>{parse(content)}</p>
					}
					return element;
				});
				setBody(bodyElements);
				setTitle(queryResults.title);
			});
	}, [setBody, setTitle]);

	const handleAddCardClick = (e) => {
		document.addEventListener('click', handleElementClick);
	}

	const handleElementClick = (e) => {
		console.log(e.target.id);
		document.removeEventListener('click', handleElementClick);
	}

  return (
		<article className="mnemoText">
		  <div className="mnemoTitle">{title}</div>
			<button id="addCard" onClick={handleAddCardClick}>+ Add Card</button>
            { body }
		</article>
  );
}

export default RenderEditableText;