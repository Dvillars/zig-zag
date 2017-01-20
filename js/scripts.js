
function zigZag(textInput) {
  var numberInput = parseInt(textInput);
  var arrayOutput = []
  for (var i = 1; i <= numberInput; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arrayOutput.push('Zig-Zag');
    } else if (i % 5 === 0) {
      arrayOutput.push('Zig');
    } else if (i % 3 === 0) {
      arrayOutput.push('Zag');
    } else {
      arrayOutput.push(i);
    }
  }
  var result = arrayOutput.join(' | ');
  return result;
};

  $(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var textInput = $("#textInput").val();
      var result = zigZag(textInput);
      $(".result").text(result).slideDown();
    })
  });
