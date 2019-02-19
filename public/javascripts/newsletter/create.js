// Getting the Latest Video Should be 3 returned
$( "#form" ).submit(function( event ) {
  //event.preventDefault();
  
  var addSubUrl = `/api/v1/subscribers/`;
  
  var email = event.target[0].value;

  var newData = {email: email};

  $.post(addCommentUrl, newData, function(data){
  	//window.location = "http://herrahiphop.com";
  	//result = $('#comment-result');
  	//result.append(`<li class="list-group-item"><h5>${data.name}</h5><pre id="userComments">${data.body}</pre></li>`);
	});

});
