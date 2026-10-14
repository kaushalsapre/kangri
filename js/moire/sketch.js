let img;
let amplitude = 10;
let move = 0;
async function setup() {
  createCanvas(windowWidth, windowHeight );
  strokeWeight(1);
  stroke(0);
  angleMode(DEGREES);
  img = await loadImage("assets/1.png");
  frameRate(12);
}


function draw() {
  background(220);
  stroke(0);
  strokeWeight(1);
  noFill();

  let t = frameCount * 0.025;
  let strength = map(mouseY, 0, height, 10, 180);
  let frequency = map(mouseX, 0, width, 0.01, 0.09);

  // Vertical grid lines
  for (let x = 0; x < width; x += 5) {
    beginShape();

    for (let y = 0; y < height; y += 5) {
      let dx =
        strength * sin(y * frequency + t) +
        strength * 0.5 * sin(y * frequency * 2.7 - t * 2) +
        strength * sin(x * 0.025 + y * 0.018 + t);

      let dy =
        strength * cos(x * frequency + t) +
        strength * sin(y * 0.04 - t);

      vertex(x + dx, y + dy);
    }

    endShape();
  }

  // Horizontal grid lines
  for (let y = 0; y < height; y += 5) {
    beginShape();

    for (let x = 0; x < width; x += 5) {
      let dx =
        strength * sin(y * frequency + t) +
        strength * sin(x * 0.035 - t * 2);

      let dy =
        strength * cos(x * frequency + t) +
        strength * 0.5 * sin(x * 0.08 + y * 0.025 + t);

      vertex(x + dx, y + dy);
    }

    endShape();
  }
}







/////////////////////////////////////////
// let img;
// let amplitude = 10;
// let move = 0;
// async function setup() {
//   createCanvas(windowWidth, windowHeight );
//   strokeWeight(1);
//   stroke(0);
//   angleMode(DEGREES);
//   img = await loadImage("assets/1.png");
//   frameRate(12);
// }

// function draw() {
//   background(220);
//   // image(img, 0, 0);

//       // Text "Not in Service" at the center of the screen with big font
//   textSize(height); // Adjust the font size as needed
//   fill(255); //
//   stroke(0); // Set the stroke color for the text outline
//   // strokeWeight(2); // Set the stroke weight for the text outline
//   // textAlign(CENTER, CENTER); // Center the text both horizontally and vertically
//   // text("Not in Service", width / 2 - 500*move, height / 2);
//   for (let i = 0; i < width; i += 4){
//     beginShape();
//     for (let y = 0; y < height; y += 4){
//       let x = i + amplitude*pow(sin(move + y/20), 2) + amplitude*sin(y*0.05 - move*2);
//       vertex(x, y);
//     }
//     endShape();
//   }
   
    
//   for (let i = 0; i < height; i += 4){
  
//     beginShape();
//     for (let x = 0; x < width; x += 4){
//       let y = i + amplitude*pow(sin(move + x/20), 2) + amplitude*sin(x * 0.05 - move * 2);
//       vertex(x, y);
//     }
//     endShape();

//     // line(i + move, 0, i + move, height);
//   }



//   move = amplitude*pow(sin(frameCount), 1);
//   // m +=  0.001;
//   // let m_ = map(mouseX, 0, width, 0, 1);
//   // move += m_
//   amplitude = map(mouseY, 0, height, 0, 80);
// }