let margin = 10;
let d = 60;
let n = 6;
let bend = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  for (let y = 0; y < height; y += d){
    let x = 0;
    for (let x = 0; x < width; x += d){
      push();
      translate(x, y);  
      strokeWeight(5);
      point(0, 0);
      pattern();
      pop();
    }
    
  n  =  int  (map(mouseX, 0, width, 2, 12));
  d = int (map(mouseY, 0, height, 20, 200));
  bend = map(mouseX, 0, width, 0, 360);
  // pattern();

  }
}

function pattern(){

  stroke(0, 30, 255, 100);

  strokeWeight(1);

  noFill();


  for (let i = 0; i < n; i++){
    let theta = bend + i*360/n;   
    stroke(0, 30, 255, 50);
    ellipse(d/2*sin(theta), d/2*cos(theta), d, d);
  }

  beginShape();
  for (let i = 0; i < n + 1; i++){
    let theta = bend + i*360/n;   
    vertex(d/2*sin(theta), d/2*cos(theta));
  }
  endShape();

  let shift = pow(sin(frameCount), 1);
  shift = map(shift, -1, 1, 0, 20);
  // two equilateral triangles
  beginShape();
  fill(247, 245, 228  + shift, 100  - shift);
  stroke(0, 30, 255, 100);
    for (let i = 0; i <= n; i++){
    let theta = bend + i*720/n;   
    vertex(d/2*sin(theta), d/2*cos(theta));
  }
  endShape();

    beginShape();
    fill(227, 220, 161, 100);
    stroke(0, 30, 255, 100);
    for (let i = 0; i <= n; i++){
    let theta = 3*bend + i*720/n;   
    vertex(d/2*sin(theta), d/2*cos(theta));
  }
  endShape();
     
   for (let i = 0; i < n; i++){
    let theta = bend + i*360/n;   
    stroke(0);

    vertex(d/2*sin(theta), d/2*cos(theta));

    }
  
}

