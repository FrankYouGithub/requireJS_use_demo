requirejs.config({
	baseUrl: 'src',
	paths: {
		'jquery': 'lib/jquery-2.1.1.min',
		'addmore': 'js/addmore',
		'carousel': 'js/carousel',
		'gotop': 'js/gotop'
	}
})
requirejs(['js/main']);