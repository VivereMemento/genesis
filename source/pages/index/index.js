import '../../style/app.scss';
// import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import HeaderContent from '../../components/HeaderContent/HeaderContent';
import FooterContent from '../../components/FooterContent/FooterContent';
import EightFacts from '../../components/Sections/EightFacts';

const root = document.querySelector('#root');

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageLayout 
				header={
					<HeaderContent />
				}
				main={
					<EightFacts />
				}
				footer={(
					<FooterContent />
				)}
			/>
		);
	}
}


ReactDOM.render(
	<App />,
	root
);