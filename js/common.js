head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	// slick carousel

	$('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-carousel-preview',
	});
	$('.js-carousel-preview').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-carousel',
		dots: false,
		arrows: true,
		infinite: false,
		centerMode: false,
		focusOnSelect: true,
	});

	$(".js-carousel-preview .slick-slide").on("click",function (){
	  $(this).parent().find(".slick-slide").removeClass("is-active");
	  $(this).addClass("is-active")
	  return false;
	});


});