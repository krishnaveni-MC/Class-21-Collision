var fixedRect,movingRect;
var gameOobject1,gameOobject12,gameOobject3,gameOobject4;

function setup()
{

createCanvas(1200,800);

fixedRect=createSprite(200,200,50,80);
fixedRect.shapeColor="green";
fixedRect.debug=true;

movingRect=createSprite(400,200,80,50);
movingRect.shapeColor="green";
movingRect.debug=true;

gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="green";

gameobject2=createSprite(200,100,50,50);
gameobject2.shapeColor="green";

gameobject3=createSprite(300,100,50,50);
gameobject3.shapeColor="green";

gameobject4=createSprite(400,100,50,50);
gameobject4.shapeColor="green";

}


function draw()
{
background("yellow");
movingRect.x=mouseX;
movingRect.y=mouseY;

if( isTouching(movingRect,gameobject1))
{
  gameobject1.shapeColor="purple";
  movingRect.shapeColor="purple";

}
else
{

gameobject1.shapeColor="green";
  movingRect.shapeColor="green";
}

drawSprites();


}








