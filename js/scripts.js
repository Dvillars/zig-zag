
function zigZag(textInput) {
  var numberInput = parseInt(textInput);
	for (var i = 1; i <= numberInput; i++) {
		console.log(i);
	}
};

$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#textInput").val();
    var result = zigZag(textInput);
    $(".result").text(result).slideDown();
  })
});
