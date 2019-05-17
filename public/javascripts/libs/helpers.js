function showPage(url, category, element){
	// Individual Category Video Page Render Template
	$.get(url, function(data){

		var div = $(`<div>`);
		div.addClass("row");

		data.forEach(function (d) {
			if (typeof category == "string") {
				if (d.category == category) {
					renderTemplate(d, div);
				}
			} else {
				for (let n = 0; n < category.length; n++) {
					if (d.category == category[n]) {
						renderTemplate(d, div);
					}
				}
			}
		});

		$(element).append(div);

	});
}

function renderTemplate(d, div) {
	let allVideoHtml = `<div id="col-md-6">
		<a href="/showvideo/${d._id}">
			<img id="catImages" src=${d.mainImage} />
			<h1 id="videoImageTitles">${d.title}</h1>
		</a>
	</div>`;

	div.append(allVideoHtml);
	console.log(`${d} template rendered`);
}