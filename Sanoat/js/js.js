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


/**slider**/

$(document).ready(function(){
	$('#owl-1').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		smartSpeed:2000,
	});
});

/** list/grid view **/

var wrap = $('.tab-content');

$(".sort-list").click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    wrap.fadeOut(500,function(){
        $(this).removeClass("grid-view")
        $(this).addClass("list-view")
        $(this).fadeIn(500)
    })
})

$(".sort-grid").click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    wrap.fadeOut(500,function(){
        $(this).removeClass("list-view")
        $(this).addClass("grid-view")
        $(this).fadeIn(500)
    });
});


/***burger-menu***/

$('.burger-menu').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('btn-active');
});

$('.burger-menu').click(function(){
  $('.nav-menu').toggleClass('nav-active');
});



/** tab **/

$(document).ready(function() {
	$('body').on('click','.suppliers_link', function() {
		$('.suppliers_link').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.suppliers-tab__content-box').removeClass('active').removeClass('js-content');
		var id = $(href).addClass('active');
		setTimeout(function() {
			$(href).addClass('js-content');
		}, 200);
		return false;
	});
});