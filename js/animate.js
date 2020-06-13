var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
canvas.attr({height: canvasHeight, width: canvasWidth});

// Set an array of dot objects.
var dots = [{ x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 5, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius:10, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x: Math.random()*canvasWidth, y:Math.random()*canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x:canvasHeight, y:canvasHeight, radius: 3, xMove: '+', yMove: '+' },
  { x:canvasHeight, y:canvasHeight, radius: 3, xMove: '+', yMove: '+' },{ x:canvasHeight, y:canvasHeight, radius: 3, xMove: '+', yMove: '+' },{ x:canvasHeight, y:canvasHeight, radius: 3, xMove: '+', yMove: '+' }
];

// Notice in the moveDot function we can make dots go faster if we increment
// by more than 1 pixel each time.
var frameLength = 2;

// Draw each dot in the dots array.
for( i = 0; i < dots.length; i++ ) {
  drawDot(dots[i]);
};

setTimeout(moveDot, 500);


function moveDot() {
  context.clearRect(0, 0, canvasWidth, canvasHeight)

  // Iterate over all the dots.
  for( i = 0; i < dots.length; i++ ) {

    if( dots[i].xMove == '+' ) {
      dots[i].x += frameLength;
    } else {
      dots[i].x -= frameLength;
    }
    if( dots[i].yMove == '+' ) {
      dots[i].y += frameLength;
    } else {
      dots[i].y -= frameLength;
    }

    drawDot(dots[i])

    if( (dots[i].x + dots[i].radius) >= canvasWidth ) {
      dots[i].xMove = '-';
    }
    if( (dots[i].x - dots[i].radius) <= 0 ) {
      dots[i].xMove = '+';
    }
    if( (dots[i].y + dots[i].radius) >= canvasHeight ) {
      dots[i].yMove = '-';
    }
    if( (dots[i].y - dots[i].radius) <= 0 ) {
      dots[i].yMove = '+';
    }
  }

  // Render it again
  window.requestAnimationFrame(moveDot);
}

function drawDot(dot) {
  context.beginPath();
  context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#d3d3d3';
  
  context.fill();
}