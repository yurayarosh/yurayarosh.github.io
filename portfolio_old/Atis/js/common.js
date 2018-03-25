$(document).ready(function() {

	//jquery curCSS bug
	jQuery.curCSS = function(element, prop, val) {
		return jQuery(element).css(prop, val);
	};

	//Toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_menu").slideToggle();
		return false;
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

	//City autocomplite
	// Documentation https://github.com/hflabs/suggestions-jquery
	$("input[name=check_city_input]").suggestions({
		token: "5853091e851b746f412a9cf0a78216c33c6a0f6c",
		type: "ADDRESS",
		count: 5,
		// Вызывается, когда пользователь выбирает одну из подсказок 
		onSelect: function(suggestion) {
			console.log(suggestion);
		}
	});

	//Datepiecker
	//Documentation http://www.eyecon.ro/datepicker/#download
	function nowDate () {
		var d = new Date ();
		var year = d.getFullYear ();
		var month = d.getMonth () +1;
		var day = d.getDate ();
		return day + "/" + month + "/" + year;
	};	

	var checkInInp = $("input[name=check_in_date_input]");
	var checkOutInp = $("input[name=check_out_date_input]");

	checkInInp.DatePicker({
		format:"d/m/Y",
		date: nowDate (),		
		onChange: function(formated, dates){
			checkInInp.val(formated);
			checkInInp.DatePickerHide ();			
		}
	});

	checkOutInp.DatePicker({
		format:"d/m/Y",
		date: nowDate (),		
		onChange: function(formated, dates){
			checkOutInp.val(formated);
			checkOutInp.DatePickerHide ();		
		}
	});

	//input numbers only
	$(".nmb_inp").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				 // Allow: Ctrl/cmd+A
				(e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
				 // Allow: Ctrl/cmd+C
				(e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
				 // Allow: Ctrl/cmd+X
				(e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
				 // Allow: home, end, left, right
				(e.keyCode >= 35 && e.keyCode <= 39)) {
						 // let it happen, don't do anything
						 return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});

});

