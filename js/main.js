(function ($) {
    'use strict';

	/* --------------------------------------------
	## Revolution Slider
	-------------------------------------------- */
	$(window).on('load', function () {

      $("body").imagesLoaded(function () {
        $(".p-preloader-wave").fadeOut();
        $("#p-preloader").delay(200).fadeOut("slow").remove();
      });

    });
	/* --------------------------------------------
	1. Revolution Slider
	-------------------------------------------- */
    var tpj = jQuery;
    var revapi486;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_486_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_486_1");
        } else {
            revapi486 = tpj("#rev_slider_486_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },

                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 800,
                        style: "zeus",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 50,
                        space: 13,
                        tmp: ''
                    }
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%",
                    presize: false
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1264, 1024, 778, 480],
                gridheight: [620, 450, 400, 350],
                lazyType: "none",
                parallax: {
                    type: "scroll",
                    origo: "enterpoint",
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
                    type: "scroll",
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    }); /*ready*/


	    // HOME PAGE HEIGHT
    function centerInit() {
        var wrapper = $('.wrapper')

        wrapper.css({
            "margin-top": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).on('resize',centerInit);

	/* --------------------------------------------
	2. Page Loader
	-------------------------------------------- */
	var pageLoader = $("#pageloader");
    if (pageLoader.length > 0)
    {
		var loadInner = $(".loader-item");
        loadInner.delay(700).fadeOut();
        pageLoader.delay(800).fadeOut("slow");
    }

	/* --------------------------------------------
	3. Back to Top
	-------------------------------------------- */
	var back2Top = $('#back-to-top')
	if (back2Top.length) {
		var scrollTrigger = 100,
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					back2Top.addClass('show');
				} else {
					back2Top.removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		back2Top.on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

	/* --------------------------------------------
	4. Navigation Menu
	-------------------------------------------- */
	if( $('.sticky-nav-wrapper').length ){

	   //Add toggle dropdown icon
	   $( ".sticky-nav-wrapper .vertical-menu" ).find('.vertical-dropdown').append( '<span class="vertical-dropdown-toggle fa fa-plus"></span>' );
	   $( ".sticky-nav-wrapper .vertical-menu" ).find('.vertical-dropdown-menu').slideToggle();

	   //zmm dropdown toggle
	   $( ".vertical-menu .vertical-dropdown-toggle" ).on( "click", function() {
	    var parent = $( this ).parent('li').children('.vertical-dropdown-menu');
	    $( this ).parent('li').children('.vertical-dropdown-menu').slideToggle();
	    $( this ).toggleClass('fa-minus');
	    if( $( parent ).find('.vertical-dropdown-menu').length ){
	     $( parent ).find('.vertical-dropdown-menu').slideUp();
	     $( parent ).find('.vertical-dropdown-toggle').removeClass('fa-minus');
	    }
	   });

	}

	var mainNav = $("#mainNav");
	if (mainNav.length > 0) {
	 mainNav.affix({
			offset: {
				top: 100
			}
		})
	}
	var windowWidth = $(window).width();
	if(windowWidth > 768){
		var dropDown = $('ul.nav li.dropdown')
		dropDown.on('hover', function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
		});


		var dropToggle = $('.hover-dropdown .dropdown-toggle');
		dropToggle.on('click', function(event) {
			window.location.href = link.attr("href");
		});
		var dropTog= $('.dropdown-toggle');
		dropTog.on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	}


	var navBar = $("#sticker");
	if (navBar.length > 0)
	{
		navBar.sticky({
			topSpacing: 0
		});

		/* Scroll */
		 var scroll = $('.scroll');
		 scroll.on('click', function(event) {
            var $anchor = $(this);
            var headerH = $('#navigation').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 60 + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        /* Active When Scroll */
		var pBody = jQuery('body')
		pBody.scrollspy({
			target: '#topnav',
			offset: 95
		})
        /* Responsive Auto Close */
		var onepagelink = $('.one-page .nav li a');
		var navcollapse = $('.navbar-collapse')
        onepagelink.on(function() {
            navcollapse.removeClass('in');
        });
        /* Smooth Scroll Links */
		var pageScroll = $('.page-scroll a');
        pageScroll.on('click', function(event) {
			var $anchor = $(this);
			$('html, body')
				.stop()
				.animate({
					scrollTop: $($anchor.attr('href'))
						.offset()
						.top
				}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

	}
	// Vertical toggle button

	$(document).ready(function(){
	    $("#open-header").on('click',function(){
	        $("#sticky-header").slideToggle("slow");
	    });
	    var menuBtn = $('.mnu__btn');

		menuBtn.on('click',function () {
		menuBtn.toggleClass('tgl-active');
		});
	});

	/* --------------------------------------------
	5. Owl Slider
	-------------------------------------------- */
	/*team*/
	$('.team-carousel').owlCarousel({
	    loop:true,
	    smartSpeed:400,
	    autoplay:true,
    	autoplayTimeout:3500,
    	responsive:{
	        768:{
	            items:2,
	            nav:false
	        },
	        410:{
	            items:1,
	            nav:false,
	            loop:false
	        },
	        992:{
	            items:3,
	            nav:false,
	            loop:false
	        },
	        1200:{
	            items:3,
	            nav:false,
	            loop:false
	        }
	    }
	});
	/*client*/
	$('.client-carousel').owlCarousel({
	    loop:true,
	    smartSpeed:400,
	    autoplay:true,
    	autoplayTimeout:3500,
    	responsive:{
	        768:{
	            items:2,
	            nav:false
	        },
	        414:{
	            items:1,
	            nav:false,
	            loop:false
	        },
	        992:{
	            items:6,
	            nav:false,
	            loop:false
	        },
	        1200:{
	            items:6,
	            nav:false,
	            loop:false
	        }
	    }
	});

	/*Home page Testimonial*/
	$('.home-testimonial').owlCarousel({
	    items:1,
	    loop:true,
	    smartSpeed:400,
	    autoplay:true,
    	autoplayTimeout:3500,
	});

	/* --------------------------------------------
	6. Data Animation
	-------------------------------------------- */
	var dataAnima = true;
	if (dataAnima)
	{
		var dAnimation = $('[data-animation]')
		dAnimation.each(function() {
            var element = $(this);
            element.addClass('animated');
            element.appear(function() {
                var delay = (element.data('delay') ? element.data('delay') : 1);
                if (delay > 1) element.css('animation-delay', delay + 'ms');
                element.addClass(element.data('animation'));
                setTimeout(function() {
                    element.addClass('visible');
                }, delay);
            });
        });
	}

	/* --------------------------------------------
	7. Progress Bar
	-------------------------------------------- */
	var progressBar = $(".progress-bar");
	if (progressBar.length > 0)
	{
		progressBar.each(function() {
			var pThis = $(this);
			pThis.appear(function() {
				var datavl = pThis.attr('data-percentage');
				pThis.animate({
					"width": datavl + "%"
				}, '1200');
			});
		});
	}


	/* --------------------------------------------
	10. Portfolio Grid
	-------------------------------------------- */
	var mixCon = $("#mix-container");
	if (mixCon.length > 0)
	{
		mixCon.mixItUp();
	}

	/* --------------------------------------------
	11. Form
	-------------------------------------------- */
	/* Contact */
	var myForm = $("#bootstrap-form");
	if (myForm .length > 0) {
		myForm.bootstrapValidator({
			container: 'tooltip',
			feedbackIcons: {
				valid: 'fa fa-check',
				warning: 'fa fa-user',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: {
				contact_name: {
					validators: {
						notEmpty: {
							message: 'Enter Your Name'
						}
					}
				},
				contact_email: {
					validators: {
						notEmpty: {
							message: 'Enter Valid e-mail address'
						},
						emailAddress: {
							message: ''
						}
					}
				},
				contact_phone: {
					validators: {
						notEmpty: {
							message: 'Enter Your Phone'
						}
					}
				},
				contact_message: {
					validators: {
						notEmpty: {
							message: 'Enter Your Comments'
						}
					}
				},
			}
		})
	}

	/* --------------------------------------------
	12. Tool Tip
	-------------------------------------------- */
	var toolTip = $('[data-toggle="tooltip"]');
    if (toolTip.length > 0) {
        toolTip.tooltip()
    }

	/* --------------------------------------------
	13. Counter
	-------------------------------------------- */
	var counter = $('.count')
	counter.each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	/* --------------------------------------------
	14. Magnific Popup
	-------------------------------------------- */
	$(document).ready(function() {
		$('.instagram').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}

		});
	});


  /*--------------------------------------------------------------
    15. Primary Menu
  --------------------------------------------------------------*/
	$(document).ready(function() {
	  	primaryMenuSetup();
	  	mobileMenu();
	});

	$(window).on('resize', function() {
	  	mobileMenu();
	});

	$(window).on('scroll', function() {
	  	scrollFunction();
	});

  function primaryMenuSetup() {

    $( ".primary-nav-list" ).before( "<div class='m-menu-btn'><span></span></div>" );

    $(".m-menu-btn").on('click', function(){
      $( this ).toggleClass( "m-menu-btn-ext" );
      $(this).siblings('.primary-nav-list').slideToggle(800);
    });

    $( ".menu-item-has-children > ul" ).before( "<i class='fa fa-plus m-dropdown'></i>" );

    $('.m-dropdown').on('click', function() {
      $(this).siblings('ul').slideToggle("slow");
      $(this).toggleClass("fa-plus fa-minus")
    });

  }


  function mobileMenu() {

    if ($(window).width() <= 983){
      $('.primary-nav').addClass('m-menu').removeClass('primary-nav');
    } else {
      $('.m-menu').addClass('primary-nav').removeClass('m-menu');
    }

  }


  function scrollFunction() {

    var scroll = $(window).scrollTop();
      if(scroll >= 400) {
        $(".site-header").addClass("small-height");
        $(".menu-item").addClass("small-height");
      } else {
          $(".site-header").removeClass("small-height");
          $(".menu-item").removeClass("small-height");
      }

  }


})(jQuery);
