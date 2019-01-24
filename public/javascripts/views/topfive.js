$.get('/api/v1/videos/topfive', function(data){

	console.log(data);

	var div = $(`<div>`);
	data.forEach(function (d) {
		div.append(`<div class="row"><div class="col-sm-4"><img class="img-fluid" src=${d.mainImage} /></div><div class="col-sm-8"><h6 id="adminImageTitles">${d.title}</h6><h6 id="adminImageTitles">Views: ${d.views}</h6><p id="adminImageTitles">Category: ${d.category}</p></div></div>`);
	});

	$("#fiveVideos").append(div);

});