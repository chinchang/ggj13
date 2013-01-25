;(function(game) {

	// proto code
	
	function init() {
		console.log('hes');
	}



	game.init = init;


})(window.game = window.game || {});


window.addEventListener('load', function () {
	// init engine
	init('c');
});