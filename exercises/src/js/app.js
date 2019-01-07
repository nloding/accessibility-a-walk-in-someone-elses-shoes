function parallaxIt() {
	// create variables
	var $fwindow = $(window);
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	var $contents = [];
	var $backgrounds = [];

	// for each of content parallax element
	$('[data-type="content"]').each(function(index, e) {
		var $contentObj = $(this);

		$contentObj.__speed = ($contentObj.data('speed') || 1);
		$contentObj.__fgOffset = $contentObj.offset().top;
		$contents.push($contentObj);
	});

	// for each of background parallax element
	$('[data-type="background"]').each(function() {
		var $backgroundObj = $(this);

		$backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
		$backgroundObj.__fgOffset = $backgroundObj.offset().top;
		$backgrounds.push($backgroundObj);
	});

	// update positions
	$fwindow.on('scroll resize', function() {
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		$contents.forEach(function($contentObj) {
			var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

			$contentObj.css('top', yPos);
		})

		$backgrounds.forEach(function($backgroundObj) {
			var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

			$backgroundObj.css({
				backgroundPosition: '50% ' + yPos + 'px'
			});
		});
	});

	// triggers window scroll for refresh
	$fwindow.trigger('scroll');
};

$(document).ready(function() {

	/* Better scroll handling */
	$('a.scroller').smoothScroll({
		offset: -123,
	});
	

	/* Example video banner */
	$('#vid-banner').vide({
		mp4: "assets/img/video/demo.mp4",
		webm: "assets/img/video/demo.webm",
		ogv: "assets/img/video/demo.ogv",
		poster: "assets/img/video/demo.jpg"
	}, {
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: false,
		autoplay: true,
		position: '50% 50%', 
		posterType: 'detect',
		resizing: true 
	});

	/* Example rotating banner */
	$("#rotate-banner").bgswitcher({
		images: [
			"assets/img/demo/home2.jpg",
			"assets/img/demo/home3.jpg",
			"assets/img/demo/home4.jpg",
		],
		interval: 5000
	});

	/* Font size handling */
	var originalSize = $('div').css('font-size');

	// Increase Font Size
	$(".increase-font").click(function(){
		var currentSize = $('.content').css('font-size');
		var currentSize = parseFloat(currentSize)*1.2;
		$('.content').css('font-size', currentSize);
		return false;
	});

	// Decrease Font Size
	$(".decrease-font").click(function(){
		var currentFontSize = $('.content').css('font-size');
		var currentSize = $('.content').css('font-size');
		var currentSize = parseFloat(currentSize)*0.8;
		$('.content').css('font-size', currentSize);
		return false;
	});

	/* Fade hover */
	$(".fancy-hover img").hover(function() { 
		$(this).fadeTo("fast", 0.6);
	}, function() { 
		$(this).fadeTo("fast", 1.0); 
	});


	/* Initialize parralax scrolling */
	parallaxIt();

});
