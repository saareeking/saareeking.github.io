/**burger-menu**/

$(document).ready(function() {
	$('.burger-menu').on('click', function(e) {
		$('body,html').toggleClass('no-scroll');
		$(this).toggleClass('burger-active');
		$('.nav').toggleClass('nav-active');
	});
});


/*scroll menu*/

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.nav-bar-panel').addClass('scroll');
	}
	else {
		$('.nav-bar-panel').removeClass('scroll');
	}
});