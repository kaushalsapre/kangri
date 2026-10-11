let img;
let amplitude = 10;
let move = 0;
async function setup() {
  createCanvas(windowWidth, windowHeight );
  strokeWeight(1);
  stroke(0);
  angleMode(DEGREES);
  img = await loadImage("assets/1.png");
}

function draw() {
  background(220);
  // image(img, 0, 0);

      // Text "Not in Service" at the center of the screen with big font
  textSize(height); // Adjust the font size as needed
  fill(255); //
  stroke(0); // Set the stroke color for the text outline
  // strokeWeight(2); // Set the stroke weight for the text outline
  textAlign(CENTER, CENTER); // Center the text both horizontally and vertically
  text("Not in Service", width / 2 - 500*move, height / 2);
  for (let i = 0; i < width; i += 4){
    line(i, 0, i, height);
  }
    
  for (let i = 0; i < width; i += 3){
  
    line(i + move, 0, i + move, height);
  }



  move = amplitude*pow(sin(frameCount), 1);
}