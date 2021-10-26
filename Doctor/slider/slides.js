$(document).ready(function(){
	$('.slider').slick({
		arrow:true,//кнопки для перелистывания
		dots:true,//точки
		adaptiveHeight:true,//слайды одного размера
		slidesToShow:1,//сколько слайдов мы видим
		slidesToScroll:1,//перелистывается за раз
		speed:1000,//скорость
		infinite:true,//бесконечность слайдов
		initialSlide:0,//с какого слайда начать
		autoplay:false,//автоматическое переключение
		autoplaySpeed:500,//через сколько переключать
		pauseOnFocus:true,//когда в автопроигравании мы сами двигаем
		pauseOnHover:true,//когда в автопроигравании мы наводим оно остонавливается
		pauseOnDotsHover:true,//когда в автопроигравании мы наводим на точки оно остонавливается
		waitForAnimate:false//если false переключает на каждый клик
	})
});