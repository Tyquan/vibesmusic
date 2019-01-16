// Getting the Latest Video Should be 3 returned
$.get(`/api/v1/videos${window.location.pathname}`, function(data){

	console.log(data);

	var result = `<h3>${data.title}</h3><iframe width="100%" height="315" src=${data.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><hr><h6>Posted: ${data.date_created}</h6><br><pre id="videoDescription">${data.description}</pre>`;
	
	$('#showVideo').append(result);

});