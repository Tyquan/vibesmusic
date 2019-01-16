$.get(`/api/v1/videos/recommendations${window.location.pathname}`, function(data){

	console.log(window.location.pathname);
	var ul = $(`<ul>`);
	ul.addClass("list-group")
	data.forEach(function(d) {
		if (window.location.pathname != `/showvideo/${d._id}`) {
			ul.append(`<li class="list-group-item"><img src=${d.mainImage} id="recommendedVideos" /><a href="/showvideo/${d._id}"><h5>${d.title}</h5></a></li>`);
		}
	});
	
	$('#recommendations').append(ul);

});