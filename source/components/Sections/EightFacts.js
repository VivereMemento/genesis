import React, { Component } from 'react';
import PageLayout from '../PageLayout/PageLayout';

import './eight-facts.scss';
import {data} from './data';
import EightFactsTitle from './EightFactsTitle';
import EightFactsContent from './EightFactsContent';
const { Section, Container } = PageLayout;

class EightFacts extends Component {
	state = data;

	render() {
		return (
			<Section name="eight-facts">
				<Container>
					<h3 className="eight-facts__heading">Here are 8 amazing facts about Wangari…</h3>
					<ul className="eight-facts__list">
						{ this.getContent() }
					</ul>
				</Container>
			</Section>
		);
	};

	getContent = () => {
		const { count, titles, texts } = this.state;
		return (
			count.map((num, idx) => (
				<li className="eight-facts__item" key={ num }>
					<EightFactsTitle
						number={ idx + 1 }
						count={ num }
						text={ titles[num.toLocaleLowerCase()] }
					/>
					<EightFactsContent data={texts[num.toLocaleLowerCase()]} />
				</li>
			)).reverse()
		)
	}
} 

export default EightFacts;