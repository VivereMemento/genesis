import React from 'react';

const textElems = {
	paragraphs: value => <p className="eight-facts__text">{ value }</p>,
	quotes: value => <span className="eight-facts__text eight-facts__text_quete">&#8220; { value } &#8221;</span>,
	prequotes: value => <span className="eight-facts__text">{ value }</span>,
	postquotes: value => <span className="eight-facts__text">{ value }</span>
}

const EightFactsContent = ({ data }) => {
	const { order } = data;
	const memorizeObj = {};
	return (
		<div className="eight-facts__content">
			{order.map(
				value => {
					memorizeObj.hasOwnProperty(value)
						? memorizeObj[value] += 1
						: memorizeObj[value] = 0;

					const name = value;
					const count = memorizeObj[name]
					const renderText = textElems[name];

					return renderText(data[name][count]);
				}
			)}
		</div>
	)
};

export default EightFactsContent;
