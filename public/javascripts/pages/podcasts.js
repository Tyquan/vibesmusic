$.get('/api/v1/videos', function(data){

	var div = $(`<div>`);
	div.addClass("row");

	data.forEach(function (d) {
		if (d.category == "Podcast" || d.category == "Trailers" || d.category == "Show" || d.category == "Announcements") {
			let allVideoHtml = `<div id="col-md-6">
				<a href="/showvideo/${d._id}">
					<img id="catImages" src=${d.mainImage} />
					<h1 id="videoImageTitles">${d.title}</h1>
				</a>
			</div>`;

			div.append(allVideoHtml);
		}
	});

	$("#podcasts").append(div);

});