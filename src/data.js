;(function(NS) {

	/**
	 * Level Data
	 */
	var level_data = {
		1: {
			name: 'Getting started',
			obstacle_interval_ms: 2500,
			duration_sec: 15,
			available_times_to_collide: [4],
			fade_param: 0
		},
		2: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [4],
			fade_param: 3
		},
		3: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [4],
			fade_param: 3
		},
		4: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 15,
			available_times_to_collide: [3, 4],
			fade_param: 2.7
		},
		5: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 20,
			available_times_to_collide: [3, 4],
			fade_param: 2.5
		},
		6: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 30,
			available_times_to_collide: [4],
			fade_param: 2
		},
		7: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 30,
			available_times_to_collide: [4],
			fade_param: 1.7
		},
		8: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 30,
			available_times_to_collide: [3, 4],
			fade_param: 1.7
		},
		9: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 30,
			available_times_to_collide: [2, 3, 4],
			fade_param: 1.7
		},
		10: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 50,
			available_times_to_collide: [3, 4],
			fade_param: 1.5
		}
	};

	/**
	 * Data schema for save
	 */
	NS.dummy_save_data = {
		highscore: 0,
		collectibles: 0,
		last_open_level: 1,
		level_stats: {
			1: {
				highscore: 0
			}
		}
	};

	NS.level_data = level_data;

})(window.game = window.game || {});