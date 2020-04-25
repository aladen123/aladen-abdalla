/* global $ , alert, console*/

$(function () {
	'use strict';
	//Adjuse header height
	var myHeader = $('.header');
	var mySlider = $('.bxslider');
	myHeader.height($(window).height());

	$(window).resize(function () {

	myHeader.height($(window).height());
	mySlider.each(function () {
			$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2);
		});

	});

	//links add active class

	$('.links li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');

		});

	// adjust bxslider list center

		mySlider.each(function () {
			$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2);
		});

	// trigger the bx slidser
	mySlider.bxSlider({ 
		pager: false

	});

	//smooth scroll to div

	$('.links li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
	});
	

	// our Auto slider code

	(function autoSlider (){

		$('.slider .active').each(function () {

			if (!$(this).is(':last-child')) {

				$(this).delay(3000).fadeOut(1000, function () { 
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});

			} else {
				$(this).delay(3000).fadeOut(1000, function () {

					$(this).removeClass('active');

					$('.slider div').eq(0).addClass('active').fadeIn();
					autoSlider();
					

				});

			}

		});

	}());

	//trigger mixiUp 

	$('#container').mixItUp();

	//Adjust shuffle links

	$('.shuffle li').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');

	});

	//trigger nice scroll

	$('html').niceScroll({
		cursorcolor: '#1abc9c',
		cursorborder: '1px solid #1abc9c'
	});

});