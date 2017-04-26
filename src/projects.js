import React from 'https://unpkg.com/react@15/dist/react.min.js'
import ReactDOM from 'https://unpkg.com/react-dom@15/dist/react-dom.min.js'
import card from 'bootstrap-css'

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
		<div styleName='card'>
			<div styleName='card-block'>
				<h3 styleName='card-title'>{dailyem.name}</h3>
				<p styleName='card-text'>{dailyem.url}</p>
				<img src={dailyem.img} styleName='card-img-left'/>
				<p>{dailyem.description}</p>
			</div>
			<div styleName="row">
				<h3>{pcjband.name}</h3>
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
