var canvas;
let field1;
let field2;
let field3;
let field4;
let button;
let ch = ["c", "o", "n", "f", "u", "s", "e", "d"];
let y = [];
let x = [];
let ychng = [];
let R = [];
let s = [];
let dir = [];
let writeT = false;
  
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  background(175);
  field1 = createInput();
  field2 = createInput();
  field3 = createInput();
  field4 = createInput();
  field5 = createInput();
  field6 = createInput();
  field7 = createInput();
  field8 = createInput();
  button = createButton("write!");
  button.mousePressed(write);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 8; i++) {
    x[i] = random(20, width - 20);
    y[i] = random(-300, height);
    s[i] = random(20, 50);
    dir[i] = random(2);
    R[i] = random(0.6, 1.4);
    ychng[i] = random(0.5, 2.2);
  }
}

function write(){
  writeT = !writeT;
}

function draw() {
  background(175);
  if (writeT == true) {
    c1 = [str(field1.value())];
    c2 = [str(field2.value())];
    c3 = [str(field3.value())];
    c4 = [str(field4.value())];
    c5 = [str(field4.value())];
    c6 = [str(field4.value())];
    c7 = [str(field4.value())];
    c8 = [str(field4.value())];
    ch = [c1, c2, c3, c4, c5, c6, c7, c8];
    for (let i = 0; i < 8; i++) {
      textSize(s[i]);
      push();
      translate(x[i], y[i] * ychng[i]);
      if (int(dir[i]) == 0) {
        rotate(R[i]);
      } else {
        rotate(-R[i]);
      }
      text(ch[i], 0, 0);
      pop();
      R[i] = R[i] + 0.01;
      y[i] = y[i] + ychng[i];
      if (y[i] > height + 100) {
        y[i] = -25;
        x[i] = random(20, width - 20);
        s[i] = random(20, 50);
        dir[i] = random(2);
        R[i] = random(0.6, 1.4);
        ychng[i] = random(0.5, 2.2);
      }
    }
  }
}

function keyPressed() {
  clear();
}
