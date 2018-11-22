import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

import './header.scss';
import eye from './watch.png';
const { Container } = PageLayout;

const HeaderContent = (props) => (
	<Container>
		<div className="header__content">
			<div className="header__left-side">
				<div className="header__title">
					8 Amazing Facts About Kenya’s Eight Year Old Queen Of Golf <br /> 
					Chanelle Wangari
				</div>
				<div className="header__subtitle">
					Tuko.co.ke spent a morning with her at the Muthaiga Golf Club <br />
					where she was working on her swing <br />
					with the help of her coach Charles Farrar.
				</div>
				<div className="header__date">
					12 august 2015 
					<figure className="header__date-watched">
						<img src={eye}/>
						<figcaption>5002</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</Container>
);

export default HeaderContent;