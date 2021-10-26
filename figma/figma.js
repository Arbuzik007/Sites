	$(document).ready(function(){
		$('.slider').slick({
			arrow:true,//кнопки для перелистывания
			adaptiveHeight:true,//слайды одного размера
			slidesToShow:3,//сколько слайдов мы видим
			slidesToScroll:1,//перелистывается за раз
			speed:1000,//скорость
			infinite:true,//бесконечность слайдов
			initialSlide:0,//с какого слайда начать
			waitForAnimate:false,//если false переключает на каждый клик
		})
	});