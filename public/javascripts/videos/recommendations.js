$.get(`/api/v1/videos/recommendations${window.location.pathname}`, function(data){

	console.log(window.location.pathname);
	var ul = $(`<ul>`);
	ul.addClass("list-group")
	data.forEach(function(d) {
		if (window.location.pathname != `/showvideo/${d._id}`) {
			ul.append(`<li class="list-group-item" id="recommendationItem"><a href="/showvideo/${d._id}"><img src=${d.mainImage} id="recommendedVideos" /><h5 id="recommendationTitle">${d.title}</h5></a></li>`);
		}
	});
	
	$('#recommendations').append(ul);

});