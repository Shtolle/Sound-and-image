var img;

function preload() {
	img = loadImage("lion.png"); 
}

function setup() {
	createCanvas(560, 220); 
	background(0); 
}

function draw() {
	background(0); 
	img.loadPixels(); 
	for (var y = 0; y < img.height; y += 5) { 
		for (var x = 0; x < img.width; x += 5) {
			
      var pix = img.pixels[(y*img.width+x)*4]; 
			
			fill(pix);
			stroke(1);
			
			rectMode(CENTER); 
			
			push();  
			translate(x, y);
			 
			rect(0, 0, 5, 5); 
			pop();
		}
	}
}
