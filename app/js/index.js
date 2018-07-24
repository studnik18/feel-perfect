
$( function() {
	$( "#main" ).tabs();
});

var fb = document.querySelector('.fb-like');
if (window.innerWidth > 800) {
	fb.setAttribute('data-size', 'large');
	fb.setAttribute('data-show-faces', 'true');
}
if (window.innerWidth < 500) {
	fb.setAttribute('data-width', (window.innerWidth * 0.9))
}