
function zigZag(textInput) {
  var numberInput = parseInt(textInput);
  var arrayOutput = []
  for (var i = 1; i <= numberInput; i++) {
    if (i % 5 === 0) {
      arrayOutput.push('Zig');
    } else if (i % 3 === 0) {
      arrayOutput.push('Zag');
    } else {
      arrayOutput.push(i);
    }
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
