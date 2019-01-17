// Getting the Latest Video Should be 3 returned
$.get(`/api/v1/views${window.location.pathname}`, function(data){
	var views = $('#views');
	//console.log(views[0].innerHTML);
	views[0].innerHTML = parseInt(views[0].innerHTML) + 1;
});