$(document).ready(function(){
//asks user for a number, Fizz Buzzes it :-)

  $('.add').on('click', function(event) {
    alert("Hey!");
    event.preventDefault();
    var number = $('#num').val();
  	console.log(number);
  
  for (var count = 1; count > number; count++) {

  if (number % 1 != 0){

    if (number % 3 == 0){
      console.log("Fizz");
    }
    else if (number % 5 == 0) {
      console.log("Buzz");
    }
    else {
      console.log(number);
    }
  }
}
  });
});