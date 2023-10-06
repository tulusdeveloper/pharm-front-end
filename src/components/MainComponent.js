import React from 'react';
import Overlay from './Overlay';
import PageLoader from './PageLoader';
import Navbar from './Navbar';
import HomeComponent from './HomeComponent';
import Sidebar from './Sidebar';
import "adminbsb-materialdesign/css/themes/all-themes.css";


class MainComponent extends React.Component {
	render() {
		document.getElementById("root").className="theme-red";
		return <React.Fragment>
			<Overlay/>
			<Navbar/>
			<Sidebar/>
			<HomeComponent/>
		</React.Fragment>;
	};
}


export default MainComponent;