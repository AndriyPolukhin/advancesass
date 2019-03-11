var $stage = $('.stage'),
    mouseX,
    mouseY,
    x = 0,
    y = 0,
    followX = 0,
    followY = 0,
    friction = 1 / 12;

function animate(){
  x += (followX - x) * friction;
  y += (followY - y) * friction;
  $stage.css({
    '-o-transform': 'translate(-50%, -50%) rotateY(' + x + 'deg) rotateX(' + y + 'deg)',
    '-moz-transform': 'translate(-50%, -50%) rotateY(' + x + 'deg) rotateX(' + y + 'deg)',
    '-webkit-transform': 'translate(-50%, -50%) rotateY(' + x + 'deg) rotateX(' + y + 'deg)',
    'transform': 'translate(-50%, -50%) rotateY(' + x + 'deg) rotateX(' + y + 'deg)'
  });
  window.requestAnimationFrame(animate);
}

animate();

$(window).on('mousemove click', function(e) {
  mouseX = e.clientX / $(window).width();
  mouseY = e.clientY / $(window).height();
  followX = 5 + (30 * mouseX);
  followY = 5 + (20 * mouseY);
});

$('.reload').click(function(){
  $('.stage').addClass('reset');
  setTimeout(function(){
    $('.stage').removeClass('reset');
  }, 2000);
});

setTimeout(function(){
  $('.stage').removeClass('reset');
}, 400);