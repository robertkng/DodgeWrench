// credit to Jimmy De Los Angeles for helping me understand
// how to get divs to bounce off one another

var $moveWrenchX = 10;
var $moveWrenchY = 10;

function movingWrenchXY(){
  var $wrench = $('.wrench');
  var $wrenchX = parseInt($wrench.css('left'));
  var $wrenchY = parseInt($wrench.css('top'));
  if ($wrenchX < 10 || $wrenchX > parseInt($('.container').css('width'))-55){
    $moveWrenchX = -$moveWrenchX;
  }
  if ($wrenchY < 90 || $wrenchY > parseInt($('.container').css('height'))+25){
    $moveWrenchY = -$moveWrenchY;
  }
  $wrenchX += $moveWrenchX;
  $wrenchY += $moveWrenchY;
  $wrench.css('left', $wrenchX + 'px');
  $wrench.css('top', $wrenchY + 'px');
  // console.log($wrenchX, $wrenchY);

  var $player = $('.player');
  var $playerX = parseInt($player.css('left'));
  var $playerY = parseInt($player.css('top'));

  // console.log($playerX, $playerY);
  if ($wrenchX < $playerX + 90 &&
    $wrenchX + 40 > $playerX &&
    $wrenchY < $playerY + 90 &&
    40 + $wrenchY > $playerY) {
    // collision detected!
    alert("You got hit by a wrench!");
    location.reload();
  }
}
setInterval(movingWrenchXY, 20);

$('body').on('keydown', mov);
function mov(e){
  var $player = $('.player');
  var $playerX = parseInt($player.css('left'));
  var $playerY = parseInt($player.css('top'));

  if(e.keyCode == 37 && $playerX > 10 && $playerX < parseInt($('.container').css('width'))-70){
    playerLeft = $playerX - 50 + "px";
    $player.css("left", playerLeft)
  }
  if(e.keyCode == 38 && $playerY > 100 && $playerY < parseInt($('.container').css('height'))+50){
    playerUp = $playerY - 50 + "px";
    $player.css("top", playerUp)
  }
  if(e.keyCode == 39 && $playerX > -10 && $playerX < parseInt($('.container').css('width'))-130){
    playerRight = $playerX + 50 + "px";
    $player.css("left", playerRight)
  }
  if(e.keyCode == 40 && $playerY > -100 && $playerY < parseInt($('.container').css('height'))-100){
    playerDown = $playerY + 50 + "px";
    $player.css("top", playerDown)
  }
}

