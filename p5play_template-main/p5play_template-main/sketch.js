
function setup() {
  createCanvas(1925,950);
  box = createSprite (500, 500,50,50)
}

function draw() 
{
  background(0);

if(keyIsDown(RIGHT_ARROW)){
  box.position.x += 5
}
if(keyIsDown(LEFT_ARROW)){
  box.position.x += -5
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y += 5
}
if(keyIsDown(UP_ARROW)){
  box.position.y += -5
}
  drawSprites ()
}




