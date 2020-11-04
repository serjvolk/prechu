@@include('_slick.min.js');

$(document).ready(function () {
	// Показать/скрыть меню бургера
	$(".header__burger").click(function(){
		$(".header__burger,.header__menu").toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Подключаю slick - слайдер
	$('.slider').slick({
		arrows: true,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 1000,
			settings: {
				arrows: false
			}
		}]
	});

/*
	$(window).resize(function(){
		var w = $(window).outerWidth();
		var tempSliderShow = (w > 568) ? true : false;
		if(tempSliderShow !== sliderShow){
			if(tempSliderShow === true){
				setTimeout(function() {
					$('.slider').slick('setPosition');
				}, 2000);
				
				console.log('Показываю');
			}
			sliderShow = tempSliderShow;
		}
	});

	var sliderShow;
	function initSlider() {// Определяем показывается слайдер или нет
		var w = $(window).outerWidth();
		sliderShow = (w > 565) ? true : false;
	}
	initSlider();*/
});