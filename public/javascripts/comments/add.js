// Getting the Latest Video Should be 3 returned
$( "#target" ).submit(function( event ) {
  //event.preventDefault();
  
  var addCommentUrl = `/api/v1/comments${window.location.pathname}`;
  
  var name = event.target[0].value;
  var comment = event.target[1].value;

  var newData = {name: name, body: comment};

  $.post(addCommentUrl, newData, function(data){
  	//result = $('#comment-result');
  	//result.append(`<li class="list-group-item"><h5>${data.name}</h5><pre id="userComments">${data.body}</pre></li>`);
	});

});

