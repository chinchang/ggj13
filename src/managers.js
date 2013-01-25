/**
 * level_manager
 */
var level_manager = (function() {

	var exports = {};
	var _obstacle_timer = 0,
		_level_timer = 0,
		_level_complete_check_timer = 0,
		_level_check_interval_sec = 1,
		_current_level = 0,
		_current_level_data = null,
		_state = 'IDLE',
		_last_open_level;

	exports.reset = function reset() {
		_current_level = 0;
		_state = 'IDLE';
		_obstacle_timer = 0;
		_level_timer = 0;
		_level_complete_check_timer = 0;
	};


	exports.startLevel = function startLevel(level) {
		// if the starting level is ahead of the 'last open level', make
		// it the new 'last open level'
		if(level > _last_open_level) {
			_last_open_level = level;
		}

		_current_level = level;
		_current_level_data = game.level_data[_current_level];
		_level_timer = _obstacle_timer = 0;

		_state = 'GENERATING';

		_obstacle_timer = _current_level_data.obstacle_interval_ms / 1000;
		log('started level ', level);
	};

	exports.getCurrentLevelData = function() {
		return _current_level_data;
	};

	exports.getLastOpenLevel = function() {
		return _last_open_level;
	};

	exports.setLastOpenLevel = function(level) {
		_last_open_level = level;
	};

	function createObstacle() {
		var time_to_collide = getRandomFromList([2, 3, 4]);
		var obstacle = new game.Obstacle(-1 * ~~((W - game.Globals.player_x) / time_to_collide), time_to_collide);
		obstacle.x = W;
		obstacle.y = H - game.Globals.ground_height;
		addChild(obstacle);
		log('obstacle created with speed ', _current_level_data.speed);
	}

	function generateLevel () {
		_current_level_data.xx = [];
	}

	exports.pauseLevel = function pauseLevel() {
		_state = 'IDLE';
	};

	exports.update = function update(dt) {
		if(_state === 'IDLE') return;
		_level_timer += dt;
		_obstacle_timer += dt;
		_level_complete_check_timer += dt;

		// check if level is cleared if its time to check
		if(_state === 'CHECKING' && _level_complete_check_timer >= _level_check_interval_sec) {
			_level_complete_check_timer = 0;
			// log('checking for level complete')
			if(!getAllOfType('obstacle').length)
				onLevelComplete();
		}
		
		if(_state === 'GENERATING') {
			// check if the level time is up
			if(_level_timer >= _current_level_data.duration_sec) {
				log('level generation complete, switching to CHECKING state');
				_state = 'CHECKING';
			}
			// check if its time to create an obstacle
			else if(_obstacle_timer * 1000 >= _current_level_data.obstacle_interval_ms) {
				// reset the timer
				_obstacle_timer = 0;
				createObstacle();
			}
		}
	};

	function onLevelComplete() {
		_state = 'IDLE';
		game.onLevelComplete();
	}

	return exports;

})();

