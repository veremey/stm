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

		// $('.js-carousel').slick({
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	arrows: false,
		// 	fade: true,
		// 	asNavFor: '.js-carousel-preview',
		// });
		// $('.js-carousel-preview').slick('unslick');

		// $(".js-carousel-preview .slick-slide").on("click",function (){
		//   $(this).parent().find(".slick-slide").removeClass("is-active");
		//   $(this).addClass("is-active")
		//   return false;
		// });
		// // end slick carousel

		// выбор типа метала
		$('.metal').click(function() {
			$(this).siblings().find('.is_active').removeClass('is_active');
			$(this).children('.metal__img').addClass('is_active');
		});

		// polzunok

		//толщина метала
		function ui_slider() {
		    $(".js-ui-slider").each(function(){
		        var slider = $(this).find(".js-ui-slider-main");
		        var input_from = $(this).find(".js-ui-slider-from");
		        slider.slider({
		            min: 1,
		            max: 3,
		            step: 0.1,
		            value: 1.6,
		            slide: function( event, ui ) {
		                $(this).find(".ui-slider-handle").html("<span></span>");
		                $(this).find(".ui-slider-handle span").text(ui.value + 'мм')
		            }
		        });
		    });
		    $(".js-lenth-slider").each(function(){
		        var slider = $(this).find(".js-ui-slider-main");
		        var input_from = $(this).find(".js-ui-slider-from");
		        slider.slider({
		            min: 150,
		            max: 4500,
		            step: 50,
		            value: 3500,
		            slide: function( event, ui ) {
		                $(this).find(".ui-slider-handle").html("<span></span>");
		                $(this).find(".ui-slider-handle span").text(ui.value + 'мм')
		            }
		        });
		    });
		    $(".js-width-slider").each(function(){
		        var slider = $(this).find(".js-ui-slider-main");
		        var input_from = $(this).find(".js-ui-slider-from");
		        // var input_to = $(this).find(".js-ui-slider-to");
		        slider.slider({
		            // range: true,
		            min: 150,
		            max: 4500,
		            step: 50,
		            value: 2500,
		            slide: function( event, ui ) {
		                $(this).find(".ui-slider-handle").html("<span></span>");
		                $(this).find(".ui-slider-handle span").text(ui.value + 'мм')
		            }
		        });
		    });
		    $(".js-height-slider").each(function(){
		        var slider = $(this).find(".js-ui-slider-main");
		        var input_from = $(this).find(".js-ui-slider-from");
		        // var input_to = $(this).find(".js-ui-slider-to");
		        slider.slider({
		            // range: true,
		            min: 150,
		            max: 4500,
		            step: 50,
		            value: 2500,
		            slide: function( event, ui ) {
		                $(this).find(".ui-slider-handle").html("<span></span>");
		                $(this).find(".ui-slider-handle span").text(ui.value + 'мм')
		            }
		        });
		    });
		}
		ui_slider();

		$(document).click(function() {
			 $(".js-drop ul").hide();
			 $(".js-select-list").hide();
			 $(".js-select").removeClass("is-active");
			});



		// check select

		function select() {
			$(".js-select").each(function(){
				var select_list = $(this).parent().find(".js-select-list");
				var text = select_list.find("li").first().text();
				$(this).find(".js-select-text").text(text);
				$(this).click(function(event){
					if ($(this).hasClass("is-active")) {
					    $(this).removeClass("is-active");
					    select_list.slideUp("fast");
					}
					else {
					    $(".js-select").removeClass("is-active");
					    $(".js-select-list").hide();
					    select_list.slideDown("fast");
					    $(this).addClass("is-active");
					}
					event.stopPropagation();
				});
				select_list.find("li").click(function(event) {
					var id = $(this).attr("data-id");
					var text = $(this).text();
					$(this).parent().parent().find(".js-select-text").text(text);
					$(this).parent().parent().find(".js-select-input").val(id);
					$(this).parent().hide();
					$(this).parents(".js-select").removeClass("is-active");
					event.stopPropagation();
				});
			});
		}
		select();

		$('.js-select').click(function(event){
		    event.stopPropagation();
		});

		//zoom picture

		$("#zoom").elevateZoom({
			zoomType: "lens",
			lensShape : "round",
			lensSize : 200,
			borderSize: 2,
			borderColour: "#4fade3",
			lensSize: 110
		});

			// slider
		$('.company__slider').slick({
			dots: true,
			infinite: false,
			speed: 900,
			slidesToShow: 4,
			slidesToScroll: 4,
			variableWidth: true,
			adaptiveHeight: true
		});

		// unswer.html
			$('.unswer__link').on('click', function() {
				$(this).parent().siblings().find('.unswer__text').slideUp();
				$(this).next('.unswer__text').slideDown();
				return false;
			});

			// // // sroll-pane
				$('.js-scroll-pane').jScrollPane({
					mouseWheelSpeed: 4,
					animateScroll: true,
					horizontalArrowPositions: 'split',
					// contentWidth: '80px',
					horizontalGutter: 10,
				});

				// подмена картинки

				$('.js-take-img img').click( function() {
					var src = $('.is_active').attr('src');
					var carousel = $(this).parents('.carousel');

					$(this).siblings().removeClass('is_active');
					$(this).addClass('is_active');
					// alert($('.is_active').text(src));
					carousel.find('.carousel__main_img img').attr('src', carousel.find('.is_active').attr('src'));
				});



	});// end doc ready

}); // end head