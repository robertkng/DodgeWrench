var $moveWrenchX = 5;
var $moveWrenchY = 5;

function movingWrenchXY(){
  var $wrench = $('.wrench');
  var $wrenchX = parseInt($wrench.css('left'));
  var $wrenchY = parseInt($wrench.css('top'));
  if ($wrenchX < 10 || $wrenchX > parseInt($('.container').css('width'))-15){
    $moveWrenchX = -$moveWrenchX;
  }
  if ($wrenchY < 90 || $wrenchY > parseInt($('.container').css('height'))+60){
    $moveWrenchY = -$moveWrenchY;
}
  $wrenchX += $moveWrenchX;
  $wrenchY += $moveWrenchY;
  $wrench.css('left', $wrenchX + 'px');
  $wrench.css('top', $wrenchY + 'px');
  // console.log($wrenchX, $wrenchY);
}
setInterval(movingWrenchXY, 20);


// loop to add div class 'wrench'

// function addWrench(){
//   count = 1;
//   var $wrench = $('.wrench');

//   while (count < 100) {
//     $('.container').append($('wrench'));
//     count++;
//     console.log(count);
//   }
// }
// setInterval(addWrench, 1000);

function addWrench(){
  count = 1;
  var $wrench = $('.wrench');

  while (count < 100) {
    // $('.container').append(<div class="wrench" style="left: 150px top 200px"></div>);
    count++;
    // console.log(count);
  }
}
setInterval(addWrench, 1000);

$('body').on('keydown', mov);
function mov(e){
  var $player = $('.player');
  var $playerX = parseInt($player.css('left'));
  var $playerY = parseInt($player.css('top'));

  if(e.keyCode == 37 && $playerX > 10 && $playerX < parseInt($('.container').css('width'))-30){
    playerLeft = $playerX - 50 + "px";
    $player.css("left", playerLeft)
  }
  if(e.keyCode == 38 && $playerY > 100 && $playerY < parseInt($('.container').css('height'))+50){
    playerUp = $playerY - 50 + "px";
    $player.css("top", playerUp)
  }
  if(e.keyCode == 39 && $playerX > -10 && $playerX < parseInt($('.container').css('width'))-70){
    playerRight = $playerX + 50 + "px";
    $player.css("left", playerRight)
  }
  if(e.keyCode == 40 && $playerY > -100 && $playerY < parseInt($('.container').css('height'))){
    playerDown = $playerY + 50 + "px";
    $player.css("top", playerDown)
  }
}


// collision:
// when ($wrench.css('left') === $player.css('left')) &&
// ($wrench.css('top') === $player.css('top'));
