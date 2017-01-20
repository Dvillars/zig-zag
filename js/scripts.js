
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#textInput").val();
    var result = zigZag(textInput);
    $(".result").text(result).slideDown();
  })
});
