var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css');

//Projects page

function Project() {

	const pcjband = {
		name: "Pace Car Joe",
		url: "www.pcjband.com",
		img: "/img/pacecarjoe.jpg",
		description: "My friend reached out looking for help with his band's website. I set him up with a Wordpress site that he is able to manage and maintain on his own. The project provided me with my first look at Wordpress and the user friendly admin dashboard."
	};

	const dailyem = {
		name: "Daily Em",
		url: "www.dailyem.com",
		img: "/img/dailyem.jpg",
		description: "DailyEm.com is my wife's blog created to provide readers with fitness ideas/motivation, new and exciting recipes, and funny stories about our two dogs."
	};

	return (
		<div class='${styles.card}'>
			<div class='${styles.card-block}'>
				<h3 class='${styles.card-title}'>{dailyem.name}</h3>
				<p class='${styles.card-text}'>{dailyem.url}</p>
				<img src={dailyem.img} class='${styles.card-img-left}'/>
				<p>{dailyem.description}</p>
			</div>
			<div class="row">
				<p>{pcjband.name}</p>
				<p>{pcjband.url}</p>
				<img src={pcjband.img}/>
				<p>{pcjband.description}</p>
			</div>
		</div>
	);
}

function DisplayProjects() {
	ReactDOM.render(
		<Project />,
		document.getElementById('content')
	);
}
