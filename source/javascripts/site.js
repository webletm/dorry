// This is where it all goes :)

(function( root, $, undefined ) {
	"use strict";
	$(function () {
		
		$('#review-scroll').slick({
			adaptiveHeight: true,
			arrows: true
		});

		$('#gallery-scroller').slick({
			adaptiveHeight: true,
			arrows: true,
			slidesToShow: 3,
			centerPadding: '0px',
			responsive: [
			    {
			      breakpoint: 480,
			      settings: {
			        centerMode: true,
			        centerPadding: '0px',
			        slidesToShow: 1
			      }
			    }
			]
		});

		$('#nav a, #scrollerbtn').on('click', function(a){
			a.preventDefault();
			var $el = $(this).attr('href');
			$('html, body').animate({
		        scrollTop: $($el).offset().top
		    }, 1500, 'easeOutBounce');
		});

		$('#menu-btn').on('click', function(a){
			a.preventDefault();
			$('#nav').slideToggle(750 ,'easeOutBounce');
		});

	});

} ( this, jQuery ));