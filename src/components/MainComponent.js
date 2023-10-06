import React from 'react';
import Overlay from './Overlay';
import PageLoader from './PageLoader';
import Navbar from './Navbar';
import HomeComponent from './HomeComponent';
import Sidebar from './Sidebar';


class MainComponent extends React.Component {
	render() {
		return <React.Fragment>
			<Overlay />
			<Navbar />
			<Sidebar />
			<HomeComponent />
            <PageLoader />
		</React.Fragment>;
	};
}


export default MainComponent;