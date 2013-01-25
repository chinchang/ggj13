;(function(NS) {

	/**
	 * Main player
	 */
	function Player() {
		this.type = 'player';
		this.layer = 4;
		this.speed_x = 0;
		this.speed_y = 0;
		this.max_speed = 300;
		this.acceleration = 300;
		this.radius = NS.world_radius;
		this.turn_speed = 20;
		this.theta = -90;
		this.target_theta = -90;
		this.rotation = -90;
		this.max_angle = 20;
		this.width = 40;
		this.height = 30;
		this.is_under_user_control = false;
			delay_between_bullets_sec: 0.8,
			num_bullets: 1
		};

		this.hitarea = new Rectangle(-this.width / 2, -this.height / 2 , this.width, this.height);
		this.color = '#0f0';

		this.reset = function() {
			this.x = W / 2;
			this.y = H / 2;
			this.speed_x = this.speed_y = 0;
		};

		this.checkCollision = function() {
			var asteroids = getAllOfType('asteroids');
			for (var i = asteroids.length; i--;) {
				var obj = asteroids[i];
				if(this.hitTestObject(obj)) {
					this.reset();
					obj.hit();
					NS.updateHealth(-1);
				}
			}
			//setChildIndex(this, game_objects.length - 1);
		};

		this.shootBullet = function() {
			var diff_angle_deg = 3,
				start_angle_deg,
				i;
			if(this.can_shoot) {
				start_angle_deg = this.rotation - (~~(this.specs.num_bullets / 2) * diff_angle_deg);
				for (i = 0; i < this.specs.num_bullets; i++)
					addChild(new Bullet(
						this.x,
						this.y,
						start_angle_deg + diff_angle_deg * i
						));
				// NS.sounds.shoot.play();
				this.can_shoot = false;
			}
		},

		this.gotoPosition = function(x, y) {
			// if passe x or y is undefined, disable target_theta
			if(undefined === x || undefined === y) {
				this.target_theta = this.theta;
			}
			else {
				this.target_theta = ~~(Math.atan2(y - NS.world_cy, x - NS.world_cx) / pi_by_180);
			}
		};
	}

	Player.prototype = new DisplayObject();

	Player.prototype.draw = function(context) {
		context.drawImage(NS.images.player, -this.width / 2, -this.height / 2);

		if(debug) {
			context.strokeStyle = debug_color;
			context.beginPath();
			context.rect(this.hitarea.x, this.hitarea.y, this.hitarea.width, this.hitarea.height);
			context.stroke();
		}
	};

	Player.prototype.update = function(dt) {
		if(!this.is_under_user_control) return;

		if(!this.can_shoot) {
			this.bullet_timer -= dt;
			if(this.bullet_timer <= 0) {
				this.can_shoot = true;
				this.bullet_timer = this.specs.delay_between_bullets_sec;
			}
		}

		// Get sensor readings if we have sensors
		if(NS.getSensor()) {
			var reading = NS.getSensor().getCurrentReading(),
	            minimumRollMagnitude = 1;
		}

		if(keys[39] || (reading && reading.rollDegrees > minimumRollMagnitude)) {
		    this.theta += this.turn_speed * dt;
			this.target_theta = this.theta;
		}
		else if(keys[37] || (reading && reading.rollDegrees < -minimumRollMagnitude)) {
		    this.theta -= this.turn_speed * dt;
			this.target_theta = this.theta;
		}
		else if(Math.abs(this.target_theta - this.theta) > 1) {
			this.theta += (this.target_theta - this.theta) * this.turn_speed * 0.5 * dt;
			log('moving');
		}
		
		if(this.theta + 90 < -this.max_angle) {
			this.theta = -this.max_angle - 90;
		}
		else if(this.theta + 90 > this.max_angle) {
			this.theta = this.max_angle - 90;
		}

		this.shootBullet();
		
		this.rotation = this.theta;
		this.x = NS.world_cx + Math.cos(this.theta * pi_by_180) * this.radius;
		this.y = NS.world_cy + Math.sin(this.theta * pi_by_180) * this.radius;

		this.checkCollision();

	};


	NS.Player = Player;

})(window.game = window.game || {});