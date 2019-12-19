



const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})

		$(document).on('click', '.link-modal', function () {

			var th = $(this);
			var modal = th.attr('href');
			$(modal).find(".order").val(th.data('order'));
			$(modal).find(".form-wrap__title--js").html(th.data('title'));
			// $(modal).find(".form-wrap__text--js").html(th.data('text')); 


		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {

		let scontact;
		let parametr = {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			watchOverflow: true,
			lazy: {
				loadPrevNext: true,
			},
			loadPrevNextAmount: 2,
			navigation: {
				nextEl: $('.' + tab + '__content').find('.swiper-button-next'),
				prevEl: $('.' + tab + '__content').find('.swiper-button-prev'),
			},
			breakpoints: {
				// when window width is >= 320px
				576: {

					spaceBetween: 30,
					slidesPerView: 3,

				}
			}
		};
		scontact = new Swiper('.office-slider-js', parametr);


		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');
			scontact = new Swiper($('.' + tab + '__content').eq($(this).index()).find('.office-slider-js'), parametr);
			//  scontact.update();
		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	// JSCCommon.dropFile();
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	$(document).on('click', ".footer__title", function () {
		$(this).toggleClass("active").next().slideToggle();
	})


	var breadSl = new Swiper('.breadcrumb-slider-js', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30, 
		watchOverflow: true,
	});
	var tabsSl = new Swiper('.tabs__slider--js', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30, 
		watchOverflow: true,
		breakpoints: {
			// when window width is >= 320px
			576: {

				spaceBetween: 30
			}
		}
	});

	var partnersSl2 = new Swiper('.s-patners__slider--js', {

		slidesPerColumn: 1,
		spaceBetween: 20,
		// loop: true,

		// slidesPerColumnFill: 'row',
		navigation: {
			nextEl: $('.s-patners .swiper-button-next'),
			prevEl: $('.s-patners .swiper-button-prev'),
		},
		breakpoints: {


			576: {
				loop: false,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				slidesPerView: 3,

			},

		}
	});


	$(".menu-accordion li, .s-detailed .col-aside__inner  li li li li").each(function () {
		var _this = $(this);
		if (_this.children("ul").length > 0) {
			_this.addClass("accordion-list")
				.append('<div class="toggle-list"></div>');
		}
	})
};
$(document).on('click', '.toggle-list', function () {
	$(this).toggleClass("active").prev().slideToggle()
	return false;
})
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}