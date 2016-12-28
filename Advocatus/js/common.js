$(document).ready(function() {

	//Header resize
	function wResize(){
		$(".main_header").css("min-height",$(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize();
	});

	//Toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_menu").slideToggle();
		$(".hidden_menu").find("a").click(function(){
			$(".hidden_menu").slideUp();
			$(".toggle-mnu").removeClass("on");
		});
		return false;
	});

	//Clients slider
	//Documentation https://owlcarousel2.github.io/OwlCarousel2/
	$('.clients_slider').owlCarousel({
		items: 1,
		loop: true
	});

	//Set equal height for items
	//Documentation https://github.com/mattbanks/jQuery.equalHeights
	function heightses() {
		$(".publication_item").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});

	//FAQ accordion

	$(".faq_qst").eq(0).addClass("qst_selected").next(".faq_answer").fadeIn();

	$(".faq_qst").click(function(){
		$(this).toggleClass("qst_selected");
		$(this).next(".faq_answer").fadeToggle().siblings(".faq_answer").fadeOut();
		$(this).siblings().removeClass("qst_selected");
	});

	function acdWidth() {
		if($(window).width() > 1200) {
			$(".faq_answer").removeClass("answ_resp");

		} else {
			$(".faq_answer").addClass("answ_resp");
		};

	}acdWidth();

	$(window).resize(function() {
		acdWidth();
	});

	//Scroll to element
	//Documentation https://github.com/flesler/jquery.scrollTo
	
	$(".logo_link").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(".about_us_link").click(function(){
		$.scrollTo($(".s_about_us"), 800, {
			offset: -90
		});
	});
	$(".practice_area_link").click(function(){
		$.scrollTo($(".s_practice_area"), 800, {
			offset: -90
		});
	});
	$(".lawyers_link").click(function(){
		$.scrollTo($(".s_lawyers"), 800, {
			offset: -90
		});
	});
	$(".publication_link").click(function(){
		$.scrollTo($(".s_publication"), 800, {
			offset: -90
		});
	});
	$(".faq_link").click(function(){
		$.scrollTo($(".s_faq"), 800, {
			offset: -90
		});
	});
	$(".contact_link").click(function(){
		$.scrollTo($(".s_contact"), 800, {
			offset: -90
		});
	});

	//Popup window
	//Documentation http://dimsemenov.com/plugins/magnific-popup/
	$('.share_soc_btn').magnificPopup({
		type: 'inline',
		preloader: false,

	});

	

});
