import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const RenderText = props => {
	const [body, setBody] = useState([]);
	const [title, setTitle] = useState('');
	const [cards, setCards] = useState([]);
	const { textId } = useParams();
	
	useEffect(() => {
		fetch(`/getCards/${textId}`)
			.then(queryResults => queryResults.json())
			.then(queryResults => {
				const cardObj = queryResults.reduce((acc, card) => {
					if(!acc[card.position]) {
						acc[card.position] = { count: 1, cards: [{ question: card.question, answer: card.answer }] };
						return acc;
					} else {
						acc[card.position].count++;
						acc[card.position].cards.push({ question: card.question, answer: card.answer });
					}
				}, 
				{});
				
				setCards(cardObj);
				
			});
		
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
	}, [setBody, setTitle, setCards]);

  return (
		<article className="mnemoText">
		  <div className="mnemoTitle">{title}</div>
			{ body }
		</article>
  );
}

export default RenderText;