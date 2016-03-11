$(document).ready(function() {
  var images = ['mcdonalds', 'ranch', 'sky', 'taipeistation', 'wetland', 'friends'];
  var image_rand = images[Math.round(Math.random() * (images.length - 1))];
  var image_url = './image/' + image_rand + '.jpg';

  var $container = $('.container');
  $container.addClass(image_rand).css('background-image', 'url(' + image_url + ')');
  $(window).load(function() {
    $('body').animate({opacity: 1}, 500);
  })
});
