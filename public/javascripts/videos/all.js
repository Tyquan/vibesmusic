$.get('/api/v1/videos', function(data){

	var div = $(`<div>`);
	div.addClass("row");
	data.forEach(function (d) {
		div.append(`<div id="col-sm-6"><img id="videoImages" src=${d.mainImage} /><h1 id="videoImageTitles"><a href="/showvideo/${d._id}">${d.title}</a</h1></div>`);
	});

	$("#allVideos").append(div);

});