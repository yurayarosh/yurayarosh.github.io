$(document).ready(function() {

	//Header resize
	function wResize(){
		$("header").css("min-height",$(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize();
	});

	//Toogle menu
	$(".nav_button").click(function() {
		$(this).next("nav").slideToggle(800);
		return false;
	});

	//Scroll to next section
	$(".d_scroll .my").click(function() {
		var cls = $(this).closest("header, section").next().offset().top;
		$("html, body").animate({scrollTop: cls}, 800);
		return false;
	});

	//Magnific popup
	//Documentation http://dimsemenov.com/plugins/magnific-popup/
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, 
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	//Animate-css+waypoints
	//Animate-css doc https://github.com/daneden/animate.css/
	//Waypoints doc http://imakewebthings.com/waypoints/
	//Animate-css + waypoints plugin https://gist.github.com/yurayarosh/b93fd5829c1e15a5c74a10ca96023a6b
	$(".logo").animated("fadeIn");
	$("h1,h2").animated("fadeInDown");
	$(".about_me_photo").animated("bounceInLeft");
	$(".about_me p,.autograph").animated("bounceInRight");
	$(".popup-gallery").animated("zoomIn");
	$(".contact span").animated("fadeInLeft");

	//Scroll to section
	//Documentation https://github.com/flesler/jquery.scrollTo
	$("nav .a_home").click(function() {
		$.scrollTo($("#home"), 800, {
			offset: $(this).top
		});
		return false;
	});
	$("nav .a_about_me").click(function() {
		$.scrollTo($("#about_me"), 800, {
			offset: $(this).top
		});
		return false;
	});
	$("nav .a_portfolio").click(function() {
		$.scrollTo($("#portfolio"), 800, {
			offset: $(this).top
		});
		return false;
	});
	$("nav .a_contact").click(function() {
		$.scrollTo($("#contact"), 800, {
			offset: $(this).top
		});
		return false;
	});

	//scroll to top
	$(window).scroll(function() {

		if ($(this).scrollTop() > $(window).height()) {
			$(".top").addClass("top_active");
		} else {
			$(".top").removeClass("top_active");
		};

	});

	$(".top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	
});





