$(document).ready(function(){
var $container = $('.container');
var $containerX = $('.container').css('width');
var $containerY = $('.container').css('height');

var $wrench = $('.wrench');
var $wrenchX = $('.wrench').css('left');
var $wrenchY = $('.wrench').css('top');
var $moveX = 10;
var $moveY = 10;

var $positionX = $wrenchX;
var $positionY = $wrenchY;

function movingWrenchXY(){
  var $wrench = $('.wrench');
  var $wrenchX = parseInt($wrench.css('left'));
  var $wrenchY = parseInt($wrench.css('top'));

  setInterval(function(){
    if ($wrenchX > 0){
      $wrenchX = $wrenchX + $moveX;
    if ($wrenchY > 0){
      $wrenchY = $wrenchY + $moveY;
      $wrench.css('left', $wrenchX + 'px');
      $wrench.css('top', $wrenchY + 'px');
      console.log($wrenchX, $wrenchY);
    }}
  }, 100);
};

// consolelog bounceWrenchY();

movingWrenchXY();
})
