/*=========

Template Name: Kwackers - SEO & Digital networking HTML Template

=========*/

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader Js
3.WoW Animation Js
4.Sticky Header JS
5.Search Form JS
6.Partners Logo Slider JS
7.Team Slider JS
8.Testimonial-One JS
9.Toggle Menu Mobile JS
10.If Mobile Slider JS
11.Portfolio Two JS
12. My Work Box Slider JS
=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";

	// Loader JS Start
	$(window).ready(function(){
		$('.loader-box-one, .loader-box-two').fadeOut();
		$('body').removeClass('fixed');
   });
	// Loader JS End

	// Wow Animation JS Start
	new WOW().init(); 
	// Wow Animation JS Start

	// Sticky Header JS Two
	$(window).on( 'scroll', function(){
		if ($(window).scrollTop() >= 100) {
		  $('.site-header-two').addClass('sticky-header-two');
		 }
		 else {
		  $('.site-header-two').removeClass('sticky-header-two');
		 }
	});
	// Sticky Header JS End

	// Search Form JS Start
	$(".search-icon-one a").on( 'click', function(){
		$(".search-input-one").fadeToggle(300);
		$(".search-input-one .black-shadow-one").fadeIn();
	});
	$(".search-input-one .black-shadow-one").on( 'click', function(){
		$(this).fadeOut();
		$(".search-input-one").fadeOut(300);
	});
	// Search Form JS Two
	$(".search-icon-two a").on( 'click', function(){
		$(".search-input-two").fadeToggle(300);
		$(".search-input-two .black-shadow-two").fadeIn();
	});
	$(".search-input-two .black-shadow-two").on( 'click', function(){
		$(this).fadeOut();
		$(".search-input-two").fadeOut(300);
	});
	// Search Form JS End
	// Toggle Menu Mobile JS Two
	$(".toggle-button-two").on( 'click', function(){
		$(".main-navigation-two").toggleClass('toggle-menu-two');
		$(".header-menu-two .black-shadow-two").fadeToggle();
	});
	$(".main-navigation-two ul li a").on( 'click', function(){
		$(".main-navigation-two").removeClass('toggle-menu-two');
		$(".header-menu-two .black-shadow-two").fadeOut();
	});
	$(".main-navigation-two ul li.sub-items-two>a").on( 'click', function(){
		$(".main-navigation-two").addClass('toggle-menu-two');
		$(".header-menu-two .black-shadow-two").stop();
	});
	$(".header-menu-two .black-shadow-two").on( 'click', function(){
		$(this).fadeOut();
		$(".main-navigation-two").removeClass('toggle-menu-two');
	});
	// Toggle Menu Mobile JS End

	      // Smooth scrolling on the navbar links
		     // Navigation active state on scroll
			 var elm = document.querySelector('.menu');
			 var ms = new MenuSpy(elm,{
				 activeClass   : 'active',
				 threshold     : 71,
				 enableLocationHash: false
			 });
		 
			 $(function() {
				// select the button to click, this can be any element not just a button
				$('.icon1').click(function() {
					// select which info panel to show/hide.
					$('.info1').toggle();
					// hide any info panels that are not info1.
					$('.info').not('.info1').hide();
				});                        
			});
			$(function() {
				$('.icon2').click(function() {
					$('.info2').toggle();
					$('.info').not('.info2').hide();
				});                        
			});
			$(function() {
				var header = document.getElementById("myDIV");
					var btns = header.getElementsByClassName("btn");
					for (var i = 0; i < btns.length; i++) {
					btns[i].addEventListener("click", function() {
					var current = document.getElementsByClassName("active");
					current[0].className = current[0].className.replace(" active", "");
					this.className += " active";
					});
				}                       
			});
			$('.blog-carousel').owlCarousel({
				loop: true,
				margin: 10,
				nav: true,
				navText: [
				'<i class="fa fa-angle-left"></i>',
				'<i class="fa fa-angle-right"></i>',
				],
		
				dots: false,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});
		   $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
		   });
	
	 // Team Box Slider JS Start
	 $('.team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		  {
			  breakpoint: 1200,
			  settings: {
				  slidesToShow: 3,
			  }
		  },
		  {
			  breakpoint: 992,
			  settings: {
				  slidesToShow: 3,
			  }
		  },
		  {
			  breakpoint: 768,
			  settings: {
				  slidesToShow: 2,
			  }
		  },
		  {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		  },
		  {
			  breakpoint: 376,
			  settings: {
				  slidesToShow: 1,
			  }
		  }
	  ]
	  });
	  // Team Box Slider JS End
	  $(".review-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
	$('.member-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: [
		'<i class="fa fa-angle-left"></i>',
		'<i class="fa fa-angle-right"></i>',
		],

		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	$('.news-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            
            }
        }
    })

   
});