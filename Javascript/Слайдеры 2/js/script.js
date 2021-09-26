$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		autoplay: true,
		nav:true,
		lazyLoad: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
  });
});


	// rtl:true,
    // loop:true,
    // margin:10,
    // nav:true,
