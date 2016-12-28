$(document).ready(function() {

	//Toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_menu").slideToggle();
		return false;
	});

	//Hidden calendar carousel
	//Documentation http://www.owlcarousel.owlgraphic.com

	$(".hidden_calendar").owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		nav: true,
		navText: ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>']
	});

	$(".check_in_date_input").find("input").click(function(){
		$(".hidden_calendar_wrap").css("display", "block");
	});
	$(".check_out_date_input").find("input").click(function(){
		$(".hidden_calendar_wrap").addClass("check_out_calendar").css("display", "block");
	});
	$(".close_calendar").click(function(){
		$(".hidden_calendar_wrap").removeClass("check_out_calendar").css("display", "none");
	});
	
	//Set equal heights for items
	//Documentation https://github.com/mattbanks/jQuery.equalHeights
	function heightses() {
		$(".hotel_item_descr").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});

	//Main slider
	//Documentation http://www.owlcarousel.owlgraphic.com
	$(".main_slider").owlCarousel({
		loop: true,
		items: 1,
		navText: "",
		responsiveClass: true,
		responsive: {
			0: {
				nav: false
			},
			481: {
				nav: true
			}
		}
	});

});
