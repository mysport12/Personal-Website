import React from 'react'
import ReactDom from 'react-dom'
import card from 'bootstrap-css'
import Home from 'home.js'
import About from 'about.js'
import Project from 'projects.js'
import Contact from 'contact.js'

class DeterminePage extends React.Component {
	render() {
		if (this.props.page == 'homePage') {
			return <Home />
		}
		else if (this.props.page == 'aboutPage') {
			return <About />
		}
		else if (this.props.page == 'projectPage') {
			return <Project />
		}
		else if (this.props.page == 'contactPage') {
			return <Contact />
		}
		else {
			console.log("An unknown page was selected");
		}
	}
}

ReactDOM.render(
	<DeterminePage />,
	document.getElementById('content')
);