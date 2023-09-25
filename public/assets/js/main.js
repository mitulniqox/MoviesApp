(function ($) {
	"use strict";

	/*=============================================
		=    		Mobile Menu			      =
	=============================================*/
	//SubMenu Dropdown Toggle
	if ($('.menu-area li.menu-item-has-children ul').length) {
		$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
	}
	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		var mobileMenuContent = $('.menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

		//Dropdown Button
		$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	}


	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$('.scroll-to-target').removeClass('open');

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$('.scroll-to-target').addClass('open');
		}
	});






})(jQuery);