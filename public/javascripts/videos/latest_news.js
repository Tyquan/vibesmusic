// Getting the Latest Video Should be 1 returned
$.get('/api/v1/videos/latest_news', function(data){
	
	var div = $(`<div>`);
	div.addClass("row");

	let allVideoHtml = `<div class="col-sm-12">
		<a href="/showvideo/${data._id}">
			<img id="sideImages" src=${data.mainImage} />
			<h1 id="videoImageTitles">${data.title}</h1>
		</a>
	</div>`;

	div.append(allVideoHtml);

	$('#latest_news').append(div);

});