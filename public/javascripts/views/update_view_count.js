// Update the view count of a video when the user views the video

$.get(`/api/v1/views${window.location.pathname}`, function(data){
	var views = $('#views');
	views[0].innerHTML = parseInt(views[0].innerHTML) + 1;
});