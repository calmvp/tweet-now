$(document).ready(function() {
  $('#tweet_form').on('submit', function(event){
  	event.preventDefault();
  	$("input[type='submit']").prop('disabled', true);
  	$('.container').append('<span class="inprogress">Tweet in Progress</span>');
  	$.post("/tweet",$(this).serialize(), function(response){
  		$('.inprogress').remove();
  		console.log(response)
  		$('.container').append(response);
  		$("input[type='submit']").prop('disabled', false);
  	});
  });
});

//Refactor to use Ajax method and return an error message if necessary.