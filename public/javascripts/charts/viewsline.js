$.getJSON("/api/v1/views", (datas) => {
	console.log(datas);
	let views = [];
	let dates = [];
	let titles = [];

	for(let i = 0; i < datas.length; i++) {
		views.push(datas[i].views);
		let date = new Date(datas[i].date_created);
    	let beginDate = date.toDateString();
		dates.push(beginDate);
		titles.push(datas[i].title);
	}
	
	var chartData = {
		labels: titles,
		datasets: [{
			label: "Views",
			fill: false,
			lineTension: 0.1,
			backgroundColor: "rgb(75,192,192,0.4)",
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
			data: views
		}]
	};

	var ctx = $("#views-line");
	var barGraph = new Chart(ctx, {
		type: 'line',
		data: chartData
	});
});