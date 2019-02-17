$.get('/api/v1/videos', function(data){

	var div = $(`<div>`);
	div.addClass("row");

	data.forEach(function (d) {
		if (d.category == "HipHop" || d.category == "RB") {
			let allVideoHtml = `<div id="col-md-6">
				<a href="/showvideo/${d._id}">
					<img id="catImages" src=${d.mainImage} />
					<h1 id="videoImageTitles">${d.title}</h1>
				</a>
			</div>`;

			div.append(allVideoHtml);
		}
	});

	$("#music").append(div);

});