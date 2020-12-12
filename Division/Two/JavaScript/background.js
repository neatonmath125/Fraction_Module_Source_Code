let canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let ctx = canvas.getContext('2d');

let g = 0.09;
let startX = canvas.width / 2;
let startY = canvas.height / 2;
let lifeMax = 50;

function Sand(x, y) {
  this.x = x;
  this.y = y;
  this.vx = Math.random() * 5 - 2.5;
  this.vy = Math.random() * 5 - 2.5;
  this.ay = g;
  this.size = 2;
  this.life = lifeMax;
}

Sand.prototype.draw = function () {
  ctx.fillStyle = `hsla(${Math.floor(this.life / lifeMax * 60)}, 100%, ${Math.floor(this.life / lifeMax * 70) + 30}%, 0.8)`;
  ctx.fillRect(this.x, this.y, this.size, this.size);
};

Sand.prototype.step = function () {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += this.ay;
  this.life--;
};

let clearWorld = function () {
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

let count = 1000;
let sands = [];
for (let i = 0; i < count; i++) {
  setTimeout(function () {
    sands.push(new Sand(canvas.width / 2, canvas.height / 2));
  }, Math.random() * 3000);
}

function loop() {
  requestAnimationFrame(loop);
  clearWorld();
  for (let sand of sands) {
    sand.step();
    if (sand.life <= 0) {
      sands.shift();
      sands.push(new Sand(startX, startY));
    }
    sand.draw();
  }
}

requestAnimationFrame(loop);

function redraw(event) {
  direction = Math.random() * Math.PI * 2;
  startX = event.clientX;
  startY = event.clientY;
}

window.addEventListener('mousedown', redraw);

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let direction = Math.random() * 2 * Math.PI;

function moveOrigin() {
  requestAnimationFrame(moveOrigin);
  startX += Math.cos(direction) * 10;
  startY += Math.sin(direction) * 10;
  if (startY > canvas.height || startY < 0) {
    direction = -direction;
  } else if (startX > canvas.width || startX < 0) {
    direction = Math.PI - direction;
  }
  direction += Math.random() * 0.4 - 0.2;
}

requestAnimationFrame(moveOrigin);