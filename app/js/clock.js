$(document).ready(function() {
  $('body').append('<div class="time">');

  Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
  }

  function rotate(element, degrees) {
    element.css({'transform' : 'rotate('+ degrees +'deg)'});
  }

  function setTime() {
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hrs = date.getHours();

    var mapSec = sec.map(0, 59, 0, 360);
    var mapMin = min.map(0, 59, 0, 360);
    var mapHrs = hrs.map(0, 12, 0, 360);

    if (sec == 0) {
      $('.seconds-hand').removeClass('smooth');
    } else {
      $('.seconds-hand').addClass('smooth');
    }

    if (min == 0) {
      $('.minute-hand').removeClass('smooth');
    } else {
      $('.minute-hand').addClass('smooth');
    }

    if (hrs == 0) {
      $('.hour-hand').removeClass('smooth');
    } else {
      $('.hour-hand').addClass('smooth');
    }

    rotate($('.seconds-hand'), mapSec);
    rotate($('.minute-hand'), mapMin);
    rotate($('.hour-hand'), mapHrs);
  }

  setInterval(function() {setTime()}, 1);
});
