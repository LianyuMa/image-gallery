window.addEventListener('load', function(e) {
    window.applicationCache.addEventListener('updateready', function(e) {
        window.applicationCache.swapCache();
        window.location.reload();
    })
    window.applicationCache.update();
});

// if (window.module) {
//   module = window.module;
// }

window.$(document).ready(function(){
  // window.$ = window.jQuery = require('jquery-3.1.1.min.js');
  var owl = window.$('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    lazyLoad:true,
    margin:10,
    nav:true,
    dotsEach: true,
    responsive:{
        500:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });
});
