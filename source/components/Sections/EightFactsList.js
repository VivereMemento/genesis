import React, { Component } from 'react';

import {data} from './data';
import EightFactsTitle from './EightFactsTitle';
import EightFactsContent from './EightFactsContent';

class EightFactsList extends Component {
	state = data;

	render() {
		return (
			<ul className="eight-facts__list">
				{ this.getContent() }
			</ul>
		);
	};

	getContent = () => {
		const { count, titles, texts } = this.state;
		const { from, to } = this.props;
		return (
			count.slice(from, to).map((num, idx) => (
				<li className="eight-facts__item" key={ num }>
					<EightFactsTitle
						number={ count.findIndex(n => n === num) + 1 }
						count={ num }
						text={ titles[num.toLocaleLowerCase()] }
					/>
					<EightFactsContent data={texts[num.toLocaleLowerCase()]} />
				</li>
			)).reverse()
		)
	}
}

export default EightFactsList;