$('document').ready(function() {
	
	//Intro Animation
	// Change class from A to B after 2800 ms fade in out between two
	
	setTimeout(function() {
		$(".right-menu").fadeIn(500);
	}, 1);
	

	setTimeout(function() {
	  	$(".right-menu").fadeOut(500);
	}, 2300);
	
	setTimeout(function() {
        $('.right-menu img').attr('src','img/TwoWomenHomePageFinal2.jpg');

	}, 2800);

	setTimeout(function() {
	  	$(".right-menu").fadeIn(500);
	}, 2800);	
  

// Color Picker	
	
	
 	$('a.color').click(function () {
 		var show = $(this).data('color');
     $('#colors').removeClass().addClass(show);	
    });

	// Drop Down Menu
	
	$('nav li ul').hide().removeClass('product-list');
    $('nav li').hover(
    function () {
    	$('ul', this).stop().slideDown(50);
  	},
  	function () {
    	$('ul', this).stop().slideUp(250);
  	});
	
    $(".js-video").lightGallery({
        speed: 400,
    });
	
  
});