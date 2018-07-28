$( function() {
	$( "#main" ).tabs();
	var settings = {
		mobileFirst: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
	  responsive: [
	    {
	      breakpoint: 570,
	      settings: {
	      	arrows: true
	      }
	    },
	    {
	    	breakpoint: 768,
	    	settings: 'unslick'
	    }
	  ]
	}
	$('.about-me-slider').slick(settings);
  $(window).on('resize', function() {
    if ($(window).width() > 767) {
      if ($('.about-me-slider').hasClass('slick-initialized')) {
        $('.about-me-slider').slick('unslick');
      }
      return
    }
    if (!$('.about-me-slider').hasClass('slick-initialized')) {
      return $('.about-me-slider').slick(settings);
    }
  });
});

var fb = document.querySelector('.fb-like');
if (window.innerWidth > 768) {
	fb.setAttribute('data-size', 'large');
	fb.setAttribute('data-show-faces', 'true');
}
if (window.innerWidth < 500) {
	fb.setAttribute('data-width', (window.innerWidth * 0.9))
}

var tabs = document.querySelectorAll('.menu-item a');

function toggleActive(event) {
	tabs.forEach(function(tab){
		tab.setAttribute('data-active', 'false');
	})
	if (event.target.getAttribute('data-active') !== 'active') {
		event.target.setAttribute('data-active', 'true');
	}
	window.scrollTo({top: 0});
}

tabs.forEach(function(tab){
	tab.addEventListener('click', toggleActive);
});