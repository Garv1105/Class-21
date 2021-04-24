var a1,b1,c1,d1;
function setup() {
  createCanvas(800,400);
 a1= createSprite(400, 200, 50, 50);
 b1 = createSprite(600, 200, 80, 50);
 a1.shapeColor = "Green";
 b1.shapeColor = "Pink";
 c1= createSprite(100, 200, 50, 50);
 d1 = createSprite(300, 200, 80, 50);
 c1.shapeColor = "Blue";
 d1.shapeColor = "Grey";
}

function draw() {
  background(0);  
  a1.x = mouseX;
  a1.y = mouseY;
  if(isTouching(a1,d1)){
    a1.shapeColor = "Red";
    d1.shapeColor = "Red";
  }
  else{
    a1.shapeColor = "Green";
    d1.shapeColor = "Grey";
  }
  
  drawSprites();

}
