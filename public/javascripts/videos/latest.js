// Getting the Latest Video Should be 1 returned
$.get('/api/v1/videos/latest', function(data){
	
	var title = data.title;
	var link = data.link;

	var titleHtml = `<h1 id="latestTitle">${title}</h1>`;

	var iframeHtml = `<iframe id="latestVideo" src=${link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

	$('#latest').append(iframeHtml);

});