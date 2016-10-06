$(document).ready(function(){

var $container = $('.container');
// var $containerY = ;
// var $containerX = ;
var $wrench = $('.wrench');
var $wrenchY = $('.wrench').css('top');
var $wrenchX = $('.wrench').css('left');
var $speedX = $wrenchX += 5;

function movingWrenchX(){
  var $wrench = $('.wrench');
  var $wrenchX = parseInt($('.wrench').css('left'));
  setInterval(function(){
    $wrench.css('left', $wrenchX + 'px');
    if ($wrenchX > 0){
      $wrenchX += 10;
    }
  }, 100);
};

function movingWrenchY(){
  var $wrench = $('.wrench');
  var $wrenchY = parseInt($('.wrench').css('top'));
  setInterval(function(){
    $wrench.css('top', $wrenchY + 'px');
    if ($wrenchY > 0){
      $wrenchY += 10;
    }
  }, 100);
};



console.log($wrenchY, $wrenchY);
movingWrenchX();
movingWrenchY();
})
