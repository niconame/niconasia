var randnum = Math.random();
var inum = 6;
var rand1 = Math.round(randnum * (inum-1)) + 1;
images = new Array;
images[1] = "mcdonalds";
images[2] = "ranch";
images[3] = "sky";
images[4] = "taipeistation";
images[5] = "wetland";
images[6] = "friends";
// images[7] = "";
// images[8] = "";

var image = './image/' + images[rand1] + '.jpg';
console.log(image);

var $body = $('body');
$body.css('background-image','url(' + image + ')');
console.log($body);
// document.write('<div class="bigImage" style="background-image: url(' + image + ');">');
