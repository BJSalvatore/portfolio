var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'dist/images/laravel.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'dist/images/javascript2.png';

imgArray[2] = new Image();
imgArray[2].src = 'dist/images/php.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'dist/images/html.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'dist/images/css.png';

imgArray[5] = new Image();
imgArray[5].src = 'dist/images/git.png';

imgArray[6] = new Image();
imgArray[6].src = 'dist/images/mysql2.png';

imgArray[6] = new Image();
imgArray[6].src = 'dist/images/postgres.png';

imgArray[6] = new Image();
imgArray[6].src = 'dist/images/heroku.png';

imgArray[6] = new Image();
imgArray[6].src = 'dist/images/handlebars-js.png';

/*------------------------------------*/

function nextImage(element) {
  var img = document.getElementById(element);

  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].src == img.src) // << check this
    {
      if (i === imgArray.length) {
        document.getElementById(element).src = imgArray[0].src;
        break;
      }
      document.getElementById(element).src = imgArray[i + 1].src;
      break;
    }
  }
}
share