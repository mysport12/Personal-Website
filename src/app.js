import React from 'react';
import ReactDom from 'react-dom';
//import Iframe from 'react-iframe'
var Home = require('home.js');
var About = require('about.js');
var Project = require('projects.js');

//import {Project} from '/src/projects.js';
//import Contact from 'contact.js'

function DeterminePage(props) {

	var page = <Home />

	if (page == "") {
		return alert("Nothing was assigned to page");
	}
	else {
		return page;
	}
}

document.getElementById('homePage').addEventListener("click", function() {
	ReactDOM.render(
		<Home />,
		document.getElementById('content')
	);
});

document.getElementById('aboutPage').addEventListener("click", function() {
	ReactDOM.render(
		<About />,
		document.getElementById('content')
	);
});

document.getElementById('projectPage').addEventListener("click", function() {
	ReactDOM.render(
		<Project />,
		document.getElementById('content')
	);
});

document.getElementById('contactPage').addEventListener("click", function() {
	ReactDOM.render(
		<Project />,
		document.getElementById('content')
	);
});


ReactDOM.render(
	<DeterminePage />,
	document.getElementById('content')
);