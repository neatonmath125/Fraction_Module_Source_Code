var canvasHeight;
var canvasWidth;
var canvas;
var ctx;
var starList = [];
var twinklerList = [];
var shooter = [];
var sattellite = [];
var ufoImage;
var starAmount = 60;
init();

//set up the canvas
//generate stars
//start animations

function init()
{	
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");	
	canvasHeight  = window.innerHeight*0.95;
	canvasWidth = window.innerWidth*0.95;
	ctx.canvas.height = canvasHeight;
  ctx.canvas.width = canvasWidth;
	ctx.fillStyle = "#FFFFFF";//all stars white
	
	generateTwinklingStars();
	generateStaticStars();	
  
	//every 150ms change size of twinkling stars
  setInterval(function() 
			{ 			
				twinkle();
			},150);
  
	var randomTime = (Math.random()*2000)+750;
	generateShooter();
  setInterval(function() 
			{ 			
				
				generateShooter();
			}, randomTime);
	requestAnimationFrame(animate);
}

function animate()
{
	//shooting stars
	shooter[0] += shooter[2];	
	shooter[1] += shooter[3];
	if(shooter[4] > 0.2)
	{
		shooter[4] -= 0.2;		
	}
	
	requestAnimationFrame(animate);	
	draw();
}

function draw()
{	
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	
	for(var i = 0; i < twinklerList.length; i++)
	{
		var x = twinklerList[i][0];
		var y = twinklerList[i][1];
		var size = twinklerList[i][2];
		
		ctx.beginPath();
		ctx.arc(x, y, size, 0, 2 * Math.PI);	
		ctx.fill();
	}
	
	for(var j = 0; j < starList.length; j++)
	{
		var x = starList[j][0];
		var y = starList[j][1];
		var size = starList[j][2];
		
		ctx.beginPath();
		ctx.arc(x, y, size, 0, 2 * Math.PI);	
		ctx.fill();
	}
	
	ctx.beginPath();
	ctx.arc(shooter[0], shooter[1], shooter[4], 0, 2 * Math.PI);	
	ctx.fill();
	
}
//adds starAmount of stars at random positions and sizes
function generateStaticStars()
{
	for(var i = 0; i < starAmount; i++)
	{
		var randomX = Math.random() * canvasWidth;
		var randomY = Math.random() * canvasHeight;
		var randomSize = (Math.random() * 1) + 1;
		starList[i] = [randomX, randomY, randomSize];
	}
}

function generateTwinklingStars()
{
	for(var i = 0; i < starAmount/4; i++)
	{
		var randomX = Math.random() * canvasWidth;
		var randomY = Math.random() * canvasHeight;
		var randomSize = (Math.random() * 1) + 1;
		twinklerList[i] = [randomX, randomY, randomSize];
	}
}

function generateShooter()
{	
	//shooter (x, y, vx, vy)
  //random start position
	//random x velocity	
	//random y velocity	
	//start size to end size (0)
	var randomX = Math.random() * canvasWidth;
	var randomY = Math.random() * canvasHeight;
	
	var randomVX = (Math.random() * 14) - 7;
	var randomVY = (Math.random() * 14)- 7;
	
	shooter = [randomX, randomY, randomVX, randomVY, 5];
	
}

//randomises size of twinkling stars
function twinkle()
{	
	for(var i = 0; i < twinklerList.length; i++)
	{		
		var randomSize = (Math.random() * 2) + 1;
		twinklerList[i][2] = randomSize;
	}
}