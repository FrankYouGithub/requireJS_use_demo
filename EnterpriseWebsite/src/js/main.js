define(['jquery','addmore','carousel','gotop'],
	function($,AddMore,Carousel,GoTop){
		Carousel.init($('.carousel-ct'))
		GoTop.init()
		AddMore.init($('.sign'))
})