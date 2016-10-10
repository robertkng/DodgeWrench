// When data is entered on the landing page form and the submit button is clicked
//data will populate onto the game page
$(document).ready(function() {
  var firstName = $.urlParameter('Firstname');
  var lastName = $.urlParameter('Lastname');
  var email = $.urlParameter('Email');
  var phone = $.urlParameter('Phone');
  var cohort = $.urlParameter('cohort') + ' 2016';
  $('.first').append($.urlParameter('Firstname'));
  $('.last').append($.urlParameter('Lastname'));
  $('.phone').append($.urlParameter('Phone'));
  $('.selectCohort').append($.urlParameter('cohort') + ' 2016');
});

// Below function pulls the specified strings from the url.
// Those strings are data entered from the landing page
$.urlParameter = function(name){
//Regular expression costructor is used to locate the following symbols within the
// page's url. If the return value is
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  {
    return results[1] || 0;
  }
}

// decodeURIComponent function is used to call the function as the url
// was encoded when data was entered into the form from the previous landing page
// then submitted
console.log(decodeURIComponent($.urlParameter('Firstname')));
console.log(decodeURIComponent($.urlParameter('Lastname')));
console.log(decodeURIComponent($.urlParameter('Phone')));
console.log(decodeURIComponent($.urlParameter('cohort') + ' 2016'));


// credit to Jimmy De Los Angeles for helping me understand collision detection

// variables assigned to how many pixels the div "wrench" will move under the x and y axis
var $moveWrenchX = 10;
var $moveWrenchY = 10;

// created function to compare the location of the wrench relative to the div "container"
function movingWrenchXY(){
  var $wrench = $('.wrench');
  var $wrenchX = parseInt($wrench.css('left'));
  var $wrenchY = parseInt($wrench.css('top'));

// when the wrench is less than 10px from the left of the ontainer or
// when it is at the right side of the container wrench will deflect the other way
// container's value is parse into an integer to keep it consistent with the wrench
// so the values could be compared to one another
  if ($wrenchX < 10 || $wrenchX > parseInt($('.container').css('width'))-55){
    $moveWrenchX = -$moveWrenchX;
  }

// when the wrench is less than 90px from the top of the container or
// when it is at the right side of the container wrench will deflect the other way
// container's value is parse into an integer to keep it consistent with the wrench
// so the values could be compared to one another
  if ($wrenchY < 90 || $wrenchY > parseInt($('.container').css('height'))+25){
    $moveWrenchY = -$moveWrenchY;
  }

// wrench will be moving in one direction unless it deflects off the sides of the container
  $wrenchX += $moveWrenchX;
  $wrenchY += $moveWrenchY;

// the value of how much the wrench will move from it's earlier position plus 'px'. 'px' is
// added back at the end since the earlier values were parsed into integers
  $wrench.css('left', $wrenchX + 'px');
  $wrench.css('top', $wrenchY + 'px');

// the div 'player' is assigned to variable player and its value is parsed into integers
// so that it is consistent with the wrench div and the container div
  var $player = $('.player');
  var $playerX = parseInt($player.css('left'));
  var $playerY = parseInt($player.css('top'));

// in order to create collision detection between the player and wrench div,
// an IF statement is used
  if ($wrenchX < $playerX + 90 &&
    $wrenchX + 40 > $playerX &&
    $wrenchY < $playerY + 90 &&
    40 + $wrenchY > $playerY) {

// when collision is detected between the player and wrench, the below message will pop up
// after the alert message pops up, the webpage reloads
    alert("You got hit by a wrench!");
    location.reload();
  }
}
// the function above runs every 20 milliseconds
setInterval(movingWrenchXY, 20);

// the below jquery function allows the player div to move and be controlled
// by the arrow keys
$('body').on('keydown', mov);
function mov(e){
// player div's values are parsed and assigned to a variable
  var $player = $('.player');
  var $playerX = parseInt($player.css('left'));
  var $playerY = parseInt($player.css('top'));

// player div moves left if the left arrow is pressed. Player div will only be able to move
// left if container is within the specified container range; it's value is also parsed
// into an integer to keep consistency
  if(e.keyCode == 37 && $playerX > 10 && $playerX < parseInt($('.container').css('width'))-70){
    playerLeft = $playerX - 50 + "px";
    $player.css("left", playerLeft)
  }

// player div moves up if the up arrow is pressed. Player div will only be able to move
// up if container is within the specified container range; it's value is also parsed
// into an integer to keep consistency
  if(e.keyCode == 38 && $playerY > 100 && $playerY < parseInt($('.container').css('height'))+50){
    playerUp = $playerY - 50 + "px";
    $player.css("top", playerUp)
  }

// player div moves right if the right arrow is pressed. Player div will only be able to move
// right if container is within the specified container range; it's value is also parsed
// into an integer to keep consistency
  if(e.keyCode == 39 && $playerX > -10 && $playerX < parseInt($('.container').css('width'))-130){
    playerRight = $playerX + 50 + "px";
    $player.css("left", playerRight)
  }

// player div moves down if the down arrow is pressed. Player div will only be able to move
// down if container is within the specified container range; it's value is also parsed
// into an integer to keep consistency
  if(e.keyCode == 40 && $playerY > -100 && $playerY < parseInt($('.container').css('height'))-100){
    playerDown = $playerY + 50 + "px";
    $player.css("top", playerDown)
  }
}


