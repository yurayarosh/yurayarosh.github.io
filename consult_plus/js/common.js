$(document).ready(function() {

	//------------------- Pluggins --------------------

	//Header carousel
	//Documentation http://owlcarousel2.github.io/OwlCarousel2/
	$('.header_carousel').owlCarousel({
		loop:true,
		margin:30,
		dots:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},
			768:{
				items:3,
			},
			1200:{
				items:4,
			}
		},

	});

	//About us carousel
	//Documentation http://owlcarousel2.github.io/OwlCarousel2/
	$('.logos_carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		navText: "",
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},
			768:{
				items:4,
			},
			992:{
				items:5,
			},
			1200:{
				items:6,
			}
		},
	});

	//Set equall height for items
	//Documentation https://github.com/mattbanks/jQuery.equalHeights

	function heightses() {
		$(".feature_item").height("auto").equalHeights();
		$(".pr_heading").height("auto").equalHeights();
		$(".our_blog_content").height("auto").equalHeights();
		$(".three_points_item").height("auto").equalHeights();
		$(".s_contact_us_block").height("auto").equalHeights();
		$(".our_team_item_social").height("auto").equalHeights();
		$(".happy_clients_item").height("auto").equalHeights();
		$(".pricing_plans_item_content").height("auto").equalHeights();
		$(".choose_industry_item").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});

	//Projects carousel
	//Documentation http://owlcarousel2.github.io/OwlCarousel2/
	$('.real_estate_carousel').owlCarousel({
		loop:true,
		dots:true,
		items: 1,

	});

	//Testimonials carousel
	//Documentation http://owlcarousel2.github.io/OwlCarousel2/
	$('.testimonials_carousel').owlCarousel({
		loop:true,
		dots:true,
		items: 1,

	});

	//Video player
	//Documentation http://mediaelementjs.com/
	$('video').mediaelementplayer();



	$(".video").click(function(){
		$(this).prev(".blog_item_tag").addClass("hidden");
		$('.mejs-controls').css("display:block");
	});

	//Happy clients carousel
	//Documentation http://owlcarousel2.github.io/OwlCarousel2/	
	$('.h_c_carousel').owlCarousel({
		loop:true,
		dots:true,
		items: 1,
		responsiveClass:true,
		responsive:{
			0:{
				dots:false,
			},
			550:{
				dots:true,
			},
			
		},

	});

	//Services popup,
	//Blog share popup
	//Documentation http://dimsemenov.com/plugins/magnific-popup/
	$(document).ready(function() {
		$('.popup-with-form').magnificPopup({
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




	//------------------- Custom functions --------------------

	
	//Toggle button + toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_menu").slideToggle();
		return false;
	});

	//Dropdown menu
	$(".dropdown").hover(
		function(){
			$(this).find("ul").removeClass("hidden").slideDown();
		},
		function(){
			$(this).find("ul").slideUp();
		});

	$(".dropdown_footer").find("a").eq(0).click(function(){
		$(this).next("nav").slideToggle();
		return false;

	});

	//Remove table classes for items

	function tableClassesRemove(){
		if ($(window).width() <= 768) {
			$(".happy_clients_item").removeClass("table");
			$(".h_c_item_row").removeClass("td");
			$(".h_c_item_img").removeClass("tr");
			$(".h_c_item_content").removeClass("tr");

		} else {
			$(".happy_clients_item").addClass("table");
			$(".h_c_item_row").addClass("td");
			$(".h_c_item_img").addClass("tr");
			$(".h_c_item_content").addClass("tr");

		};
	};
	tableClassesRemove();
	$(window).resize(function(){
		tableClassesRemove();
	});

	//FAQ accordion

	$(".faq h4").click(function(){
		$(this).toggleClass("minus").toggleClass("add_padding");
		$(this).next(".p_wrap").slideToggle().siblings(".p_wrap").slideUp();
		$(this).siblings("h4").removeClass("minus").removeClass("add_padding");
	});





	
	

});
