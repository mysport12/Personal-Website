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
		<div>
			<p>{dailyem.name}</p>
			<p>{dailyem.url}</p>
			<img src={dailyem.img}/>
			<p>{dailyem.description}</p>
		</div>
	);
}

function displayProjects() {
	ReactDOM.render(
		<Project />,
		document.getElementById('content')
	);
}
