// This is where it all goes :)

(function( root, $, undefined ) {
	"use strict";
	$(function () {
		
		$('#review-scroll').slick({
			adaptiveHeight: true,
			arrows: true
		});

		$('#nav a, #scrollerbtn').on('click', function(a){
			a.preventDefault();
			var $el = $(this).attr('href');
			$('html, body').animate({
		        scrollTop: $($el).offset().top
		    }, 1500);
		});

		$('#menu-btn').on('click', function(a){
			a.preventDefault();
			$('#nav').slideToggle(750 ,'easeOutBounce');
		})

	});

} ( this, jQuery ));