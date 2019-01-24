$.get('/api/v1/videos', function(data){

	var count = 0;

	var div = $(`<div>`);
	div.addClass("row");
	data.forEach(function (d) {
		count += d.views;
	});

	var average = count / data.length;

	var countHtml = `<h3>Total Lifetime Views: ${count}</h3>`;
	var averageHtml = `<h3>Average Views per Video: ${average.toFixed(2)}</h3>`
	div.append(`<div id="col-sm-12">${countHtml} ${averageHtml}</div>`);

	$("#averageView").append(div);

});