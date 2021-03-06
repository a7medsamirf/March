/*global $ , alert, console*/

$(document).ready(function() {
  $('body').bootstrapMaterialDesign();
});

  // Start niceScroll
  $(document).ready(function () {
    $("html").niceScroll({
      scrollspeed: "100",
      cursorcolor: "#FB3B64",
      cursorborder: "3px solid #FB3B64",
      cursorborderradius:0,
      sensitiverail: false,
  });
}); 
     

     //Check the scroll position
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		event.preventDefault();
		$(".scrollToTop").css({'transform': 'translate(0px, 0px)'});
	} else {
		$(".scrollToTop").css({'transform': 'translate(80px, 0px)'});
	}
});


//Click and scrolls top effect
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
  });


$(document).ready(function () {
new WOW().init();
}); 

$(document).ready(function () {
    var scroll = new SmoothScroll('a[href*="#"]');
    }); 
    

// Changing nav-bar color after scrolling
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  
    

    // showcase slider
 $(document).ready(function (){
function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();


  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('.showcase div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});
});


       // start loading 
       $(window).on("load", function () {
      
        "use strict";
        
        // Loading Elements
        
        $(".sk-cube-grid").fadeOut(1000, function () {
            
            // Show The Scroll
    
            $("body").css("overflow", "hidden");
            
            $(this).parent().slideUp(1000, function () {
                
                $(this).remove();
            });
        });
    });


// popup
$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
  });
});



