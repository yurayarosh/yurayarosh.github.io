$(document).ready(function() {

	//Toogle menu
	$(".hnav_btn").click(function(){
		$(".hidden_nav").slideToggle();
		return false;
	});

	//Slider
	//Documentation http://www.gmarwaha.com/jquery/jcarousellite/documentation.php
	$(".carousel").jCarouselLite({
		visible: 1,
		btnNext: ".next",
		btnPrev: ".prev",
		btnGo:
		[".dot_1",".dot_2",".dot_3"],
		vertical: true
	});

	//Tabs
	$(".tabs_wrap .tab").click(function() {
		$(".tabs_wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Set equall height for items
	//Documentation https://github.com/mattbanks/jQuery.equalHeights
	function heightses() {
		$(".item").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});

	//Magnific popup
	//Documentation http://dimsemenov.com/plugins/magnific-popup/
	$('.main_menu .sign_btn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '.form_name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '.form_name';
				}
			}
		}
	});

});


