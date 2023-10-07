import React from 'react';
import Overlay from './Overlay';
import PageLoader from './PageLoader';
import Navbar from './Navbar';
import HomeComponent from './HomeComponent';
import Sidebar from './Sidebar';
import "adminbsb-materialdesign/css/themes/all-themes.css";


class MainComponent extends React.Component {

	state={
		bodyClass: "theme-red ls-closed",

	}
	onBarClick=()=>{
		if(this.state.bodyClass=="theme-red ls-closed overlay-open"){
			this.setState({bodyClass:"theme-red ls-closed"})
		}
		else if(this.state.bodyClass=="theme-red ls-closed"){
			this.setState({bodyClass:"theme-red ls-closed overlay-open"})
		}
	};

	render() {
		if (window.screen.width > 1150) {
			document.getElementById("root").className = "theme-red";
		}
		else {
			document.getElementById("root").className = this.state.bodyClass;
		}

		return <React.Fragment>
			<Overlay />
			<Navbar onBarClick={this.onBarClick}/>
			<Sidebar />
			<HomeComponent />
			<PageLoader />
		</React.Fragment>;
	};
}


export default MainComponent;