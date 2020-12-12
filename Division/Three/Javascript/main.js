var RENDERER = {
	GRASS_COUNT : 100,
	FIREFLY_COUNT : 100,
	SKY_COLOR : {DARK : 'hsl(200, 80%, 15%)', LIGHT : 'hsl(200, 80%, 18%)'},
	RIVER_COLOR : {
		DARK : ['hsl(220, 100%, 28%)', 'hsl(180, 100%, 28%)'],
		LIGHT : ['hsl(220, 100%, 32%)', 'hsl(180, 100%, 32%)'],
	},
	RIVER_FLOW : 0.5,
	RIVER_RATE : 0.2,
	RIVER_OFFSET_RATE : 0.02,
	RIVER_SKEW_RATE : Math.PI / 1000,
	LIGHT_RADIUS_RATE : 5,
	
	init : function(){
		this.setParameters();
		this.reconstructMethod();
		this.createElements();
		this.render();
	},
	setParameters : function(){
		this.$container = $('#jsi-firefly-container');
		this.width = this.$container.width();
		this.height = this.$container.height();
		this.context = $('<canvas />').attr({width : this.width, height : this.height}).appendTo(this.$container).get(0).getContext('2d');
		this.flowX = 0;
		this.theta = 0;
		this.grasses = [];
		this.fireflies = [];
	},
	reconstructMethod : function(){
		this.render = this.render.bind(this);
	},
	createElements : function(){
		for(var i = 0, length = this.GRASS_COUNT; i < length; i++){
			this.grasses.push(new GRASS(this.width, this.height, this.RIVER_RATE, this));
		}
		for(var i = 0, length = this.FIREFLY_COUNT; i < length; i++){
			this.fireflies.push(new FIREFLY(this.width, this.height, this.RIVER_RATE, this));
		}
	},
	getRandomValue : function(range){
		return range.min + (range.max - range.min) * Math.random();
	},
	render : function(){
		requestAnimationFrame(this.render);
		
		this.renderBackground(false);
		this.context.save();
		this.context.beginPath();
		
		for(var i = 0, length = this.fireflies.length; i < length; i++){
			var firefly = this.fireflies[i];
			
			if(firefly.toIlluminate()){
				this.context.moveTo(firefly.x, firefly.y);
				this.context.arc(firefly.x, firefly.y, firefly.opacity * this.LIGHT_RADIUS_RATE * firefly.radius, 0, Math.PI * 2, false);
			}
		}
		this.context.clip();
		this.renderBackground(true);
		this.context.restore();
		
		for(var i = 0, length = this.fireflies.length; i < length; i++){
			this.fireflies[i].render(this.context);
		}
		this.flowX -= this.RIVER_FLOW;
		
		if(this.flowX < -this.width){
			this.flowX = 0;
		}
	},
	renderBackground : function(isLight){
		var label = isLight ? 'LIGHT' : 'DARK',
			gradient = this.context.createLinearGradient(this.flowX, 0, this.flowX + this.width * 2, 0);
		
		this.context.fillStyle = this.SKY_COLOR[label];
		this.context.fillRect(0, 0, this.width, this.height);
		
		for(var i = 0; i <= 4; i++){
			gradient.addColorStop(i * 0.25, this.RIVER_COLOR[label][i % 2]);
		}
		var y = this.height * (1 - this.RIVER_RATE),
			offset = this.height * this.RIVER_OFFSET_RATE;
		
		this.context.fillStyle = gradient;
		this.context.beginPath();
		this.context.moveTo(0, y);
		this.context.bezierCurveTo(this.width / 3, y + offset * Math.sin(this.theta), this.width * 2 / 3, y - offset * Math.sin(this.theta), this.width, y);
		this.context.lineTo(this.width, this.height);
		this.context.lineTo(0, this.height);
		this.context.closePath();
		this.context.fill();
		
		for(var i = 0, length = this.grasses.length; i < length; i++){
			this.grasses[i].render(this.context, isLight);
		}
		this.theta += this.RIVER_SKEW_RATE;
		this.theta %= Math.PI * 2;
	}
};
var GRASS = function(width, height, riverRate, manager){
	this.width = width;
	this.height = height;
	this.riverRate = riverRate;
	this.manager = manager;
	this.init();
};
GRASS.prototype = {
	GRASS_COLOR : {DARK : 'hsl(%hue, 100%, 20%)', LIGHT : 'hsl(%hue, 100%, 30%)'},
	SHAKING_FREQUENCY : Math.PI / 1000,
	MAX_SHAKING_RATE : 0.2,
	HUE_RANGE : {min : 80, max : 160},
	GRASS_HEIGHT_RANGE : {min : 0.2, max : 0.6},
	GRASS_WIDTH : 4,
	BOTTOM_OFFSET : 0.01,
	
	init : function(){
		var hue = this.manager.getRandomValue(this.HUE_RANGE) | 0;
		
		this.darkColor = this.GRASS_COLOR.DARK.replace('%hue', hue);
		this.lightColor = this.GRASS_COLOR.LIGHT.replace('%hue', hue);
		this.theta = Math.PI * 2 * Math.random();
		this.grassHeight = this.height * this.manager.getRandomValue(this.GRASS_HEIGHT_RANGE);
		this.centerX = this.width * Math.random();
		this.bottom = this.height * ((1 - this.riverRate) + this.BOTTOM_OFFSET * Math.random());
	},
	render : function(context, isLight){
		var dx = Math.sin(this.theta) * this.grassHeight * this.MAX_SHAKING_RATE;
		
		context.fillStyle = isLight ? this.lightColor : this.darkColor;
		context.beginPath();
		context.moveTo(this.centerX - this.GRASS_WIDTH / 2, this.bottom);
		context.quadraticCurveTo(this.centerX + dx / 2, this.bottom - this.grassHeight / 2, this.centerX + this.GRASS_WIDTH / 2 + dx, this.bottom - this.grassHeight);
		context.quadraticCurveTo(this.centerX + this.GRASS_WIDTH / 2 + dx / 2, this.bottom - this.grassHeight / 2, this.centerX + this.GRASS_WIDTH / 2, this.bottom);
		context.closePath();
		context.fill();
		
		if(isLight){
			this.theta += this.SHAKING_FREQUENCY;
		}
	}
};
var FIREFLY = function(width, height, riverRate, manager){
	this.width = width;
	this.height = height;
	this.riverRate = riverRate;
	this.manager = manager;
	this.init();
};
FIREFLY.prototype = {
	RANGE_MARGIN : 10,
	VELOCITY : 0.3,
	LUMINOUS_FREQUENCY_RANGE : {min : Math.PI / 500, max : Math.PI / 100},
	COLOR : 'hsla(60, 100%, 50%, %opacity)',
	RADIUS_RANGE : {min : 1, max : 4},
	RADIUS_LIMIT : 2.5,
	ACCELARATION_RANGE : {min : -Math.PI / 300, max : Math.PI / 300},
	
	init : function(){
		this.radius = this.manager.getRandomValue(this.RADIUS_RANGE);
		this.bottomLimit = (this.radius > this.RADIUS_LIMIT) ? (this.height + this.RANGE_MARGIN) : this.height * (1 - this.riverRate);
		this.x = this.width * Math.random();
		this.y = this.bottomLimit * Math.random();
		this.velocityRate = this.VELOCITY * Math.pow(this.radius / this.RADIUS_RANGE.max, 3);
		this.phi = Math.PI * 2 * Math.random();
		this.vx = Math.cos(this.phi) * this.velocityRate;
		this.vy = Math.sin(this.phi) * this.velocityRate;
		this.accelaration = this.manager.getRandomValue(this.ACCELARATION_RANGE);
		this.frequency = this.manager.getRandomValue(this.LUMINOUS_FREQUENCY_RANGE);
		this.theta = Math.PI * 2 * Math.random();
		this.opacity = 0.5 + 0.3 * Math.sin(this.theta);
	},
	render : function(context){
		context.fillStyle = this.COLOR.replace('%opacity', this.opacity);
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.fill();
		
		this.x += this.vx;
		this.y += this.vy;
		
		if(this.x < -this.RANGE_MARGIN || this.x > this.width + this.RANGE_MARGIN
			|| this.y < -this.RANGE_MARGIN || this.y > this.bottomLimit){
			this.x = this.manager.getRandomValue({min : 0, max : this.width});
			this.y = this.manager.getRandomValue({min : 0, max : this.bottomLimit});
			this.theta = 0;
		}
		this.theta += this.frequency;
		this.opacity = 0.5 - 0.5 * Math.cos(this.theta);
		
		if(this.theta > Math.PI * 2){
			this.accelaration = this.manager.getRandomValue(this.ACCELARATION_RANGE);
			this.theta %= Math.PI * 2;
		}
		this.phi += this.accelaration;
		this.phi %= Math.PI * 2;
		this.vx = Math.cos(this.phi) * this.velocityRate;
		this.vy = Math.sin(this.phi) * this.velocityRate;
	},
	toIlluminate : function(){
		return this.radius >= this.RADIUS_LIMIT;
	}
};
$(function(){
	RENDERER.init();
});
