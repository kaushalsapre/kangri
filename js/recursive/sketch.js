let verticalThreshold = 0;
let LRThreshold = 0;
let drawing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
  frameRate(10);
}



function mousePressed() {
  drawing = true;
}

function mouseReleased() {
  drawing = false;
}

function touchStarted() {
  drawing = true;
  return false;
}

function touchEnded() {
  drawing = false;
  return false;
}

function draw() {
  background(255);
  if (drawing) {
    rectangle(0, 0, width, height, 20);
  }
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
      // Vertical cut: divide into three columns
      let third = w / 3;

      if (choice > LRThreshold) {
        rectangle(x, y, third, h, level + 1);
      } else if (choice > LRThreshold / 2) {
        rectangle(x + third, y, third, h, level + 1);
      } else {
        rectangle(x + 2 * third, y, third, h, level + 1);
      }
    } else {
      // Horizontal cut: divide into three rows
      let third = h / 3;

      if (choice > LRThreshold) {
        rectangle(x, y, w, third, level + 1);
      } else if (choice > LRThreshold / 2) {
        rectangle(x, y + third, w, third, level + 1);
      } else {
        rectangle(x, y + 2 * third, w, third, level + 1);
      }
    }
  }
}

