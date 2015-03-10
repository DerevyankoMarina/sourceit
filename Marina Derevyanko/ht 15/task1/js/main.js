$(document).ready(function() {

// accordion

	$('ul.accordion > li:first').addClass('active');
	$('ul.accordion > li').children('.slider').hide();

	$('ul.accordion > li').click(function() {
		$(this).find('.slider').slideToggle('slow');
		$(this).siblings().find('.slider:visible').slideUp('slow');

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

// open/close

	$('div.title').click(function() {
		$(this).siblings('.block').fadeToggle('slow');
		return false;
	});

//tabs
	$('div.tab-content').hide();
	$('div.tab-content:first').show();

	$('.tabset li').click(function() {
		var tab = $(this).children('a').attr('href');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('div.tab-content').hide();
		$(tab).show();
	})
})