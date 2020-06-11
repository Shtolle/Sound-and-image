var starQuantity = 15000;

var posX = new Array(starQuantity);
var posY = new Array(starQuantity);
var velX = new Array(starQuantity).fill(0);
var velY = new Array(starQuantity).fill(0);

function setup() {
	createCanvas(812, 434);
	colorMode(HSB, 255);
	stroke(random(255), 200, 255);
	
	for (var star = 1; star < starQuantity; star++) {
		posX[star] = random(0, width);
		posY[star] = random(0, height);
	}
	
	posX[0] = 0;
	posY[0] = 0;
	strokeWeight(1);
}

function draw() {
	background(0, 128);
	
	velX[0] = velX[0] * 0.5 + (mouseX - posX[0]) * 0.1;
	velY[0] = velY[0] * 0.5 + (mouseY - posY[0]) * 0.1;
	
	posX[0] += velX[0];
	posY[0] += velY[0];
	
	for (var star = 1; star < starQuantity; star++) {
		var spread = 204 / (sq(posX[0] - posX[star]) + sq(posY[0] - posY[star]));
		
		velX[star] = velX[star] * 0.95 + (velX[0] - velX[star]) * spread;
		velY[star] = velY[star] * 0.95 + (velY[0] - velY[star]) * spread;
		
		posX[star] += velX[star];
		posY[star] += velY[star];
		
		if ((posX[star] < 0 && velX[star] < 0) || (posX[star] > width && velX[star] > 0)) {
			velX[star] = -velX[star];
		}
		
		if ((posY[star] < 0 && velY[star] < 0) || (posY[star] > height && velY[star] > 0)) {
			velY[star] = -velY[star];
		}
		
		point(posX[star], posY[star]);
	}
}

function mousePressed() {
	for (var star = 1; star < starQuantity; star++) {
		posX[star] = random(0, width);
		posY[star] = random(0, height);
	}
}

function keyPressed() {save('pix.jpg'); };