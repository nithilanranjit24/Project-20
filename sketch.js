var car, wall;
var speed, weight, deformation;
function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
  car.shapeColor = "blue"
  wall = createSprite(750, 200, 60, height/2);
  wall.shapeColor = "green"
  speed = random(55,90);
  weight = random(400,1500);
  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background(0); 
  car.velocityX=speed;
  isTouching(car, wall, speed, weight, deformation); 
  drawSprites();
}

function isTouching(o1, o2, o3, o4, o5){
if(o5 > 180){
  size = 30;
fill = "red";
text("Lethal", 400, 200);
}
if(o5>80&&o5<180){
  size = 30;
  fill = "red";
  text("Average", 400, 200);
}
if(o5<80){
  size = 30;
  fill = "red";
  text("Perfect", 400, 200);
}
}