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

	return React.createElement(
		'div',
		{ 'class': '${styles.card}' },
		React.createElement(
			'div',
			{ 'class': '${styles.card-block}' },
			React.createElement(
				'h3',
				{ 'class': '${styles.card-title}' },
				dailyem.name
			),
			React.createElement(
				'p',
				{ 'class': '${styles.card-text}' },
				dailyem.url
			),
			React.createElement('img', { src: dailyem.img, 'class': '${styles.card-img-left}' }),
			React.createElement(
				'p',
				null,
				dailyem.description
			)
		),
		React.createElement(
			'div',
			{ 'class': 'row' },
			React.createElement(
				'p',
				null,
				pcjband.name
			),
			React.createElement(
				'p',
				null,
				pcjband.url
			),
			React.createElement('img', { src: pcjband.img }),
			React.createElement(
				'p',
				null,
				pcjband.description
			)
		)
	);
}

function DisplayProjects() {
	ReactDOM.render(React.createElement(Project, null), document.getElementById('content'));
}