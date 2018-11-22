import '../../style/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import HeaderContent from '../../components/HeaderContent/HeaderContent';
import FooterContent from '../../components/FooterContent/FooterContent';
import EightFactsTop from '../../components/Sections/EightFactsTop';
import EightFacts from '../../components/Sections/EightFacts';
import EightFactsList from '../../components/Sections/EightFactsList';
import Actions from '../../components/Sections/Actions';

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
					<React.Fragment>
						<EightFacts 
							renderContent={() => (
								<React.Fragment>
									<EightFactsTop />
									<h3 className="eight-facts__heading">Here are 8 amazing facts about Wangari…</h3>
									<EightFactsList from={5} />
								</React.Fragment>
							)}
						/>
						<Actions />
						<EightFacts
							renderContent={() => <EightFactsList from={2} to={5} />}
						/>
						<Actions />
						<EightFacts
							renderContent={() => <EightFactsList from={0} to={2}  />}
						/>
					</React.Fragment>
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