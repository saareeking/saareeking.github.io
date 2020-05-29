
/*slider*/

$(document).ready(function(){
	$(".testimonial-owl").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: true,
		smartSpeed: 1000,

		responsive: {
			0: {
				nav: false,
			},

			770: {
				nav: true,
			}
		}
	})
})


/*nav-bar*/

$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-btn_active');
});


$('.menu-btn').click(function () {
  $(this).toggleClass('open')
  $('.nav-bar').toggleClass('open').slideToggle(function() {
  	if ($(this).is(':visible'))
        $(this).css('display','block');
  })
})

/*scroll menu*/

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.nav-bar-panel').addClass('scroll');
	}
	else {
		$('.nav-bar-panel').removeClass('scroll');
	}
})

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.nav-bar').addClass('scroll');
	}
	else {
		$('.nav-bar').removeClass('scroll');
	}
})

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.responsive-menu-panel').addClass('scroll');
	}
	else {
		$('.responsive-menu-panel').removeClass('scroll');
	}
})