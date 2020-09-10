var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  //createSprite
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,20);
  bullet.velocityX=speed;
  bullet.shapeColor="blue";
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damge=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damge>10)
{
bullet.shapeColor=color(255,0,0);
}

if(damge<10)
{
bullet.shapeColor=color(0,255,0);
}
}
  drawSprites();
}
function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;



}


