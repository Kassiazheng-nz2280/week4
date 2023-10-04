function drawTail(x, y) {
  
  let angle = 30 * sin(360 / 1000 * millis());
  push();
  translate(x,y);
  rotate(angle);
  noStroke();
  fill(100);
  ellipse(0, 65, 65, 130);
  fill('pink');
  noStroke();
  ellipse(28, 65, 65, 130);
  pop();
}

function drawButterfly(x, y, diameter){
  stroke('black');
  strokeWeight(3);
  fill(232, 103, 177);
  ellipse(x-diameter/2, y, diameter);
  ellipse(x+diameter/2, y, diameter);
  fill('yellow');
  ellipse(x, y, diameter/2);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  }

function draw() {
  ellipse(width/2, 160, 240, 223);
}

function draw() {
  background('pink');//tail

  drawTail(width/2, 480);

  stroke('black');
  fill(0); //body outiside color
  ellipse(width/2, 360, 200, 265);
  

  strokeWeight(4);
  fill(183,211,255); //body color
  ellipse(width/2, 360, 200, 265);

  strokeWeight(2);  
  fill(232, 103, 177); //body cicle clock 
  ellipse(width/2, 360, 60, 60);
  
  strokeWeight(4);
  fill(60,135,252); //inside cicle clock
  ellipse(width/2, 360, 18, 18);

  strokeWeight(4);//head
  strokeWeight('3');
  fill('grey');
  ellipse(width/2, 160, 240, 223);

  fill(0); //eye around
  ellipse(width/2+42, 160, 30, 45);
  ellipse(width/2-42, 160, 30, 45);
  
  fill(255); //eye inside
  ellipse(width/2+36, 155, 11, 17);
  ellipse(width/2-46, 155, 11, 17);

  fill(0); //nose
  strokeWeight('3');
  ellipse(width/2, 195, 30, 15);

  noFill(); //mouse 
  stroke(0);
  arc(width/2-20, 204, 40, 40, 0, 90);//left mouse
  arc(width/2+20, 204, 40, 40, 90, 180);//right mouse
  
  fill('black'); // left ear
  triangle(width/2-175, 179, width/2-90, 120, width/2-110, 199);
  ellipse(width/2-145, 192, 73, 48);
  noFill();

  fill('black'); // right ear
  push();
  translate(width/2-60, 1, 0);
  triangle(width/2-485, 179, width/2-570, 120, width/2-550, 199);
  ellipse(width/2-515, 192, 73, 48);
  noFill();
  stroke('black');
  strokeWeight(2);
  pop();
  
  strokeWeight(4); // left blush
  stroke ('pink');
  line(width/2-70, 204, width/2-64, 214);
  line(width/2-60, 204, width/2-54, 214);
  line(width/2-50, 204, width/2-44, 214);

  // right blush
  line(width/2+40, 204, width/2+46, 214);
  line(width/2+50, 204, width/2+56, 214);
  line(width/2+60, 204, width/2+66, 214);

  push();
  translate(width/2, 360); // Move the origin to the center
  noFill();
  stroke('black');
  strokeWeight(4);
  
  // Calculate the current time
  let hr = hour();
  let min = minute();
  let sec = second();

  // Hour hand
  strokeWeight(6);
  let hrAngle = map(hr % 12, 0, 12, 0, 360) + map(min, 0, 60, 0, 30); // Calculate hour hand angle
  rotate(hrAngle);
  line(0, 0, 50, 0);
  rotate(-hrAngle);
 

  // Minute hand
  strokeWeight(4);
  let minAngle = map(min, 0, 60, 0, 360); // Calculate minute hand angle
  rotate(minAngle);
  line(0, 0, 80, 0);
  rotate(-minAngle);

  // Second hand
  stroke('black');
  stroke(255, 0, 0); // Red color for the second hand
  strokeWeight(2);
  let secAngle = map(sec, 0, 60, 0, 360); // Calculate second hand angle
  rotate(secAngle);
  line(0, 0, 90, 0);
  
//star

strokeWeight(2);
stroke('yellow');
beginShape();
vertex(-10, 10);
vertex(0, 35);
vertex(10, 10);
vertex(35, 0);
vertex(10, -8);
vertex(0, -35);
vertex(-10, -8);
vertex(-35, 3);
endShape(CLOSE);
pop();

///butterfly
drawButterfly(mouseX, mouseY, mouseY);

}

