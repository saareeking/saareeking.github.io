/***slider owl-1***/

$(document).ready(function(){
	$('#owl-1').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		smartSpeed:2000,
	});
});

$(document).ready(function(){
	$('#owl-2').owlCarousel({
		items:3,
		margin: 25,
		loop:true,
		autoplay:true,
		smartSpeed:2000,

		responsive: {
			0: {
			items:1,
			nav: false,
			dots: true,
		},
			576: {
			items: 1,
			nav: false,
			dots: true
		},
			768: {
			items: 2,
			nav: false,
			dots: true
		},
			992: {
			items: 2,
			nav: false,
			dots: true
		},
			1200: {
			items: 3,
		}
		}
	});
});

/***burger-menu***/

$('.burger-menu').on('click', function() {
	$('html, body').toggleClass('no-scroll');
	$(this).toggleClass('btn-active');
	$('.nav-menu').toggleClass('nav-active');
});


/***croll menu***/

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.menu-bar a').addClass('scroll');
	}
	else {
		$('.menu-bar a').removeClass('scroll');
	}
})


/***Tab***/

$(document).ready(function() {

	$('body').on('click','.js-trigger', function() {
		$('.js-trigger').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.tab-content__block').removeClass('active').removeClass('js-content');
		var id = $(href).addClass('active');
		setTimeout(function() {
			$(href).addClass('js-content');
		}, 200);
		return false;
	});

});

/***accardion***/

$(document).ready(function() {
	$('.accardion__header').click(function(){
		$(this).toggleClass('in').next().slideToggle('slow');
		$('.accardion__header').not(this).removeClass('in').next().slideUp();

		if($(this).find('.accardion__header__text .fas').css('display') == 'none') {
			$(this).find('.accardion__header__text .fas').css('display','inline-block');
			$(this).find('.accardion__header__text .far').css('display','none');
		}
		else {
				$(this).find('.accardion__header__text .fas').css('display','none');
				$(this).find('.accardion__header__text .far').css('display','inline-block');
			}
	});
});


 // Scroll Top

	window.onscroll = function() {

	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	let scrollBody = document.body;
	let scrollHtml = document.documentElement;
	let scrollHeader = document.getElementById('main');

	let scrollHeight = Math.max(
		scrollBody.scrollHeight,
		scrollBody.offsetHeight,
		scrollHtml.clientHeight,
		scrollHtml.scrollHeight,
		scrollHtml.offsetHeight
	);

	if (scrolled + window.innerHeight > scrollHeight - scrollHeader.offsetHeight) {
		$('.scroll-top').fadeIn().css('display', 'flex').removeClass('zoomOut').addClass('fadeInUp');
	} else {
		$('.scroll-top').removeClass('fadeInUp').addClass('zoomOut').fadeOut();
	}
	};

	$('.scroll-top a').click(function(event) {
	event.preventDefault();
		$("html, body").animate({scrollTop: 0 }, 1000);
		return false; 
	});