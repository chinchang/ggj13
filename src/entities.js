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
		}

		// jump
		if(keys[38]) {
			this.is_on_ground = false;
			this.speed_y = -500;
		}


		if(this.y > H - NS.Globals.ground_height) {
			this.speed_y = 0;
			this.y = H - NS.Globals.ground_height;
			this.is_on_ground = true;
		}

		this.x += this.speed_x * dt;
		this.y += this.speed_y * dt;
		// this.checkCollision();

	};

	NS.Player = Player;

})(window.game = window.game || {});