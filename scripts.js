$(document).ready(function() {

  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('.over-18').show();
  } else if (age <18) {
    $('.under-18').show();
  }


  $('#candidates').submit(function(event) {
    $("input:checkbox[name=candidate]:checked").each(function(){
      var candidateResults = $(this).val();
      $("results#candidate").append(candidateResults);
    });

    event.preventDefault();
    });
});
