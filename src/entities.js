;(function (NS) {

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
		this.rotation = 0;
		this.width = 20;
		this.height = 20;
		this.ground_y = 0;
		this.is_on_ground = true;
		this.is_under_user_control = false;

		this.hitarea = new Rectangle(-this.width / 2, -this.height / 2 , this.width, this.height);
		this.color = '#0f0';

		this.reset = function() {
			this.x = W / 2;
			this.y = H / 2;
			this.speed_x = 0;
			this.speed_y = 0;
		};

	
		this.reset();
	}

	Player.prototype = new DisplayObject();

	Player.prototype.draw = function(context) {
		context.fillStyle = "#D5544F";
		context.beginPath();
		context.rect(this.hitarea.x, this.hitarea.y, this.hitarea.width, this.hitarea.height);
		context.closePath();
		context.fill();

		if(debug) {
			context.strokeStyle = this.color;
			context.beginPath();
			context.rect(this.hitarea.x, this.hitarea.y, this.hitarea.width, this.hitarea.height);
			context.stroke();
		}
	};

	Player.prototype.update = function(dt) {
		if(!this.is_under_user_control) return;
		
		if(!this.is_on_ground) {
			this.speed_y += NS.Globals.gravity * dt;
			this.rotation += 210 * dt;
		}

		// jump
		if(keys[38] && this.is_on_ground) {
			this.is_on_ground = false;
			this.speed_y = -650;
		}

		if(this.y > H - NS.Globals.ground_height) {
			this.speed_y = 0;
			this.y = H - NS.Globals.ground_height;
			this.rotation = 0;
			this.is_on_ground = true;
		}

		this.x += this.speed_x * dt;
		this.y += this.speed_y * dt;
		// this.checkCollision();

	};

	/**
	 * Obstacle
	 */
	function Obstacle(speed_x) {
		this.type = 'obstacle';
		this.layer = 3;
		this.speed_x = speed_x || 0;
		this.speed_y = 0;
		this.width = 30;
		this.height = 30;

		this.hitarea = new Rectangle(-this.width / 2, -this.height / 2 , this.width, this.height);
		this.color = '#0f0';
	}

	Obstacle.prototype = new DisplayObject();

	Obstacle.prototype.draw = function(context) {
		context.fillStyle = "#333";
		context.beginPath();
		context.rect(this.hitarea.x, this.hitarea.y, this.hitarea.width, this.hitarea.height);
		context.closePath();
		context.fill();

		if(debug) {
			context.strokeStyle = this.color;
			context.beginPath();
			context.rect(this.hitarea.x, this.hitarea.y, this.hitarea.width, this.hitarea.height);
			context.stroke();
		}
	};

	Obstacle.prototype.update = function(dt) {
		this.x += this.speed_x * dt;

		if(this.x < W / 4) {
			this.alpha -= dt;
			if(this.alpha < 0) {
				removeChild(this);
			}
		}
	};

	/**
	 * Main player
	 */
	function BlackCurtain(speed_x) {
		this.type = 'curtain';
		this.layer = 6;
		this.width = W;
		this.height = H;
		this.color = '#0f0';
		this.dir = 1;
		this.t = 0;
	}

	BlackCurtain.prototype = new DisplayObject();

	BlackCurtain.prototype.draw = function(context) {
		context.fillStyle = "#111";
		context.beginPath();
		context.rect(0, 0, W, H);
		context.closePath();
		context.fill();
	};

	BlackCurtain.prototype.update = function(dt) {
		this.t += dt;
		var new_alpha = Math.cos(Math.sin(this.t * 3) + this.t * 3);
		// log(new_alpha);
		this.alpha = new_alpha;
	};

	NS.Player = Player;
	NS.Obstacle = Obstacle;
	NS.BlackCurtain = BlackCurtain;

})(window.game = window.game || {});