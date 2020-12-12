// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function () {
	var lastTime = 0;
	var vendors = ['webkit', 'moz', 'ms', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
			window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
}());

(function () {
	var html = document.documentElement;

	function Snowflake(maxX) {
		this.reset(maxX);
	}
	Snowflake.prototype.tick = function () {
		var sidePhase = this.sidePhase += this.sideVel;
		this.y += this.vel;
		this.x += this.sideVel;
	};
	Snowflake.prototype.reset = function (maxX) {
		var rand = Math.random();
		var chanceOfLargeSnowflake = 0.15;

		this.size = Math.random();
		this.vel = 2 + Math.random() * 3;

		if (this.size < chanceOfLargeSnowflake) {
			this.size += 2;
		}

		else {
			this.size += 0.5;
			this.vel *= 0.8;
		}

		this.alpha = 0.5 + Math.random() * 0.8;

		// random x position
		this.x = Math.random() * maxX;
		this.y = -this.size;

		// side-to-side movement
		this.sideVel = (0.5 - Math.random()) * this.vel;

		return this;
	};

	(function () {
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		var settleCanvas = document.createElement('canvas');
		var settleContext = context && settleCanvas.getContext('2d');
		var windowResized;
		var activeFlakes = [];
		var snowflakesPerPixelPerSecond = 0.1;
		var PIx2 = Math.PI * 2;
		var assumedFps = 60;
		var settlePoint;
		var snowflakePool = [];

		function resizeCanvas() {
			settlePoint = Array(html.clientWidth);
			settleCanvas.width = canvas.width = html.clientWidth;
			settleCanvas.height = canvas.height = html.clientHeight;
		}

		function updateSettlePoints(flake) {
			var size = flake.size * 0.8; // reduce coral effect
			var xStart = Math.floor(flake.x - size);
			var range = size * 2;
			var newY;

			if (xStart < 0) {
				range += xStart;
				xStart = 0;
			}
			if (xStart + range > settlePoint.length) {
				range -= xStart + range - settlePoint.length;
			}

			for (var i = 0; i < range; i++) {
				newY = flake.y - (size * Math.cos((i / range) * Math.PI - (Math.PI / 2)));
				settlePoint[i + xStart] = Math.min(settlePoint[i + xStart] || Infinity, newY);
			}
		}

		var flakesToCreate = 0;

		function frame() {
			flakesToCreate += (snowflakesPerPixelPerSecond / assumedFps) * canvas.width;
			var flakesThisFrame = Math.floor(flakesToCreate);
			flakesToCreate -= flakesThisFrame;

			// clear canvas
			if (windowResized) {
				resizeCanvas();
				windowResized = false;
			} else {
				context.clearRect(0, 0, canvas.width, canvas.height);
			}

			// add new flake?
			while (flakesThisFrame--) {
				if (snowflakePool.length) {
					activeFlakes.push(snowflakePool.pop().reset(canvas.width));
				} else {
					activeFlakes.push(new Snowflake(canvas.width));
				}
			}

			var i = activeFlakes.length;
			var flake;

			// for each flake...
			while (i--) {
				flake = activeFlakes[i];
				flake.tick();

				// splice flake if it's now out of rendering zone
				if (flake.y >= canvas.height || flake.y >= settlePoint[Math.floor(flake.x)]) {
					snowflakePool.push.apply(snowflakePool, activeFlakes.splice(i, 1));
					// this flake effects our settle points
					if (flake.alpha > 0.8) {
						updateSettlePoints(flake);
					}
					settleContext.fillStyle = 'rgba(255, 255, 255, ' + flake.alpha + ')';
					settleContext.beginPath();
					settleContext.arc(flake.x, flake.y, flake.size, 0, PIx2, true);
					settleContext.closePath();
					settleContext.fill();
					continue;
				}

				// render to canvas
				context.fillStyle = 'rgba(255, 255, 255, ' + flake.alpha + ')';
				context.beginPath();
				context.arc(flake.x, flake.y, flake.size, 0, PIx2, true);
				context.closePath();
				context.fill();
			}
			requestAnimationFrame(frame);
		}

		if (context) {
			resizeCanvas();

			// watch out for resizes
			window.addEventListener('resize', function () {
				windowResized = true;
			}, false);

			// add it to the page & start animating
			document.body.appendChild(canvas);
			document.body.appendChild(settleCanvas);
			requestAnimationFrame(frame);
		}
	})();

})();