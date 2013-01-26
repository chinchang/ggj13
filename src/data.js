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
			fade_param: 1.5
		},
		2: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [3, 4],
			fade_param: 1.6
		},
		3: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [3, 4],
			fade_param: 1.7
		},
		4: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 1.9
		},
		5: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 2.2
		},
		6: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 2.5
		},
		7: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 2.8
		},
		8: {
			name: 'Getting started',
			obstacle_interval_ms: 1500,
			duration_sec: 10,
			available_times_to_collide: [2, 3, 4],
			fade_param: 3
		}
	};

	NS.level_data = level_data;

})(window.game = window.game || {});