// Getting the Latest Video Should be 3 returned
$.get(`/api/v1/videos${window.location.pathname}`, function(data){

	console.log(data);

	var result = `<h3 class="text-center">${data.title}</h3><br><iframe id="mainVideo" src=${data.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><hr><h6>Posted: ${data.date_created}</h6><h6><span id="views">${data.views}</span> Views</h6><br><div class="card"><div class="card-body"><pre id="videoDescription">${data.description}</pre></div></div>`;
	
	$('#showVideo').append(result);

});