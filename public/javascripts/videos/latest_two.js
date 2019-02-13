// Getting the Latest 2 Videos

$.get('/api/v1/videos/latest_two', function(data){

	var result = `<div class="row">
		<div class="col-md-6">
			<iframe id="latestTwoVideos" src=${data[1].link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		<div class="col-md-6">
			<iframe id="latestTwoVideos" src=${data[2].link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</div>`; // end .row
	
	$('#latest_two').append(result);

});