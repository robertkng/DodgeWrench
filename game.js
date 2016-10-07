var $container = $('.container');
var $containerX = $('.container').css('width');
var $containerY = $('.container').css('height');

var $wrench = $('.wrench');
var $wrenchX = $('.wrench').css('left');
var $wrenchY = $('.wrench').css('top');
var $moveX = 5;
var $moveY = 5;

function movingWrenchXY(){
  var $wrench = $('.wrench');
  var $wrenchX = parseInt($wrench.css('left'));
  var $wrenchY = parseInt($wrench.css('top'));
  console.log($('.container').css('width'))
  if (($wrenchX < 10) || ($wrenchX > parseInt($('.container').css('width'))-15)){
    $moveX = -$moveX;
  }
  if ($wrenchY < 90 || $wrenchY > parseInt($('.container').css('height'))+60){
    $moveY = -$moveY;

}
  $wrenchY = $wrenchY + $moveY;
  $wrenchX = $wrenchX + $moveX;
  $wrench.css('left', $wrenchX + 'px');
  $wrench.css('top', $wrenchY + 'px');
  console.log($wrenchX, $wrenchY);
}
setInterval(movingWrenchXY, 20);
