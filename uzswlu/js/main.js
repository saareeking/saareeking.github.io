$(document).ready(function(){
	$('#owl').owlCarousel({
		items:3,
      loop: false,
      margin: 25,
      responsive: {
         0:{
            items: 1,
         },
         480:{
            items: 1,
         },
         768:{
            items: 2
         },
         991:{
            items: 2
         },
         1170:{
            items: 3
         },
         1200:{
            items: 3
         }
      }
	});
});

// $('[data-fancybox]').fancybox({
//    youtube : {
//      controls : 0,
//      showinfo : 0
//    }
//  });