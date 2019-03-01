$('.base').clone().addClass('overlay').appendTo('.landing');
$('.cta').hover(function() {
  $('.overlay').toggleClass('over');
});