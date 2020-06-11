let slider;

function setup() {
  createCanvas(600, 600);
  slider = createSlider(20, width/2 , 50);
  frameRate(50);
}

function draw() {
  background(random(128,255),random(32, 120),random(200,250));
  fill(random(128,255),random(32, 120),random(100,250))
  //noStroke();
  stroke(200, 102, 153, 204);
  drawSquare(width / 2, height / 2, width / 2); 
}

function drawSquare(x, y, z) {
  rectMode(CENTER);
  strokeWeight(0.0002*z);
  stroke(random(168,255),random(72, 220),random(0,250), 40*z);
  square(x, y, z);
  if (z > slider.value()) {
    drawSquare(x-z/2, y-z/2, z/2);
    drawSquare(x+z/2, y-z/2, z/2);
    drawSquare(x-z/2, y+z/2, z/2);
    drawSquare(x+z/2, y+z/2, z/2);
  }
}