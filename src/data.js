;(function(NS) {

	/**
	 * Level Data
	 */
	var level_data = {
		1: {
			name: 'Getting started',
			obstacle_interval_ms: 2500,
			duration_sec: 10,
			available_times_to_collide: [4],
			fade_param: 6
		},
		2: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [3, 4],
			fade_param: 3.8
		},
		3: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [3, 4],
			fade_param: 3.8
		},
		4: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 3.6
		},
		5: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [3, 4],
			fade_param: 3.4
		},
		6: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 3.2
		},
		7: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 3
		},
		8: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 2.8
		}
	};

	NS.level_data = level_data;

})(window.game = window.game || {});