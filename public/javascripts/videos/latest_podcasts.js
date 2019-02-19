// Getting the Latest Video Should be 1 returned
$.get('/api/v1/videos/', function(data){
	
	var div = $(`<div>`);
	div.addClass("row");
	var rows = [];
	for (var i = 1; i < data.length; i++) {
		if (rows.length <= 2) {
			if (data[i].category == "Podcast" || data[i].category == "Show" || data[i].category == "Trailers" || data[i].category == "Announcements") {
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

	//console.log(data);
	// data.forEach(function (d) {
	// 	if (d.category == "Podcast" || d.category == "Show" || d.category == "Trailers" || d.category == "Announcements") {
	// 		if (rows.length <= 3) {
	// 			let allVideoHtml = `<div class="col-md-12">
	// 				<a href="/showvideo/${d._id}">
	// 					<img id="sideImages" src=${d.mainImage} />
	// 					<h1 id="videoImageTitles">${d.title}</h1>
	// 				</a>
	// 			</div>`;
	// 			rows.push(allVideoHtml);

	// 			//div.append(allVideoHtml);
	// 			div.append(rows);
	// 			console.log(div);
	// 		}
	// 	}

	$('#latest_podcasts').append(div);
});

	

