$(document).ready(function() {

	//Toggle button + toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_menu").slideToggle();
		return false;
	});

	//Set equall hight for items
	//Documentation https://github.com/mattbanks/jQuery.equalHeights
	function heightses() {
		$(".tiezer_item").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});

	//Carousel
	//Documentation https://owlcarousel2.github.io/OwlCarousel2/
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		nav: true,
		navText: ""
	});

	//Popup form
	//Documentation http://dimsemenov.com/plugins/magnific-popup/
	$('.download_btn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '.ipt_login',


		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '.ipt_login';
				}
			}
		}
	});

	//Search

	$(".search").click(function(){
		$(".hidden_search").slideToggle();
		return false;
	});


});
