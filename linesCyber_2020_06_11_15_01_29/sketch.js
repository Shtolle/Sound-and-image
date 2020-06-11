
function setup(){
createCanvas(800, 800);
// smooth();

background(0);

}

function draw(){
	background(0);
	
			let wave1 = 65*(sin(frameCount * 0.007) * 255);
	if (wave1 < 0) {
		wave1 = -wave1;
	}


for (let i=100 ; i < wave1; i+= wave1/85){
  
 
  stroke(255, 70, 200);
  
  line(i, 800, 0, 100);
  line(800,100,700-i,800);

}


}