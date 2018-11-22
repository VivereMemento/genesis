import React, { Component } from 'react';
import PageLayout from '../PageLayout/PageLayout';

import './actions.scss';
import SimpleSlider from '../Slider/Slider';
const { Section, Container } = PageLayout;

class Actions extends Component {
	render() {
		return (
			<Section name="actions">
				<Container>
					<SimpleSlider />
				</Container>
			</Section>
		);
	};
} 

export default Actions;