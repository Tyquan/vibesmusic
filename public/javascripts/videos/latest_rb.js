// Getting the Latest Video Should be 1 returned
$.get('/api/v1/videos/latest_rb', function(data){
	
	var div = $(`<div>`);
	div.addClass("row");

	let today = new Date();
	let yesterday = today.toUTCString();
	console.log(yesterday);
	console.log(yesterday + 1);
	let allVideoHtml = ``;

	data.forEach(function (d) {

		allVideoHtml = `<div id="col-lg-6">
			<a href="/showvideo/${d._id}">
				<img id="rbvideoImages" src=${d.mainImage} />
				<h1 id="videoImageTitles">${d.title} (NEW)</h1>
			</a>
		</div>`;

		div.append(allVideoHtml);

	});

	$('#latest_rb').append(div);

});