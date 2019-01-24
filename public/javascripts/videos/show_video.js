// Getting the Latest Video Should be 3 returned
$.get(`/api/v1/videos${window.location.pathname}`, function(data){

	console.log(data);

	var result = `<h3 class="text-center" id="vidTitle">${data.title}</h3><br><iframe id="mainVideo" src=${data.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><hr><div class="row"><div class="col-sm-6"><h6>Posted: ${data.date_created}</h6><h6><span id="views">${data.views}</span> Views</h6></div><div class="col-sm-6"><a class="a2a_dd" href="https://www.addtoany.com/share"><img src="https://static.addtoany.com/buttons/share_save_171_16.png" width="171" height="16" border="0" alt="Share"></a><script async src="https://static.addtoany.com/menu/page.js"></script></div></div><br><div class="card"><div class="card-body"><pre id="videoDescription">${data.description}</pre></div></div>`;
	
	$('#showVideo').append(result);

});