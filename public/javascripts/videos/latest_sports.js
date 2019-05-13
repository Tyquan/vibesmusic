// Getting the Latest Video Should be 1 returned
$.get('/api/v1/videos/', function(data){
	
	var div = $(`<div>`);
	div.addClass("row");
	var rows = [];
	for (var i = 1; i < data.length; i++) {
		if (rows.length <= 2) {
			if (data[i].category == "Sports") {
				rows.push(data[i]);
			}
		}
	}

	for (var i = 0; i < rows.length; i++) {
		let allVideoHtml = `<div class="col-md-12">
			<a href="/showvideo/${rows[i]._id}">
				<img id="sideImages" src=${rows[i].mainImage} />
				<h1 id="videoImageTitles">${rows[i].title}</h1>
			</a>
		</div>`;
		div.append(allVideoHtml);
	}

	$('#latest_sports').append(div);
});

	

