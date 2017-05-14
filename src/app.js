import React from 'react';
import ReactDom from 'react-dom';
var Home = require('home.js');
var About = require('about.js');
var Project = require('projects.js');
var Res = require('resume.js');

function DeterminePage() {

	var page = <Home />

	if (page == "") {
		return alert("Page Error. Contact site owner.");
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

document.getElementById('resPage').addEventListener("click", function() {
	ReactDOM.render(
		<Res />,
		document.getElementById('content')
	);
});

$('.navbar-toggle').click(function(event) {
    $('.navbar-collapse').toggle('in');
});

$('#facebook').hover(function() {
	$('#facebook').css('cursor', 'pointer');
});

$('#facebook').click(function(){
	window.open('https://www.facebook.com/craig.martin.754')
});

$('#instagram').hover(function() {
	$('#instagram').css('cursor', 'pointer');
});

$('#instagram').click(function(){
	window.open('https://www.instagram.com/craiggers89/')
});

$('#twitter').hover(function() {
	$('#twitter').css('cursor', 'pointer');
});

$('#twitter').click(function(){
	window.open('https://twitter.com/MartinCmart1220')
});

$('#linkedin').hover(function() {
	$('#linkedin').css('cursor', 'pointer');
});

$('#linkedin').click(function(){
	window.open('https://www.linkedin.com/in/craig-martin-4bb62a30/')
});

$('#github').hover(function() {
	$('#github').css('cursor', 'pointer');
});

$('#github').click(function(){
	window.open('https://github.com/mysport12')
});

$('#email').hover(function() {
	$('#email').css('cursor', 'pointer');
});

$('#email').click(function(){
	window.location = 'mailto:cmart1220@gmail.com';
});

ReactDOM.render(
	<DeterminePage />,
	document.getElementById('content')
);