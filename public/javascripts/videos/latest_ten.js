// Getting the Latest Video Should be 1 returned
$.get('/api/v1/videos/latest_ten', function(data){
	
	var div = $(`<div>`);
	div.addClass("row");

	let today = new Date();
	let yesterday = today.toUTCString();
	console.log(yesterday);
	console.log(yesterday + 1);
	let allVideoHtml = ``;

	data.forEach(function (d) {

		if (d.date_created == yesterday) {
			allVideoHtml = `<div id="col-sm-6">
				<a href="/showvideo/${d._id}">
					<img id="videoImages" src=${d.mainImage} />
					<h1 id="videoImageTitles">${d.title} (NEW)</h1>
				</a>
			</div>`;
		} else {
			allVideoHtml = `<div id="col-sm-6">
				<a href="/showvideo/${d._id}">
					<img id="videoImages" src=${d.mainImage} />
					<h1 id="videoImageTitles">${d.title}</h1>
				</a>
			</div>`;
		}
		

		div.append(allVideoHtml);

	});

	$('#latest_ten').append(div);

});