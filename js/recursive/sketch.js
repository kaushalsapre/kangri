let verticalThreshold = 0;
let LRThreshold = 0;

function setup() {
  createCanvas(800, 800);
  // noLoop();
  frameRate(1);
}

function draw() {
  background(220);
  // divide the canvas in two equal rect. 
  // divide any one random rectangle of the two rects into two rects. 
  // repeat till 5 levels. 
rectangle(0, 0, width, height, 20);
}




function rectangle(x, y, w, h, level){
  // let choice = random([0, 1]);
  // let direction = random([0, 1]);
  let choice = random();
  let direction = random();
  verticalThreshold = mouseY/height;
  LRThreshold = mouseX/width;
  // let r = int(255*sin(frameCount));
  // let g = int(255*sin(frameCount));
  // let b = int(255*sin(frameCount));
  // let c = color(r, g, b, 100);
  let c = 255 -level*30;
  strokeWeight(0.5);
  fill(c, 100);
  rect(x, y, w, h);
  // print(verticalThreshold, LRThreshold, mouseX/height, mouseY);
  if (level == 255){
    // break
  }
  else {
    // randomly choose one of the rectangles
    // call rectangle

    if (direction > verticalThreshold) {
      //vertical cut
      if (choice > LRThreshold) {
        rectangle(x, y, w/2, h, level + 1);
      }
      else {
        rectangle(x + w/2, y, w/2, h, level + 1);
      }
    }
    else {
      //horizonal cut
      if (choice > LRThreshold){
        rectangle (x, y, w, h/2, level + 1);
      }
      else {
        rectangle (x, y + h/2, w, h/2, level + 1);
      }
     }
  }
}
