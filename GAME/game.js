var outcomes = ["rock", "paper", "scissors"]
var colours = ['red', 'green', 'blue']

$(document).ready(function(){
  var result = getRandom()
  $('#result').html(`<img src="img/${outcomes[result]}.jpg" class="img-fluid">`);

  $('#startgame').on('click', function(){
    var newResult = getRandom()
    $('#result').html(`<img src="img/${outcomes[newResult]}.jpg" class="img-fluid">`);
    $('body').css("background-color",`${colours[newResult]}`);
  })
  var result2 = getRandom()
  $('#result2').html(`<img src="img/${outcomes[result]}.jpg" class="img-fluid">`);

  $('#startgame').on('click', function(){
    var newResult2 = getRandom()
    $('#result2').html(`<img src="img/${outcomes[newResult2]}.jpg" class="img-fluid">`);

  })
});

  function getRandom(){
      var rand = Math.random()
      rand = rand * 10
      rand = Math.round(rand)
      console.log(rand)
      rand = rand % 3
      return rand
  }
