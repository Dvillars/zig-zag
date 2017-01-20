
function zigZag(textInput) {
  var numberInput = parseInt(textInput);
  var arrayOutput = []
	for (var i = 1; i <= numberInput; i++) {
		arrayOutput.push(i);
	}
  return arrayOutput.join(' | ');
};

$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#textInput").val();
    var result = zigZag(textInput);
    $(".result").text(result).slideDown();
  })
});
