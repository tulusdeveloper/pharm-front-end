import React from 'react';
import Overlay from './Overlay';
import PageLoader from './PageLoader';
import Navbar from './Navbar';
import HomeComponent from './HomeComponent';


class MainComponent extends React.Component {
	render() {
		return <React.Fragment>
			<Overlay />
            <Navbar />
            <PageLoader />
		
			<HomeComponent />

		</React.Fragment>;
	};
}


export default MainComponent;