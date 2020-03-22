
//parallax

function parallax(event){
	this.querySelectorAll('#scene').forEach(scene => {
		scene.style.transform = `translateX(${event.clientX/30}px)`
	});
}

document.addEventListener('mousemove' , parallax);

//burger-menu

$(document).ready(function() {
	$('.burger-menu').on('click',function() {
		$('body, html').toggleClass('no-scroll');
		$('.burger-menu__btn').toggleClass('burger-active');
		$('.nav-overlay').fadeToggle();
		$('.nav').toggleClass('nav-active');
	});
});