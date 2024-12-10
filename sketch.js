function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0,10);

  circle(200, 200, sin(frameCount/10)*200);
}
