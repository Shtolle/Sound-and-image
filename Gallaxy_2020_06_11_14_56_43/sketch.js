var mass = [];
var posX = [];
var posY = [];
var velX = [];
var velY = [];
var f = 320;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(280, 124, 190, 192);
}

function stars (){
ellipse (0,0, random(1, 3));
}

function draw() {
	background(0);
     fill("white");
  stroke("yellow");
  	for (var x = 10; x < 1000; x = x+74 ) {
		for (var y = 20; y < 700; y = y+50){
			push();
			translate(x, y);			
	  		stars();
			pop();
		}	
	}
	
	for (var parA = 0; parA < mass.length; parA++) {
		var accX = 0, accY = 0;
		
		for (var parB = 0; parB < mass.length; parB+=1) {
			if (parA != parB) {
				var distX = posX[parB] - posX[parA];
				var distY = posY[parB] - posY[parA];

				var dist = sqrt(distX**2 + distY**2);
				if (dist < 1) dist = 1;

				var force = (dist - f) * mass[parB] / dist;
				accX += force * distX;
				accY += force * distY;
			}
		}
		
		velX[parA] = velX[parA] * 0.99 + accX * mass[parA];
		velY[parA] = velY[parA] * 0.99 + accY * mass[parA];
	}
	
	for (var par = 0; par < mass.length; par++) {
		posX[par] += velX[par];
		posY[par] += velY[par];
		
		ellipse(posX[par], posY[par], mass[par] * 1000, mass[par] * 1000);
	}
}

function addNewPar() {
	mass.push(random(0.0025, 0.025));
	posX.push(mouseX);
	posY.push(mouseY);
	velX.push(0);
	velY.push(0);
}

function mouseClicked() {
	addNewPar();
}

function mouseDragged() {
	addNewPar();
}
function keyPressed() {

  if (keyCode == LEFT_ARROW) f+=30;
  if (keyCode == RIGHT_ARROW) f-=30;
  if (key == 's') saveCanvas('MySketch', 'png');
}