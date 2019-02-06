// Getting the Latest Video Should be 3 returned
$.get(`/api/v1/videos${window.location.pathname}`, function(data){
	var result = $(`<ul>`);
	var noCommentsHtml = `<div id="good-hide"><br><h1 class="text-center">No Comments Added Yet</h1></div>`;

	addStyles(result);
	renderComments(noCommentsHtml);
	

	function addStyles (result) {
		result.addClass('list-group');
		result.addClass('comment-result');
	}

	function renderComments (noCommentsHtml) {
		if (data.comments.length < 1) {
			result.append(noCommentsHtml);
		} else {
			data.comments.sort().forEach(function(comment) {
				var commentsHtml = `
					<li class="list-group-item">
						<h5>${comment.name}</h5>
						<pre id="userComments">${comment.body}</pre>
					</li>`
				result.append(commentsHtml);
			});
		}
		$('#comments').append(result);
	}

});