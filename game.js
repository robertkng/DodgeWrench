$(document).ready(function(){

var $container = $('.container');
// var $containerY = ;
// var $containerX = ;
var $wrench = $('.wrench');
var $wrenchY = $('.wrench').css('top');
var $wrenchX = $('.wrench').css('left');
var $speedX = $wrenchX += 5;

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
console.log($wrenchY);
movingWrenchY();
})
