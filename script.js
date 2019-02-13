
//==================Toggle with jQuery slideToggle function=================//

$( ".menu-toggle" ).click(function() {
  $( ".nav-links" ).toggleClass( "active" );
});

$( ".nav-links .l1" ).click(function() {
  $(".dm1").toggleClass( "active" );
  $(this).siblings('li').children('ul').removeClass('active');
});

$( ".nav-links .l2" ).click(function() {
  $(".dm2").toggleClass( "active" );
  $(this).siblings('li').children('ul').removeClass('active');
});


$(window).resize(function() {
  if($(window).width() > 768) {
      $("ul").removeAttr('style');
  }
});

//============HERO SLIDER=================//

var slider = $('.hero').flickity({
  autoPlay: false,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
  selectedAttraction: 0.1,
  friction: 0.8,
  setGallerySize: false,
  pageDots: false,
  prevNextButtons: false,

}).data().flickity;

$('.hero-content').flickity({
  asNavFor: '.hero',
  wrapAround: true,
  autoPlay: false,
  selectedAttraction: 0.1,
  friction: 0.8,
  pauseAutoPlayOnHover: false,
  fade: true,
  pageDots: false,
  prevNextButtons: false,

});

function paralax() {
if($(window).width() > 760) {
  var imgs = $('.hero .slide img');
      slider.on('scroll', () => {
        slider.slides.forEach( function( slide, i ) {
          var img = imgs[i];
          var x = ( slide.target + slider.x ) * -1/3;
          img.style.transform = 'translateX( ' + x  + 'px)';
        });
      });
 }
}  
paralax();

$(window).resize(function() {
  paralax();
  });

var $carousel = $('.hero').flickity({
  prevNextButtons: false,
  pageDots: false,
});

// previous
$('.button-previous').on( 'click', function() {
  $carousel.flickity('previous');
});
// next
$('.button-next').on( 'click', function() {
  $carousel.flickity('next');
});



//============Toggle with JQuery add and remove class=================//




// $( ".menu-toggle" ).click(function() {
//   $( ".nav-links" ).slideToggle(400);
// });

// $( ".nav-links .l1" ).click(function() {
//   $(".dm1").slideToggle(400);
//   $(this).siblings('li').children('ul').slideUp(400);
// });

// $( ".nav-links .l2" ).click(function() {
//   $(".dm2").slideToggle(400);
//   $(this).siblings('li').children('ul').slideUp(400);
// });


// $(window).resize(function() {
//   if($(window).width() > 768) {
//       $("ul").removeAttr('style');
//   }
// });