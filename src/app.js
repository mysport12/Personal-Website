import React from 'react'
import ReactDom from 'react-dom'
import card from 'bootstrap-css'
import Home from 'home.js'
import About from 'about.js'
import Project from 'projects.js'
import Contact from 'contact.js'


function DisplayHome() {
	ReactDOM.render(
		<Home />,
		document.getElementById('content')
	);
}

function DisplayAbout() {
	ReactDOM.render(
		<About />,
		document.getElementById('content')
	);
}

function DisplayProjects() {
	ReactDOM.render(
		<Project />,
		document.getElementById('content')
	);
}

function DisplayContact() {
	ReactDOM.render(
		<Contact />,
		document.getElementById('content')
	);
}

class DeterminePage extends React.Component {
	render() {
		if this.props.page == 'homePage' {
			return <Home />
		}
		else if this.props.page == 'aboutPage' {
			DisplayAbout();
		}
		else if this.props.page == 'projectPage' {
			DisplayProjects();
		}
		else if this.props.page == 'contactPage' {
			DisplayContact();
		}
		else {
			console.log("An unknown page was selected");
		}
	}
}

ReactDOM.render(
	DeterminePage,
	document.getElementById('content')
);
