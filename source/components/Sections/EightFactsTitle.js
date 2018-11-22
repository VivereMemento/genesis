import React from 'react';

const EightFactsTitle = ({ number, count, text }) => (
	<div className="eight-facts__title">
		<div className="eight-facts__title-number">{ number }</div>
		<div className="eight-facts__title-count">{ count }</div>
		<div className="eight-facts__title-text">{ text }</div>
	</div>
);

export default EightFactsTitle;