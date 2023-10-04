function drawheart(x, y, w, h) {
  push();
  translate(x, y);
  beginShape();
  vertex(w / 2, h / 4);
  bezierVertex(w / 4, 0, 0, h / 4, 0, h / 2);
  bezierVertex(0, (h * 3) / 4, w / 4, h, w / 2, h);
  bezierVertex((w * 3) / 4, h, w, (h * 3) / 4, w, h / 2);
  bezierVertex(w, h / 4, (w * 3) / 4, 0, w / 2, h / 4);
  endShape(CLOSE);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60, 135, 252);
}

function draw() {
  fill(183, 211, 255);
  noStroke();
}
function mouseClicked() {
  fill(random(110,200), random(170,290), random(180,255));
  let heartsize = random(30,130);
  drawheart(mouseX, mouseY, heartsize, heartsize);

}
