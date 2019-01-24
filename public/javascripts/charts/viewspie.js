$.getJSON("/api/v1/views", (data) => {
	let titles = [];
	let dates = [];
	let categories = [];
	let results = [];

	let randomColor = `rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},1)`;
	let randomColors = [randomColor, randomColor, randomColor, randomColor, randomColor, randomColor, randomColor];

	for(let i = 0; i < data.length; i++) {
		titles.push(data[i].views);
		let date = new Date(data[i].date_created);
    	let beginDate = date.toDateString();
		dates.push(beginDate);
		for (let j = 0; j < categories.length; j++) {
			if (data[i].category == categories[j]) {
				categories[j]++;
			} else {
				results.push({data[i].category : 1});
			}
		}
		// for (let a = 0; a < categories.length; a++) {

		// }
		//categories.push(data[i].category);
	}

	console.log(categories);
	
	var chartData = {
		labels: categories,
		datasets: [{
			label: "Views",
			fill: false,
			lineTension: 0.1,
			backgroundColor: randomColors,
			borderColor: "rgb(75,192,192,1)",
			corderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgb(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgb(75,192,192,1)",
			pointHoverBorderColor: "rgb(220,220,220,1)",
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: titles
		}]
	};

	var ctx = $("#views-pie");
	var barGraph = new Chart(ctx, {
		type: 'line',
		data: chartData
	});
});