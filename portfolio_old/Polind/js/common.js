$(document).ready(function() {

	// Toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_menu").slideToggle();
		return false;
	});

	//Toggle search field
	$(".search").find("button").click(function() {
		$(this).toggleClass("search_btn_on");
		$(".search_field").slideToggle();
		return false;
	});

	//Main carousel
	//Documentation http://www.owlcarousel.owlgraphic.com/
	$('.main_carousel').owlCarousel({
		items: 5,
		loop: true,
		center: true,
		margin: 15,
		dots: false,
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:3,
			},
			1400:{
				items:5,
			}
		},

		onTranslate: function(e){
			idx = e.item.index;

			$('.owl-item.center_item').removeClass("center_item");
			$('.owl-item').eq(idx).addClass("center_item");
			$('.owl-item').eq(idx+1).addClass("center_item");
			$('.owl-item').eq(idx-1).addClass("center_item");

		},

		onInitialized : function(e){
			idx = e.item.index;

			$('.owl-item').eq(idx).addClass("center_item");
			$('.owl-item').eq(idx-1).addClass("center_item");
			$('.owl-item').eq(idx+1).addClass("center_item");

		}

	});

	//Set equal heights for items
	//Documentation https://github.com/mattbanks/jQuery.equalHeights

	function heightses() {
		$(".places_item").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});

	//Popup form
	//Documentation http://dimsemenov.com/plugins/magnific-popup/

	$('.popup_hidden_form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '.name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '.name';
				}
			}
		}
	});




});
