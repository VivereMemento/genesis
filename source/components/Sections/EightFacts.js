import React, { Component } from 'react';
import PageLayout from '../PageLayout/PageLayout';

import './eight-facts.scss';

const { Section, Container } = PageLayout;

const EightFacts = ({ renderContent }) => {
	return (
		<Section name="eight-facts">
			<Container>
				{ renderContent() }
			</Container>
		</Section>
	);
} 

export default EightFacts;