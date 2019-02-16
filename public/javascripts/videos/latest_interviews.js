// Getting the Latest Video Should be 1 returned
$.get('/api/v1/videos/latest_interviews', function(data){
	
	var div = $(`<div>`);
	div.addClass("row");

	data.forEach(function (d) {

		console.log(d);

		let allVideoHtml = `<div class="col-md-12">
			<a href="/showvideo/${d._id}">
				<img id="sideImages" src=${d.mainImage} />
				<h1 id="videoImageTitles">${d.title}</h1>
			</a>
		</div>`;

		div.append(allVideoHtml);

	});

	$('#latest_interviews').append(div);

});