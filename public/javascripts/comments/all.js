// Getting the Latest Video Should be 3 returned
$.get(`/api/v1/videos${window.location.pathname}`, function(data){

	//console.log(data.comments);

	var result = $(`<ul>`);

	result.addClass('list-group');

	result.addClass('comment-result');

	if (data.comments.length < 1) {
		result.append(`<div id="good-hide"><br><h1 class="text-center">No Comments Added Yet</h1></div>`);
	} else {
		//videoComments = data.comments.sort(function(a,b){ return a.date_created - b.date_created; });

		//console.log(`Video Comments: ${videoComments}`);

		data.comments.sort().forEach(function(comment) {
			result.append(`<li class="list-group-item"><h5>${comment.name}</h5><pre id="userComments">${comment.body}</pre></li>`);
		});
	}

	
	
	$('#comments').append(result);

});