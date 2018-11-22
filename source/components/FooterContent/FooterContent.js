import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

import './footer.scss';
const { Container } = PageLayout;

const FooterContent = (props) => (
	<Container>
		<div className="footer__content">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/SFAmD-UPQT4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</Container>
);

export default FooterContent;