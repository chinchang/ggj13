;(function(NS) {

	// proto code
	var player = null;
	
	function init() {
		log('game initialized');
		NS.Globals.ground_height = Math.floor(H * 0.5);

		player = new NS.Player();
		player.is_under_user_control = true;
		addChild(player);
		PAUSE = false;
		debug = true;
	}

	game.init = init;


})(window.game = window.game || {});


window.addEventListener('load', function () {
	// init engine
	init('c');
});