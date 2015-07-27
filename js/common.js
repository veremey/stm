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


	$(document).ready(function() {
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
		// end slick carousel

		// выбор типа метала
		$('.metal').click(function() {
			$(this).siblings().find('.is_active').removeClass('is_active');
			$(this).children('.metal__img').addClass('is_active');
		});

		// polzunok



		//zoom picture

		$("#zoom").elevateZoom({
			zoomType: "lens",
			lensShape : "round",
			lensSize : 200,
			borderSize: 2,
			borderColour: "#4fade3",
			lensSize: 110
		});


	});// end doc ready

}); // end head