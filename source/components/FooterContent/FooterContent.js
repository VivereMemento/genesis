import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

import './footer.scss';
const { Container } = PageLayout;

const FooterContent = (props) => (
	<Container>
		<div className="footer__content">This is footer content</div>
	</Container>
);

export default FooterContent;