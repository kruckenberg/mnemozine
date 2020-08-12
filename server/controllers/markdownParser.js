const markdownParser = (text) => {
	const splitText = text.split('\n').filter((ea) => ea !== '');

	const parsedText = [];
	position = 0;

	for (let block of splitText) {
		const blockObj = {
          position: position  
		};

		block = block.trim();  
		if (block[0] === '#') {
			if (block[2] === '#') {
				blockObj.type = 'heading-3';
				blockObj.content = block.slice(3).trim();
			} else if (block[1] === '#') {
				blockObj.type = 'heading-2';
				blockObj.content = block.slice(2).trim();   
			} else {
				blockObj.type = 'heading-1';
				blockObj.content = block.slice(1).trim();
			}
		} else {
			blockObj.type = 'paragraph';
			let content = block.trim();
			while(content.indexOf('**') > 0) {
				content = content.replace(/\*{2}/, '<strong>').replace(/\*{2}/, '</strong>');
			}
			while(content.indexOf('__') > 0) {
				content = content.replace(/_{2}/, '<em>').replace(/_{2}/, '</em>')
			}
			blockObj.content = content;


		}

		parsedText.push(blockObj);
		position += 1;
	}
	return parsedText;
}

module.exports = markdownParser;